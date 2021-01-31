import SubscribeForm from "../../../components/SuscribeForm";

export default function SdkHome() {
  return (
    <>
      <div className="bg-background flex justify-center py-16 lg:py-20 xl:py-24">
        <div className=" max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:py-6 lg:px-8">
          <h2 className="inline text-3xl font-semibold text-gray-900 sm:block sm:text-4xl">
            Sign up for our newsletter{" "}
          </h2>
          <p className="inline text-3xl font-semibold text-primary sm:block sm:text-4xl">
            to receive news and product updates
          </p>
          <SubscribeForm />
        </div>
      </div>
    </>
  );
}
