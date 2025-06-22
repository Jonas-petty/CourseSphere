import styled from "styled-components";

const HeaderText = styled.h1`
    text-align: center;
`;

const LargeHeader = styled(HeaderText)`
    font-size: 6rem;
    color: var(--Neutral_0);
    text-shadow: 5px 5px black;

`;

function Header({ text = "Text Content", type = "default" }) {
    return (
        <div>
            {type === "default" && <HeaderText>{text}</HeaderText>}
            {type === "large" && <LargeHeader>{text}</LargeHeader>}
        </div>
    );
}

export default Header;
