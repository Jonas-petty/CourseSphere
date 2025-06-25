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
    className = "",
    type = "text",
    value,
    onChange,
    placeholder = "placeholder",
    minLength,
    required = "true",
}) {
    return (
        <InputStyle
            id={id}
            className={className}
            type={type}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            placeholder={placeholder}
            minLength={minLength}
            required={required}
            
        />
    );
}

export default Input;
