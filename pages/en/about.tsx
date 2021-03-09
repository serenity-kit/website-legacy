import * as React from "react";
import { NextPage } from "next";

const AboutPage: NextPage = () => {
  return (
    <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <div className="prose prose-lg text-gray-500 mx-auto">
        <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-semibold text-gray-900 sm:text-4xl sm:leading-10">
          About
        </h1>
      </div>
      <div className="py-16 bg-white prose prose-lg mx-auto">
        <h2 className="mt-2 leading-8 font-semibold text-gray-900 text-2xl sm:text-3xl">
          Vision
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-gray-500">
          Provide full control over privacy without compromising on user
          experience.
        </p>

        <h2 className="mt-2 leading-8 font-semibold text-gray-900 text-2xl sm:text-3xl">
          Values
        </h2>
        <ul>
          <li>
            Privacy by default. Application functionality and settings must
            default to optimise for the user's privacy.
          </li>
          <li>
            Platform independent. Be where the user is instead of limiting them.
          </li>
          <li>
            Local-first (offline-first) software. See{" "}
            <a href="https://www.inkandswitch.com/local-first.html#seven-ideals">
              Seven ideals for local-first software
            </a>
            .
          </li>
          <li>
            Outstanding user experience. Stay consistent and focus on the
            details.
          </li>
        </ul>

        <h2 className="mt-2 leading-8 font-semibold text-gray-900 text-2xl sm:text-3xl">
          History
        </h2>
        <p>
          Most data nowadays is stored unencrypted in the cloud, regardless of
          how sensible that data is. In addition a user has no idea when someone
          accesses their data and what data is accessed. While this rarely
          happens that someone is looking your data specifically, it also
          exposes user to the risk that all their data can become public
          knowledge with a data breach.
        </p>
        <p>
          In recent years we have seen messaging applications demonstrate a new
          path where messages are end-to-end encrypted. Inspired by Matrix &
          Signal Nik Graf started to wonder if end-to-end encryption could be
          applied to other applications as well. After some initial research
          2019 he started to experiment with combining end-to-end encryption
          with CRDTs.
        </p>
        <p>Mid 2020 he got a prototype working and Serenity Notes was born.</p>
      </div>
    </div>
  );
};

export default AboutPage;
