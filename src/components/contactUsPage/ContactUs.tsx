import { motion } from "framer-motion";
import styles from "./ContactUs.module.scss";
import { useFormik } from "formik";
import contactUsValidationSchema from "./helpers/contactUsValidation";
import supabase from "@/config/supabaseClient";
import ContactUsFirstName from "./components/ContactUsFirstName";
import ContactUsLastName from "./components/ContactUsLastName";
import ContactUsEmailField from "./components/ContactUsEmailField";
import ContactUsQuery from "./components/ContactUsQuery";
import ContactUsSubmit from "./components/ContactUsSubmit";
import ContactUsInfo from "./components/ContactUsInfo";

const ContactPage: React.FC = () => {
  const handleContactFormSubmit = async (contactFormData: any) => {
    try {
      await supabase.from("contactUsEntries").upsert([
        {
          firstName: contactFormData?.firstName,
          lastName: contactFormData?.lastName,
          email: contactFormData?.email,
          query: contactFormData?.query,
        },
      ]);
      formik.resetForm();
    } catch (error: any) {
      console.error("Error:", error?.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      query: "",
    },

    onSubmit: (values) => {
      handleContactFormSubmit(values);
    },

    validationSchema: contactUsValidationSchema,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className={styles.contactContainer}
    >
      <div className={styles.contactUsHeading}>Get in touch!</div>
      <div className={styles.contactUsSubHeading}>
        We{"'"}d love to hear from you. Please fill out this form.
      </div>

      <ContactUsInfo />

      <form onSubmit={formik.handleSubmit}>
        <ContactUsFirstName formik={formik} />
        <ContactUsLastName formik={formik} />
        <ContactUsEmailField formik={formik} />
        <ContactUsQuery formik={formik} />
        <ContactUsSubmit formik={formik} />
      </form>

      {formik.isSubmitting && (
        <div className={styles.formSubmittedText}>
          We will get back to you shortly.
        </div>
      )}
    </motion.div>
  );
};

export default ContactPage;
