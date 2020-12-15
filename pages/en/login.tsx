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
  const [showSignupSuccessInfo, setShowSignupSuccessInfo] = React.useState(
    false
  );
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

  // only run on the client
  React.useLayoutEffect(() => {
    if (window.location.hash) {
      try {
        const hash = window.location.hash.substr(1);
        const data = JSON.parse(atob(hash));
        if (data.email) {
          setShowSignupSuccessInfo(true);
          dispatch({
            type: "UPDATE_EMAIL",
            email: data.email,
          });
        }
      } catch (err) {}
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Sign in to your billing account
        </h1>
      </div>

      {showSignupSuccessInfo ? (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <p className="bg-green-100 py-8 px-4 shadow sm:rounded-lg sm:px-10 text-green-800">
            Thank you for signing up!
            <br />
            We are setting up your account. This might take a minute. After that
            you can sign into your billing account using an email verfication.
          </p>
        </div>
      ) : null}

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
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
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
                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:ring-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
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
              <p className="text-sm mt-8 mb-4">
                We sent you a temporary login code to{" "}
                <span className="font-mono">{state.email}</span>. Please check
                your inbox.
              </p>

              <div>
                <label
                  htmlFor="loginCode"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Login Code
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="loginCode"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
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
                </div>
              </div>

              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:ring-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                  >
                    {state.authenticate ? "Login …" : "Login"}
                  </button>
                </span>
              </div>

              {state.authenticateFailed ? (
                <FormError>
                  Something went wrong during the authentication.
                </FormError>
              ) : null}
            </form>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
