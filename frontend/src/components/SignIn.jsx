import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();

        try {
            const user = {
                username: username,
                password: password
            };

            const {data} = await axios.post('http://localhost:8000/token/', user, {headers:{'Content-Type': 'application/json'}}, {withCredentials: true});

            console.log(data);
            localStorage.clear();
            localStorage.setItem('access_token', data.access);
            localStorage.setItem('refresh_token', data.refresh);
            axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;
            // window.location.href = '/'
        } catch (error) {
            console.error(error);
            setError("Error signing in please try again");
        }
    }

    return (
        <div className="signin-container">
            <h1>Welcome To SignIn Page.</h1>
            <form onSubmit={handleSignIn}>
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
                <button type="submit">Sign In</button>
            </form>
            {error && <div className="error">{error}</div>}
        </div>
    )
}

export default SignIn;