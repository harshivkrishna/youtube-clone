import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Video from './pages/Video/Video'

const App = () => {
  const [sidebar,setSidebar]=useState(true);
  const [searchData, setSearchData] = useState("");

  return (
    <div>
      <Navbar setSidebar={setSidebar} setSearchData={setSearchData} />
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} searchData={searchData}  />}></Route>
        <Route path='/video/:categoryId/:videoId' element={<Video></Video>}></Route>
      </Routes>
    </div>
  )
}

export default App