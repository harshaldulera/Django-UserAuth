import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [username, setUsername] = useState("");   
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    return (
        <div>
            <h1>Welcome To SignUp Page.</h1>
        </div>
    )
}

export default SignUp;