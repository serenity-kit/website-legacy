import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useMutation } from "urql";

const LogoutBillingAccountMutation = `
mutation logoutBillingAccount {
  logoutBillingAccount {
    success
  }
}`;

const LogoutLink: React.FC = (props) => {
  const router = useRouter();
  const [, logoutBillingAccount] = useMutation(LogoutBillingAccountMutation);

  return (
    <Link href="/">
      <a
        onClick={async (evt) => {
          evt.preventDefault();
          await logoutBillingAccount();
          router.push("/");
        }}
      >
        {props.children}
      </a>
    </Link>
  );
};

export default function Navigation() {
  let isLoggedIn = false;
  if (process.browser && Cookies.get("billing_auth_active") === "true") {
    isLoggedIn = true;
  }

  return (
    <>
      <nav className="relative max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6">
        <div className="flex items-center flex-1">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href="/">
              <a className="no-underline flex items-center">
                <Image src="/icon.png" alt="Logo" width="48" height="48" />
                Serenity Notes
              </a>
            </Link>

            {/* <div className="-mr-2 flex items-center">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                id="main-menu"
                aria-label="Main menu"
                aria-haspopup="true"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div> */}
          </div>

          <div className="md:block md:ml-10">
            <Link href="/en/notes/pricing">
              <a>Pricing</a>
            </Link>
            <Link href="/en/notes/faq">
              <a className="ml-10">FAQ</a>
            </Link>
            <Link href="/en/notes/roadmap">
              <a className="ml-10">Roadmap</a>
            </Link>
            {isLoggedIn ? (
              <>
                <Link href="/en/billing-account">
                  <a className="ml-10">Billing Account</a>
                </Link>
                <LogoutLink>Logout</LogoutLink>
              </>
            ) : (
              <Link href="/en/login">
                <a className="ml-10">Login</a>
              </Link>
            )}
          </div>
        </div>
      </nav>
      {/* <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div className="rounded-lg shadow-md">
          <div
            className="rounded-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="main-menu"
          >
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <Link href="/">
                  <a className="no-underline flex items-center">
                    <Image src="/icon.png" alt="Logo" width="48" height="48" />
                    Serenity Notes
                  </a>
                </Link>
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  aria-label="Close menu"
                >
                  <svg
                    className="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
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
            <div className="px-2 pt-2 pb-3">
              <Link href="/en/notes/roadmap">
                <a
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  role="menuitem"
                >
                  Roadmap
                </a>
              </Link>
              <Link href="/en/notes/faq">
                <a
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  role="menuitem"
                >
                  FAQ
                </a>
              </Link>
              {isLoggedIn ? (
                <>
                  <Link href="/en/billing-account">
                    <a
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                      role="menuitem"
                    >
                      Billing Account
                    </a>
                  </Link>
                  <LogoutLink>Logout</LogoutLink>
                </>
              ) : (
                <Link href="/en/login">
                  <a
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                    role="menuitem"
                  >
                    Login
                  </a>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
