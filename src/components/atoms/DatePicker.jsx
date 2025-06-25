import styled from "styled-components";

const DatePickerStyled = styled.input`
    font-size: 1rem;
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

function DatePicker({ id, value, onChange, required = true, min }) {
    return (
        <DatePickerStyled
            type="date"
            id={id}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            min={min}
            required={required}
        />
    );
}

export default DatePicker;
