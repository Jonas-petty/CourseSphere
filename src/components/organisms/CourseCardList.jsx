import styled from "styled-components";
import CourseCard from "../molecules/CourseCard";

const Container = styled.div`
    margin: 1rem 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    @media (max-width: 767.98px) {
        flex-direction: column;
    }
`;

function CourseCardList({ courses }) {
    return (
        <Container>
            {courses.map((course) => {
                return (
                    <CourseCard
                        key={course.id}
                        id={course.id}
                        name={course.name}
                        description={course.description}
                        start_date={course.start_date}
                        end_date={course.end_date}
                    />
                );
            })}
        </Container>
    );
}

export default CourseCardList;
