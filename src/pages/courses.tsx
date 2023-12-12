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
        duration: 1,
        courseFor: [
          " It is best suited for graduates, with a flair for writing, reading, public-speaking, acting, etc.",
          "Those who want to have a career in journalism.",
          "Those who want to start writing blogs, content writing for websites, publish books, etc.",
          "Excellent value in terms of both tuition and the ability to continue working."
        ],
        academicSchedule: [
          "contact Hours: Minimum 180 contact hours, may extend upto 250hours.",
          "Evening and Weekend Classes",
          "Teaching Calendar: July/August to April/May",
          "Academic Evaluation Criteria",
          "(minimum 65% attendance is compulsory) Attendance",
          "Classwork and Assignment",
          "One internal exam and one final exam",
          "Project",
          "Field and industry visit reports",
          "Internal marking (based on attendance, class work, assignments, exams, project work, viva and presentations)",
          "Internship (optional/compulsory) This is for non-working candidates only and if applicable. Only deserving candidates will be eligible for internships."
        ],
        previouslyRecruited: ["timesOfIndia","tataAig"]
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
    <div style={{ overflowX: 'hidden', margin: '-8px' }}>
      <CoursesPage coursesData={coursesData} />
    </div>
  );
};

export default Courses;
