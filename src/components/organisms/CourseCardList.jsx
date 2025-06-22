import styled from "styled-components";
import CourseCard from "../molecules/CourseCard";

const Container = styled.div`
    margin: 1rem 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;


    @media (max-width: 767.98px){
    	flex-direction: column;
    }
`;

function CourseCardList() {
    const coursesPlaceholder = [
        {
            id: 1,
            name: "ProjectName",
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            start_date: "",
            end_date: "",
            creator_id: "",
            instructors: [],
        },
        {
            id: 2,
            name: "ProjectName",
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            start_date: "",
            end_date: "",
            creator_id: "",
            instructors: [],
        },
        {
            id: 3,
            name: "ProjectName",
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            start_date: "",
            end_date: "",
            creator_id: "",
            instructors: [],
        },
        {
            id: 4,
            name: "ProjectName",
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            start_date: "",
            end_date: "",
            creator_id: "",
            instructors: [],
        },
        {
            id: 5,
            name: "ProjectName",
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            start_date: "",
            end_date: "",
            creator_id: "",
            instructors: [],
        },
        {
            id: 6,
            name: "ProjectName",
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            start_date: "",
            end_date: "",
            creator_id: "",
            instructors: [],
        },
        {
            id: 7,
            name: "ProjectName",
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            start_date: "",
            end_date: "",
            creator_id: "",
            instructors: [],
        },
        {
            id: 8,
            name: "ProjectName",
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            start_date: "",
            end_date: "",
            creator_id: "",
            instructors: [],
        },
    ];

    return (
        <Container>
            {coursesPlaceholder.map((course) => {
                return (
                    <CourseCard
                        key={course.id}
                        id={course.id}
                        name={course.name}
                        description={course.description}
                        end_date={course.end_date}
                    />
                );
            })}
        </Container>
    );
}

export default CourseCardList;
