import Select from "react-select";
import styled from "styled-components";

const SelectStyled = styled(Select)``;

function DropDown({ id, options, isMulti = true, onChange, required = false }) {
    return (
        <SelectStyled
            id={id}
            options={options}
            isMulti={isMulti}
            onChange={(selectedOptions) => onChange(selectedOptions)}
            required={required}
        />
    );
}

export default DropDown;
