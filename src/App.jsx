import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from "react"
import Navbar from './Components/Navbar/Navbar';
import './index.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Video from './pages/Video/Video';
import SearchTerm from './Components/Search/SearchFeed';
import PlayVideo from './Components/PlayVideo/PlayVideo';
import VideoDetail from './Components/PlayVideo/VideoDetail';

function App() {
  const[sidebar,setSidebar]=useState(true);

  return(
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} />}/>
        <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
        <Route path='search/:searchTerm' element={<SearchTerm/> }/>
        <Route path='/search/:searchTerm/video/:videoId' element={<PlayVideo />}/>
        <Route path='video/:id' element={<VideoDetail/>}/>
      </Routes>
    </div>
  )
}

export default App
