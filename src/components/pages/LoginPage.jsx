import { useState } from "react";
import LoginTemplate from "../templates/LoginTemplate";
import { useNavigate } from "react-router";

function LoginPage({ setIsLogged }) {
    let navigate = useNavigate();
    const [foundUser, setFoundUser] = useState(true);
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    async function getUser(user) {
        let result = null;
        await fetch(
            `http://localhost:3000/users?email=${user.email}&password=${user.password}`,
            { method: "GET" }
        )
            .then((response) => response.json())
            .then((data) => {
                if (data.length !== 0) result = data[0];
            });
        return result;
    }

    function handleSubmit(event) {
        const activeUser = JSON.parse(localStorage.getItem("active-user"));

        if (
            activeUser &&
            activeUser.email === user.email &&
            activeUser.password === user.password
        ) {
            setIsLogged(true);
            navigate("/");
        } else {
            getUser(user).then((result) => {
                if (result) {
                    localStorage.setItem("active-user", JSON.stringify(result));
                    setIsLogged(true);
                    navigate("/");
                } else {
                    setFoundUser(False);
                }
            });
        }
    }

    return (
        <LoginTemplate
            user={user}
            setUser={setUser}
            handleSubmit={handleSubmit}
            foundUser={foundUser}
        />
    );
}

export default LoginPage;
