type Props = { children?: React.ReactNode };

const FormError = (props: Props) => (
  <div className="text-red-500 text-s italic" {...props} />
);

export default FormError;
