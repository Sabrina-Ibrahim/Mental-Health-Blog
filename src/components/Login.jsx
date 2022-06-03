import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import useForm from '../CustomHooks/useForm';
import jwtDecode from 'jwt-decode';

const Login = (props) => {
    let navigate = useNavigate();

    const loginUser = async (form) => {
        await axios.post("http://localhost:5000/api/auth/", form)
            .then((res) => {
                console.log(res.data)
                localStorage.setItem("token", res.data);
                const decode = jwtDecode(localStorage.getItem("token"))
                props.setUser(decode);
            })
            .catch(error => console.log(error));
    }

    const ClickLogin = () => {
        loginUser(formValues) //this is what form is, what I created as email/password 
        navigate("/home")
    }
    const { formValues, handleChange, handleSubmit } = useForm(ClickLogin); //fnct passing in is what I want to run my form. ie: running login func

    return (
        <div>
            <div>
                <h1 className='loginTitle'>Welcome back friend!</h1>
                <div className='form-container'>
                    <form onSubmit={handleSubmit} className='login-form'>
                        <p> <input
                            value={formValues.email} onChange={handleChange} className='form-field' placeholder='Email' name='email' /></p>
                        <p><input
                            value={formValues.password} onChange={handleChange} type="password" className='form-field' placeholder='Password' name='password' /></p>
                        <button className="loginButton" type='submit' //on form type submit it'll run the onsubmit that is attacehd to the form
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>

            <div>
                <ul>
                    <Link to="/Register"><p className="newAccount">Don't have an account? <u>Create</u> </p></Link>
                </ul>
            </div>
        </div>
    );
}

export default Login;