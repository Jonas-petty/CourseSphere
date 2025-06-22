import styled from "styled-components";

const InputStyle = styled.input`
    font-size: 1rem;
    width: 100%;
    padding: 0.5rem 1rem;
    border: 1px solid var(--Neutral_300);
    border-radius: 0.25rem;

    &:hover {
        border: 1px solid var(--Neutral_600);
    }

    &:focus {
        outline: 1px solid var(--Neutral_600);
    }
`;

function Input({
    id,
    type = "text",
    placeholder = "placeholder",
    required = "true",
}) {
    return (
        <InputStyle
            id={id}
            type={type}
            placeholder={placeholder}
            required={required}
        />
    );
}

export default Input;
