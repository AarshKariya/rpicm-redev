import { generateUniqueId } from "@/components/coursesSection/helpers/courseConfig";

export interface RecognitionAccordionData {
  title: string;
  description: string[];
  key: string;
}

export const RecognitionPageData = [
  {
    title: "Journalism",
    id: generateUniqueId(),
    recognitionItemDesc: [
      "Ministry of Education And Social Welfare, Government of India",
      "Ministry of Education and Culture, Government of India",
      "Department of Education, Government of Gujarat",
      "Kerala Government",
      "Education Department, Punjab",
      "University of Mysore",
      "Annamalai University",
      "Gujarat University",
    ],
  },
  {
    title: "Digital Media",
    id: generateUniqueId(),
    recognitionItemDesc: ["Gujarat University"],
  },
  {
    title: "Industrial Relations and Personnel Management (IRPM – HR)",
    id: generateUniqueId(),
    recognitionItemDesc: [
      "Ministry of Education And Social Welfare, Government of India",
      "Department of Education, Government of Gujarat",
      "Kerala Government",
      "Labour Department, Government of Haryana",
      "Department of Labour, Government of Punjab",
      "University of Mysore",
      "Annamalai University",
      "Gujarat University",
    ],
  },
  {
    title: "Materials Management",
    id: generateUniqueId(),
    recognitionItemDesc: ["Govt. of Gujarat, Ministry of Education"],
  },
  {
    title: "Marketing and Sales Management (Specialisation in Pharma)",
    id: generateUniqueId(),
    recognitionItemDesc: [
      "Govt. of India, Ministry of Education and Social Welfare",
      "Govt of Gujarat, Education Department ",
      "Govt. of Punjab, Education Department",
      "Govt. of Kerala",
    ],
  },
  {
    title: "Public Relations",
    id: generateUniqueId(),
    recognitionItemDesc: [
      "Ministry of Education And Social Welfare, Government of India",
      "Govt of Gujarat, Education Department ",
      "Govt. of Punjab, Education Department ",
      "Govt. of Kerala",
      "Guru Jambeshwar University, Hissar",
      "Annamalai University",
      "Industrial Tie-up with Public Relations Society of India",
    ],
  },
  {
    title: "International Trade (Import-Export)",
    id: generateUniqueId(),
    recognitionItemDesc: ["Gujarat University"],
  },
  {
    title: "Hospital Management",
    id: generateUniqueId(),
    recognitionItemDesc: ["Gujarat University"],
  },
  {
    title: "Business Management",
    id: generateUniqueId(),
    recognitionItemDesc: ["Govt of Gujarat, Education Department"],
  },
  {
    title:
      "Strategic Communication for Sustainable Impact in association with MICA-CDMC",
    id: generateUniqueId(),
    recognitionItemDesc: [],
  },
];
