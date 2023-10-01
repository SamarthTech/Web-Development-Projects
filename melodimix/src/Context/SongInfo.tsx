import { createContext, useState, Dispatch, SetStateAction, ReactNode, } from 'react'

export type IsPlaying = {
    status: boolean,
    musicUrl: any,
    imageurl: any,
    key: Number,
    title: String,
    subTitle: String
}

export interface isPlayingInterface {
    isPlaying: IsPlaying,
    setIsPlaying: Dispatch<SetStateAction<IsPlaying>>
}
const defaultSong = {
    isPlaying: {
        status: true,
        musicUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/f8/c2/1a/f8c21a39-ae82-4ae4-ab92-868b30605b80/mzaf_4056384404250272199.plus.aac.ep.m4a",
        imageurl: "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/5a/78/86/5a788626-308e-eb19-80e3-1b3b78ef1fe8/886446194783.jpg/400x400cc.jpg",
        key: 267429991,
        title: "Mekaba",
        subTitle: "Jain"
    },
    setIsPlaying: (isPlaying: IsPlaying) => { }
} as isPlayingInterface;

export const IsPlayingContext = createContext(defaultSong)

type SongProviderProps = {
    children?: ReactNode
}

const SongProvider: React.FC<SongProviderProps> = ({children}) => {
    // const [isPlaying, setIsPlaying] = useState<IsPlaying>({
    //     status: false,
    //     musicUrl: "",
    //     imageurl: "",
    //     key: 0,
    //     title: "",
    //     subTitle: ""
    // });
    const [isPlaying, setIsPlaying] = useState<IsPlaying>({
        status: true,
        musicUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/f8/c2/1a/f8c21a39-ae82-4ae4-ab92-868b30605b80/mzaf_4056384404250272199.plus.aac.ep.m4a",
        imageurl: "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/5a/78/86/5a788626-308e-eb19-80e3-1b3b78ef1fe8/886446194783.jpg/400x400cc.jpg",
        key: 267429991,
        title: "Mekaba",
        subTitle: "Jain"
    });

    return (
        <div className="">
            <IsPlayingContext.Provider value={{ isPlaying, setIsPlaying }} >
                {children}
            </IsPlayingContext.Provider>
        </div>
    )
}

export default SongProvider;