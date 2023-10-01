export interface RootObject {
    properties: Properties;
    tracks:     Track[];
   }
   
   export interface Properties {
   }
   
   export interface Track {
    artists:        Artist[];
    highlightsurls: Highlightsurls;
    hub:            Hub;
    images:         Images;
    key:            string;
    layout:         string;
    properties:     Properties;
    share:          Share;
    subtitle:       string;
    title:          string;
    type:           TrackType;
    url:            string;
   }
   
   export interface Artist {
    adamid: string;
    alias:  string;
    id:     string;
   }
   
   export interface Highlightsurls {
    artisthighlightsurl: string;
    trackhighlighturl?:  string;
   }
   
   export interface Hub {
    actions:     Action[];
    displayname: Displayname;
    explicit:    boolean;
    image:       string;
    options:     Option[];
    type:        HubType;
   }
   
   export interface Action {
    id?:  string;
    name: Name;
    type: ActionType;
    uri?: string;
   }
   
   export enum Name {
    Apple = "apple",
    HubApplemusicDeeplink = "hub:applemusic:deeplink",
   }
   
   export enum ActionType {
    Applemusicopen = "applemusicopen",
    Applemusicplay = "applemusicplay",
    URI = "uri",
   }
   
   export enum Displayname {
    AppleMusic = "APPLE MUSIC",
   }
   
   export interface Option {
    actions:             Action[];
    beacondata:          Beacondata;
    caption:             Caption;
    colouroverflowimage: boolean;
    image:               string;
    listcaption:         Listcaption;
    overflowimage:       string;
    providername:        Providername;
    type:                BeacondataType;
   }
   
   export interface Beacondata {
    providername: Providername;
    type:         BeacondataType;
   }
   
   export enum Providername {
    Applemusic = "applemusic",
   }
   
   export enum BeacondataType {
    Open = "open",
   }
   
   export enum Caption {
    Open = "OPEN",
   }
   
   export enum Listcaption {
    OpenInAppleMusic = "Open in Apple Music",
   }
   
   export enum HubType {
    Applemusic = "APPLEMUSIC",
   }
   
   export interface Images {
    background: string;
    coverart:   string;
    coverarthq: string;
    joecolor:   string;
   }
   
   export interface Share {
    avatar?:  string;
    href:     string;
    html:     string;
    image:    string;
    snapchat: string;
    subject:  string;
    text:     string;
    twitter:  string;
   }
   
   export enum TrackType {
    Music = "MUSIC",
   }
   


//    -------------------------------
