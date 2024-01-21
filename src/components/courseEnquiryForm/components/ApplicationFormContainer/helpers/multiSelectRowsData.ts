import { generateUniqueId } from "@/components/coursesSection/helpers/courseConfig";

export const rowsData = [
  {
    value: "management",
    id: `mgm_${generateUniqueId()}`,
    label: "Management Courses",
    mgmtCoursesOptions: [
      {
        value: "industrialRelations",
        label: "Industrial Relations & Personnel Management",
      },
      {
        value: "materialsManagement",
        label: "Material Management",
      },
      {
        value: "internationalTrade",
        label: "International Trade (Import - Export)",
      },
      {
        value: "hospitalManagement",
        label: "Hospital Management",
      },
      {
        value: "marketingAndSalesManagement",
        label: "Mareketing And Sales Management",
      },
      {
        value: "businessManagement",
        label: "Business Management",
      },
      {
        value: "financialManagement",
        label: "Financial Management",
      },
      {
        value: "geriatricCare",
        label: "Geriatric Care cum Health Aide Course",
      },
    ],
  },
  {
    value: "communication",
    label: "Communication Courses",
    id: `comm_${generateUniqueId()}`,
    commCoursesOptions: [
      {
        value: "journalism",
        label: "Journalism",
      },
      {
        value: "digitalMedia",
        label: "Digital Media",
      },
      {
        value: "publicRelations",
        label: "Public Relations",
      },
      {
        value: "strategicCommunication",
        label: "Strategic Communication for Sustainable Impact",
      },
      {
        value: "schoolJournalism",
        label: "School Journalism",
      },
      {
        value: "campusJournalism",
        label: "Campus Journalism",
      },
    ],
  },
  {
    value: "preferredLocation",
    label: "Preferred location for",
    id: `loc_${generateUniqueId()}`,
    prefLocOptions: [
      {
        value: "ahmedabad",
        label: "Ahmedabad",
      },
      {
        value: "bharuch",
        label: "Bharuch",
      },
      {
        value: "kottayam",
        label: "Kottayam",
      },
      {
        value: "thiruvananthapuram",
        label: "Thiruvananthapuram",
      },
      {
        value: "kolkata",
        label: "Kolkata",
      },
      {
        value: "faridabad",
        label: "Faridabad",
      },
      {
        value: "solan",
        label: "Solan",
      },
      {
        value: "thrissur",
        label: "Thrissur",
      },
    ],
  },
];
