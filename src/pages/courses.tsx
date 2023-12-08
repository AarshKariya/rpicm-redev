import CourseCardTile from "@/components/courseCardTile/CourseCardTile";

const coursesData = [
  {
    courseType: "COMMUNICATION",
    courseItems: [
      {
        title: "Course 1",
        description: "Description for course 1",
      },
      {
        title: "Course 1",
        description: "Description for course 1",
      },
      {
        title: "Course 1",
        description: "Description for course 1",
      },
      {
        title: "Course 1",
        description: "Description for course 1",
      },
      {
        title: "Course 1",
        description: "Description for course 1",
      },
    ],
  },
  {
    courseType: "COMMUNICATION",
    courseItems: [
      {
        title: "Course 1",
        description: "Description for course 1",
      },
      {
        title: "Course 1",
        description: "Description for course 1",
      },
      {
        title: "Course 1",
        description: "Description for course 1",
      },
      {
        title: "Course 1",
        description: "Description for course 1",
      },
      {
        title: "Course 1",
        description: "Description for course 1",
      },
    ],
  },
  {
    courseType: "COMMUNICATION",
    courseItems: [
      {
        title: "Course 1",
        description: "Description for course 1",
      },
      {
        title: "Course 1",
        description: "Description for course 1",
      },
      {
        title: "Course 1",
        description: "Description for course 1",
      },
      {
        title: "Course 1",
        description: "Description for course 1",
      },
      {
        title: "Course 1",
        description: "Description for course 1",
      },
    ],
  },
];

const CoursesPage = () => {
  return (
    <div>
      <h1>My Courses</h1>
      <CourseCardTile courseConfigs={coursesData} />
    </div>
  );
};

export default CoursesPage;
