import axios from 'axios';
import React, { useEffect } from 'react';
import useForm from '../../CustomHooks/useForm';
import CommentMapper from '../CommentMapper';
import NewsfeedItem from '../NewsfeedItem';
//import ReplyMapper from '../ReplyMapper';
import jwtDecode from 'jwt-decode';

const Dementia = (props) => {
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
        let form = { text: formValues.text, pageName: "Dementia" }
        CommentPost(form, props.user._id)
    }
    const { formValues, handleChange, handleSubmit } = useForm(ClickCmntPost);

    return (
        <div>
            <div className='PageTitle'>
                <h1><center>Welcome to the Dementia Page</center></h1>
                <p><center>Currently there are more than 55 million people who live with dementia worldwide, with nearly 10 million new cases every year.</center>
                    <p><center>Dementia can vary from person to person, and it can effect families just as much.</center></p>
                </p>
            </div>
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
                            .filter(post => post.pageName === "Dementia")
                            .map(post => <NewsfeedItem setUsers={props.setUsers} user={props.user} post={post} key={post._id} />)
                    }
                </div>
            </div>
        </div>
    )

}

export default Dementia;






