import { useParams } from "react-router";

function CourseDetailsPage() {

    const params = useParams()
    return (<h1>{`Course ${params.courseId} Detail `}</h1> );
}

export default CourseDetailsPage;