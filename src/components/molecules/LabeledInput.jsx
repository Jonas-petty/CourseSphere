import Label from "../atoms/Label";
import Input from "../atoms/Input";

function LabeledInput({
    id,
    LabelText = "Label",
    type = "text",
    placeholder = "placeholder",
    value,
    onChange,
    required = true,
}) {
    return (
        <div className="container">
            <Label htmlFor={id} text={LabelText} />
            <Input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
            />
        </div>
    );
}

export default LabeledInput;
