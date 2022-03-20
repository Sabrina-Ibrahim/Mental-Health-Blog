import React from 'react';
import Comment from '../Comment';
import ReplyMapper from '../ReplyMapper';

const Dementia = ({ users }) => {
    return (<div>
        <h2>This is the Dementia Page</h2>
        <h3>Currently there are more than 55 million people who live with dementia worldwide, with nearly 10 million new cases every year.
            Dementia can vary from person to person, and it can effect families just as much.
        </h3>

        {
            (users ?? []).map(user => {
                <ul>
                    {user.myPosts.filter(comment => comment.pageName === "Dementia").map(comment => {
                        <li key={comment._id}>
                            <div>
                                <Comment comment={comment} />
                                <ReplyMapper replies={comment.replies} />
                            </div>
                        </li>
                    })}
                </ul>
            })
        }
    </div>);
}

export default Dementia;





// function Dementia() {
//     return (
//         <div>
//             THIS IS THE DEMENTIA PAGE.
//         </div>
//     )
// }

// export default Dementia; 