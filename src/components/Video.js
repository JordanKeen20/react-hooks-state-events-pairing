
import VideoInfo from './VideoInfo'

function Video({video, views, update}){
    return(
        <>
        <iframe
        width="919"
        height="525"
        src={video}
        frameBorder="0"
        allowFullScreen
        title={video}
      />
      <h1>React Today and Tomorrow and 90% Cleaner React With Hooks</h1>
      <VideoInfo views = {views} update = {update} />
      </>
    )
}

export default Video;