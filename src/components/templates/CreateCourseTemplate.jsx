import styled from "styled-components";
import Text from "../atoms/Text";
import LabeledInput from "../molecules/LabeledInput";
import Button from "../atoms/Button";
const Container = styled.div`
    background: var(--Light_Gradient);
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Form = styled.form`
    background-color: var(--Neutral_0);

    border: 1px solid var(--Neutral_200);
    border-radius: .5rem;
    padding: 1rem;
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

function CreateCourseTemplate() {
    return (
        <Container>
            <h1>CourseSphere</h1>
            <Form>
                <Text type="medium" text="Criar Novo Curso" />
                <LabeledInput
                    id="name"
                    LabelText="Nome"
                    type="text"
                    placeholder="Nome"
                    required={true}
                />
                <textarea name="description" id="description"></textarea>
                <input type="date" name="" id="" />
                <input type="date" name="" id="" />
                <select>
                    <option value="teste">Teste</option>
                </select>
                <Button type="submit" />
            </Form>
        </Container>
    );
}

export default CreateCourseTemplate;
