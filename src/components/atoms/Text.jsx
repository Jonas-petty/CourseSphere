import styled from "styled-components";

const DefaultText = styled.h1`
    text-align: center;
`;

const MediumHeader = styled.h2`
    
`;

const LargeHeader = styled(DefaultText)`
    font-size: 6rem;
    color: var(--Neutral_0);
    text-shadow: 5px 5px black;

`;

function Text({ text = "Text Content", type = "default" }) {
    return (
        <>
            {type === "default" && <DefaultText>{text}</DefaultText>}
            {type === "medium" && <MediumHeader>{text}</MediumHeader>}
            {type === "large" && <LargeHeader>{text}</LargeHeader>}
        </>
    );
}

export default Text;
