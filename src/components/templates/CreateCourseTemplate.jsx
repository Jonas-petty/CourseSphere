import styled from "styled-components";
import Text from "../atoms/Text";
import LabeledInput from "../molecules/LabeledInput";
import Button from "../atoms/Button";
import LabeledTextarea from "../molecules/LabeledTextarea";
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
    border-radius: 0.5rem;
    padding: 1rem;
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

function CreateCourseTemplate({ isNewCourse, createdCourse, setCreatedCourse }) {

    function handleChange(field, value) {
        setCreatedCourse((prev) => ({...prev, [field]: value}))
    }

    return (
        <Container>
            <Form>
                <Text text="CourseSphere" />
                <hr />
                <Text type="medium" text="Criar Novo Curso" />
                <LabeledInput
                    id="name"
                    LabelText="Nome"
                    type="text"
                    placeholder="Nome"
                    value={createdCourse.name}
                    onChange={(value) => {handleChange("name", value)}}
                    minLength={3}
                    required={true}
                />
                <LabeledTextarea
                    id="description"
                    labelText="Descrição"
                    placeholder="Descrição"
                    value={createdCourse.description}
                    onChange={(value) => {handleChange("description", value)}}
                    maxLength={500}
                />
                <input type="date" name="" id="" />
                <input type="date" name="" id="" />
                <select>
                    <option value="teste">Teste</option>
                </select>
                <Button type="submit" text="Confirmar" />
            </Form>
        </Container>
    );
}

export default CreateCourseTemplate;
