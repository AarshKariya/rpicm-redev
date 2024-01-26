import React from "react";
import styles from "../ContactUs.module.scss";
import { motion } from "framer-motion";

import { NextPage } from "next";

interface ContactUsFirstNameProps {
  formik: any;
}

const ContactUsFirstName: NextPage<ContactUsFirstNameProps> = ({ formik }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        placeholder="Enter your first name"
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
  );
};

export default ContactUsFirstName;
