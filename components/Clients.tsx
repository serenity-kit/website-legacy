import AppStoreBadge from "./AppStoreBadge";
import GooglePlayBadge from "./GooglePlayBadge";

export default function Hero() {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="leading-9 font-semibold text-gray-900 text-2xl sm:text-3xl sm:leading-10">
              Multi-platform support
            </h2>
          </div>
          <div className="mt-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:col-span-2 lg:mt-0">
            <div>
              <div className="mt-5">
                <h4 className="text-lg leading-6 font-medium text-gray-900">
                  iOS
                </h4>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  iPhone and iPad are supported
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
                  Phones and tablets are supported
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
                  Coming 2021
                </p>
              </div>
            </div>
            <div className="mt-10 sm:mt-0">
              <div className="mt-5">
                <h4 className="text-lg leading-6 font-medium text-gray-900">
                  Windows
                </h4>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  Coming 2021
                </p>
              </div>
            </div>
            <div className="mt-10 sm:mt-0">
              <div className="mt-5">
                <h4 className="text-lg leading-6 font-medium text-gray-900">
                  Linux
                </h4>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  Coming 2022
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
