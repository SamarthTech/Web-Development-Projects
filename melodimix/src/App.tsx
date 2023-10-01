import React from 'react';
import './App.css';
import SideBar from './components/SideBar';
import 'bootstrap/dist/css/bootstrap.css'
import MusicPlayer from './components/MusicPlayer';
import Home from './components/Home';
import SearchSong from './components/SearchSong';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import CoverImg from './components/CoverImg';
import SongProvider from './Context/SongInfo';
import Box from '@mui/material/Box/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

function App() {
  return (

    <BrowserRouter>
      <SongProvider>
        {/* <h1 className="text-success">Hello</h1> */}
        {/* <Background> */}
        {/* <Slider /> */}
        {/* </Background> */}
        <Box sx={{ bgcolor: '#121212'}} >
        <SideBar />
        
            
              <CoverImg />
              <div className="" style={{ paddingBottom: "200px" , marginLeft : "240px" }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/search" element={<SearchSong />} />
                </Routes>
              </div>
              
            

        <MusicPlayer />
        </Box>
      </SongProvider>
    </BrowserRouter >
  );
}

export default App;
