import React, {useState} from 'react';
import CommentList from './CommentList';

function Buttons({upvotes, downvotes, usersComment}){
    const [like, setLike] = useState(upvotes)
    const [dislike, setDislike] = useState(downvotes)
    const [hideComments, setHideComments] = useState( false )
    const [text, setText] = ['Hide Comment']

    function handleLikes(){
        setLike( (like) => like + 1)
    }

    function handleDislikes(){
        setDislike((dislike) => dislike + 1)
    }

    function handlehideComments(){
        setHideComments(!hideComments)
        hideComments ? setText('Hide Comment') : setText('Show Comments')
        
    }
    return(
        <>
        <div class = "buttons">
            <button onClick = {handleLikes}>{like} 👍 </button>
            <button onClick = {handleDislikes}>{dislike} 👎 </button>
        </div>
        
        <div>
            <button onClick = {handlehideComments}>{text}</button>
        </div>
        <CommentList
         hideComments = {hideComments} usersComment = {usersComment}
        />
        </>
        
    )
}

export default Buttons;