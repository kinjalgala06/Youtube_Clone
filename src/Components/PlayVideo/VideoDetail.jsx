import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

function PlayVideo() {
  const { videoId } = useParams();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Now Playing</h2>
      
      <ReactPlayer 
        url={`https://www.youtube.com/watch?v=${videoId}`} 
        controls 
        playing 
        width="100%" 
        height="500px" 
      />
      
    </div>
  );
}

export default PlayVideo;

