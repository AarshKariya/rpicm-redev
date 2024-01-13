import React, { useState } from "react";
import { useFormik } from "formik";
import { rowsData } from "../../helpers/multiSelectRowsData";
import styles from "./MultiSelectSection.module.scss";

interface Course {
  value: string;
  courseName: string;
}

interface SubOptions {
  title: string;
  id: string;
  mgmtCourses: Course[];
}

interface RowData {
  title: string;
  id: string;
  options: { value: string; label: string }[];
  subOptions: SubOptions[];
}

interface FormValues {
  enquiringFor: string[];
  selectedCourses: { [key: string]: string[] | undefined };
}

interface MultiSelectSectionProps {
  formik: any;
}

const MultiSelectSection: React.FC<MultiSelectSectionProps> = ({ formik }) => {
  // const formik = useFormik({
  //   initialValues: {
  //     enquiringFor: [],
  //     selectedCourses: {},
  //   },
  //   onSubmit: (values) => {
  //     console.log(values);
  //     // Add your form submission logic here
  //   },
  // });

  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  // const handleOptionChange = (option: string) => {
  //   formik.setFieldValue("enquiringFor", [
  //     ...formik.values.enquiringFor,
  //     option,
  //   ]);
  // };

  const handleOptionChange = (option: string) => {
    formik.setFieldValue("enquiringFor", [option]);
  };

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleCourseChange = (rowId: string, course: string) => {
    formik.setFieldValue(`selectedCourses.${rowId}`, [
      ...(formik.values.selectedCourses[rowId] || []),
      course,
    ]);
    setShowDropdown(false);
  };

  return (
    <>
      {rowsData.map((rowData) => (
        <div key={rowData.id} className={styles.rowContainer}>
          <div className={styles.title}>{rowData.title}</div>

          <div className={styles.dropdown}>
            <select
              id={rowData.id}
              name={rowData.id}
              multiple
              className={styles.selectDropdown}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values[rowData.id] || []}
            >
              {/* Map over the options from the current rowData */}
              {rowData.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      ))}
    </>
  );
};

export default MultiSelectSection;
