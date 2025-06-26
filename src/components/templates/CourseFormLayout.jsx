import styled from "styled-components";
import Text from "../atoms/Text";
import LabeledInput from "../molecules/LabeledInput";
import Button from "../atoms/Button";
import LabeledTextarea from "../molecules/LabeledTextarea";
import DateRange from "../molecules/DateRange";
import DropDown from "../atoms/DropDown";
import { useNavigate } from "react-router";

const Container = styled.div`
    background: var(--Light_Gradient);
    height: 100vh;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Form = styled.form`
    background-color: var(--Neutral_0);
    border: 1px solid var(--Neutral_200);
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: 576px) {
        width: 500px;
    }
`;

function CourseFormLayout({ isNewCourse = true, course, setCourse, options }) {
    const navigate = useNavigate();

    const selectedOptions = options.filter((opt) =>
        course.instructors.includes(opt.value)
    );

    function handleChange(field, value) {
        if (field == "instructors") {
            value = value.map((instructor) => instructor.value);
        }

        setCourse((prev) => ({ ...prev, [field]: value }));
    }

    function handleSubmit(event) {
        const currentUser = JSON.parse(localStorage.getItem("active-user"));
        setCourse((prev) => ({ ...prev, creator_id: currentUser.id }));

        fetch(`http://localhost:3000/courses/${isNewCourse ? "" : course.id}`, {
            method: isNewCourse ? "POST" : "PATCH",
            body: JSON.stringify(course),
        })
            .then(() => navigate("/"))
            .catch((err) => console.error(`Error: ${err}`));
    }

    return (
        <Container>
            <Form action={handleSubmit}>
                <Text text="CourseSphere" />
                <hr />
                <Text type="medium" text="Criar Curso" />
                <LabeledInput
                    id="name"
                    LabelText="Nome"
                    type="text"
                    placeholder="Nome"
                    value={course.name}
                    onChange={(value) => {
                        handleChange("name", value);
                    }}
                    minLength={3}
                    required={true}
                />
                <LabeledTextarea
                    id="description"
                    labelText="Descrição"
                    placeholder="Descrição"
                    value={course.description}
                    onChange={(value) => {
                        handleChange("description", value);
                    }}
                    maxLength={500}
                />
                <DateRange
                    startId="start_date"
                    startLabel="Inicio"
                    startValue={course.start_date}
                    startOnChange={(value) => handleChange("start_date", value)}
                    startRequired={true}
                    endId="end_date"
                    endLabel="Fim"
                    endValue={course.end_date}
                    endOnChange={(value) => handleChange("end_date", value)}
                    endRequired={true}
                />
                <DropDown
                    id="instructors"
                    isMulti={true}
                    options={options}
                    value={selectedOptions}
                    onChange={(value) => handleChange("instructors", value)}
                    required={false}
                />
                <Button type="submit" text="Confirmar" />
            </Form>
        </Container>
    );
}

export default CourseFormLayout;
