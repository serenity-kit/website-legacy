import * as React from "react";
import { NextPage } from "next";
import OpaqueLogo from "../../components/LogoOpaque";

const OpaquePage: NextPage = () => {
  return (
    <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <div className="prose prose-lg text-gray-500 mx-auto">
        <h1 className="mt-2 mb-8 flex justify-center align-center">
          <OpaqueLogo width={232} height={59} />
        </h1>
        <p className="text-center">
          We will be starting work on <b>Opaque</b> in <b>March 2023</b>. <br />
          More details and information can be found{" "}
          <a href="https://github.com/SerenityNotes/opaque">here</a>.
        </p>
      </div>
    </div>
  );
};

export default OpaquePage;
