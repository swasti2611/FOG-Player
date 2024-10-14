import {useRef } from 'react'
import DisplayHome from '../DisplayHome/DisplayHome'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayAlbum from '../DisplayAlbum/DisplayAlbum'
import { albumsData } from '../../assets/assets'

const Display = () => {

  const displayRef = useRef();
  const location = useLocation();
  let isAlbum = location.pathname.includes("album");
  let albumId = isAlbum ? location.pathname.slice(-1) : "";
  let bgColor = albumsData[Number(albumId)].bgColor;

 

  return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded  text-white overflow-auto lg:w-[65%] lg:ml-0'>
      <Routes>
        <Route path='/' element={<DisplayHome />} />
        <Route path='/album/:id' element={<DisplayAlbum />} />
      </Routes>
    </div>
  )
}

export default Display