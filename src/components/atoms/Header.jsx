import styled from "styled-components";

const HeaderText = styled.h1`
    text-align: center;

`;

function Header({ text = "Text Content", type = "paragraph" }) {
    return (
        <HeaderText>{text}</HeaderText>
    )
}

export default Header;
