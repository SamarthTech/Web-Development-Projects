import { useContext, useEffect, useState } from "react";
import "../asset/css/home.css"
import { trackTitle } from '../data/trackChart'
import { Track } from "./hometype"
import { RootObject } from "./KeyResponsetype"
import playIcon from "../asset/images/icon/play_icon.png"
import pauseIcon from "../asset/images/icon/pause_icon.png"
import { IsPlayingContext } from "../Context/SongInfo";
import Box from "@mui/material/Box/Box";
import Paper from "@mui/material/Paper/Paper";

// type HomeProps = { name: any }

const Home = () => {
    // const [tracks, setTrack] = useState<any>(props.name)
    const { isPlaying, setIsPlaying } = useContext(IsPlayingContext)
    const [tracks, setTrack] = useState<any>(trackTitle.tracks)
    // useEffect(() => {
    const playSong = async (id: String) => {
        const url = `https://shazam.p.rapidapi.com/songs/get-details?key=${id}&locale=en-US`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': `${process.env.REACT_APP_api_key}`,
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }
        };
        fetch(url, options)
            .then(result => { return result.json() })
            .then(result => {
                let data = {
                    status: true,
                    musicUrl: result.hub.actions[1].uri,
                    imageurl: result.images.coverart,
                    key: result.key,
                    title: result.title,
                    subTitle: result.subtitle
                }
                return data;

            })
            .then(data => {
                setIsPlaying(data)
                console.log(data)
            })
            .then(() => {
                console.log("play", isPlaying)
            })

            .catch(e => {
                console.log(e)
            })
    }
    const pauseSong = (id: String) => {
        setIsPlaying({
            status: false,
            musicUrl: "",
            imageurl: "",
            key: 0,
            title: "",
            subTitle: ""
        })


    }
    return (
        <Box>
            <Paper />
            <div className="popularsong">
                <h3 style={{ color: "white", padding: "50px 0px 0px 0px" }}>Popular Songs</h3>
                <div className="TrackList">
                    {tracks?.map((item: Track) => {
                        return (
                            <div className="card" style={{ width: "18rem" }} id={item.key}>
                                <img src={item.images.coverart} className="card-img-top" alt="..." />
                                <div className="" style={{ display: "flex" }}>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                        {/* <a href="#" className="btn ">Go somewhere</a> */}
                                        <p>{item.subtitle}</p>
                                    </div>
                                    {/* <div className={isPlaying === item.key? "paused": "button"} onClick={() =>{handleclick(item.key)}}></div> */}
                                    {
                                        isPlaying.key.toString() === item.key ?
                                            <img src={pauseIcon} alt="" height="25px" onClick={() => pauseSong(item.key)} style={{ margin: "10px 10px" }} /> :
                                            <img src={playIcon} alt="" height="40px" onClick={() => playSong(item.key)} />

                                    }
                                </div>
                            </div>
                        )
                    })}
                </div>
                <br />
                <br />
            </div>
            <Paper />
        </Box>
    );
}

export default Home;