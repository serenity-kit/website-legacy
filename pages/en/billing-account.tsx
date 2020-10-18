import * as React from "react";
import { NextPage } from "next";
import { useQuery } from "urql";
import TextSection from "../../components/TextSection";
import { H1 } from "../../components/Headline";

const BillingAccountQuery = `
  query billingAccount {
    billingAccount {
      email
      allLicenses {
        id
        token
        userId
      }
    }
  }
`;

const BillingAccountPage: NextPage = () => {
  const [{ fetching, data, error }] = useQuery({ query: BillingAccountQuery });

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
          <ul>
            {data.billingAccount.allLicenses.map((license) => {
              return (
                <li key={license.id} className="flex">
                  <div>License Key: {license.token}</div>
                  <div>User ID: {license.userId}</div>
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
