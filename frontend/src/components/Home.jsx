import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to the Home Page</h1>
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