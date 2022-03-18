import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserMapper from './components/UserMapper';
import CommentMapper from './components/CommentMapper';
import ReplyMapper from './components/ReplyMapper';
import Anxiety from './components/Anxiety';
//import Register from './components/Register';
import {
    BrowserRouter,
    Routes,
    Route,
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
                    onClick={() => logoutUser}
                >
                    Logout
                </button>
            </div >



            {/* <Nav />//will use link comp. */}
            <BrowserRouter>
                <Routes>
                    <Route />//these will be my pages
                    <Route path="home" />
                    <Route path="anxiety" element={<Anxiety users={users} />} />
                    <Route />
                    <Route />
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
//COME BACk
// handleLogout = async () => {
//     localStorage.clear();
//     this.setState({
//         currentUser: undefined,
//     })
// }


export default App;