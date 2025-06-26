import { useState } from "react";
import LessonFormLayout from "../templates/LessonFormLayout";

function CreateLessonPage({}) {
    const [lesson, setLesson] = useState({
        title: "",
        status: "",
        publish_date: "",
        video_url: "",
        course_id: "",
        creator_id: "",
    });

    const options = [
        { value: "draft", label: "draft" },
        { value: "published", label: "published" },
        { value: "archived", label: "archived" },
    ];

    return (
        <LessonFormLayout
            isNewLesson={true}
            lesson={lesson}
            setLesson={setLesson}
            options={options}
        />
    );
}

export default CreateLessonPage;
{
}
