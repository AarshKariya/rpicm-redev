import CourseEnquiryForm from "@/components/courseEnquiryForm/CourseEnquiryForm"; // Import your components

const EnquiryPage = () => {
  return (
    <div style={{overflowX:'hidden', margin:'-8px'}}>
      <CourseEnquiryForm currentStep={1} />
    </div>
  );
};

export default EnquiryPage;
