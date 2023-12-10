import CoursesPage from "@/screens/coursesPage/CoursesPage";

const generateUniqueId = () => {
  return Math.random().toString(36).substr(2, 9); // Generate a random unique ID
};

const coursesData = [
  {
    courseType: "COMMUNICATION",
    courseItems: [
      {
        title: "Journalism",
        id: `comm_${generateUniqueId()}`,
        description: "This course equips aspiring journalists for roles in news channels, newspapers, corporate, and government sectors, covering reporting, editing, anchoring, and media management. It applies journalistic expertise to content creation across diverse platforms, fostering portfolio development via industry projects.",
        showArrow: true,
      },
      {
        title: "Course 1",
        id: `comm_${generateUniqueId()}`,
        description: "Description for course 1",
        showArrow: false,
      },
      {
        title: "Course 1",
        id: `comm_${generateUniqueId()}`,
        description: "Description for course 1",
        showArrow: false,
      },
      {
        title: "Course 1",
        id: `comm_${generateUniqueId()}`,
        description: "Description for course 1",
        showArrow: false,
      },
      {
        title: "Course 1",
        id: `comm_${generateUniqueId()}`,
        description: "Description for course 1",
        showArrow: false,
      },
    ],
  },
  {
    courseType: "COMMUNICATION",
    courseItems: [
      {
        title: "Course 1",
        id: `comm_${generateUniqueId()}`,
        description: "Description for course 1",
      },
      {
        title: "Course 1",
        id: `comm_${generateUniqueId()}`,
        description: "Description for course 1",
      },
      {
        title: "Course 1",
        id: `comm_${generateUniqueId()}`,
        description: "Description for course 1",
      },
      {
        title: "Course 1",
        id: `comm_${generateUniqueId()}`,
        description: "Description for course 1",
      },
      {
        title: "Course 1",
        id: `comm_${generateUniqueId()}`,
        description: "Description for course 1",
      },
    ],
  },
  {
    courseType: "COMMUNICATION",
    courseItems: [
      {
        title: "Course 1",
        id: `comm_${generateUniqueId()}`,
        description: "Description for course 1",
      },
      {
        title: "Course 1",
        id: `comm_${generateUniqueId()}`,
        description: "Description for course 1",
      },
      {
        title: "Course 1",
        id: `comm_${generateUniqueId()}`,
        description: "Description for course 1",
      },
      {
        title: "Course 1",
        id: `comm_${generateUniqueId()}`,
        description: "Description for course 1",
      },
      {
        title: "Course 1",
        id: `comm_${generateUniqueId()}`,
        description: "Description for course 1",
      },
    ],
  },
];

const Courses = () => {
  return (
    <div style={{overflowX:'hidden', margin:'-8px'}}>
      <CoursesPage coursesData={coursesData} />
    </div>
  );
};

export default Courses;
