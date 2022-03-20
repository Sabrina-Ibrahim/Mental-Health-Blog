// import React from 'react';
// import Comment from './Comment';
// import ReplyMapper from './ReplyMapper';

// const Grief = ({ users }) => {
//     return (<div>
//         <h2>Grief Page</h2>
//         <h3> _____ </h3>

//         {
//             (users ?? []).map(user => {
//                 <ul>
//                     {user.myPosts.filter(comment => comment.pageName === "Grief").map(comment => {
//                         <li key={comment._id}>
//                             <div>
//                                 <Comment comment={comment} />
//                                 <ReplyMapper replies={comment.replies} />
//                             </div>
//                         </li>
//                     })}
//                 </ul>
//             })
//         }
//     </div>);
// }

// export default Grief;





// // import React from 'react';

// // function Grief() {
// //     return (
// //         <div>
// //             THIS IS THE GRIEF PAGE.
// //         </div>
// //     )
// // }

// // export default Grief; 