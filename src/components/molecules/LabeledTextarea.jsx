import styled from "styled-components";
import Label from "../atoms/Label";
import Textarea from "../atoms/TextArea";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

function LabeledTextarea({ id, labelText, value, placeholder, maxLength, onChange }) {
    return (
        <Container>
            <Label htmlFor={id} text={labelText} />
            <Textarea
                id={id}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                maxLength={maxLength}
            />
        </Container>
    );
}

export default LabeledTextarea;
