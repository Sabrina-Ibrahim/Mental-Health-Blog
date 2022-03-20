import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useForm from '../CustomHooks/useForm';


function Register() {
    let navigate = useNavigate();

    const registerUser = async (form) => {
        await axios.post("http://localhost:5000/api/users", form)
            .then((res) => {
                console.log(res.data)
                // const usersWithNewUser = users.concat(res.data);
                // setUsers(usersWithNewUser);
                // console.log("After registering", usersWithNewUser);
            })
            .catch(error => console.log(error));
        //console.log(users)
    };

    const ClickLogout = () => {
        registerUser(formValues)
        navigate("/home")
    }

    const { formValues, handleChange, handleSubmit } = useForm(ClickLogout);

    return (
        <div>
            <div>
                <h1 className="RegisterBioh1"><center>You don't have to go through life's challenges alone.</center></h1>
                <h2 className="RegisterBioh2"><center>Say hello to support, relief, and overall wellness.</center></h2>
                <h2 className="RegisterBioh2">We are glad you are here!</h2>
                <h3 className="RegisterBioh3"><center>Please enter your information below.</center> </h3></div>

            <div>
                <div className='form-container'>
                    <div className='form-container'>
                        <form onSubmit={handleSubmit} className='register-form'>
                            <p> <input
                                value={formValues.firstName} onChange={handleChange} className='registerField' placeholder='First Name' name='firstName' /></p>
                            <p><input
                                value={formValues.lastName} onChange={handleChange} className='registerField' placeholder='Last Name' name='lastName' /></p>
                            <p><input
                                value={formValues.userName} onChange={handleChange} className='registerField' placeholder='Username' name='userName' /></p>
                            <p><input
                                value={formValues.email} onChange={handleChange} className='registerField' placeholder='Email' name='email' /></p>
                            <p><input
                                value={formValues.password} onChange={handleChange} className='registerField' placeholder='Password' name='password' /></p>

                            <button className="RegisterButton" type='submit'
                            >
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;