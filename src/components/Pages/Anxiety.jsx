import axios from 'axios';
import React, { useEffect } from 'react';
import useForm from '../../CustomHooks/useForm';
import CommentMapper from '../CommentMapper';
import NewsfeedItem from '../NewsfeedItem';
//import ReplyMapper from '../ReplyMapper';
import jwtDecode from 'jwt-decode';


const Anxiety = (props) => {
    //post a comment, makes API req
    const CommentPost = async (form, userId) => {
        await axios.post(`http://localhost:5000/api/comments/${userId}`, form, { headers: { "x-auth-token": localStorage.getItem("token") } })
            .then((res) => {
                props.setUsers(res.data)
                console.log(res.data)

            })
            .catch(error => console.log(error));

    }

    const ClickCmntPost = () => {
        //take info out of form values, put in a new one and add pagename into it 
        let form = { text: formValues.text, pageName: "Anxiety" }
        CommentPost(form, props.user._id)
    }
    const { formValues, handleChange, handleSubmit } = useForm(ClickCmntPost);

    return (
        <div>
            <div className='PageTitle'>
                <h1><center>Welcome to the Anxiety Support Page</center></h1>
                <p><center>Do you ever feel worry, nervousness, or unease, typically about an imminent event or something with an uncertain outcome?</center></p>
                <p><center>You're not alone! Join the hundreds of members who have found comfort, support, and relief together.</center></p>
            </div>

            <h1 className='CommentBox'>What's on your mind?</h1>
            <div>
                <form onSubmit={handleSubmit} className='Comment-form'>
                    <p> <input
                        className='form-info' value={formValues.text} onChange={handleChange} placeholder='Post a comment' name='text' /></p>

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
                            .filter(post => post.pageName === "Anxiety")
                            .map(post => <NewsfeedItem setUsers={props.setUsers} user={props.user} post={post} key={post._id} />)
                    }
                </div>
            </div>
        </div>
    )

}

export default Anxiety;
