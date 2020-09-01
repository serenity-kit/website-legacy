import React from "react";
import theme from "prism-react-renderer/themes/nightOwl";
import Highlight, { defaultProps } from "prism-react-renderer";

type Props = {
  className: string;
};

const CodeBlock: React.FC<Props> = ({ children, className }) => {
  const language = className
    ? className.replace(/language-/, "")
    : "";

  return (
    // @ts-ignore
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={theme}
    >
      {({
        className,
        style,
        tokens,
        getLineProps,
        getTokenProps,
      }) => (
        <pre
          className={`${className} rounded mt-4`}
          style={{ ...style, padding: "20px" }}
        >
          {tokens.map((line, index) => {
            if (index + 1 === tokens.length) return null; // remove last line which is always empty
            return (
              <div
                key={index}
                {...getLineProps({ line, key: index })}
              >
                {line.map((token, key) => (
                  <span
                    key={key}
                    {...getTokenProps({ token, key })}
                  />
                ))}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
