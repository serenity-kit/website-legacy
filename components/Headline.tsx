import React from "react";

export const H1: React.FC = (props) => (
  <h1 className="text-3xl mb-4" {...props} />
);
export const H2: React.FC = (props) => (
  <h2 className="text-2xl mb-3 mt-8" {...props} />
);
export const H3: React.FC = (props) => (
  <h3 className="text-xl mb-1 mt-2" {...props} />
);
export const H4: React.FC = (props) => <h4 {...props} />;
