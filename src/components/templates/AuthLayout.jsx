import styled from "styled-components";
import Header from "../atoms/Header";

const Container = styled.div`
    height: 100vh;
    display: flex;
`;

const Content = styled.div`
    flex: 1;

    border-right: 1px solid var(--Neutral_300);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    @media (max-width: 767.98px) {
        display: none;
    }
`;

const FormContainer = styled.main`
    flex: 1;
    background: var(--Light_Gradient);

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
`;

function AuthLayout({ headerText, children }) {
    return (
        <Container>
            <Content>
                <Header text={headerText} />
            </Content>
            <FormContainer>{children}</FormContainer>
        </Container>
    );
}

export default AuthLayout;
