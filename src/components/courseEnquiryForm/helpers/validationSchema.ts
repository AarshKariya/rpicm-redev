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

  state: Yup.string().required("State is required"),
  // ugUniName: Yup.string().required("University Name is required"),
  address: Yup.string().required("Address is required"),
  dob: Yup.string().required("Date of Birth is required"),
  gender: Yup.string().required("Gender is required"),
  employmentStatus: Yup.string().required("Employment Status is required"),
  enquiryDate: Yup.string().required("Date is required"),
  enquiryPlace: Yup.string().required("Place is required"),
});

export default validationSchema;
