import styled from "styled-components";
import Header from "../atoms/Header";

const Container = styled.div`
    height: 100vh;
    display: flex;
`;

const Content = styled.div`

    background-image: url("https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg");
    background-repeat: no-repeat;
    background-position: center;
    background-color: var(--Neutral_0);
    filter: grayscale();

    flex: 2;

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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
`;

function AuthLayout({ headerText, headerType = "default", children }) {
    return (
        <Container>
            <Content>
                <Header text={headerText} type={headerType}/>
            </Content>
            <FormContainer>{children}</FormContainer>
        </Container>
    );
}

export default AuthLayout;
