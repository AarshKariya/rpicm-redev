const handlePartTimeChange = () => {
  // Handle Part-time course change
};

const handleFullTimeChange = () => {
  // Handle Full-time course change
};

const handleCourseChange = () => {
  // Handle Course change
};

export const rowsData = [
  {
    title: "Applying For",
    options: [
      { value: "part-time", label: "Part-time course" },
      { value: "full-time", label: "Full-time course" },
    ],
    onChange: (value: string) => {
      if (value === "part-time") {
        handlePartTimeChange();
      } else if (value === "full-time") {
        handleFullTimeChange();
      }
    },
  },
  {
    title: "Course",
    options: [
      { value: "management", label: "Management" },
      { value: "communication", label: "Communication" },
      { value: "cultural-heritage", label: "Cultural Heritage of India" },
    ],
    onChange: (value: string) => {
      handleCourseChange();
    },
  },
];
