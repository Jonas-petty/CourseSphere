import styled from "styled-components";
import Header from "../organisms/Header";

const Container = styled.div`
    min-height: 100vh;
    background: var(--Light_Gradient);
    padding: 1rem;
    padding-bottom: 0;

`


function HomeTemplate({}) {
    return (
        <Container>
            <Header className="header">
            </Header>
            <main className="main">
                <h2>Meus Cursos</h2>

            </main>
            <footer className="footer">
                <p>Desenvolvido por Jonas Felix de Souza</p>
            </footer>
        </Container>
    )
}

export default HomeTemplate;
