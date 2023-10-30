import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AllShows from './component/AllShows';
import ViewSummary from './component/ViewSummary';

function App() {
  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<AllShows/>} />
      <Route path="/:id" element = {<ViewSummary/>} />
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
