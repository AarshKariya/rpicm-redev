export const generateUniqueId = () => {
  return Math.random().toString(36).substr(2, 9); // Generate a random unique ID
};

export const coursesData = [
  {
    courseType: "COMMUNICATION",
    courseItems: [
      {
        title: "Journalism",
        id: `comm_${generateUniqueId()}`,
        description:
          "This course is designed to equip aspiring journalists with the skills and knowledge necessary to thrive in the dynamic and evolving field of multimedia journalism. With a focus on the digital landscape, the course will explore the intersection of traditional journalism principles with new media technologies, preparing students for a successful career in today's fast-paced media environment.",
        briefBullet: [
          "Focus on skills and job-readiness",
          "Balances digital and traditional journalism",
        ],
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
          "Total Sessions - 150 hours",
          "Evening and weekend classes",
          "Teaching calendar - August- March",
          "Internal evaluation is based on attendance, class work, assignments, exams, project work, vivas, and presentations",
          "Internal markings (based on attendance, class work, assignments, exams, project work, vivas, and presentations)",
          "Attendance- minimum 75% attendance (per subject) is compulsory",
          "Internships",
        ],
        seeYourself: [
          "Newspapers, news channels, news portals, and content writing",
        ],
      },
      {
        title: "Digital Media",
        id: `comm_${generateUniqueId()}`,
        description:
          "This course is designed to provide students with a comprehensive understanding of digital media, covering strategies for content creation, distribution, and engagement. Through a combination of theoretical concepts and practical skills development, students will learn to navigate the rapidly evolving digital landscape and create impactful content across various digital platforms.",
        briefBullet: [
          "Focus on content generation and marketing",
          "For News and non-news sectors.",
        ],
        showArrow: true,
        duration: 1,
        isYearly: true,
        courseFor: [
          "The course is designed for individuals who have a keen interest in journalism, media, or communication and wish to acquire specialised skills for the digital age.",
          "This includes students, working professionals, and freelance journalists.",
        ],
        seeYourself: [
          "Entrepreneur - Generate content and market it for your own start-up",
          "Social Media Content Writer, Digital Marketing Strategist and Consultant",
          "Freelance content creation",
          "curation and marketing consultant",
        ],
        academicSchedule: [
          "Total Sessions - 150 hours",
          "Evening and weekend classes",
          "Teaching calendar - August- March",
          "Internal evaluation is based on attendance, class work, assignments, exams, project work, vivas, and presentations",
          "Internal markings (based on attendance, class work, assignments, exams, project work, vivas, and presentations)",
          "Attendance- minimum 75% attendance (per subject) is compulsory",
          "Internships",
        ],
      },
      {
        title: "Public Relations",
        id: `comm_${generateUniqueId()}`,
        description:
          "This course is designed to provide students with a comprehensive understanding of the principles and practices of public relations (PR). Students will learn how to develop and implement strategic PR campaigns, manage organisational communication, and build and maintain positive relationships with key stakeholders.",
        briefBullet: [
          "Understanding of the principles and practices of PR",
          "Learn to develop and implement strategic PR campaigns",
          "Manage organisational communication",
          "Build and maintain positive relationships with key stakeholders",
        ],
        showArrow: true,
        duration: 1,
        isYearly: true,
        courseFor: [
          "Fresh graduates with a flair of writing, reading, public speaking, acting, etc",
          "Those who want to learn skills and pursue a career in strategic communication planning, media relations, events planning and execution without pursuing lengthy and expensive Masters courses.",
          "Communication professionals and officers/Executives in government departments/ Public Sector Enterprises.",
          "Retired officers from armed forces who want to join the corporate sector.",
        ],
        seeYourself: [
          "Media Relations Officer",
          "Event Planner",
          "Corporate Communication Planner",
          "Public Relations Officer",
        ],
        academicSchedule: [
          "Total Sessions - 150 hours",
          "Evening and weekend classes",
          "Teaching calendar - August- March",
          "Internal evaluation is based on attendance, class work, assignments, exams, project work, vivas, and presentations",
          "Internal markings (based on attendance, class work, assignments, exams, project work, vivas, and presentations)",
          "Attendance- minimum 75% attendance (per subject) is compulsory",
          "Internships",
        ],
      },
      {
        title: "Strategic Communication for Sustainable Impact",
        id: `comm_${generateUniqueId()}`,
        description:
          "This course aims to provide students with the knowledge and skills required to develop and implement strategic communication campaigns that contribute to sustainable outcomes.",
        briefBullet: [
          "Provides knowledge and skills to develop and implement strategic communication campaigns that contribute to sustainable outcomes",
        ],
        showArrow: true,
        duration: 4,
        isYearly: false,
        courseFor: [
          "Corporate Communication teams",
          "Non Profit and Social Business Communication team ",
          "Fundraising team ",
          "New Non-profit leaders and Social Business Leaders",
          "CSR Foundations Communications Team ",
          "Individuals interested in India's Sustainable Impact",
          "Early Career University Faculty",
        ],
        seeYourself: ["Various CSR projects", "Research", "Brand Building"],
        academicSchedule: [
          "Course Duration: 22 hours",
          "Case Method and situation analysis",
          "Role plays",
          "In class assignments",
          "Lecture; Group discussions",
          "Audio-video-analysis and Projects",
          "Evaluation:",
          "Case Analysis (20%); Self-reflection manual with implementation details (50%), Quizzes & exercises (30%)",
          "90% attendance",
          "100 % assignment submission",
          "Passing mid-course and end of the course examination Certificates will be given at the discretion of CDMC-MICA",
        ],
      },
      {
        title: "School Journalism",
        id: `comm_${generateUniqueId()}`,
        description:
          "This course is designed to introduce students to the fundamentals of journalism within a school context, empowering them to become effective storytellers and media creators. Through a combination of theoretical knowledge and hands-on experience, students will learn the essentials of news gathering, writing, and multimedia production.",
        briefBullet: [
          "Through a combination of theoretical knowledge and hands-on experience, students will learn the essentials of news gathering, writing, and multimedia production.",
        ],
        showArrow: true,
        duration: 3,
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
        briefBullet: [
          "This course enables the students to learn the hands-on basics of writing-editing-publishing.",
        ],
        showArrow: true,
        customPoints: [
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
        title: "Industrial Relations & Personnel Management (IRPM-HR)",
        id: `mgm_${generateUniqueId()}`,
        description:
          "This course aims to provide students with a comprehensive understanding of industrial relations and personnel management, focusing on the relationships between employers, employees, and the broader organisational context.",
        duration: 1,
        isYearly: true,
        showArrow: true,
        courseFor: [
          "Fresh graduates seeking a career in the area of Human Resources.",
          "Professionals interested in exploring opportunities in directorial and senior-level management.",
          "Officers/Executives in government departments/ Public Sector Enterprises.",
          "Retired officers from armed forces who want to join the corporate sector.",
          "Women executives who aspire to re-join the corporate sector after a family break.",
          "Others who are desirous of learning how people work in organizations",
        ],
        briefBullet: [
          "Provides an understanding of Industrial Relations, Personnel Management",
          "Focus on organisational harmony, conflict avoidance and management",
        ],
        seeYourself: [
          "Administrative Heads",
          "HR Consultants",
          "Recruitment Coordinators",
        ],
        academicSchedule: [
          "Total Sessions - 150 hours",
          "Evening and weekend classes",
          "Teaching calendar - August- March",
          "Internal evaluation is based on attendance, class work, assignments, exams, project work, vivas, and presentations",
          "Internal markings (based on attendance, class work, assignments, exams, project work, vivas, and presentations)",
          "Attendance- minimum 75% attendance (per subject) is compulsory",
          "Internships",
        ],
      },
      {
        title: "Materials Management",
        id: `mgm_${generateUniqueId()}`,
        description:
          "This course is designed to provide students with a comprehensive understanding of materials management. The focus will be on strategic planning and efficient control of the flow of materials from procurement to production and distribution. Students will learn the principles, techniques, and tools necessary to optimize the entire materials management process.",
        duration: 1,
        isYearly: true,
        showArrow: true,
        briefBullet: [
          "Focus on strategic planning and efficient control of end-to-end flow of materials",
          "Learn the principles, techniques, and tools to optimize entire materials management process",
        ],
        courseFor: [
          "Those who want to learn Materials Management skills without pursuing lengthy and expensive BBA/MBA courses.",
          "Graduates with minimum 2 years’ experience in Purchase, Stores, Supply Chain, Administration.",
          "Officers/Executives in government departments/ Public Sector Enterprises.",
          "Retired officers from armed forces who want to join the corporate sector.",
          "Women executives who aspire to re-join the corporate sector after a family break.",
          "Others who are desirous of learning about management.",
        ],
        seeYourself: [
          "Retail Chains",
          "Malls, supermarkets, Industries, and hospitals",
        ],
        academicSchedule: [
          "Total Sessions - 150 hours",
          "Evening and weekend classes",
          "Teaching calendar - August- March",
          "Internal evaluation is based on attendance, class work, assignments, exams, project work, vivas, and presentations",
          "Internal markings (based on attendance, class work, assignments, exams, project work, vivas, and presentations)",
          "Attendance- minimum 75% attendance (per subject) is compulsory",
          "Internships",
        ],
      },
      {
        title: "International Trade (Import-Export)",
        id: `mgm_${generateUniqueId()}`,
        description:
          "This course is designed to provide students with a comprehensive understanding of the principles, practices, and challenges of international trade and import-export management. Students will gain insights into the complexities of global markets, trade regulations, and the strategic management of cross-border transactions.",
        briefBullet: [
          "Focus on documentation for import and export",
          "Get insights into the complexities of global markets, trade regulations, and the strategic management of cross-border transactions",
          "Covers financial management for export enterprises",
        ],
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
        seeYourself: [
          "Export Manage",
          "Foreign Trade Analyst",
          "Foreign Trade and Purchasing",
          "Shipping Companies",
          "MNCs Departments",
        ],
        academicSchedule: [
          "Total Sessions - 150 hours",
          "Evening and weekend classes",
          "Teaching calendar - August- March",
          "Internal evaluation is based on attendance, class work, assignments, exams, project work, vivas, and presentations",
          "Internal markings (based on attendance, class work, assignments, exams, project work, vivas, and presentations)",
          "Attendance- minimum 75% attendance (per subject) is compulsory",
          "Internships",
        ],
      },
      {
        title: "Hospital Management",
        id: `mgm_${generateUniqueId()}`,
        description:
          "This course is designed to equip students with the knowledge and skills necessary to effectively manage and lead healthcare organizations, with a focus on hospital management. Students will explore the unique challenges and opportunities in the healthcare industry, understanding the principles of healthcare administration, strategic planning, and operational management.",
        briefBullet: [
          "Course tailor-made to the requirements of hospitals and healthcare sectors",
          "Understand complexities of insurance, regulations governing hospitals healthcare administration, strategic planning, and operational management",
        ],
        duration: 1,
        isYearly: true,
        showArrow: true,
        courseFor: [
          "Students, who want to learn about the healthcare world.",
          "Working professionals looking to switch to managerial roles or venture into entrepreneurship.",
        ],
        seeYourself: [
          "Hospital Administrator",
          "Hospital Financial Manager",
          "Health Care HR Manager",
          "Clinical Research Manager",
        ],
        academicSchedule: [
          "Total Sessions - 150 hours",
          "Evening and weekend classes",
          "Teaching calendar - August- March",
          "Internal evaluation is based on attendance, class work, assignments, exams, project work, vivas, and presentations",
          "Internal markings (based on attendance, class work, assignments, exams, project work, vivas, and presentations)",
          "Attendance- minimum 75% attendance (per subject) is compulsory",
          "Internships",
        ],
      },
      {
        title: "Marketing & Sales Management",
        id: `mgm_${generateUniqueId()}`,
        description:
          "This course is designed to provide students with a comprehensive understanding of marketing and sales management, emphasizing the integration of these functions for effective business growth. Students will explore key marketing strategies, sales techniques, and the coordination needed to drive successful customer acquisition and retention.",
        briefBullet: [
          "This course is designed to provide students with a comprehensive understanding of marketing and sales management, emphasizing the integration of these functions for effective business growth.",
        ],
        duration: 1,
        isYearly: true,
        showArrow: true,
        courseFor: [
          "Fresh graduates.",
          "Professionals looking to enhance their skills in Marketing and Sales Management.",
          "Aspirants aspiring to explore a plethora of career opportunities in both private and public companies as Marketing Managers, Marketing Executive, in Retail Sectors, Financial Services, e-Commerce Sector and much more.",
        ],
        seeYourself: [
          "Sales Manager",
          "Marketing Communication Manager",
          "Marketing Research Analyst",
          "Marketing Manager",
          "Brand Manager",
        ],
        academicSchedule: [
          "Total Sessions - 150 hours",
          "Evening and weekend classes",
          "Teaching calendar - August- March",
          "Internal evaluation is based on attendance, class work, assignments, exams, project work, vivas, and presentations",
          "Internal markings (based on attendance, class work, assignments, exams, project work, vivas, and presentations)",
          "Attendance- minimum 75% attendance (per subject) is compulsory",
          "Internships",
        ],
      },
      {
        title: "Business Management",
        id: `mgm_${generateUniqueId()}`,
        description:
          "This course aims to provide students with a comprehensive understanding of the principles and practices of business management. Covering key areas such as organizational structure, strategic planning, leadership, and operational management, students will gain the skills needed to navigate the complexities of the business world.",
        briefBullet: [
          "This course aims to provide students with a comprehensive understanding of the principles and practices of business management.",
        ],
        duration: 1,
        isYearly: true,
        showArrow: true,
        courseFor: [
          "Fresh Graduates.",
          "For individuals who are interested in starting or managing small and medium-sized businesses.",
          "Suitable for entrepreneurs, business owners, and professionals who want to acquire the knowledge and skills required to manage and grow small and medium-sized enterprises.",
        ],
        seeYourself: [
          "Client Services Manager",
          "Business Consultant",
          "Investment Manager",
          "Administrative Assistant",
          "Business Development Manager",
        ],
        academicSchedule: [
          "Total Sessions - 150 hours",
          "Evening and weekend classes",
          "Teaching calendar - August- March",
          "Internal evaluation is based on attendance, class work, assignments, exams, project work, vivas, and presentations",
          "Internal markings (based on attendance, class work, assignments, exams, project work, vivas, and presentations)",
          "Attendance- minimum 75% attendance (per subject) is compulsory",
          "Internships",
        ],
      },
      {
        title: "Financial Management",
        id: `mgm_${generateUniqueId()}`,
        description:
          "This course aims to provide students with a comprehensive understanding of the principles and practices of business management. Covering key areas such as organizational structure, strategic planning, leadership, and operational management, students will gain the skills needed to navigate the complexities of the business world.",
        briefBullet: [
          "This course aims to provide students with a comprehensive understanding of the principles and practices of business management.",
        ],
        duration: 1,
        isYearly: true,
        showArrow: true,
        courseFor: [
          "Ideal for graduates, working professionals, chartered accountants and similar other professionals working in related areas.",
        ],
        seeYourself: [
          "Finance Analysts",
          "Credit Managers",
          "Banks, Investments, and Risk Management, Accounts",
        ],
        academicSchedule: [
          "Total Sessions - 150 hours",
          "Evening and weekend classes",
          "Teaching calendar - August- March",
          "Internal evaluation is based on attendance, class work, assignments, exams, project work, vivas, and presentations",
          "Internal markings (based on attendance, class work, assignments, exams, project work, vivas, and presentations)",
          "Attendance- minimum 75% attendance (per subject) is compulsory",
          "Internships",
        ],
      },
      {
        title: "Geriatric Care cum Health Aide Course",
        id: `mgm_${generateUniqueId()}`,
        description:
          "This course is designed to prepare individuals for a career in geriatric care and health aide services, with a focus on understanding the unique needs and challenges faced by the elderly. Students will learn essential caregiving skills, gain knowledge about common health issues in older adults, and develop a compassionate and patient-centered approach to care.",
        briefBullet: [
          "This course is designed to prepare individuals for a career in geriatric care and health aide services, with a focus on understanding the unique needs and challenges faced by the elderly.",
        ],
        duration: 1,
        isYearly: true,
        showArrow: true,
        courseFor: [
          "An individual with a 10th pass and above educational qualification who is interested in working in this field.",
        ],
        seeYourself: [
          "Geriatric Care Assistant",
          "Allied Health Assistant",
          "Aged Care Worker and further progress as Geriatric Care Supervisor",
          "Activity Group Coordinator",
          "Disability Services Coordinator",
        ],
        academicSchedule: [
          "Total Sessions - 150 hours",
          "Evening and weekend classes",
          "Teaching calendar - August- March",
          "Internal evaluation is based on attendance, class work, assignments, exams, project work, vivas, and presentations",
          "Internal markings (based on attendance, class work, assignments, exams, project work, vivas, and presentations)",
          "Attendance- minimum 75% attendance (per subject) is compulsory",
          "Internships",
        ],
      },
    ],
  },
  {
    courseType: "CULTURAL HERITAGE OF INDIA",
    courseItems: [
      {
        title: "Cultural Heritage Of India",
        id: `chi_${generateUniqueId()}`,
        description:
          "Dr. K.M. Munshi, founder of Bharatiya Vidya Bhavan, envisaged that the content of culture is essential to creating good managers who could effectively steer the industries in the future. So, apart from the courses in Management and Communication, taught in our colleges, a subject on “Cultural Heritage of India” was added to the syllabus.",
        briefBullet: [
          "Dr. K.M. Munshi, founder of Bharatiya Vidya Bhavan, envisaged that the content of culture is essential to creating good managers who could effectively steer the industries in the future.",
        ],
        duration: 1,
        isYearly: true,
        showArrow: true,
        customPoints: [
          "The Concept of Indian Heritage: The Historical Framework",
          "Aspects of our Heritage : Language and Literature Philosophy",
          "The Bhakti Movement",
          "The Indian Renaissance",
          "Profiles in Greatness: The Philosophers, Saints and Singers, Leaders of the Indian Renaissance National Leaders, Scientists",
          "Science and Religion: The Indian Viewpoint",
          "What Foreign Scholars Have Said of India",
        ],
      },
    ],
  },
];

export const FirstTwoCourseTiles = ["COMMUNICATION", "MANAGEMENT"];
