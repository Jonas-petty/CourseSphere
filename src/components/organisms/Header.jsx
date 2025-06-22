import styled from "styled-components";
import Text from "../atoms/Text";
import LinkTo from "../atoms/LinkTo";

const HeaderStyled = styled.header`
    background-color: var(--Neutral_0);
    border: 1px solid var(--Neutral_200);
    border-radius: 0.5rem;
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 767.98px){
    	flex-direction: column;
    }
`;

function Header() {
    return (
        <HeaderStyled>
            <Text />
            <LinkTo to="/create-course" text="+ Criar Novo Curso" type="button"/>
        </HeaderStyled>
    );
}

export default Header;
