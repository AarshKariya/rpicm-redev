export const rowsData = [
  {
    title: "Enquiring For",
    id: "enquiringFor",
    options: [
      { value: "part-time", label: "Part-time course" },
      { value: "full-time", label: "Full-time course" },
    ],
  },
  {
    title: "Course",
    id: "course",
    options: [
      { value: "management", label: "Management" },
      { value: "communication", label: "Communication" },
    ],
    subOptions: [
      // Dummy subOptions for "Management" umbrella
      { value: "mgmtOption1", label: "Management Option 1" },
      { value: "mgmtOption2", label: "Management Option 2" },
      { value: "mgmtOption3", label: "Management Option 3" },
    ],
  },
];
