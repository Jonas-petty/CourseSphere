import styled from "styled-components";
import Text from "../atoms/Text";
import LinkTo from "../atoms/LinkTo";
import LessonCard from "../molecules/LessonCard";

const Container = styled.div`
    height: 100vh;
    background: var(--Light_Gradient);
    padding: 1rem;
    display: flex;
    justify-content: center;
    

    
`;

const ContentContainer = styled.div`
    text-align: center;
    background-color: var(--Neutral_0);
    padding: 1rem;
    border: 1px solid var(--Neutral_200);
    border-radius: 0.25rem;
    width: 1024px;
    overflow-y: auto;
    overflow-x: hidden;
`;

const Description = styled.div`
    background-color: var(--Neutral_200);
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 0.25rem;
`;

const Header = styled.div`
    margin: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 767.98px) {
        flex-direction: column;
    }
`;

const InstructorsList = styled.div`
    margin: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;
    flex-wrap: wrap;
`;

const Instructor = styled.span`
    color: var(--Neutral_0);
    background-color: var(--Neutral_600);
    padding: 0.5rem;
    border-radius: 1rem;
`;

const LessonsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

function CourseDetailsTemplate({
    name = "Course Title",
    description = "A brief description of the Course",
    start_date,
    end_date,
    instructors = [],
    lessons = [],
}) {
    return (
        <Container>
            <ContentContainer>
                <Text text={name} />
                <Description>
                    <p>{description}</p>
                </Description>
                <p>{`
                ${new Date(start_date).toLocaleDateString("pt-BR")}
                 - 
                ${new Date(end_date).toLocaleDateString("pt-BR")}
                `}</p>
                <Text type="medium" text="Instrutores" />
                <InstructorsList>
                    {instructors.map((instructor) => {
                        return (
                            <Instructor key={instructor}>
                                {instructor}
                            </Instructor>
                        );
                    })}
                </InstructorsList>
                <Header>
                    <LinkTo
                        type="button"
                        text="Criar Aula"
                        to="create/lesson"
                    />
                    <div>filter goes here</div>
                </Header>
                <LessonsList>
                    {lessons.length === 0 ? (
                        <div>Sem aulas nesse curso</div>
                    ) : (
                        lessons.map((lesson) => {
                            return (
                                <LessonCard
                                    key={lesson.id}
                                    title={lesson.title}
                                    publish_date={lesson.publish_date}
                                    status={lesson.status}
                                    video_url={lesson.video_url}
                                />
                            );
                        })
                    )}
                </LessonsList>
            </ContentContainer>
        </Container>
    );
}

export default CourseDetailsTemplate;
