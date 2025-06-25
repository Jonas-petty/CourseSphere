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

function LoginTemplate({user, setUser, handleSubmit, foundUser}) {

    function handleChange(field, value) {
        setUser((prev) => ({...prev, [field]: value}))
    }

    return (
        <AuthLayout
            headerText="Os Cursos que VOCÊ vai querer fazer!"
            headerType="large"
        >
            <Form action={handleSubmit}>
                <Header text="Entrar" />
                <LabeledInput
                    id="email"
                    LabelText="Email"
                    type="email"
                    placeholder="email@example.com"
                    value={user.email}
                    onChange={(value) => handleChange("email", value)}
                    required={true}
                />
                <LabeledInput
                    id="password"
                    LabelText="Senha"
                    type="password"
                    placeholder="Senha"
                    value={user.password}
                    onChange={(value) => handleChange("password", value)}
                    required={true}
                />
                {!foundUser && <span>Usuário não encontrado, tente novamente!</span>}
                <Button type="submit" text="Confirmar"/>
            </Form>
            <LinkTo to={"/signup"} text="Registrar" />
        </AuthLayout>
    );
}

export default LoginTemplate;
