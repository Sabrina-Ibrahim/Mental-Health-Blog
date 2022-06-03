import React from 'react';
import Logout from '../logout';
import CommentMapper from '../CommentMapper';
import ReplyMapper from '../ReplyMapper';


function Home(props) {
    return (
        <div>
            {props.user && <div>
                <img className='profile-picture' src={require('../../Photos/person.jpeg')} />
                <h1 className='homeTitle'>Welcome {props.user.firstName},</h1>
                <div className='post-header'>
                    MEMBER {props.user.firstName.toUpperCase()} POSTS
                </div>
                <div className='post-items'>
                    {props.user.myPosts.map((post, i) =>
                        <div key={i}>
                            {post.text}
                            {post.replies.map((reply, i) =>
                                <div key={i}>
                                    <div>
                                        <div>
                                            <h3 className='reply-items'>REPLIES</h3>
                                            -{reply}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                </div>
            </div>}
            <Logout />
        </div>
    )

}

export default Home; 