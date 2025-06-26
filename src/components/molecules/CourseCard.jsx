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

const ContentContainer = styled.div`
    background-color: var(--Neutral_200);
    border-radius: 0.5rem;
    margin: 1rem 0;
    padding: 1rem;
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
                <LinkTo text="Editar" to={`course/${id}/edit`} />
            </CourseHeader>
            <ContentContainer>
                <p>{description}</p>
                <p>
                    {new Date(start_date).toLocaleDateString("pt-BR")} -{" "}
                    {new Date(end_date).toLocaleDateString("pt-BR")}
                </p>
            </ContentContainer>
            <LinkTo type="alt-button" text="Detalhes" to={`course/${id}`} />
        </Container>
    );
}

export default CourseCard;
