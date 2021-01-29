import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import PricingFeature from "../../../components/PricingFeature";

declare global {
  interface Window {
    Paddle: any;
  }
}

type PlanId = 633265 | 633266 | 633267 | 633268;

export default function Home() {
  const router = useRouter();
  const [billedYearly, setBilledYearly] = useState<boolean>(true);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.paddle.com/paddle/paddle.js";
    script.async = true;
    script.onload = function paddleOnLoad() {
      window.Paddle.Setup({ vendor: 120986 });
    };
    document.body.appendChild(script);
  }, []);

  function successCallback(data) {
    router.push(
      `/en/login#${btoa(JSON.stringify({ email: data.user.email }))}`
    );
  }

  const openCheckout = (planId: PlanId) => {
    // TODO check if paddle exists and if not wait for it
    window.Paddle.Checkout.open({ product: planId, successCallback });
  };

  return (
    <>
      <div>
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center">
            <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">
              Pricing Plans
            </h1>
            <p className="mt-5 text-xl text-gray-500 sm:text-center">
              We need to charge, because we can't sell your data.
            </p>
            <div className="relative self-center mt-6 bg-gray-100 rounded-lg p-0.5 flex sm:mt-8">
              <button
                type="button"
                onClick={(event) => {
                  event.preventDefault();
                  setBilledYearly(false);
                }}
                className={`relative w-1/2 rounded-md py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary-dark focus:z-10 sm:w-auto sm:px-8 ${
                  billedYearly
                    ? "border border-transparent"
                    : "bg-white border-gray-200 shadow-sm"
                }`}
              >
                Monthly billing
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.preventDefault();
                  setBilledYearly(true);
                }}
                className={`ml-0.5 relative w-1/2 rounded-md py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary-dark focus:z-10 sm:w-auto sm:px-8 ${
                  billedYearly
                    ? "bg-white border-gray-200 shadow-sm"
                    : "border border-transparent"
                }`}
              >
                Yearly billing
              </button>
            </div>
          </div>

          <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
            <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-white">
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  Personal Free
                </h2>
                <p className="mt-4 text-sm text-gray-500 h-11">
                  Ideal to get started
                </p>
                <p className="mt-8 h-14">
                  <span className="text-4xl font-extrabold text-gray-900">
                    $0
                  </span>
                </p>
                <a
                  href="#"
                  style={{ visibility: "hidden" }}
                  className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900 no-underline hover:no-underline"
                >
                  Download
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                  What's included
                </h3>
                <ul className="mt-6 space-y-4">
                  <PricingFeature>Create up to 3 notes</PricingFeature>
                  <PricingFeature>
                    Collaborate with up to 3 people per note
                  </PricingFeature>
                  <PricingFeature>Link up to 3 devices</PricingFeature>
                </ul>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-white">
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  Personal Pro
                </h2>
                <p className="mt-4 text-sm text-gray-500 h-11">
                  Capture your thoughts in private and collaborate with others
                </p>
                <p className="mt-8 h-14">
                  <span className="text-4xl font-extrabold text-gray-900">
                    ${billedYearly ? "4" : "5"}
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    {" "}
                    / month
                  </span>
                </p>
                <button
                  type="button"
                  className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900 no-underline hover:no-underline"
                  onClick={(event) => {
                    event.preventDefault();
                    billedYearly ? openCheckout(633266) : openCheckout(633265);
                  }}
                >
                  Buy Personal Pro
                </button>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                  What's included
                </h3>
                <ul className="mt-6 space-y-4">
                  <PricingFeature>Unlimited notes</PricingFeature>
                  <PricingFeature>
                    Collaborate with up to 50 people per note
                  </PricingFeature>
                  <PricingFeature>Link up to 10 devices</PricingFeature>
                  <PricingFeature>Email support</PricingFeature>
                </ul>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-white">
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  Team
                </h2>
                <p className="mt-4 text-sm text-gray-500 h-11">
                  Enable everyone in your organization to collaborate
                </p>
                <p className="mt-8 h-14">
                  <span className="text-4xl font-extrabold text-gray-900">
                    ${billedYearly ? "8" : "10"}
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    {" "}
                    / user / month
                  </span>
                </p>
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    billedYearly ? openCheckout(633268) : openCheckout(633267);
                  }}
                  className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900 no-underline hover:no-underline"
                >
                  Buy Team
                </button>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                  What's included
                </h3>
                <ul className="mt-6 space-y-4">
                  <PricingFeature>Unlimited notes</PricingFeature>
                  <PricingFeature>
                    Collaborate with up to 100 people per note
                  </PricingFeature>
                  <PricingFeature>
                    Link up to 10 devices per user
                  </PricingFeature>
                  <PricingFeature>Email support</PricingFeature>
                  <PricingFeature>Unified Billing Management</PricingFeature>
                </ul>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-white">
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  Enterprise
                </h2>
                <p className="mt-4 text-sm text-gray-500 h-11">
                  Solutions and controls custom to your requirements
                </p>
                <p className="mt-8 h-14"></p>
                <a
                  href="mailto:hi@serenity.re"
                  className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900 no-underline hover:no-underline"
                >
                  Contact us
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                  What's included
                </h3>
                <ul className="mt-6 space-y-4">
                  <PricingFeature>Custom Limits</PricingFeature>
                  <PricingFeature>Cloud or On-Premise Hosting</PricingFeature>
                  <PricingFeature>Custom contract</PricingFeature>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
