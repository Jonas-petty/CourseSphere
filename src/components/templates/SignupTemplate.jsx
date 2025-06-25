import Header from "../atoms/Text";
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

function SignupTemplate({newUser, setNewUser, handleSubmit}) {

    function handleChange(field, value) {
        setNewUser((prev) => ({...prev, [field]: value}))
    }

    return (
        <AuthLayout>
            <Form action={handleSubmit}>
                <Header text="Registrar" />
                <LabeledInput
                    id="name"
                    LabelText="Nome"
                    type="text"
                    placeholder="Nome"
                    value={newUser.name}
                    onChange={(value) => handleChange("name", value)}
                    required={true}
                />
                <LabeledInput
                    id="email"
                    LabelText="Email"
                    type="email"
                    placeholder="email@example.com"
                    value={newUser.email}
                    onChange={(value) => handleChange("email", value)}
                    required={true}
                />
                <LabeledInput
                    id="password"
                    LabelText="Senha"
                    type="password"
                    placeholder="Senha"
                    value={newUser.pasword}
                    onChange={(value) => handleChange("password", value)}
                    required={true}
                />
                <Button type="submit" text="Confirmar"/>
            </Form>
            <LinkTo to="/login" text="Entrar" />
        </AuthLayout>
    );
}

export default SignupTemplate;
