import Image from "next/image";
import AppStoreBadge from "./AppStoreBadge";
import GooglePlayBadge from "./GooglePlayBadge";

export default function Hero() {
  return (
    <div className="relative h-full">
      <div
        className="hidden lg:flex absolute w-screen -top-14 h-full pointer-events-none"
        style={{ height: "110%" }}
      >
        <div className="w-1/2"></div>
        <svg
          className="hidden lg:block w-24 text-background h-full"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="100,0 100,0 100,100 0,100" />
        </svg>
        <div className="w-1/2 bg-background"></div>
      </div>
      <div className="max-w-7xl mx-auto h-full">
        <div className="relative pt-6 pb-16 lg:pb-24 xl:pb-32 h-full">
          <main className="mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24 lg:flex h-full">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:mx-0 lg:text-left lg:max-w-none lg:w-1/2 lg:flex-shrink">
              <h1 className="mt-1 text-3xl leading-10 font-semibold text-gray-900 sm:leading-none sm:text-5xl lg:text-4xl xl:text-5xl">
                End-to-end encrypted
                <br />
                <span className="text-primary">collaborative notes</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl lg:pr-8">
                Take private notes, optionally share them with others and still
                stay in control who can access your data. All while having an
                excellent offline-first experience on all platforms.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center md:mt-12 lg:text-left lg:mx-0">
                <p className="text-base font-medium text-gray-900">
                  Download the app and sign up for free
                </p>
                <div className="mt-4 mb-4 flex flex-wrap justify-start md:justify-center lg:justify-start ">
                  <a
                    className="block mt-4 mr-4"
                    href="https://apps.apple.com/at/app/serenity-notes/id1544162074"
                  >
                    <AppStoreBadge />
                  </a>
                  <a
                    className="block mt-4"
                    href="https://play.google.com/store/apps/details?id=re.serenity.notes"
                  >
                    <GooglePlayBadge />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-16 sm:max-w-lg sm:mx-auto lg:max-w-none lg:mx-0 lg:flex lg:items-center lg:w-1/2 lg:-mt-32 lg:flex-grow ">
              <div className="relative mx-auto w-full rounded-lg lg:max-w-md">
                <div
                  className="bg-background lg:hidden absolute -mt-16"
                  style={{
                    height: "calc(100% + 8rem)",
                    width: "100vw",
                    marginLeft: "calc(-50vw + 50%)",
                  }}
                ></div>
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
          </main>
        </div>
      </div>
    </div>
  );
}
