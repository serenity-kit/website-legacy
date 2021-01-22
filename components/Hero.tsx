import Image from "next/image";
import AppStoreBadge from "./AppStoreBadge";
import GooglePlayBadge from "./GooglePlayBadge";

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
        <main className="mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h2 className="mt-1 text-3xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-5xl lg:text-4xl xl:text-5xl">
                End-to-end encrypted
                <br />
                <span className="text-primary">collaborative Notes</span>
              </h2>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                You should be able to decide who can access your data, while
                still have an excellent offline-first experience. Of course on
                all platforms.
              </p>
              <div className="mt-14 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <p className="text-base font-medium text-gray-900">
                  Download the app and sign up for free
                </p>
                <div className="mt-4 mb-4 flex justify-start md:justify-center lg:justify-start">
                  <a
                    className="block"
                    href="https://apps.apple.com/at/app/serenity-notes/id1544162074"
                  >
                    <AppStoreBadge />
                  </a>
                  <a
                    className="ml-4 block"
                    href="https://play.google.com/store/apps/details?id=re.serenity.notes"
                  >
                    <GooglePlayBadge />
                  </a>
                </div>
              </div>
              <svg
                className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg lg:max-w-md lg:-mt-20">
                <div className="w-3/4 relative left-1/4">
                  <div className="device tablet">
                    <Image
                      src="/tablet-preview.png"
                      alt="Tablet editor view of Serenity Notes"
                      width={365}
                      height={488}
                    />
                  </div>
                </div>
                <div className="w-2/5 absolute bottom-0">
                  <div className="device phone">
                    <Image
                      src="/phone-preview.png"
                      alt="Phone editor view of Serenity Notes"
                      width={189}
                      height={337}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
