import * as React from "react";
import { NextPage } from "next";
import { useQuery, useMutation } from "urql";
import TextSection from "../../components/TextSection";
import { H1 } from "../../components/Headline";

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
    <TextSection>
      <H1>Billing Account</H1>
      {fetching ? (
        "Loading …"
      ) : error ? (
        <section>Something went wrong.</section>
      ) : (
        <section>
          <div>{data.billingAccount.email}</div>
          <div>
            <a href={data.billingAccount.paddleUpdateUrl}>
              Update Subscription
            </a>
          </div>
          <div>
            <a href={data.billingAccount.paddleCancelUrl}>
              Cancel Subscription
            </a>
          </div>

          {refreshLicenseTokenAndRemoveUserResult.error ? (
            <div>Failed to reset the license key.</div>
          ) : null}
          {addUserToLicenseResult.error ? (
            <div>Couldn't connect license to the provided User ID.</div>
          ) : null}
          <ul>
            {data.billingAccount.allLicenses
              .sort(compareByCreatedAtAndId)
              .map((license) => {
                return (
                  <li key={license.id} className="flex">
                    <div>License Key: {license.token}</div>
                    <div>User ID: {license.userId}</div>
                    <form
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
                      className="border"
                    >
                      <label>
                        User ID
                        <input
                          name="userId"
                          type="text"
                          placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
                        />
                      </label>
                      <button>Connect to User</button>
                    </form>
                    <button
                      type="button"
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
                      Reset License Key
                    </button>
                  </li>
                );
              })}
          </ul>
        </section>
      )}
    </TextSection>
  );
};

export default BillingAccountPage;
