import { useParams } from "react-router";
import CourseDetailsTemplate from "../templates/CourseDetailsTemplate";
import { useEffect, useState } from "react";

function CourseDetailsPage() {
    const { courseId } = useParams();
    const [course, setCourse] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3000/courses/${courseId}`, { method: "GET" })
            .then((response) => response.json())
            .then((data) => {
                setCourse(data);
            });
    }, []);

    return (
        <CourseDetailsTemplate
            name={course.name}
            description={course.description}
            start_date={course.start_date}
            end_date={course.end_date}
            instructors={course.instructors}
            lessons={[]}
        />
    );
}

export default CourseDetailsPage;
