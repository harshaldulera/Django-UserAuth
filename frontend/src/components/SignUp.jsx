import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [username, setUsername] = useState("");   
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        try {
            const user = {
                username: username,
                password: password,
                email: email,
            };

            const {data} = await axios.post('http://localhost:8000/token/', user, {headers:{'Content-Type': 'application/json'}}, {withCredentials: true});

            console.log("signup done", data);
            navigate("/signin");    
        } catch (error) {
            console.log(error);
            setError("Error signing up please try again");
        }
    };
    return (
        <div className="signup-container">
            <h1>Welcome to the Sign-Up Page</h1>
            <form onSubmit={handleSignUp}>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
            {error && <div className="error">{error}</div>}
        </div>
    );
};

export default SignUp;