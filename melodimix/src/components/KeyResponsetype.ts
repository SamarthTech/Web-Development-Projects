export interface RootObject {
        albumadamid: string;
        artists:     Artist[];
        genres:      Genres;
        hub:         Hub;
        images:      RootObjectImages;
        isrc:        string;
        key:         string;
        layout:      string;
        myshazam:    Myshazam;
        sections:    Section[];
        share:       Share;
        subtitle:    string;
        title:       string;
        type:        string;
        url:         string;
        urlparams:   Urlparams;
       }
       
       export interface Artist {
        adamid: string;
        id:     string;
       }
       
       export interface Genres {
        primary: string;
       }
       
       export interface Hub {
        actions:     Action[];
        displayname: string;
        explicit:    boolean;
        image:       string;
        options:     Option[];
        providers:   Provider[];
        type:        string;
       }
       
       export interface Action {
        id?:    string;
        name?:  string;
        share?: Share;
        type:   string;
        uri?:   string;
       }
       
       export interface Share {
        avatar:   string;
        href:     string;
        html:     string;
        image:    string;
        snapchat: string;
        subject:  string;
        text:     string;
        twitter:  string;
       }
       
       export interface Option {
        actions:             Action[];
        beacondata:          OptionBeacondata;
        caption:             string;
        colouroverflowimage: boolean;
        image:               string;
        listcaption:         string;
        overflowimage:       string;
        providername:        string;
        type:                string;
       }
       
       export interface OptionBeacondata {
        providername: string;
        type:         string;
       }
       
       export interface Provider {
        actions: Action[];
        caption: string;
        images:  ProviderImages;
        type:    string;
       }
       
       export interface ProviderImages {
        default:  string;
        overflow: string;
       }
       
       export interface RootObjectImages {
        background: string;
        coverart:   string;
        coverarthq: string;
        joecolor:   string;
       }
       
       export interface Myshazam {
        apple: Apple;
       }
       
       export interface Apple {
        actions: Action[];
       }
       
       export interface Section {
        beacondata?: SectionBeacondata;
        footer?:     string;
        metadata?:   Metadatum[];
        metapages?:  Metapage[];
        tabname:     string;
        text?:       string[];
        type:        string;
        youtubeurl?: Youtubeurl;
       }
       
       export interface SectionBeacondata {
        commontrackid: string;
        lyricsid:      string;
        providername:  string;
       }
       
       export interface Metadatum {
        text:  string;
        title: string;
       }
       
       export interface Metapage {
        caption: string;
        image:   string;
       }
       
       export interface Youtubeurl {
        actions: Action[];
        caption: string;
        image:   Image;
       }
       
       export interface Image {
        dimensions: Dimensions;
        url:        string;
       }
       
       export interface Dimensions {
        height: number;
        width:  number;
       }
       
       export interface Urlparams {
        "{trackartist}": string;
        "{tracktitle}":  string;
       }
       