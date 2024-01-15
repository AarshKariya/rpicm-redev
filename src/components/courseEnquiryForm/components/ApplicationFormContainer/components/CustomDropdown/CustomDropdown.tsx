import React from "react";
import Select from "react-select";
import { CourseOption } from "./helpers/customDropdown";

interface RowData {
  value: string;
  id: string;
  label: string;
  mgmtCoursesOptions?: CourseOption[];
  commCoursesOptions?: CourseOption[];
}

const CustomDropdown: React.FC<{
  label: string;
  options: CourseOption[];
  onSelect: (selectedOptions: CourseOption[]) => void;
}> = ({ label, options, onSelect }) => {
  const handleChange = (selectedOptions: any) => {
    // Ensure that selectedOptions is an array of CourseOption
    if (Array.isArray(selectedOptions)) {
      onSelect(selectedOptions);
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <label>{label}</label>
      <Select isMulti options={options} onChange={handleChange} />
    </div>
  );
};

export default CustomDropdown;
