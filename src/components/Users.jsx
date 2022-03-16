import React from 'react';

const Users = (user) => {
    const { firstName, lastName, email, userName } = user
    return (
        <>
            <h2>{firstName}{lastName}</h2>
            {user && user.map(user => <li key={user}> {user} </li>)}
            <ul>
                {firstName}
                {lastName}
                {email}
                {userName}
            </ul>
        </>
    )
}

// const setUserRegistration = (props) => {
//     return (<>
//         <h2>{props.user.firstName}</h2>
//     </>);
// }

// export default Users;


// const Users = ({ user }) => {
//     const { firstName, lastName, email, userName } = user
//     return (<div>
//         <h2>{firstName} {lastName}</h2>
//         <p>email: {email}</p>
//         <p>userName: {userName}</p>
//     </div>
//     );
// }

export default Users;

