import { useEffect } from "react";
import Head from "next/head";
import TextSection from "../../../components/TextSection";

declare global {
  interface Window {
    Paddle: any;
  }
}

type PlanId = 633265 | 633266 | 633267 | 633268;

export default function Home() {
  useEffect(() => {
    window.Paddle.Setup({ vendor: 120986 });
  });

  const openCheckout = (planId: PlanId) => {
    window.Paddle.Checkout.open({ product: planId });
  };

  return (
    <>
      <Head>
        <script src="https://cdn.paddle.com/paddle/paddle.js"></script>
      </Head>

      <TextSection>
        <button onClick={() => openCheckout(633265)}>
          Personal Pro (monthly)
        </button>
        <button onClick={() => openCheckout(633266)}>
          Personal Pro (yearly)
        </button>
        <button onClick={() => openCheckout(633267)}>Team (monthly)</button>
        <button onClick={() => openCheckout(633268)}>Team (yearly)</button>
      </TextSection>
    </>
  );
}
