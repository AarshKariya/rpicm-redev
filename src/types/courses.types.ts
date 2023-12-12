export interface Course {
    title: string;
    description: string;
    showArrow?: boolean | null;
    id: string;
    duration?: number;
    courseFor?: string [];
    academicSchedule?: string [];
    previouslyRecruited?: string[];
  }
  
 export interface CourseConfig {
    courseType: string;
    courseItems: Course[];
  }
  
