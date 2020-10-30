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

type Props = {
  header?: string;
};

const SubscribeForm: React.FC<Props> = ({
  header = "Stay up to date by joining the Newsletter",
}) => {
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
    <section className="max-w-2xl mx-4 md:mx-auto my-8 text-section">
      <hr />
      <div className="mt-8 max-w-xs">
        <H2>{header}</H2>

        <Formik
          initialValues={{
            email_address: "",
            first_name: "",
          }}
          validationSchema={SubscribeSchema}
          onSubmit={submit}
        >
          {() => (
            <Form>
              <label
                htmlFor="first_name"
                className="block text-sm mt-4 mb-1 text-gray-700"
              >
                <div>
                  First Name{" "}
                  <ErrorMessage
                    name="first_name"
                    component="span"
                    className="text-red-500 italic"
                  />
                </div>
              </label>
              <Field
                id="first_name"
                aria-required="false"
                name="first_name"
                placeholder="Jane"
                type="text"
                className="shadow appearance-none border border-black rounded w-full py-2 px-3 leading-tight"
              />
              <label
                htmlFor="email"
                className="block text-sm  mt-2 mb-1 text-gray-700"
              >
                <div>
                  Email{" "}
                  <ErrorMessage
                    name="email_address"
                    component="span"
                    className="text-red-500 text-xs italic"
                  />
                </div>
              </label>
              <Field
                id="email"
                aria-required="true"
                name="email_address"
                placeholder="jane@acme.com"
                type="email"
                className="shadow appearance-none border border-black rounded w-full py-2 px-3 leading-tight"
              />
              <button
                className="rounded text-white bg-black hover:bg-gray-800 py-2 px-4 border border-black shadow mt-6"
                type="submit"
              >
                {!pending && "Subscribe"}
                {pending && "Submitting…"}
              </button>
            </Form>
          )}
        </Formik>
        {isSuccess && !pending && (
          <div className="mt-4 text-green-500">
            Great, I just sent you an email with the confirmation link. Please
            check your inbox!
          </div>
        )}
        {errorMessage && (
          <div className="mt-4 text-red-500 italic">{errorMessage}</div>
        )}
      </div>
    </section>
  );
};

export default SubscribeForm;
