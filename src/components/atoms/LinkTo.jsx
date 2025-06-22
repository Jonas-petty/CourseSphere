import { Link } from "react-router";
import styled from "styled-components";

const LinkStyled = styled(Link)`
    color: var(--Red_500);
`;

function LinkTo({ to = "", text = "Link" }) {
    return <LinkStyled to={to}>{text}</LinkStyled>;
}

export default LinkTo;
