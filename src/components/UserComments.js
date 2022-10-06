
function UserComment({ user, comment}){
    return (
      <div className='comment' >
        <h2>{user}</h2>
        <h3>{comment}</h3>
      </div>
    )
  }

  export default UserComment;