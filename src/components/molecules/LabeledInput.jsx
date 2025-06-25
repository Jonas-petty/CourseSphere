import styled from "styled-components";
import Label from "../atoms/Label";
import Input from "../atoms/Input";

const Container = styled.div``;

function LabeledInput({
    id,
    className,
    LabelText = "Label",
    type = "text",
    placeholder = "placeholder",
    value,
    onChange,
    minLength,
    required = true,
}) {
    return (
        <Container>
            <Label htmlFor={id} text={LabelText} />
            <Input
                id={id}
                className={className}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                minLength={minLength}
                required={required}
            />
        </Container>
    );
}

export default LabeledInput;
