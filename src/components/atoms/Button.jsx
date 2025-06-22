import styled from "styled-components";

const ButtonStyle = styled.button`
    cursor: pointer;
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

function Button({ type = "button", text = "button" }) {
    return <ButtonStyle type={type}>{text}</ButtonStyle>;
}

export default Button;
