import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { useMutation } from "urql";
import useOutsideClick from "../hooks/useOutsideClick";
import LogoNotes from "./LogoNotes";

const LogoutBillingAccountMutation = `
mutation logoutBillingAccount {
  logoutBillingAccount {
    success
  }
}`;

const NavAnchor: React.FC<
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > & { children?: React.ReactNode }
> = (props) => {
  return (
    <Link
      href={props.href}
      className={`inline-block font-medium no-underline hover:no-underline cursor-pointer py-2 px-2 ${
        props.className || ""
      }`}
    >
      {props.children}
    </Link>
  );
};

const MobileEntry: React.FC<
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > & { children?: React.ReactNode }
> = (props) => {
  return (
    <Link
      href={props.href}
      role="menuitem"
      className={`font-medium no-underline hover:no-underline cursor-pointer block px-3 py-2 rounded-md text-base hover:bg-gray-50 ${
        props.className || ""
      }`}
    >
      {props.children}
    </Link>
  );
};

const LogoutLink: React.FC<{
  type: "mobile" | "desktop";
  className?: string;
  children?: React.ReactNode;
}> = (props) => {
  const NavItem = props.type === "mobile" ? MobileEntry : NavAnchor;
  const router = useRouter();
  const [, logoutBillingAccount] = useMutation(LogoutBillingAccountMutation);

  return (
    <NavItem
      className={props.className}
      href="/"
      onClick={async (evt) => {
        evt.preventDefault();
        await logoutBillingAccount();
        router.push("/");
      }}
    >
      {props.children}
    </NavItem>
  );
};

export default function Navigation(props) {
  const [mobileDropdownOpen, setMobileDropdownOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const burgerMenuButtonRef = React.useRef<HTMLButtonElement>(null);
  const mobileNavRef = React.useRef<HTMLDivElement>(null);
  useOutsideClick([mobileNavRef, burgerMenuButtonRef], () => {
    setMobileDropdownOpen(false);
  });
  // to leverage static SSR on Vercel the cookie is only checked client-side
  React.useEffect(() => {
    if (Cookies.get("billing_auth_active") === "true") {
      setIsLoggedIn(true);
    }
  });
  return (
    <>
      {/* z-index needed to make sure the navigation is on top of the svg */}
      <nav className="relative max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6 z-10">
        <div className="flex items-center flex-1">
          <div className="flex items-center justify-between w-full md:w-auto pb-1">
            <Link href="/en/notes">
              <span className="flex items-center">
                <LogoNotes width={161.768} height={28.3} />
              </span>
            </Link>
            <div className="-mr-2 flex items-center md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                id="main-menu"
                aria-haspopup="true"
                onClick={() => {
                  setMobileDropdownOpen(true);
                }}
                ref={burgerMenuButtonRef}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="hidden md:block md:ml-8">
            <NavAnchor href="/en/notes/pricing">Pricing</NavAnchor>
            <NavAnchor href="/en/notes/support" className="ml-6">
              Support
            </NavAnchor>
            {isLoggedIn ? (
              <>
                <NavAnchor href="/en/notes/billing-account" className="ml-6">
                  Billing Account
                </NavAnchor>
                <LogoutLink type="desktop" className="ml-6">
                  Logout
                </LogoutLink>
              </>
            ) : (
              <NavAnchor href="/en/notes/login" className="ml-6">
                Login
              </NavAnchor>
            )}
          </div>
        </div>
      </nav>

      <div
        className={`${
          mobileDropdownOpen ? "" : "hidden"
        } absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden bg-white z-50`}
        ref={mobileNavRef}
      >
        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="px-5 pt-4 flex items-center justify-between">
            <Link href="/en/notes">
              <span
                className="flex items-center"
                onClick={() => setMobileDropdownOpen(false)}
              >
                <LogoNotes width={161.768} height={28.3} />
              </span>
            </Link>
            <div className="-mr-2">
              <button
                onClick={() => {
                  setMobileDropdownOpen(false);
                }}
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Close main menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="main-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1" role="none">
              <MobileEntry
                href="/en/notes/pricing"
                onClick={() => setMobileDropdownOpen(false)}
              >
                Pricing
              </MobileEntry>
              <MobileEntry
                href="/en/notes/support"
                onClick={() => setMobileDropdownOpen(false)}
              >
                Support
              </MobileEntry>
              {isLoggedIn ? (
                <>
                  <MobileEntry
                    href="/en/notes/billing-account"
                    onClick={() => setMobileDropdownOpen(false)}
                  >
                    Billing Account
                  </MobileEntry>
                  <LogoutLink type="mobile">Logout</LogoutLink>
                </>
              ) : (
                <MobileEntry
                  href="/en/notes/login"
                  onClick={() => setMobileDropdownOpen(false)}
                >
                  Login
                </MobileEntry>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
