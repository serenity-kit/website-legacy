import * as React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useMutation } from "urql";
import TextSection from "../components/TextSection";
import { H1 } from "../components/Headline";

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
    <TextSection>
      <H1>Login</H1>
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
        <label>
          Email
          <input
            type="text"
            placeholder="ada@example.com"
            value={state.email}
            onChange={(event) => {
              dispatch({
                type: "UPDATE_EMAIL",
                email: event.target.value,
              });
            }}
          />
        </label>
        {state.emailTokenFormVisible ? null : (
          <button>{state.sendingEmail ? "Continue …" : "Continue"}</button>
        )}
        {state.sendingEmailFailed
          ? "Something went wrong sending the Email."
          : null}
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
            We sent you a temporary login code to {state.email}. Please check
            your inbox.
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
          {state.authenticateFailed
            ? "Something went wrong during the authentication."
            : null}
        </form>
      ) : null}
    </TextSection>
  );
};

export default LoginPage;
