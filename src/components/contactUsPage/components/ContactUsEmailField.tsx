import React from "react";
import styles from "../ContactUs.module.scss";
import { motion } from "framer-motion";

import { NextPage } from "next";

interface ContactUsEmailFieldProps {
  formik: any;
}

const ContactUsEmailField: NextPage<ContactUsEmailFieldProps> = ({
  formik,
}) => {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Enter your email address"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email && (
        <div className={styles.error}>
          {formik.touched.email && formik.errors.email}
        </div>
      )}
    </motion.div>
  );
};

export default ContactUsEmailField;
