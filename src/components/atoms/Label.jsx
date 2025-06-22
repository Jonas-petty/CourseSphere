function Label({ htmlFor, text = "Label" }) {
    return <label htmlFor={htmlFor}>{text}</label>;
}

export default Label;
