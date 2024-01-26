import { NextPage } from "next";
import React from "react";

const ContactUsInfo: NextPage = () => {
  return (
    <>
      <div>Address:</div>
      <div>
        4th Floor, Bhavan's College Campus, Vidyagauri Nilkanth Marg, Khanpur,
        Ahmedabad – 380001, Gujarat
      </div>
      <div>
        Email:
        <a type="email">rpi@bhavans.info</a>
      </div>

      <div>Contact:</div>
      <div>Shri Shyam Parekh, Director.</div>
      <div>Dr. Sayantani Roy, Coordinator.</div>

      <div>Mobile: 7435012121</div>
      <div>Email: contact@rpicm.in</div>
    </>
  );
};

export default ContactUsInfo;
