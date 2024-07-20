import React from "react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import CourseForm from "./courseForm";
import CourseList from "./courseList";
import { useState } from "react";

function GPACalculator() {
  const [courses, setCourses] = useState([]);
  const [prevGrade, setPrevGrade] = useState(0);
  const [prevCredits, setPrevCredits] = useState(0);

  const handleAddCourse = (newCourse) => {
    setCourses([...courses, newCourse]);
  };

  const handleDeleteCourse = (index) => {
    const updatedCourses = courses.filter((course, i) => i !== index);
    setCourses(updatedCourses);
  };

  const gradePoints = {
    A: 4.0,
    "A-": 3.67,
    "B+": 3.33,
    B: 3.0,
    "B-": 2.67,
    "C+": 2.33,
    C: 2.0,
    "C-": 1.67,
    "D+": 1.33,
    D: 1.0,
    F: 0.0,
    FA: 0.0,
  };

  const calculateGPA = () => {
    let totalGradePoints = 0;
    let totalCreditHours = 0;

    courses.forEach((course) => {
      totalGradePoints += gradePoints[course.grade] * course.creditHours;
      totalCreditHours += course.creditHours;
    });
    let prevPoints = prevGrade * prevCredits;
    totalCreditHours = Number(prevCredits) + Number(totalCreditHours);
    totalGradePoints = Number(prevPoints) + Number(totalGradePoints);
    return totalCreditHours == prevCredits
      ? prevGrade
      : totalGradePoints / totalCreditHours;
  };
  return (
    <Card className="md:w-[700px] w-[380px] md:mb-4 mb-20" shadow="none">
      <CardHeader className="flex gap-3" dir="rtl">
        <div className="flex flex-col">
          <p className="text-xl font-bold">احسب معدلك</p>
          <p className="text-small text-default-500">
            هذه الخدمة مقدمة من قبل قائمة المستقلة في التطبيقي
          </p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="min-h-[200px]">
        <CourseForm
          onAddCourse={handleAddCourse}
          prevGrade={prevGrade}
          prevCredits={prevCredits}
          setPrevCredits={setPrevCredits}
          setPrevGrade={setPrevGrade}
        />
        <CourseList
          courses={courses}
          onDeleteCourse={handleDeleteCourse}
          calculateGPA={calculateGPA}
        />
      </CardBody>
    </Card>
  );
}

export default GPACalculator;
