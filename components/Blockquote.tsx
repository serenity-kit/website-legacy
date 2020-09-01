import React from "react";

const Blockquote: React.FC = (props) => (
  <blockquote
    className="mb-1 mt-4 bg-gray-200 pl-4 pr-4 pb-5 pt-1 rounded text-gray-800"
    {...props}
  />
);

export default Blockquote;
