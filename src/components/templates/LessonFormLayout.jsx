import styled from "styled-components";
import Text from "../atoms/Text";
import LabeledInput from "../molecules/LabeledInput";
import LabeledTextarea from "../molecules/LabeledTextarea";
import DropDown from "../atoms/DropDown";
import LabeledDatePicker from "../molecules/LabeledDatePicker";
import Button from "../atoms/Button";
import { useParams } from "react-router";

const Container = styled.div`
    height: 100vh;
    background: var(--Light_Gradient);
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Form = styled.form`
    width: 500px;
    background-color: var(--Neutral_0);
    padding: 1rem;
    border: 1px solid var(--Neutral_200);
    border-radius: 0.25rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

function LessonFormLayout({ isNewLesson, lesson, setLesson, options }) {
    const { courseId } = useParams();

    function getCurrentDate() {
        const today = new Date();
        return today.toISOString().split("T")[0];
    }

    function handleChange(field, value) {
        setLesson((prev) => ({ ...prev, [field]: value }));
    }

    function handleSubmit(event) {
        const currentUser = JSON.parse(localStorage.getItem("active-user"));
        const lessonData = {
            ...lesson,
            creator_id: currentUser.id,
            course_id: courseId,
            status: lesson.status.value,
        };

        fetch("http://localhost:3000/lessons", {
            method: "POST",
            body: JSON.stringify(lessonData),
        });
    }

    return (
        <Container>
            <Form action={handleSubmit}>
                <Text text="Criar Aula" />
                <LabeledInput
                    id="title"
                    LabelText="Titulo"
                    placeholder="Titulo"
                    minLength={3}
                    value={lesson.title}
                    onChange={(value) => handleChange("title", value)}
                    required={true}
                />
                <DropDown
                    id="status"
                    isMulti={false}
                    options={options}
                    value={lesson.status}
                    onChange={(value) => handleChange("status", value)}
                    required={true}
                />
                <LabeledDatePicker
                    id="publish_date"
                    labelText="Data de Publicacao"
                    min={getCurrentDate()}
                    value={lesson.publish_date}
                    onChange={(value) => handleChange("publish_date", value)}
                    required={true}
                />
                <LabeledInput
                    id="video_url"
                    type="url"
                    LabelText="URL do video"
                    placeholder="URL do video"
                    minLength={3}
                    value={lesson.video_url}
                    onChange={(value) => handleChange("video_url", value)}
                    required={true}
                />
                <Button type="submit" text="Criar Aula" />
            </Form>
        </Container>
    );
}

export default LessonFormLayout;
