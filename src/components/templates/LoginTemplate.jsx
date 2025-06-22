import { Link } from "react-router";

import AuthLayout from "./AuthLayout";
import LabeledInput from "../molecules/LabeledInput";
import Button from "../atoms/Button";
import styled from "styled-components";
import Header from "../atoms/Text";
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

function LoginTemplate({}) {
    return (
        <AuthLayout
            headerText="Os Cursos que VOCE vai querer fazer!"
            headerType="large"
        >
            <Form action="">
                <Header text="Login" />
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
            <LinkTo to={"/signup"} text="Registrar" />
        </AuthLayout>
    );
}

export default LoginTemplate;
