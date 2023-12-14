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
      // {
      //   title: "Digital Media",
      //   id: `comm_${generateUniqueId()}`,
      //   description: "Description for course 1",
      //   showArrow: false,
      // },
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
      },
      {
        title: "Strategic Communication for Sustainable Impact",
        id: `comm_${generateUniqueId()}`,
        description:
          "Fundamentals of communication, Importance & role of ethical & sensitive communication. Importance of research & evidence based approach for effective communication Role of communication in brand building",
        showArrow: true,
        duration: 4,
        isYearly: false,
        courseFor: [],
        academicSchedule: [
          "Course Duration: 22 hours",
          "Case Method and situation analysis",
          "Role plays",
          "In class assignments",
          "Lecture; Group discussions",
          "Audio-video-analysis and Projects",
          "Evaluation",
          "Case Analysis (20%); Self-reflection manual with implementation details (50%), Quizzes & exercises (30%)",
          "Certificate",
          "You will earn a certificate on completing all the modules and fulfilling the evaluation criteria of the online course on ‘Strategic Communication for Sustainable Impact. It will be sent to you on your registered e-mail ID within 20 working days of course completion.",
          "Eligibility for Certification",
          "90% attendance",
          "100 % assignment submission",
          "Passing mid-course and end of the course examination Certificates will be given at the discretion of CDMC-MICA",
        ],
      },
      {
        title: "School Journalism",
        id: `comm_${generateUniqueId()}`,
        description:
          "As Indian students are increasingly traveling and studying abroad, and the nature of jobs and businesses tends to be international, they need excellent communication skills.",
        showArrow: true,
        duration: 4,
        isYearly: false,
        courseFor: [
          "It is the first such course in India that has been designed to meet the communication and media skills requirements for high school students.",
          "As Indian students are increasingly traveling and studying abroad, and the nature of jobs and businesses tends to be international, they need excellent communication skills.",
          "Mastering a language or many does not equate to a professional level of communication skills.",
          "Better confidence, comprehension, speaking, writing, reading, and media consumption skills",
        ],
        academicSchedule: [
          "It will be 12 hours in duration and its date, fee structure can be tweaked to suit the school’s needs.",
          "It has been planned for students in Class - IX, X, XI and XII.",
          "It is recommended for students of all school boards who are taught in English – CBSE, ICSE, IGCSE, IB, Open and Home School students, and others.",
        ],
      },
      {
        title: "Campus Journalism",
        id: `comm_${generateUniqueId()}`,
        description:
          "Campus journalism is a  course for college students to understand the importance of oral and written communication skills, reading, and media consumption skills.  This course enables the students to learn the hands-on basics of writing-editing-publishing. This is while they get introduced to digital self-defense by identifying fake news and learning to fact-check.",
        showArrow: true,
        duration: 4,
        isYearly: false,
        courseFor: [
          "In the last decade, society's consumption of news and material has shifted tremendously. Never before in human history have we been more connected, demonstrating the benefits of a new and exciting digital age.",
          "The Internet allows us to connect with everyone around the globe in seconds with smart phones  and laptops with high-definition video capabilities. Journalists no longer need to wait until the newspaper prints to garner attention for their reporting; they may write, record, and transmit content quickly.",
          "However, this skill can also be a curse. Misinformation abounds, and genuine, fair media has never been more critical.  The future of journalism in the digital age will necessitate news organizations and journalists adapting and fundamentally changing the status quo in terms of how they report and distribute news.",
          "Journalism is often referred to as vox populi since it allows many people's opinions to be heard. It can be an excellent technique to bridge the gap between authorities and the general public while also providing constructive criticism for the improvement of society. Journalism represents free expression. It asserts the right of the people to have an opinion and a platform to express that opinion.",
          "Campus journalism is a  course for college students to understand the importance of oral and written communication skills, reading, and media consumption skills.  This course enables the students to learn the hands-on basics of writing-editing-publishing. This is while they get introduced to digital self-defense by identifying fake news and learning to fact-check.",
          "The initiative provides an avenue for students looking to broaden their perspectives beyond school.",
          "Campus journalism, like journalism in general, plays a role in information distribution, enlightenment, and education for the general public.",
        ],
        academicSchedule: [
          "Through lectures, interactions, and hands-on exercises. Sometimes accompanied by audio-visual material.",
          "Classes will be conducted on the school campus, by Bhavan’s instructors and expert invitees.",
          "Up to six hours of teaching or four lectures might be conducted online but presented through live-streaming in the classrooms.",
          "Such classes will be beamed live in the classroom, under the supervision of Bhavan’s instructors.",
        ],
      },
    ],
  },
  {
    courseType: "MANAGEMENT",
    courseItems: [
      {
        title: "Industrial Relations & Personnel Management",
        id: `mgm_${generateUniqueId()}`,
        description:
          "Learn human resource development skills so you can be at the top level.",
        duration: 1,
        isYearly: true,
        showArrow: true,
        courseFor: [
          "Those who want to learn Human Resource Development skills without pursuing lengthy and expensive BBA/MBA course.",
          "Graduates",
          "Officers/Executives in government departments/ Public Sector Enterprises.",
          "Retired officers from armed forces who want to join the corporate sector.",
          "Women executives who aspire to re-join the corporate sector after a family break.",
          "Others who are desirous of learning how people work in organizations",
        ],
        academicSchedule: [],
      },
      {
        title: "Materials Management",
        id: `mgm_${generateUniqueId()}`,
        description:
          "Help participants plan, organise, and manage a complete material management system such as Materials Management, Vendor Development, Stores and Inventory Management.",
        duration: 1,
        isYearly: true,
        showArrow: true,
        courseFor: [
          "Those who want to learn Materials Management skills without pursuing lengthy and expensive BBA/MBA courses.",
          "Graduates with minimum 2 years’ experience in Purchase, Stores, Supply Chain, Administration.",
          "Officers/Executives in government departments/ Public Sector Enterprises.",
          "Retired officers from armed forces who want to join the corporate sector.",
          "Women executives who aspire to re-join the corporate sector after a family break.",
          "Others who are desirous of learning about management.",
        ],
        academicSchedule: [],
      },
      {
        title: "International Trade (Import-Export)",
        id: `mgm_${generateUniqueId()}`,
        description:
          "To help industry, especially SMEs to establish and manage a successful export-import business anchored within international business rules regulated by customs, banks, foreign exchange, WTO, etc",
        duration: 1,
        isYearly: true,
        showArrow: true,
        courseFor: [
          "It is best suited for those who want to focus only on export-import without having to do an expensive BBA/MBA course.",
          "Industrialists and/or entrepreneurs who want to manage/establish international business.",
          "Executives with experience in Export-Import / International Marketing / Foreign Exchange / Shipping and Logistics related work in any sector.",
          "Executives from C&F Agents, CHAs, ICDs, Shipping Lines, ports, airports, railways, container lines, etc. who deal with the execution / documentation of export-import, foreign exchange, etc.",
          "Officers/Executives from Min. of Commerce, DGFT, EXIM Bank, Department of Customs, banks, etc., who deal with economic analysis, export-import, foreign exchange, etc.",
          "Women executives who aspire to re-join the corporate sector after a family break.",
          "Others who are desirous of learning how international trade is conducted.",
        ],
        academicSchedule: [],
      },
      {
        title: "Hospital Management",
        id: `mgm_${generateUniqueId()}`,
        description: "Description for course 1",
        duration: 1,
        isYearly: true,
        showArrow: true,
        courseFor: [],
        academicSchedule: [],
      },
      {
        title: "Marketing & Sales Management",
        id: `mgm_${generateUniqueId()}`,
        description: "Description for course 1",
        duration: 1,
        isYearly: true,
        showArrow: true,
        courseFor: [],
        academicSchedule: [],
      },
      {
        title: "Business Management",
        id: `mgm_${generateUniqueId()}`,
        description: "Description for course 1",
        duration: 1,
        isYearly: true,
        showArrow: true,
        courseFor: [],
        academicSchedule: [],
      },
      {
        title: "Financial Management",
        id: `mgm_${generateUniqueId()}`,
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
        id: `chi_${generateUniqueId()}`,
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
