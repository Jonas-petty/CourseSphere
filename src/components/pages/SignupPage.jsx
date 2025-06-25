import { useRef, useState } from "react";
import SignupTemplate from "../templates/SignupTemplate"

function SignupPage() {

    const [newUser, setNewUser] = useState(
        {
            name: "",
            email: "",
            password: ""
        }
    )

    function handleSubmit(event) {
        fetch("http://localhost:3000/users", {method: "POST", body: JSON.stringify(newUser)})
        .then((response) => response.json())
        .then((data) => {
            setNewUser((prev) => ({...prev, "id": data.id}))
            localStorage.setItem("active-user", newUser)
        })
        .catch((err) => console.log(`error: ${err}`))

    }

    useRef(() => {
        console.log(newUser)
    }, [newUser])

    return ( <SignupTemplate newUser={newUser} setNewUser={setNewUser} handleSubmit={handleSubmit} /> );
}

export default SignupPage;