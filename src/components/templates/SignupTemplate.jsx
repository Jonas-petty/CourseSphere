import Header from "../atoms/Header";
import LabeledInput from "../molecules/LabeledInput";
import Button from "../atoms/Button";
import AuthLayout from "./AuthLayout";

import styled from "styled-components";
import LinkTo from "../atoms/LinkTo";

const Form = styled.form`
    background-color: var(--Neutral_0);
    border-radius: 0.5rem;
    border: 1px solid var(--Neutral_200);
    width: 100%;
    max-width: 500px;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

function SignupTemplate() {
    return (
        <AuthLayout>
            <Form action="">
                <Header text="Registrar" />
                <LabeledInput
                    id="name"
                    LabelText="Nome"
                    type="text"
                    placeholder="Nome"
                    required={true}
                />
                <LabeledInput
                    id="email"
                    LabelText="Email"
                    type="email"
                    placeholder="email@example.com"
                    required={true}
                />
                <LabeledInput
                    id="password"
                    LabelText="Senha"
                    type="password"
                    placeholder="Senha"
                    required={true}
                />
                <Button type="submit" />
            </Form>
            <LinkTo to="/login" text="Login" />
        </AuthLayout>
    );
}

export default SignupTemplate;
