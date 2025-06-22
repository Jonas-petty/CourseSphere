import styled from "styled-components";
import Button from "../atoms/Button";
import LinkTo from "../atoms/LinkTo";

const Container = styled.div`
    flex: 1;
    background-color: var(--Neutral_0);
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid var(--Neutral_200);

`

function CourseCard({
    id,
    name = "CourseName",
    description = "Description",
    end_date,
}) {
    return (
        <Container>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{end_date}</p>
            <LinkTo text="Details" to={`course/${id}`}/>
        </Container>
    );
}

export default CourseCard;
