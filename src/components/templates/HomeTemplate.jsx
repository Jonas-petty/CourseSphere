import styled from "styled-components";
import Header from "../organisms/Header";
import CourseCardList from "../organisms/CourseCardList";

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
    max-width: 1444px;
    /* border: 1px solid red; */
`;

function HomeTemplate({}) {
    return (
        <Container>
            <ContentContainer>
                <Header className="header" />
                <main className="main">
                    <CourseCardList />
                </main>
                <footer className="footer">
                    <p>Desenvolvido por Jonas Felix de Souza</p>
                </footer>
            </ContentContainer>
        </Container>
    );
}

export default HomeTemplate;
