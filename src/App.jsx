import Sidebar from './components/Sidebar/Sidebar'
import Player from './components/Player/Player'
import Display from './components/Display/Display'
import { useContext } from 'react'
import { PlayerContext } from './context/PlayerContext'

const App = () => {

  const { audioRef, track } = useContext(PlayerContext);

  return (
    <div className="h-screen bg-custom-gradient">

    {/* // <div className="h-screen w-full bg-gradient-to-r from-custom-color to-custom-gradient via-red-500"> */}
    <div className="h-[100%] flex ">
      {/* Sidebar takes 25% of the width */}
      <Sidebar className="w-1/4" />

      {/* Display takes 70% of the remaining width */}
      <Display className="w-[70%] " />

      {/* Player with custom styles */}
      <Player className="w-[30%]" />
    </div>

    {/* Audio element to handle playback */}
    <audio ref={audioRef} preload="auto" src={track.file}></audio>
  </div>
  )
}

export default App