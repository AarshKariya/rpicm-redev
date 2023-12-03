import { motion } from "framer-motion";
import styles from "./CourseEnquiryForm.module.scss";
import { useState } from "react";

const CourseEnquiryForm = ({ currentStep = 1 }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [date, setDate] = useState("");
  const [place, setPlace] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleCheckBoxChange = (e: any) => {
    setIsChecked(e.target.checked);
    setIsFormValid(e.target.checked);
  };

  const handleDateChange = (e: any) => {
    setDate(e.target.value);
  };

  const handlePlaceChange = (e: any) => {
    setPlace(e.target.value);
  };

  const handleButtonClick = () => {
    // Perform any action on button click after validation
  };
  return (
    <div className={styles.courseEnquiryForm}>
      <h1 className={styles.heading}>Course Enquiry Form</h1>
      <div className={styles.stepsContainer}>
        <div
          className={`${styles.step} ${
            currentStep === 1 ? styles.currentStep : ""
          }`}
        >
          <span className={styles.stepNumber}>1.</span>
          <h2>Fill In the Application Form</h2>
          {/* Your form content for step 1 goes here */}
          {currentStep === 1 && (
            <motion.div
              className={styles.stepIndicator}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </div>
        <div className={styles.divider}></div>
        <div
          className={`${styles.step} ${
            currentStep === 2 ? styles.currentStep : ""
          }`}
        >
          <span className={styles.stepNumber}>2.</span>
          <h2>Payment</h2>
          {/* Your payment section content goes here */}
          {currentStep === 2 && (
            <motion.div
              className={styles.stepIndicator}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </div>
      </div>
      <div className={styles.windowWidthLine}></div>
      <div className={styles.tableStructure}>
        <motion.table
          className={styles.table}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <tbody>
            <tr>
              <td>Applying For</td>
              <td>
                <label>
                  <input type="checkbox" value="part-time" /> Part-time course
                </label>
                <label>
                  <input type="checkbox" value="full-time" /> Full-time course
                </label>
              </td>
            </tr>
            <tr>
              <td>Course</td>
              <td>
                <label>
                  <input type="checkbox" value="management" /> Management
                </label>
                <label>
                  <input type="checkbox" value="communication" /> Communication
                </label>
                <label>
                  <input type="checkbox" value="cultural-heritage" /> Cultural
                  Heritage of India
                </label>
              </td>
            </tr>
            <tr>
              <td>PERSONAL INFORMATION</td>
              <td></td>
            </tr>
            <tr>
              <td>Name of Candidate</td>
              <td>
                <input
                  type="text"
                  placeholder="Name of Candidate"
                  className={styles.inputField}
                />
              </td>
            </tr>
            <tr>
              <td>Fathers Name</td>
              <td>
                <input
                  type="text"
                  placeholder="Father's Name"
                  className={styles.inputField}
                />
              </td>
            </tr>
            <tr>
              <td>Date of Birth</td>
              <td>
                <input
                  type="date"
                  placeholder="Date of Birth"
                  className={styles.inputField}
                />
              </td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>
                <label>
                  <input type="radio" name="gender" value="male" /> Male
                </label>
                <label>
                  <input type="radio" name="gender" value="female" /> Female
                </label>
              </td>
            </tr>
            <tr>
              <td>Category</td>
              <td>
                <label>
                  <input type="radio" name="category" value="gen" /> GEN
                </label>
                <label>
                  <input type="radio" name="category" value="sebc" /> SEBC/OBC
                </label>
                <label>
                  <input type="radio" name="category" value="sc" /> SC
                </label>
                <label>
                  <input type="radio" name="category" value="st" /> ST
                </label>
                <label>
                  <input type="radio" name="category" value="ph" /> PH
                </label>
                <label>
                  <input type="radio" name="category" value="other" /> OTHER
                </label>
              </td>
            </tr>
            <tr>
              <td>Nationality</td>
              <td>{/* Dropdown options for countries */}</td>
            </tr>
            <tr>
              <td>Employment Status</td>
              <td>
                <label>
                  <input type="radio" name="employment" value="working" />{" "}
                  Working
                </label>
                <label>
                  <input type="radio" name="employment" value="student" />{" "}
                  Student
                </label>
              </td>
            </tr>
          </tbody>
        </motion.table>
        <motion.div
          className={styles.windowWidthLine}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className={styles.ugDegree}>
          <div className={styles.column}>
            <h3>UG Degree</h3>
          </div>
          <div className={`${styles.column} ${styles.fileInputBox}`}>
            <label htmlFor="fileInput" className={styles.fileInputLabel}>
              Choose File
            </label>
            <input type="file" id="fileInput" className={styles.fileInput} />
          </div>
        </div>
        <div className={styles.ugDegree}>
          <div className={styles.column}>
            <h3>PG Degree</h3>
          </div>
          <div className={`${styles.column} ${styles.fileInputBox}`}>
            <label htmlFor="pgFileInput" className={styles.fileInputLabel}>
              Choose File
            </label>
            <input type="file" id="pgFileInput" className={styles.fileInput} />
          </div>
        </div>
        <div className={styles.ugDegree}>
          <div className={styles.column}>
            <h3>UGC NET/ UGC-CSIR NET/ SLET/ UGC-RF/ GATE</h3>
          </div>
          <div className={`${styles.column} ${styles.fileInputBox}`}>
            <label htmlFor="ugcFileInput" className={styles.fileInputLabel}>
              Choose File
            </label>
            <input type="file" id="ugcFileInput" className={styles.fileInput} />
          </div>
        </div>
        <div className={styles.ugDegree}>
          <div className={styles.column}>
            <h3>ID Proof</h3>
          </div>
          <div className={`${styles.column} ${styles.fileInputBox}`}>
            <label htmlFor="idProofFileInput" className={styles.fileInputLabel}>
              Choose File
            </label>
            <input
              type="file"
              id="idProofFileInput"
              className={styles.fileInput}
            />
          </div>
        </div>
        <div className={styles.ugDegree}>
          <div className={styles.column}>
            <h3>Photograph</h3>
          </div>
          <div className={`${styles.column} ${styles.fileInputBox}`}>
            <label htmlFor="photoFileInput" className={styles.fileInputLabel}>
              Choose File
            </label>
            <input
              type="file"
              id="photoFileInput"
              className={styles.fileInput}
            />
          </div>
        </div>
        <motion.div
          className={styles.windowWidthLine}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className={styles.paymentDetails}>
          <div className={styles.column}>
            <h3>PAYMENT DETAILS</h3>
            <p>Application fee: 2000/-</p>
            <div className={styles.row}>
              <h4>Date</h4>
              <input type="date" value={date} onChange={handleDateChange} />
            </div>
            <div className={styles.row}>
              <h4>Place</h4>
              <input
                type="text"
                value={place}
                onChange={handlePlaceChange}
                placeholder="Enter place"
              />
            </div>
            <div className={styles.row}>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckBoxChange}
              />
              <label>
                *I hereby declare that the information given above are true, and
                correct to the best of my knowledge
              </label>
            </div>
            <button
              onClick={handleButtonClick}
              disabled={!isFormValid}
              className={styles.saveButton}
            >
              Save and Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseEnquiryForm;
