import { motion } from "framer-motion";
import styles from "./ContactUs.module.scss";
import { useFormik } from "formik";
import contactUsValidationSchema from "./helpers/contactUsValidation";
import supabase from "@/config/supabaseClient";

const ContactPage: React.FC = () => {
  const handleContactFormSubmit = async (contactFormData: any) => {
    try {
      await supabase.from("contactUsEntries").upsert([
        {
          firstName: contactFormData?.firstName,
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
      <div className={styles.contactUsHeading}>Contact Us</div>
      <form onSubmit={formik.handleSubmit}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div className={styles.error}>
              {formik.touched.firstName && formik.errors.firstName}
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <label htmlFor="query">Query</label>
          <textarea
            id="query"
            name="query"
            onChange={formik.handleChange}
            value={formik.values.query}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={!formik.dirty}
          >
            {formik.isSubmitting ? "Submitting..." : "Submit"}
          </motion.button>
        </motion.div>
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
