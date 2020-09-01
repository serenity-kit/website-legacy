import React from "react";

type Props = {
  meta?: any;
  className?: string;
};

const TextSection: React.FC<Props> = ({
  meta,
  className,
  ...otherProps
}) => {
  const newClassName = `max-w-2xl mx-4 md:mx-auto my-8 text-section ${
    className ? className : ""
  }`;
  return <section {...otherProps} className={newClassName} />;
};

export default TextSection;
