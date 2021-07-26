import React from "react";

type Props = {
  className?: string;
};

const DownloadMacOsLink: React.FC<Props> = (props) => (
  <a
    href="https://github.com/SerenityNotes/serenity-notes-clients/releases/download/v.0.4.1-beta/Serenity.Notes.0.4.1.dmg"
    className={`no-underline hover:no-underline hover:text-white px-4 py-2 border border-transparent text-lg leading-6 rounded-md text-white bg-black shadow-sm hover:bg-gray-700 active:bg-gray-900 transition duration-150 ease-in-out inline-flex flex-col ${
      props.className ? props.className : ""
    }`}
  >
    <span className="text-xs">
      Download
      <br />
    </span>
    macOS Beta 0.4.1
  </a>
);

export default DownloadMacOsLink;
