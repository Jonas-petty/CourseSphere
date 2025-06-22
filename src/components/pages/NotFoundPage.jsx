import styled from "styled-components";
import Text from "../atoms/Text";
const Container = styled.div`
    height: 100vh;
    background: var(--Light_Gradient);
    display: flex;
    align-items: center;
    justify-content: center;
`

function NotFoundPage() {
    return (
        <Container>
            <Text text="404 Pagina nao foi encontrada!"/>
        </Container>
    );
}

export default NotFoundPage;