import React from "react";
import styles from "../ContactUs.module.scss";
import { motion } from "framer-motion";

import { NextPage } from "next";

interface ContactUsQueryProps {
  formik: any;
}

const ContactUsQuery: NextPage<ContactUsQueryProps> = ({ formik }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
      <label htmlFor="query">Query</label>
      <input
        type="text"
        id="query"
        name="query"
        placeholder="Enter your query"
        onChange={formik.handleChange}
        value={formik.values.query}
      />
      {formik.touched.query && formik.errors.query && (
        <div className={styles.error}>
          {formik.touched.query && formik.errors.query}
        </div>
      )}
    </motion.div>
  );
};

export default ContactUsQuery;
