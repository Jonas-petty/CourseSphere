import { useParams } from "react-router";
import CourseDetailsTemplate from "../templates/CourseDetailsTemplate";
import { useEffect, useState } from "react";

function CourseDetailsPage() {
    const { courseId } = useParams();
    const [course, setCourse] = useState({});
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/courses/${courseId}`, { method: "GET" })
            .then((response) => response.json())
            .then((data) => {
                setCourse(data);

                fetch(`http://localhost:3000/lessons?course_id=${courseId}`)
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data)
                        setLessons(data);
                    });
            });
    }, []);


    return (
        <CourseDetailsTemplate
            name={course.name}
            description={course.description}
            start_date={course.start_date}
            end_date={course.end_date}
            instructors={course.instructors}
            lessons={lessons}
        />
    );
}

export default CourseDetailsPage;
