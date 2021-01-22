import AppStoreBadge from "./AppStoreBadge";
import GooglePlayBadge from "./GooglePlayBadge";

export default function Hero() {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
              x="0"
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
            width="404"
            height="784"
            fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
          />
        </svg>

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h3 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Multi-platform support
            </h3>
          </div>
          <div className="mt-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:col-span-2 lg:mt-0">
            <div>
              <div className="mt-5">
                <h4 className="text-lg leading-6 font-medium text-gray-900">
                  iOS
                </h4>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  iPhones and iPads are supported.
                </p>
                <a
                  className="mt-4 block"
                  href="https://apps.apple.com/at/app/serenity-notes/id1544162074"
                >
                  <AppStoreBadge />
                </a>
              </div>
            </div>
            <div className="mt-10 sm:mt-0">
              <div className="mt-5">
                <h4 className="text-lg leading-6 font-medium text-gray-900">
                  Android
                </h4>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  Phones and tablets are supported.
                </p>
                <a
                  className="mt-4 block"
                  href="https://play.google.com/store/apps/details?id=re.serenity.notes"
                >
                  <GooglePlayBadge />
                </a>
              </div>
            </div>
            <div className="mt-10 sm:mt-0">
              <div className="mt-5">
                <h4 className="text-lg leading-6 font-medium text-gray-900">
                  macOS
                </h4>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  Coming early 2021.
                </p>
              </div>
            </div>
            <div className="mt-10 sm:mt-0">
              <div className="mt-5">
                <h4 className="text-lg leading-6 font-medium text-gray-900">
                  Windows
                </h4>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  Coming early 2021.
                </p>
              </div>
            </div>
            <div className="mt-10 sm:mt-0">
              <div className="mt-5">
                <h4 className="text-lg leading-6 font-medium text-gray-900">
                  Linux
                </h4>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  Coming 2022.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
