import styled from "styled-components";
import Header from "../organisms/Header";
import CourseCardList from "../organisms/CourseCardList";
import Text from "../atoms/Text";

const Container = styled.div`
    min-height: 100vh;
    background: var(--Light_Gradient);
    padding: 1rem;
    padding-bottom: 0;

    display: flex;
    justify-content: center;
`;

const ContentContainer = styled.div`
    min-height: 100%;
    width: 1444px;

    @media (max-width: 767.98px){
    	width: 500px;
    }

    border: 1px solid red;
`;

function HomeTemplate({ courses }) {
    return (
        <Container>
            <ContentContainer>
                <Header className="header" />
                <div>
                    <Text type="medium" text={courses.length > 0 ? "Seus Cursos" : "Voce nao tem Cursos"}/>
                    <div className="filters"></div>
                </div>
                <main className="main">
                    <CourseCardList courses={courses} />
                </main>
                <footer className="footer">
                    <p>Desenvolvido por Jonas Felix de Souza</p>
                </footer>
            </ContentContainer>
        </Container>
    );
}

export default HomeTemplate;
