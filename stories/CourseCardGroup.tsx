import React from "react"
import { CourseCard, CourseCardProps } from "./CourseCard"

export type CourseCardGroupProps = {
  courses: CourseCardProps[]
}

export const CourseCardGroup: React.FC<CourseCardGroupProps> = ({
  courses
}: CourseCardGroupProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {courses.map((course, index) => (
        <CourseCard key={`course-card-${index}`} {...course} />
      ))}
    </div>
  );
}