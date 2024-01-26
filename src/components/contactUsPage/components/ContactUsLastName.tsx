import React from "react";
import styles from "../ContactUs.module.scss";
import { motion } from "framer-motion";

import { NextPage } from "next";

interface ContactUsLastNameProps {
  formik: any;
}

const ContactUsLastName: NextPage<ContactUsLastNameProps> = ({ formik }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        placeholder="Enter your last name"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName && (
        <div className={styles.error}>
          {formik.touched.lastName && formik.errors.lastName}
        </div>
      )}
    </motion.div>
  );
};

export default ContactUsLastName;
