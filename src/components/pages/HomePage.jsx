import { useEffect, useState } from "react";
import HomeTemplate from "../templates/HomeTemplate";

function HomePage() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/courses", { method: "GET" })
            .then((response) => response.json())
            .then((data) => {
                setCourses(data)
            });
    }, []);

    return <HomeTemplate courses={courses} />;
}

export default HomePage;
