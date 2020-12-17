import * as React from "react";
import { NextPage } from "next";
import { useQuery, useMutation } from "urql";

function compareByCreatedAtAndId(a, b) {
  if (new Date(a.createdAt) < new Date(b.createdAt)) return -1;
  if (new Date(a.createdAt) > new Date(b.createdAt)) return 1;
  if (a.id < b.id) return -1;
  if (a.id > b.id) return 1;
  return 0;
}

const BillingAccountQuery = `
  query billingAccount {
    billingAccount {
      email
      paddleUpdateUrl
      paddleCancelUrl
      allLicenses {
        id
        token
        userId
        createdAt
      }
    }
  }
`;

const RefreshLicenseTokenAndRemoveUserMutation = `
mutation refreshLicenseTokenAndRemoveUser($input: RefreshLicenseTokenAndRemoveUserInput!) {
  refreshLicenseTokenAndRemoveUser(input: $input) {
    license {
      id
      token
      userId
      createdAt
    }
  }
}`;

const AddUserToLicenseMutation = `
mutation addUserToLicense($input: AddUserToLicenseInput!) {
  addUserToLicense(input: $input) {
    license {
      id
      token
      userId
      createdAt
    }
  }
}`;

const BillingAccountPage: NextPage = () => {
  const [{ fetching, data, error }] = useQuery({ query: BillingAccountQuery });
  const [
    refreshLicenseTokenAndRemoveUserResult,
    refreshLicenseTokenAndRemoveUser,
  ] = useMutation(RefreshLicenseTokenAndRemoveUserMutation);
  const [addUserToLicenseResult, addUserToLicense] = useMutation(
    AddUserToLicenseMutation
  );

  return (
    <>
      {fetching ? (
        <section className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h1 className="text-lg leading-6 font-medium text-gray-900">
                Billing Account
              </h1>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              Loading …
            </div>
          </div>
        </section>
      ) : error ? (
        <section className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h1 className="text-lg leading-6 font-medium text-gray-900">
                Billing Account
              </h1>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              Something went wrong while fetching the data.
            </div>
          </div>
        </section>
      ) : (
        <section className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
            <div className="px-4 py-5 sm:px-6">
              <h1 className="text-lg leading-6 font-medium text-gray-900">
                Billing Account
              </h1>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Email address
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {data.billingAccount.email}
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Update Subscription Link
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <a href={data.billingAccount.paddleUpdateUrl}>
                      Update Subscription
                    </a>
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Cancel Subscription Link
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <a href={data.billingAccount.paddleCancelUrl}>
                      Cancel Subscription
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {refreshLicenseTokenAndRemoveUserResult.error ? (
            <div style={{ color: "red" }}>Failed to reset the license key.</div>
          ) : null}
          {addUserToLicenseResult.error ? (
            <div className="mt-1 mb-4 relative rounded-md shadow-sm border border-red-500 px-4 py-5 bg-white">
              <p className="block w-full pr-10 text-red-500 focus:outline-none focus:ring-red-500 border-red-500 sm:text-sm rounded-md">
                Couldn't connect license to the provided User ID.
              </p>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-red-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          ) : null}
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        {/* <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          License Key
                        </th> */}
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          User ID
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">
                            {/* Reset License Key */}
                            Disconnect User
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {data.billingAccount.allLicenses
                        .sort(compareByCreatedAtAndId)
                        .map((license) => {
                          return (
                            <tr key={license.id}>
                              {/* <td className="px-6 py-4">
                                <div className="flex items-center font-mono text-sm">
                                  {license.token}
                                </div>
                              </td> */}
                              <td className="px-6 py-4">
                                <form
                                  className="flex"
                                  onSubmit={async (evt) => {
                                    evt.preventDefault();
                                    await addUserToLicense({
                                      input: {
                                        licenseId: license.id,
                                        // @ts-ignore
                                        userId: evt.target.elements.userId.value.trim(),
                                      },
                                    });
                                  }}
                                >
                                  <input
                                    name="userId"
                                    type="text"
                                    placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                  />
                                  <button className="ml-2 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Connect to User
                                  </button>
                                </form>
                              </td>
                              <td className="px-6 py-4 text-right text-sm font-medium">
                                <button
                                  type="button"
                                  className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                  onClick={async () => {
                                    if (
                                      window.confirm(
                                        "This will create a new license key and remove the attached user ID. Do you want to continue?"
                                      )
                                    ) {
                                      await refreshLicenseTokenAndRemoveUser({
                                        input: { licenseId: license.id },
                                      });
                                    }
                                  }}
                                >
                                  {/* Reset License Key */}
                                  Disconnect User
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default BillingAccountPage;
