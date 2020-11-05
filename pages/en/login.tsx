import * as React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useMutation } from "urql";
import FormError from "../../components/FormError";

const SendBillingAccountAuthEmailMutation = `
  mutation sendBillingAccountAuthEmail($input: SendBillingAccountAuthEmailInput!) {
    sendBillingAccountAuthEmail(input: $input) {
      success
    }
  }
`;

const AuthenticateBillingAccountMutation = `
  mutation authenticateBillingAccount($input: AuthenticateBillingAccountInput!) {
    authenticateBillingAccount(input: $input) {
      success
    }
  }
`;

type State = {
  email: string;
  emailToken: string;
  emailTokenFormVisible: boolean;
  sendingEmail: boolean;
  sendingEmailFailed: boolean;
  authenticate: boolean;
  authenticateFailed: boolean;
};

function loginReducer(state: State, action): State {
  switch (action.type) {
    case "UPDATE_EMAIL":
      return {
        ...state,
        email: action.email,
        emailToken: "",
        emailTokenFormVisible: false,
        sendingEmail: false,
        sendingEmailFailed: false,
      };
    case "SEND_EMAIL":
      return {
        ...state,
        sendingEmail: true,
        sendingEmailFailed: false,
      };
    case "SEND_EMAIL_SUCCESS":
      return {
        ...state,
        emailTokenFormVisible: true,
        sendingEmail: false,
        sendingEmailFailed: false,
      };
    case "SEND_EMAIL_FAILED":
      return {
        ...state,
        emailTokenFormVisible: false,
        sendingEmail: false,
        sendingEmailFailed: true,
      };
    case "UPDATE_EMAIL_TOKEN":
      return {
        ...state,
        emailToken: action.emailToken,
      };
    case "AUTHENTICATE":
      return {
        ...state,
        authenticate: true,
        authenticateFailed: false,
      };
    case "AUTHENTICATE_FAILED":
      return {
        ...state,
        authenticate: false,
        authenticateFailed: true,
      };
    default:
      throw new Error("Unhandled action type");
  }
}

const LoginPage: NextPage = () => {
  const router = useRouter();
  const [state, dispatch] = React.useReducer(loginReducer, {
    email: "",
    emailToken: "",
    emailTokenFormVisible: false,
    sendingEmail: false,
    sendingEmailFailed: false,
    authenticate: false,
    authenticateFailed: false,
  });
  const [, sendBillingAccountAuthEmail] = useMutation(
    SendBillingAccountAuthEmailMutation
  );
  const [, authenticateBillingAccount] = useMutation(
    AuthenticateBillingAccountMutation
  );

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Sign in to your billing account
        </h1>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form
            onSubmit={async (event) => {
              event.preventDefault();
              dispatch({ type: "SEND_EMAIL" });
              const result = await sendBillingAccountAuthEmail({
                input: { email: state.email },
              });
              if (result?.data?.sendBillingAccountAuthEmail?.success) {
                dispatch({ type: "SEND_EMAIL_SUCCESS" });
              } else {
                dispatch({ type: "SEND_EMAIL_FAILED" });
              }
            }}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="email"
                  type="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  value={state.email}
                  onChange={(event) => {
                    dispatch({
                      type: "UPDATE_EMAIL",
                      email: event.target.value,
                    });
                  }}
                />
              </div>
            </div>

            {state.emailTokenFormVisible ? null : (
              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                  >
                    {state.sendingEmail ? "Continue …" : "Continue"}
                  </button>
                </span>
              </div>
            )}
            {state.sendingEmailFailed ? (
              <FormError>Something went wrong sending the Email.</FormError>
            ) : null}
          </form>
          {state.emailTokenFormVisible ? (
            <form
              onSubmit={async (event) => {
                event.preventDefault();
                dispatch({ type: "AUTHENTICATE" });
                const result = await authenticateBillingAccount({
                  input: { emailToken: state.emailToken },
                });
                if (result?.data?.authenticateBillingAccount?.success) {
                  router.push("/en/billing-account");
                } else {
                  dispatch({ type: "AUTHENTICATE_FAILED" });
                }
              }}
            >
              <p>
                We sent you a temporary login code to {state.email}. Please
                check your inbox.
              </p>
              <label>
                Login Code
                <input
                  type="text"
                  placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
                  value={state.emailToken}
                  onChange={(event) => {
                    dispatch({
                      type: "UPDATE_EMAIL_TOKEN",
                      emailToken: event.target.value,
                    });
                  }}
                />
              </label>
              <button>{state.authenticate ? "Login …" : "Login"}</button>
              {state.authenticateFailed ? (
                <FormError>
                  Something went wrong during the authentication.
                </FormError>
              ) : null}
            </form>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default LoginPage;
