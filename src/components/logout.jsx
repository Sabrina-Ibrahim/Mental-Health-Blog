import React from 'react';
import { useNavigate } from 'react-router-dom';


const Logout = (props) => {
    let navigate = useNavigate()
    const loggingOut = (event) => {
        event.preventDefault()
        localStorage.removeItem("token");
        console.log(localStorage.removeItem("token"));
        navigate("/")

    }
    return (
        <div>
            <button onClick={loggingOut} type="logout">Logout</button>
        </div>
    )
}

export default Logout;