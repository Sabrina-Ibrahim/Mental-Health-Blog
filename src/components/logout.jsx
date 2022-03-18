import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = (props) => {
    let navigate = useNavigate()
    const loggingOut = (event) => {
        event.preventDefault()
        props.handleLogout();
        navigate("/")

    }
    return (
        <div>
            <form onClick={loggingOut}>
                <div>
                    <button type="logout">Logout</button>
                </div>
            </form>
        </div>
    )
}

export default Logout;