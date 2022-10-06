import React from 'react';
import video from "../data/video.js";
import Buttons from './Buttons';
import Video from './Video';



function App() {
  // console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video 
      video = {video.embedUrl}
      update = {video.createdAt}
      views = {video.views} 
      />
      <Buttons 
      upvotes = {video.upvotes} 
      downvotes = {video.downvotes} 
      usersComment = {video.comments}
      />
    </div>
  );
}

export default App;
