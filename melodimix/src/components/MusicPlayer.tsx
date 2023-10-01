// import song from '../asset/music/song.mp3'
import { useState ,useContext } from "react"
import "../asset/css/musicplayer.css"
import { IsPlayingContext } from "../Context/SongInfo"

function MusicPlayer() {
    
    const {isPlaying }  = useContext(IsPlayingContext)
    return (
        <>
            {(isPlaying?.status) ? (
                <div className="musicContainer">
                    <div className="musicDetails" id={`${isPlaying.key}`}>
                        <img src={isPlaying.imageurl} alt="" height="60px" />
                        <div className="musicName">
                            <span className="Title">{isPlaying.title}</span>
                            <span className="subTitle">{isPlaying.subTitle}</span>
                        </div>
                    </div>
                    <div className="musicplayer">
                        <audio controls src={isPlaying?.musicUrl} id="myAudio" className="audio"></audio>
                    </div>
                </div>
            )
                :
                null}
        </>

    )
}

export default MusicPlayer