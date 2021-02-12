import Link from "next/link";
import * as React from "react";
import LogoSdk from "./LogoSdk";

export default function Navigation(props) {
  return (
    <>
      <nav className="relative max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6">
        <div className="flex items-center flex-1">
          <div className="flex items-center justify-between w-full md:w-auto pb-1">
            <Link href="/en/sdk">
              <a className="flex items-center">
                <LogoSdk width={161.768} height={28.3} />
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
