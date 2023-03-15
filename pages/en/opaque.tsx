import { NextPage } from "next";
import Image from "next/image";
import OpaqueLogo from "../../components/LogoOpaque";

const OpaquePage: NextPage = () => {
  return (
    <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <div className="prose prose-lg text-gray-500 mx-auto">
        <h1 className="mt-2 mb-8 flex justify-center align-center">
          <OpaqueLogo width={232} height={59} />
        </h1>
        <p className="text-center">
          We will be starting work on <b>Opaque</b> in <b>April 2023</b>. <br />
          More details and information can be found{" "}
          <a href="https://github.com/serenity-kit/opaque">here</a>.
        </p>
        <p className="text-center text-sm">
          This project was supported by the{" "}
          <a href="https://www.netidee.at/">Netidee funding campaign</a>.
        </p>
        <a href="https://www.netidee.at/">
          <Image
            className="mx-auto"
            src="/opaque/netidee.jpg"
            alt="Netidee logo"
            width={125}
            height={38}
          />
        </a>
      </div>
    </div>
  );
};

export default OpaquePage;
