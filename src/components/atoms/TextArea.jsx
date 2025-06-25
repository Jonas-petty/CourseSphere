import styled from "styled-components";

const TextareaStyled = styled.textarea`
    font-size: 1rem;
    border: 1px solid var(--Neutral_300);
    border-radius: .25rem;
    padding: 0.5rem 1rem;
    height: 5rem;
    resize: none;

    &:hover {
        border: 1px solid var(--Neutral_600);
    }

    &:focus {
        outline: 1px solid var(--Neutral_600);
    }
`;

function Textarea({ id, value, placeholder, maxLength, onChange }) {
    return (
        <TextareaStyled
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            maxLength={maxLength}
        ></TextareaStyled>
    );
}

export default Textarea;
