// import React from 'react';
// import Comment from './Comment';
// import ReplyMapper from './ReplyMapper';

// const Anxiety = ({ users }) => {
//     return (<div>
//         <h2>Anxiety Page</h2>
//         <h3>Do you ever feel worry, nervousness, or unease, typically about an imminent event or something with an uncertain outcome?
//             You're not alone! Join the hundreds of members who have found comfort, support, and relief together. </h3>

//         {
//             (users ?? []).map(user => {
//                 <ul>
//                     {user.myPosts.filter(comment => comment.pageName === "Anxiety").map(comment => {
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



// export default Anxiety;