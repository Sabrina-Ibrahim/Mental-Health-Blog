import axios from 'axios';
import React, { useEffect } from 'react';
import useForm from '../../CustomHooks/useForm';
import CommentMapper from '../CommentMapper';
import NewsfeedItem from '../NewsfeedItem';
//import ReplyMapper from '../ReplyMapper';

const Depression = (props) => {
    //post a comment, makes API req
    const CommentPost = async (form, userId) => {
        await axios.post(`http://localhost:5000/api/comments/${userId}`, form)
            .then((res) => {
                console.log(res.data)

            })
            .catch(error => console.log(error));

    }

    const ClickCmntPost = () => {
        //take info out of form values, put in a new one and add pagename into it 
        let form = { text: formValues.text, pageName: "Depression" }
        CommentPost(form, props.user._id)
    }
    const { formValues, handleChange, handleSubmit } = useForm(ClickCmntPost);

    return (
        <div>
            <h1 className='CommentBox'>What's on your mind?</h1>
            <div>
                <form onSubmit={handleSubmit} className='Comment-form'>
                    <p> <input
                        value={formValues.text} onChange={handleChange} className='form-field' placeholder='Post a comment' name='text' /></p>

                    <button className="CommentButton" type='submit'>
                        Post
                    </button>
                </form>
            </div>
            <div id="depression__user_comments">
                <div>
                    {
                        props.users
                            .flatMap(user => user.myPosts)
                            .filter(post => post.pageName === "Depression")
                            .map(post => <NewsfeedItem post={post} key={post._id} />)
                        // .map(post => {
                        //     <li key={post._id}>
                        //         {post.text}
                        //         {/* <CommentMapper post={post} /> */}
                        //         {/* <ReplyMapper replies={post.replies ?? []} /> */}
                        //     </li>
                        // })
                    }
                </div>
            </div>
        </div>
    )

}

export default Depression;













// function Depression() {
//     return (
//         <div>
//             THIS IS THE DEPRESSION PAGE.

//         </div>
//     )
// }

