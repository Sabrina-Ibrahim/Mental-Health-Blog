import axios from 'axios';
import React, { useEffect } from 'react';
import useForm from '../../CustomHooks/useForm';
import CommentMapper from '../CommentMapper';
import NewsfeedItem from '../NewsfeedItem';
//import ReplyMapper from '../ReplyMapper';
import jwtDecode from 'jwt-decode';

const Grief = (props) => {
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
        let form = { text: formValues.text, pageName: "Grief" }
        CommentPost(form, props.user._id)
    }
    const { formValues, handleChange, handleSubmit } = useForm(ClickCmntPost);

    return (
        <div>
            <div className='PageTitle'>
                <h1><center>Welcome to the Grief Support Page</center></h1>
                <h2>What's on your mind?</h2>
            </div>
            <div>
                <form onSubmit={handleSubmit} className='Comment-form'>
                    <div> <input
                        value={formValues.text} onChange={handleChange} className='form-field' placeholder='Post a comment' name='text' /></div>

                    <button className="CommentButton" type='submit'>
                        Post
                    </button>
                </form>
            </div>
            <div id="Grief__user_comments">
                <div>
                    {
                        props.users
                            .flatMap(user => user.myPosts)
                            .filter(post => post.pageName === "Grief")
                            .map(post => <NewsfeedItem setUsers={props.setUsers} user={props.user} post={post} key={post._id} />)
                    }
                </div>
            </div>
        </div>
    )

}

export default Grief;

