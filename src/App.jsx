import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserMapper from './components/UserMapper';
import CommentMapper from './components/CommentMapper';
import ReplyMapper from './components/ReplyMapper';
import Page from "./components/Page";
// import Anxiety from './components/Anxiety';
import Home from './components/Pages/Home';
import Register from './components/Register';
// import Anxiety from './components/Pages/Anxiety';
import Dementia from './components/Pages/Dementia';
import Depression from './components/Pages/Depression';
import Grief from './components/Pages/Grief';
import Resources from './components/Pages/Resources';
import ErrorPage from './components/Pages/ErrorPage';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import Login from './components/Login';

//component code 

function App() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(undefined);
    //Handlers go here
    useEffect(() => {
        axios.get('http://localhost:5000/api/users/').then(res => setUsers(res.data))
        console.log(users);
    }, []);

    return (
        <>
            {/*
                <Page name="Home"/>
                <Page name="Anxiety" />
                <Page name="Depression" />
                <Page name="Grief" />
                <Page name="Resources" /> */}
            {/* </Nav> */}


            <BrowserRouter>

                <nav>
                    <Link to={"/"}> Login </Link>
                    <Link to={"/Register"}> Register</Link>
                    <Link to={"/Home"}> Home </Link>
                    {/* <Link to={"/Anxiety"}> Anxiety </Link> */}
                    <Link to={"/Dementia"}> Dementia </Link>
                    <Link to={"/Depression"}> Depression </Link>
                    <Link to={"/Grief"}> Grief </Link>
                    <Link to={"/Resources"}> Resources </Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Login setUser={setUser} />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/Home" element={<Home user={user} />} />
                    {/* <Route path="/Anxiety" element={<Anxiety />} /> */}
                    <Route path="/Dementia" element={<Dementia />} />
                    <Route path="/Depression" element={<Depression user={user} users={users} setUsers={setUsers} />} />
                    {/* <Route path="/Grief" element={<Grief />} /> */}
                    <Route path="/Resources" element={<Resources />} />
                    <Route path="*" element={<ErrorPage />} />

                    {/* <Route path="Anxiety" element={<Anxiety users={users} />} />*/}
                </Routes>

            </BrowserRouter>


            <div>

                {/* <UserMapper users={users} /> */}
            </div>
            <footer>
                <div className='footer'>&copy;2022_Ibrahim Mental Health Blog</div>
            </footer>


        </>
    )
}


export default App;