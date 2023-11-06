import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        if(localStorage.getItem('access_token') === null){
            window.location.href = '/signin'
        } else {
            (async () => {
                try {
                    const {data} = await axios.get('http://localhost:8000/home/', { headers: { 'Content-Type': 'application/json' } });

                    setMessage(data.message);
                } catch (e) {
                    console.log('not authenticated');
                }
            })()};
    }, [])


    return (
        <div className="home-container">
            <h1>Welcome to the Home Page</h1>
            <h3>Hi {message}</h3>
            <div className="button-cont">
                <Link to="/signin">
                    <button className="Sign-In">Sign In</button>
                </Link>
                <Link to="/signup">
                    <button className="Sign-Up">Sign Up</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;