import { useEffect, useState } from "react";
import CreateCourseTemplate from "../templates/CreateCourseTemplate";

function CreateCoursePage() {
    const [options, setOptions] = useState([]);
    const [createdCourse, setCreatedCourse] = useState({
        name: "",
        description: "",
        start_date: "",
        end_date: "",
        creator_id: "",
        instructors: [],
    });

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=10&nat=br")
            .then((result) => result.json())
            .then((data) => {
                const results = data["results"];

                const names = results.map((result) => {
                    const fullName = `${result.name.first} ${result.name.last}`;
                    return { value: fullName, label: fullName };
                });

                setOptions(names);
            });
    }, []);

    return (
        <CreateCourseTemplate
            createdCourse={createdCourse}
            setCreatedCourse={setCreatedCourse}
            options={options}
        />
    );
}

export default CreateCoursePage;
