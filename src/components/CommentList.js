import React from 'react';
import UserComment from './UserComments';


function CommentList({ hideComments, usersComment}){
    return(
        <>
        <div className = {hideComments ? 'comment-list--invisible' :
         'comment-list'} >
            <h1>{usersComment.length} Comments</h1>
            {usersComment.map(({id, user, comment})=>(
                <UserComment key = {id} user = {user} comment = {comment}/> 
            ))}
        </div>
        </>
    )
}

export default CommentList;