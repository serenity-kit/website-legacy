import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { H2 } from "./Headline";

const SubscribeSchema = Yup.object().shape({
  email_address: Yup.string()
    .email("Please provide a valid email address")
    .required("Required"),
  first_name: Yup.string(),
});

const fetchReducer = (
  _state: { error: any; response: any; pending: boolean },
  {
    type,
    response,
    error,
  }: {
    type: "fetching" | "success" | "error";
    response?: any;
    error?: any;
  }
) => {
  switch (type) {
    case "fetching": {
      return { error: null, response: null, pending: true };
    }
    case "success": {
      return { error: null, response, pending: false };
    }
    case "error": {
      return { error, response: null, pending: false };
    }
    default:
      throw new Error(`Unsupported type: ${type}`);
  }
};

type ConvertKitBody = {
  first_name: string;
  email_address: string;
};

type Props = {};

const SubscribeForm: React.FC<Props> = () => {
  const [state, dispatch] = React.useReducer(fetchReducer, {
    error: null,
    response: null,
    pending: false,
  });
  const { pending, response, error } = state;

  const submit = (values: ConvertKitBody) => {
    dispatch({ type: "fetching" });
    fetch("https://app.convertkit.com/forms/1781726/subscriptions", {
      method: "post",
      body: JSON.stringify(values),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(
        (response) => {
          if (response.status === "success") {
            dispatch({ type: "success", response });
          } else {
            dispatch({ type: "error", error: response });
          }
        },
        (error) => dispatch({ type: "error", error })
      );
  };

  const errorMessage = error
    ? "Sorry, something went wrong! Please contact hi@serenity.re"
    : null;
  const isSuccess = Boolean(response);

  return (
    <div className="mt-5 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
      <p className="text-base font-medium text-gray-900">
        Sign up to get notified when it’s ready.
      </p>
      <Formik
        initialValues={{
          email_address: "",
          first_name: "",
        }}
        validationSchema={SubscribeSchema}
        onSubmit={submit}
      >
        {() => (
          <Form className="mt-3">
            <Field
              id="first_name"
              aria-required="false"
              name="first_name"
              placeholder="Enter your first name"
              type="text"
              className="appearance-none block w-full px-3 py-3 border border-gray-300 text-base leading-6 rounded-md placeholder-gray-500 shadow-sm focus:outline-none focus:placeholder-gray-400 focus:ring-blue focus:border-blue-300 transition duration-150 ease-in-out sm:flex-1"
            />
            <ErrorMessage
              name="first_name"
              component="div"
              className="text-red-500 text-s italic"
            />
            <Field
              id="email"
              aria-required="true"
              name="email_address"
              placeholder="Enter your email"
              type="email"
              className="mt-2 appearance-none block w-full px-3 py-3 border border-gray-300 text-base leading-6 rounded-md placeholder-gray-500 shadow-sm focus:outline-none focus:placeholder-gray-400 focus:ring-blue focus:border-blue-300 transition duration-150 ease-in-out sm:flex-1"
            />
            <ErrorMessage
              name="email_address"
              component="div"
              className="text-red-500 text-s italic"
            />
            <button
              className="mt-2 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-700 focus:outline-none focus:border-gray-900 focus:ring-gray active:bg-gray-900 transition duration-150 ease-in-out sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
              type="submit"
            >
              {!pending && "Notify me"}
              {pending && "Submitting…"}
            </button>
          </Form>
        )}
      </Formik>
      {isSuccess && !pending && (
        <div className="mt-4 text-green-500">
          Great, sent you an email with the confirmation link. Please check your
          inbox!
        </div>
      )}
      {errorMessage && (
        <div className="mt-4 text-red-500 italic">{errorMessage}</div>
      )}
    </div>
  );
};

export default SubscribeForm;
