import { Link } from "react-router";
import styled from "styled-components";

const LinkStyled = styled(Link)`
    color: var(--Red_500);
`;

const ButtonLink = styled(Link)`
    cursor: pointer;
    text-decoration: none;
    color: var(--Neutral_0);
    background-color: var(--Red_400);
    border: 1px solid var(--Red_400);
    border-radius: 0.25rem;

    font-size: 1rem;
    font-weight: 700;
    padding: 0.5rem 1rem;

    &:hover {
        background-color: var(--Red_500);
        border: 1px solid var(--Red_500);
    }
`;

const AltButtonLink = styled(Link)`
    cursor: pointer;
    text-decoration: none;
    color: var(--Red_400);
    background-color: var(--Neutral_0);
    border: 1px solid var(--Red_400);
    border-radius: 0.25rem;

    font-size: 1rem;
    font-weight: 700;
    padding: 0.5rem 1rem;

    &:hover {
        color: var(--Neutral_0);
        background-color: var(--Red_500);
        border: 1px solid var(--Red_500);
    }
`;

function LinkTo({ to = "", text = "Link", type = "default" }) {
    return (
        <>
            {type === "default" && <LinkStyled to={to}>{text}</LinkStyled>}
            {type === "button" && <ButtonLink to={to}>{text}</ButtonLink>}
            {type === "alt-button" && <AltButtonLink to={to}>{text}</AltButtonLink>}
        </>
    );
}

export default LinkTo;
