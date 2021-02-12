import SubscribeForm from "../../../components/SuscribeForm";
import LayoutSdk from "../../../components/LayoutSdk";

function SdkHome() {
  return (
    <>
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-5xl font-semibold text-gray-900 sm:text-center">
            Serenity SDK
          </h1>
          <p className="mt-5 text-xl text-gray-500 sm:text-center">
            Build and run end-to-end encrypted applications with ease.
          </p>
          <p className="mt-10 text-lg max-w-xl sm:text-justify m-auto">
            The technology used to built Serenity Notes can be applied to
            various application use-cases. While still far out we want to
            provide a SDK to allow you to develop your own end-to-end encrypted
            applications. In case you are interested reach out to us at{" "}
            <a href="mailto:sdk@serenity.re">sdk@serenity.re</a> or subscribe to
            the SDK newsletter.
          </p>
        </div>
      </div>
      <div className="bg-background flex justify-center py-16 lg:py-20 xl:py-24">
        <div className=" max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:py-6 lg:px-8">
          <h2 className="inline text-3xl font-semibold text-gray-900 sm:block sm:text-4xl">
            Sign up for our SDK newsletter{" "}
          </h2>
          {/* <p className="inline text-3xl font-semibold text-primary sm:block sm:text-4xl">
            to receive news and product updates
          </p> */}
          <SubscribeForm convertkitFormId="2036524" />
        </div>
      </div>
    </>
  );
}

SdkHome.Layout = LayoutSdk;

export default SdkHome;
