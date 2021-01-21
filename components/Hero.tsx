import AppStoreBadge from "./AppStoreBadge";
import GooglePlayBadge from "./GooglePlayBadge";

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-0">
        <svg
          className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
          width="640"
          height="784"
          fill="none"
          viewBox="0 0 640 784"
        >
          <defs>
            <pattern
              id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
              x="118"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            y="72"
            width="640"
            height="640"
            className="text-gray-50"
            fill="currentColor"
          />
          <rect
            x="118"
            width="404"
            height="784"
            fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
          />
        </svg>
      </div>
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
              <div className="mt-5 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <p className="text-base font-medium text-gray-900">
                  Download the app and sign up for free.
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
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <svg
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
                width="640"
                height="784"
                fill="none"
                viewBox="0 0 640 784"
              >
                <defs>
                  <pattern
                    id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                    x="118"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  y="72"
                  width="640"
                  height="640"
                  className="text-gray-50"
                  fill="currentColor"
                />
                <rect
                  x="118"
                  width="404"
                  height="784"
                  fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
                />
              </svg>
              <div className="relative mx-auto w-full rounded-lg lg:max-w-md">
                <img
                  className="w-full"
                  src="/preview.png"
                  alt="Screenshot of Serenity Notes on an iPhone and iPad"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
