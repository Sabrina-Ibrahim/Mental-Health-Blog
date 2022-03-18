import axios from 'axios';
import React, { useEffect } from 'react';

function Register() {
    let navigate = useNavigate();
    const registration = ['First Name', 'Last Name', 'email', 'userName', 'password'];
    const [userRegistration, setUserRegistration] = useState([]);
    navigate('/home')

    useEffect(() => {
        console.log(registration);
        postUsers()
    }, [])

    async function postUsers() {
        let response = await axios.post('http://localhost:5002/api/users');
        console.log(response);
    }
    return (
        <div>
            <h1>Register: {registration[userRegistration]}</h1>
            <button type='button' onClick={setUserRegistration(userRegistration)}></button>
        </div >
    );
}

export default Register