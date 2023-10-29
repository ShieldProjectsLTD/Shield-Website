import React from 'react';
import ReactPlayer from 'react-player';
import Player from "../../styles/player.module.css"

const VideoContainer = () => {
  return (
    <div className={Player.container}>
        <div className={Player.topBorder}></div>
        <div className={Player.text}>
        <p>Так-же посмотрите трейлер-видео</p>
      </div>
    <div className={Player.vrame}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=Rla3FUlxJdE"
          className={Player.youtube} 
          controls
          width="1300px" 
          height="600px"
        />
      </div>
      <div className={Player.bottomBorder}></div>
    </div>
  );
};

export default VideoContainer;
