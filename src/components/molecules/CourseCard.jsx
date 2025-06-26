import styled from "styled-components";
import LinkTo from "../atoms/LinkTo";
import Text from "../atoms/Text";

const Container = styled.div`
    flex: 1;
    background-color: var(--Neutral_0);
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid var(--Neutral_200);

    @media (min-width: 768px) {
        flex: 1;
    }
`;

const CourseHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

function CourseCard({
    id,
    name = "CourseName",
    description = "Description",
    start_date,
    end_date,
}) {
    return (
        <Container>
            <CourseHeader>
                <Text type="medium" text={name} />
                <LinkTo text="Editar" to={`course/${id}/edit`}/>
            </CourseHeader>

            <p>{description}</p>
            <p>
                {start_date} - {end_date}
            </p>
            <LinkTo text="Details" to={`course/${id}`} />
        </Container>
    );
}

export default CourseCard;
