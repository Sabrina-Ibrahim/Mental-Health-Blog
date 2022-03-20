import React from 'react';
import Logout from '../logout';
import CommentMapper from '../CommentMapper';
import ReplyMapper from '../ReplyMapper';

function Home(props) {
    return (
        <div>
            THIS IS THE HOME PAGE.
            {props.user && props.user.myPosts.map((post, i) => <><p key={i} style={{ backgroundColor: "#faddad" }}>Here are {props.user.firstName}'s posts!</p>
                <div key={props.user_id}>
                    <CommentMapper post={post} />
                    <ReplyMapper replies={post.replies ?? []} />
                </div>
            </>)
            }
            <Logout />
        </div>
    )
}

export default Home; 