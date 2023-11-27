// enquiry.js

import CourseEnquiryForm from "@/components/courseEnquiryForm/CourseEnquiryForm"; // Import your components

const EnquiryPage = () => {
  return (
    <div>
      <h1>Course Enquiry</h1>
      <CourseEnquiryForm currentStep={1} />
    </div>
  );
};

export default EnquiryPage;
