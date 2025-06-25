import styled from "styled-components";
import LabeledDatePicker from "./LabeledDatePicker";

const Container = styled.div`
    display: flex;
    gap: 1rem;

    @media (max-width: 767.98px) {
        flex-direction: column;
    }
`;

function DateRange({
    startId,
    endId,
    startLabel = "start",
    endLabel = "end",
    startValue,
    endValue,
    startOnChange,
    endOnChange,
    startRequired,
    endRequired,
}) {
    return (
        <Container>
            <LabeledDatePicker
                id={startId}
                labelText={startLabel}
                value={startValue}
                onChange={startOnChange}
                required={startRequired}
            />
            <LabeledDatePicker
                id={endId}
                labelText={endLabel}
                value={endValue}
                onChange={endOnChange}
                required={endRequired}
                min={startValue}
            />
        </Container>
    );
}

export default DateRange;
