import React from "react";
import { motion } from "framer-motion";

import { NextPage } from "next";

interface ContactUsSubmitProps {
  formik: any;
}

const ContactUsSubmit: NextPage<ContactUsSubmitProps> = ({ formik }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={!formik.dirty}
      >
        {formik.isSubmitting ? "Submitting..." : "Submit"}
      </motion.button>
    </motion.div>
  );
};

export default ContactUsSubmit;
