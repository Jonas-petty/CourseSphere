import styled from "styled-components";
import Label from "../atoms/Label";
import DatePicker from "../atoms/DatePicker";

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

function LabeledDatePicker({ id, labelText, value, min, onChange, required }) {
    return (
        <Container>
            <Label htmlFor={id} text={labelText} />
            <DatePicker
                id={id}
                value={value}
                onChange={onChange}
                min={min}
                required={required}
            />
        </Container>
    );
}

export default LabeledDatePicker;
