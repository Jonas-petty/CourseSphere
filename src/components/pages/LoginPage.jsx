import { useState } from "react";
import LoginTemplate from "../templates/LoginTemplate";
import { Navigate, redirect, useNavigate } from "react-router";

function LoginPage() {
    
    let navigate = useNavigate()
    const [foundUser, setFoundUser] = useState(true)
    const [user, setUser] = useState(
        {
            email: "",
            password: ""
        }
    )

    async function getUser(user) {
        let result = null
        await fetch(`http://localhost:3000/users?email=${user.email}&password=${user.password}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.length !== 0) result = data[0]
        })
        return result
    
    }

    function handleSubmit(event) {
        const  activeUser = JSON.parse(localStorage.getItem("active-user"))
        
        if (activeUser && (activeUser.email === user.email && activeUser.password === user.password)) {
            navigate("/")
        } else{
            getUser(user)
            .then(result => {
                if (result) {
                    localStorage.setItem("active-user", JSON.stringify(result))
                    navigate("/")
                } else {
                    setFoundUser(False)
                }
            })
        }
        
    }
    

    return <LoginTemplate user={user} setUser={setUser} handleSubmit={handleSubmit} foundUser={foundUser}/>;
}

export default LoginPage;
