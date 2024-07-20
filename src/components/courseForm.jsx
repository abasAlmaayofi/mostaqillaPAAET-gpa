import { Input, Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";
import { Button } from "@nextui-org/button";
const CourseForm = ({
  onAddCourse,
  prevGrade,
  prevCredits,
  setPrevGrade,
  setPrevCredits,
}) => {
  const [courseName, setCourseName] = useState("");
  const [creditHours, setCreditHours] = useState(0);
  const [grade, setGrade] = useState("A");

  //   const onGradeChange = (e) => {
  //     const grade = e.target.value;

  //     if (!grade || grade.match(/^\d{1,}(\.\d{0,4})?$/)) {
  //       setPrevGrade(0);
  //     }
  //     setPrevGrade(grade);
  //   };

  const handleAddCourse = () => {
    if (courseName && creditHours > 0 && grade) {
      const newCourse = {
        courseName,
        creditHours,
        grade,
      };

      onAddCourse(newCourse);
      setCourseName("");
      setCreditHours(0);
    } else {
      alert("Please enter valid course details.");
    }
  };

  return (
    <>
      <div className="font-mono flex gap-2 flex-row-reverse items-center  mt-4 mb-8 ">
        <div>
          <p className="text-right text-[15px] font-trika">الوحدات المجتازة</p>
          <Input
            dir="rtl"
            type="number"
            value={prevCredits}
            onChange={(e) => setPrevCredits(Number(e.target.value))}
          />
        </div>
        <div>
          <p className="text-right text-[15px] font-trika">المعدل الحالي</p>
          <Input
            type="number"
            dir="rtl"
            className="h-full w-28 md:68"
            value={prevGrade}
            step="any"
            onChange={(e) => setPrevGrade(e.target.value)}
          />
        </div>
      </div>
      <div className="font-mono flex gap-2 flex-row-reverse mb-6 items-center">
        <div>
          <p className="text-right text-[15px] font-trika">المقرر</p>
          <Input
            dir="rtl"
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
        </div>
        <div>
          <p className="text-right text-[15px] font-trika">الوحدات</p>
          <Input
            type="number"
            dir="rtl"
            className="h-full"
            value={creditHours}
            onChange={(e) => setCreditHours(Number(e.target.value))}
          />
        </div>
        <div>
          <p className="text-right text-[15px] font-trika">الدرجة</p>
          <Select
            className="h-full text-black w-[80px]"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            defaultSelectedKeys={[grade]}
          >
            <SelectItem key="A" value="A">
              A
            </SelectItem>
            <SelectItem key="A-" value="A-">
              A-
            </SelectItem>
            <SelectItem key="B+" value="B+">
              B+
            </SelectItem>
            <SelectItem key="B" value="B">
              B
            </SelectItem>
            <SelectItem key="B-" value="B-">
              B-
            </SelectItem>
            <SelectItem key="C+" value="C+">
              C+
            </SelectItem>
            <SelectItem key="C" value="C">
              C
            </SelectItem>
            <SelectItem key="C-" value="C-">
              C-
            </SelectItem>
            <SelectItem key="D+" value="D+">
              D+
            </SelectItem>
            <SelectItem key="D" value="D">
              D
            </SelectItem>
            <SelectItem key="F" value="F">
              F
            </SelectItem>
            <SelectItem key="FA" value="FA">
              FA
            </SelectItem>
          </Select>
        </div>
        <div>
          <p style={{ opacity: 0 }}>-</p>
          <Button
            size="md"
            color="primary"
            className="text-lg font-trika"
            onClick={handleAddCourse}
          >
            أضف
          </Button>
        </div>
      </div>
    </>
  );
};
export default CourseForm;
