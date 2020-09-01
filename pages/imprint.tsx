import * as React from "react";
import { NextPage } from "next";
import TextSection from "../components/TextSection";
import { H1 } from "../components/Headline";

const ImprintPage: NextPage = () => {
  return (
    <TextSection>
      <H1>Imprint</H1>
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
      <p>nik@nikgraf.com</p>
      <p>UID-Nr: ATU66204868</p>
      <p>Gewerbeordnung: www.ris.bka.gv.at</p>
      <p>
        Verbraucher haben die Möglichkeit, Beschwerden an die
        OnlineStreitbeilegungsplattform der EU zu richten:
        http://ec.europa.eu/odr. Sie können allfällige Beschwerde auch an die
        oben angegebene E-Mail-Adresse richten.
      </p>
    </TextSection>
  );
};

export default ImprintPage;