import * as Yup from "yup";

const contactUsValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[A-Za-z]+$/, "Only alphabets are allowed")
    .required("First Name is required"),

  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
      "Invalid email address"
    )
    .required("Email is required"),

  query: Yup.string().required("Query is required"),
});

export default contactUsValidationSchema;
