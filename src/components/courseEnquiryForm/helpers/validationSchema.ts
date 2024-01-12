import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[A-Za-z]+$/, "Only alphabets are allowed")
    .required("First Name is required"),

  fatherName: Yup.string()
    .matches(/^[A-Za-z]+$/, "Only alphabets are allowed")
    .required("Father's Name is required"),

  lastName: Yup.string()
    .matches(/^[A-Za-z]+$/, "Only alphabets are allowed")
    .required("Last Name is required"),

  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, "Phone Number must be 10 digits")
    .required("Phone Number is required"),

  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
      "Invalid email address"
    )
    .required("Email is required"),
});

export default validationSchema;
