import * as React from "react";
import { NextPage } from "next";

const ImprintPage: NextPage = () => {
  return (
    <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <div className="prose prose-lg text-gray-500 mx-auto">
        <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-semibold text-gray-900 sm:text-4xl sm:leading-10">
          Imprint
        </h1>
        <p>
          Note: due to Austrian law, we are required to provide this legal
          document stating who owns the website.
        </p>
        <p>
          Nikolaus Graf
          <br />
          Johann Knoll Gasse 9<br />
          1210 Wien, Österreich
        </p>
        <p>hi@serenity.re</p>
        <p>UID-Nr: ATU66204868</p>
        <p>Gewerbeordnung: www.ris.bka.gv.at</p>
        <p>
          Verbraucher haben die Möglichkeit, Beschwerden an die
          OnlineStreitbeilegungsplattform der EU zu richten:
          http://ec.europa.eu/odr. Sie können allfällige Beschwerde auch an die
          oben angegebene E-Mail-Adresse richten.
        </p>
      </div>
    </div>
  );
};

export default ImprintPage;
