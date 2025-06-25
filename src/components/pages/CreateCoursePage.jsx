import { useState } from "react";
import CreateCourseTemplate from "../templates/CreateCourseTemplate";

function CreateCoursePage() {
    const [createdCourse, setCreatedCourse] = useState({
        name: "",
        description: "",
        start_date: "",
        end_date: "",
        creator_id: "",
        instructors: []
    });

    return (
        <CreateCourseTemplate
            createdCourse={createdCourse}
            setCreatedCourse={setCreatedCourse}
        />
    );
}

export default CreateCoursePage;
