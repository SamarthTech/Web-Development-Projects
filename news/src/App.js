
import Navbar from './components/Navbar';
import './App.css';
import News from './components/News';


import{
  BrowserRouter as Router,
  Routes,
  Route,
  
}from"react-router-dom"


function App() {
  return (
    <div>
      <Router>
  <Navbar/>
  
  <Routes>
  <Route path='/' element={<News/>}>
    </Route>
    <Route path='/general' element={<News key="general" pageSize={10} category="general" country="in" />}>
    </Route>
   
    <Route path='/business' element={<News key="business" pageSize={10} category="business" country="in" />}>
    </Route>
    <Route path='/health' element={<News key="health" pageSize={10} category="health" country="in" />}>
    </Route>
    <Route path='/science' element={<News key="science" pageSize={10} category="science" country="in" />}>
    </Route>
    <Route path='/entertainment' element={<News  key="entertainment" pageSize={10} category="entertainment" country="in" />}>
    </Route>
    <Route path='/technology' element={<News key="technology" pageSize={10} category="technology" country="in" />}>
    </Route>
    <Route path='/sports' element={<News key="sports" pageSize={10} category="sports" country="in" />
    }></Route>
    
  </Routes>
  </Router>
  </div>
  );
}


export default App;
