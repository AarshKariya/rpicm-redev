import { generateUniqueId } from "@/components/coursesSection/helpers/courseConfig";

export const rowsData = [
  {
    title: "Enquiring For",
    id: "enquiringFor",
    options: [
      { value: "management", label: "Management" },
      { value: "communication", label: "Communication" },
    ],
    subOptions: [
      {
        title: "Management Courses",
        id: `mgm_${generateUniqueId()}`,
        mgmtCourses: [
          {
            value: "industrialRelations",
            courseName: "Industrial Relations & Personnel Management",
          },
          {
            value: "materialsManagement",
            courseName: "Material Management",
          },
          {
            value: "internationalTrade",
            courseName: "International Trade (Import - Export)",
          },
          {
            value: "hospitalManagement",
            courseName: "Hospital Management",
          },
          {
            value: "marketingAndSalesManagement",
            courseName: "Mareketing And Sales Management",
          },
          {
            value: "businessManagement",
            courseName: "Business Management",
          },
          {
            value: "financialManagement",
            courseName: "Financial Management",
          },
          {
            value: "geriatricCare",
            courseName: "Geriatric Care cum Health Aide Course",
          },
        ],
      },
      {
        title: "Communication Courses",
        id: `comm_${generateUniqueId()}`,
        commCourses: [
          {
            value: "journalism",
            courseName: "Journalism",
          },
          {
            value: "digitalMedia",
            courseName: "Digital Media",
          },
          {
            value: "publicRelations",
            courseName: "Public Relations",
          },
          {
            value: "strategicCommunication",
            courseName: "Strategic Communication for Sustainable Impact",
          },
          {
            value: "schoolJournalism",
            courseName: "School Journalism",
          },
          {
            value: "campusJournalism",
            courseName: "Campus Journalism",
          },
        ],
      },
    ],
  },
];
