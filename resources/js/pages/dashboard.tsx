import axios from "axios";
import React from "react";

const dashboard = () => {

     const handleLogout = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        try {
            await axios.post("/logout");

            window.location.href = '/';

        } catch (error: unknown) {
            console.error("Logout failed:", error);
        }
    };


    return (
        <div>
            <h1>Dashboard</h1>

            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default dashboard;
