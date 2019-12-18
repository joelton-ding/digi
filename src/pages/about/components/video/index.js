import React from 'react'
import Fade from 'react-reveal/Fade'
import { Player } from 'video-react'
// import "../../../../../node_modules/video-react/styles/video-react.scss"

import './video.scss'
import styles from './style.module.scss'


const VideoPage = () => { 
  return (
    <div id="video" className={styles.video}>
      <div className={`content ${styles.content}`}>
        <Fade left>
          <Player
              className={styles.player}
              playsInline
              poster="https://video-react.js.org/assets/poster.png"
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
        </Fade>
          </div>
      </div>
  )
}

export default VideoPage