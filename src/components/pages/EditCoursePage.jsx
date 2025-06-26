import { useEffect, useState } from "react";
import CourseFormLayout from "../templates/CourseFormLayout";
import { useParams } from "react-router";
import Label from "../atoms/Label";

function EditCoursePage({}) {
    const { courseId } = useParams();
    const [options, setoptions] = useState([]);
    const [course, setCourse] = useState({
        name: "",
        description: "",
        start_date: "",
        end_date: "",
        creator_id: "",
        instructors: [],
    });

    useEffect(() => {
        fetch(`http://localhost:3000/courses/${courseId}`)
            .then((response) => response.json())
            .then((data) => {
                setCourse(data);

                const opts = data.instructors.map((instructor) => ({
                    value: instructor,
                    label: instructor,
                }));
                setoptions(opts)
            });
    }, [courseId]);

    if (!course) return <div>Loading...</div>
    

    return (
        <CourseFormLayout
            isNewCourse={false}
            course={course}
            setCourse={setCourse}
            options={options}
        />
    );
}

export default EditCoursePage;
