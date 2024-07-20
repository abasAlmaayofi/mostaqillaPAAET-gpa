import { Button } from "@nextui-org/button";

const CourseList = ({ courses, onDeleteCourse, calculateGPA }) => (
  <div className="mt-4">
    <div>
      <h2 className="text-2xl font-bold font-trika text-right text-[15px]">
        قائمة المقررات
      </h2>
      <ul
        style={{ borderBottom: "1px solid #ced4da", paddingBottom: "10px" }}
        className="flex flex-row-reverse gap-2 justify-between mt-2 font-trika text-[13px] text-gray-700"
      >
        <li>المقرر</li>
        <li>الوحدات</li>
        <li>الدرجة</li>
        <li>فعل</li>
      </ul>
      {courses.map((course, index) => (
        <ul
          key={index}
          className="flex flex-row-reverse gap-2 justify-between mt-2 font-mono text-[13px] text-gray-500"
        >
          <li>{course.courseName}</li>
          <li>{course.creditHours}</li>
          <li>{course.grade}</li>
          <li>
            <Button
              color="danger"
              onClick={() => onDeleteCourse(index)}
              className="font-trika text-[13px]"
              size="sm"
            >
              حذف
            </Button>
          </li>
        </ul>
      ))}
    </div>
    <div className="text-right mt-4 font-trika text-[14px]">
      <h3> {Number(calculateGPA()).toFixed(2)} :المعدل</h3>
    </div>
  </div>
);

export default CourseList;
