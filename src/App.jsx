import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserMapper from './components/UserMapper';
import CommentMapper from './components/CommentMapper';
import ReplyMapper from './components/ReplyMapper';
import Page from "./components/Page";
//import Anxiety from './components/Anxiety';
import Home from './components/Pages/Home';
import Anxiety from './components/Pages/Anxiety';
import Dementia from './components/Pages/Dementia';
import Depression from './components/Pages/Depression';
import Grief from './components/Pages/Grief';
import Resources from './components/Pages/Resources';
//import Register from './components/Register';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";

//component code 
function App() {
    const [users, setUsers] = useState([]);
    //Handlers go here
    useEffect(() => {
        axios.get('http://localhost:5000/api/users/').then(res => setUsers(res.data))
        console.log(users);
    }, []);

    const registerUser = async () => {
        await axios.post("http://localhost:5000/api/users", {
            firstName: "cust15",
            lastName: "cust15",
            email: "cust15@cust.com",
            userName: "@cust15",
            password: "cust15@cust.com"
        })
            .then((res) => {
                const usersWithNewUser = users.concat(res.data);
                setUsers(usersWithNewUser);
                console.log("After registering", usersWithNewUser);
            })
            .catch(error => console.log(error));
        console.log(users)
    };

    const loginUser = async () => {
        await axios.post("http://localhost:5000/api/auth/", {
            email: "cust15@cust.com",
            password: "cust15@cust.com",
        })
            .then((res) => {
                console.log(res.data)
                localStorage.setItem("token", res.data);
            })
            .catch(error => console.log(error));
    }

    const logoutUser = async () => {
        console.log(localStorage.getItem("token"))
        localStorage.removeItem("token");
        console.log(localStorage.removeItem("token"));
    }

    return (
        <>
            <div>
                <button type='button'
                    onClick={() => registerUser()}
                >
                    Register here!
                </button>
            </div >
            <div>
                <button type='button'
                    onClick={() => loginUser()}
                >
                    Login
                </button>
            </div >
            <div>
                <button type='button'
                    onClick={() => logoutUser()}
                >
                    Logout
                </button>
            </div >


            {/* 
            <Nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1 rem",
                }} */}
            {/* > */}
            {/*
                <Page name="Home"/>
                <Page name="Anxiety" />
                <Page name="Depression" />
                <Page name="Grief" />
                <Page name="Resources" /> */}
            {/* </Nav> */}

            {/* <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }} */}
            {/* > */}
            {/* <Link to="/Home">Home </Link> */}
            {/* <Link to="/Anxiety">Anxiety </Link>
                <Link to="/Dementia">Dementia </Link>
                <Link to="/Depression">Depression </Link>
                <Link to="/Grief">Grief </Link>
                <Link to="/Resources">Resources </Link> */}
            {/* </nav> */}


            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Dementia" element={<Dementia />} />
                    <Route path="/Depression" element={<Depression />} />
                    <Route path="/Grief" element={<Grief />} />
                    <Route path="/Resources" element={<Resources />} />

                    {/* <Route path="Anxiety" element={<Anxiety users={users} />} />*/}
                </Routes>
            </BrowserRouter>
            {/* <Footer /> */}

            <div>
                <UserMapper users={users} />
                {users[0] && users.map((user, i) => <><p key={i} style={{ backgroundColor: "#faddad" }}>Here are {user.firstName}'s comments!</p>
                    <CommentMapper comments={user.myPosts} /></>)
                }
            </div>
        </>
    )
}


export default App;