import Label from "../atoms/Label";
import Input from "../atoms/Input";

function LabeledInput({
    id,
    LabelText = "Label",
    type = "text",
    placeholder = "placeholder",
    required = true,
}) {
    return (
        <div className="container">
            <Label htmlFor={id} text={LabelText} />
            <Input
                id={id}
                type={type}
                placeholder={placeholder}
                required={required}
            />
        </div>
    );
}

export default LabeledInput;
