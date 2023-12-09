export interface Course {
    title: string;
    description: string;
    showArrow?: boolean | null;
    id: string;
  }
  
 export interface CourseConfig {
    courseType: string;
    courseItems: Course[];
  }
  
