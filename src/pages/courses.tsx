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
        description:
          "This course equips aspiring journalists for roles in news channels, newspapers, corporate, and government sectors, covering reporting, editing, anchoring, and media management. It applies journalistic expertise to content creation across diverse platforms, fostering portfolio development via industry projects.",
        showArrow: true,
        duration: 1,
        isYearly: true,
        courseFor: [
          "It is best suited for graduates, with a flair for writing, reading, public-speaking, acting, etc.",
          "Those who want to have a career in journalism.",
          "Those who want to start writing blogs, content writing for websites, publish books, etc.",
          "Excellent value in terms of both tuition and the ability to continue working.",
        ],
        academicSchedule: [
          "Contact Hours: Minimum 180 contact hours, may extend upto 250 hours.",
          "Evening and Weekend Classes",
          "Teaching Calendar: July/August to April/May",
          "Academic Evaluation Criteria",
          "(minimum 65% attendance is compulsory) Attendance",
          "Classwork and Assignment",
          "One internal exam and one final exam",
          "Project",
          "Field and industry visit reports",
          "Internal marking (based on attendance, class work, assignments, exams, project work, viva and presentations)",
          "Internship (optional/compulsory) This is for non-working candidates only and if applicable. Only deserving candidates will be eligible for internships.",
        ],
        previouslyRecruited: ["timesOfIndia", "tataAig"],
      },
      {
        title: "Digital Media",
        id: `comm_${generateUniqueId()}`,
        description: "Description for course 1",
        showArrow: false,
      },
      {
        title: "Public Relations",
        id: `comm_${generateUniqueId()}`,
        description:
          "Students will become good communicators and develop strategic thinking and a digitally-focused approach to succeed in today’s marketplace",
        showArrow: true,
        duration: 4,
        courseFor: [
          "Fresh graduates with a flair of writing, reading, public speaking, acting, etc",
          "Those who want to learn skills and pursue a career in strategic communication planning, media relations, events planning and execution without pursuing lengthy and expensive Masters courses.",
          "Communication professionals and officers/Executives in government departments/ Public Sector Enterprises.",
          "Retired officers from armed forces who want to join the corporate sector.",
        ],
        academicSchedule: [],
      },
      {
        title: "Strategic Communication for Sustainable Impact",
        id: `comm_${generateUniqueId()}`,
        description: "Description for course 1",
        showArrow: false,
      },
      {
        title: "School Journalism",
        id: `comm_${generateUniqueId()}`,
        description: "Description for course 1",
        showArrow: false,
      },
      {
        title: "Campus Journalism",
        id: `comm_${generateUniqueId()}`,
        description:
          "Campus journalism is a  course for college students to understand the importance of oral and written communication skills, reading, and media consumption skills.  This course enables the students to learn the hands-on basics of writing-editing-publishing. This is while they get introduced to digital self-defense by identifying fake news and learning to fact-check.",
        showArrow: true,
      },
    ],
  },
  {
    courseType: "MANAGEMENT",
    courseItems: [
      {
        title: "Industrial Relations & Personnel Management",
        id: `comm_${generateUniqueId()}`,
        description: "Description for course 1",
        duration: 1,
        isYearly: true,
        showArrow: true,
        courseFor: [],
        academicSchedule: [],
      },
      {
        title: "Materials Management",
        id: `comm_${generateUniqueId()}`,
        description: "Description for course 1",
        duration: 1,
        isYearly: true,
        showArrow: true,
        courseFor: [],
        academicSchedule: [],
      },
      {
        title: "International Trade (Import-Export)",
        id: `comm_${generateUniqueId()}`,
        description: "Description for course 1",
        duration: 1,
        isYearly: true,
        showArrow: true,
        courseFor: [],
        academicSchedule: [],
      },
      {
        title: "Hospital Management",
        id: `comm_${generateUniqueId()}`,
        description: "Description for course 1",
        duration: 1,
        isYearly: true,
        showArrow: true,
        courseFor: [],
        academicSchedule: [],
      },
      {
        title: "Marketing & Sales Management",
        id: `comm_${generateUniqueId()}`,
        description: "Description for course 1",
        duration: 1,
        isYearly: true,
        showArrow: true,
        courseFor: [],
        academicSchedule: [],
      },
      {
        title: "Business Management",
        id: `comm_${generateUniqueId()}`,
        description: "Description for course 1",
        duration: 1,
        isYearly: true,
        showArrow: true,
        courseFor: [],
        academicSchedule: [],
      },
      {
        title: "Financial Management",
        id: `comm_${generateUniqueId()}`,
        description: "Description for course 1",
        duration: 1,
        isYearly: true,
        showArrow: true,
        courseFor: [],
        academicSchedule: [],
      },
    ],
  },
  {
    courseType: "CULTURAL HERITAGE OF INDIA",
    courseItems: [
      {
        title: "Cultural Heritage Of India",
        id: `comm_${generateUniqueId()}`,
        description: "Description for course 1",
        duration: 1,
        isYearly: true,
        showArrow: true,
        courseFor: [],
        academicSchedule: [],
      },
    ],
  },
];

const Courses = () => {
  return (
    <div style={{ overflowX: "hidden", margin: "-8px" }}>
      <CoursesPage coursesData={coursesData} />
    </div>
  );
};

export default Courses;
