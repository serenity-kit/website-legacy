import React from "react";

const Check = () => (
  <>
    <svg
      className="inline-block h-7 w-7 text-green-500"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
    <span className="sr-only">Yes</span>
  </>
);

const Solid = () => (
  <>
    <svg
      className="h-5 w-5 text-gray-400"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clipRule="evenodd"
      />
    </svg>
    <span className="sr-only">No</span>
  </>
);

const products = [
  { name: "Serenity Notes", device: true, collaborators: true },
  { name: "Apple Notes", device: true, deviceRef: "*", collaborators: false }, // device https://support.apple.com/en-gb/guide/security/sec1782bcab1/web
  { name: "Roam", device: false, collaborators: false },
  { name: "Notion", device: false, collaborators: false },
  { name: "Standard Notes", device: true, collaborators: false },
  { name: "Joplin", device: true, deviceRef: "**", collaborators: false },
  { name: "Google Docs/Keep", device: false, collaborators: false },
  { name: "Bear", device: true, deviceRef: "*", collaborators: false },
];

const ProductComparison = () => (
  <div className="bg-white">
    <h3 className="mt-2 text-center text-2xl leading-8 font-semibold text-gray-900">
      Compare Applications
    </h3>
    <div className="max-w-7xl mx-auto bg-white pb-16 sm:pb-24 pt-16 sm:px-6 lg:px-8">
      <table className="w-full h-px table-fixed">
        <caption className="sr-only">
          Encryption comparison of various applications
        </caption>
        <thead>
          <tr>
            <th
              className="pb-4 px-6 font-medium text-gray-500 text-left"
              scope="col"
            >
              <span>Applications</span>
            </th>

            <th
              className="w-1/4 pb-4 px-6 leading-6 font-medium text-gray-900 text-left"
              scope="col"
            >
              End-to-end encryption between your devices
            </th>

            <th
              className="w-1/4 pb-4 px-6 leading-6 font-medium text-gray-900 text-left"
              scope="col"
            >
              End-to-end encryption between collaborators
            </th>
          </tr>
        </thead>
        <tbody className="border-t border-gray-200 divide-y divide-gray-200">
          {products.map((product) => {
            return (
              <tr key={product.name}>
                <th
                  className="py-5 px-6 font-normal text-gray-900 text-left"
                  scope="row"
                >
                  {product.name}
                </th>
                <td className="py-5 px-6">
                  {product.device ? <Check /> : <Solid />}
                  {product.deviceRef ? (
                    <span className="text-gray-500">{product.deviceRef}</span>
                  ) : null}
                </td>
                <td className="py-5 px-6">
                  {product.collaborators ? <Check /> : <Solid />}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="text-gray-500">
        <p>* Encrypt individual notes using a password</p>
        <p>** Not encrypted by default, but can be set up</p>
      </div>
    </div>
  </div>
);

export default ProductComparison;
