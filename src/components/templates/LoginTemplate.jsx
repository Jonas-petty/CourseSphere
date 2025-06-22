import AuthLayout from "./AuthLayout";
import LabeledInput from "../molecules/LabeledInput";
import Button from "../atoms/Button";
import styled from "styled-components";
import Header from "../atoms/Header";

const Form = styled.form`
    background-color: var(--Neutral_0);
    border-radius: .5rem;
    border: 1px solid var(--Neutral_200);
    width: 100%;
    max-width: 500px;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

`

function LoginTemplate({}) {
    return (
        <AuthLayout>
            <Form action="">
                <Header />
                <LabeledInput />
                <LabeledInput />
                <Button />
            </Form>
        </AuthLayout>
    )
}

export default LoginTemplate;
