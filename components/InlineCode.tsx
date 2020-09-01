import React from "react";

const InlineCode: React.FC = (props) => (
  <code
    className="bg-gray-200 border border-gray-300 rounded"
    {...props}
  />
);

export default InlineCode;
