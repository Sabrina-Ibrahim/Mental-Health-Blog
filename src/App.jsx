import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Users from './components/Users';
//import Register from './components/Register';

//component code 
function App() {
    //specific variable, setUsers will set users = to w/e i want that (assignment function)
    //res = object, data is w/e in it. everything backend is sending to me.
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5002/api/users/').then(res => setUsers(res.data))
        console.log(users);
    });
    return (
        <div>
            <h1>TEST USERS</h1>
            <Users user={users} />
        </div>
    )
}





// function App() {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         let response = axios.get('http://localhost:5002/api/users/').then(response => setUsers(response.data))
//         console.log(response)
//     }, []);
//     return (
//         <div>
//             <h1>test</h1>
//             <h2><Users user={users[0]} /></h2>
//         </div>
//     )
// }


export default App;