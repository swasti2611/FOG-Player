import { useContext } from 'react';
import { assets } from '../../assets/assets';
import { PlayerContext } from '../../context/PlayerContext';

const Player = () => {
  const { 
    track, playStatus, play, pause, previous, next, seekBar, seekBg, seekSong, time 
  } = useContext(PlayerContext);

  return (
    <>
    <div className='bg-[#270606] w-[350px] custom-xsm:w-[30em] custom-sm:hidden custom-xs:hidden custtom-smx:hidden '></div>
    <div className="fixed bottom-0 w-full  sm:absolute sm:left-[79%] sm:top-[340px] sm:w-[300px] sm:h-[350px]
      bg-[rgba(107,0,0,1)] flex flex-col justify-between text-white p-4 
     rounded-none sm:rounded-[20px] custom-xsm:absolute custom-xsm:left-[60%] custom-xsm:w-[300px] custom-xsm:h-[330px] 
     custom-md:left-[74%] custom-md:top-[250px] custom-md:w-[16em] custom-mdx:left-[80%] custom-mdx:top-[40%]
     custom-smx:absolute custom-xsm:top-[230px] custom-xsm:h-[22em] custom-xsm:w-[15em] custom-xsm:left-[66%]">
      {/* Track Information - Hidden on Mobile */}
      <div className="hidden sm:flex sm:flex-col items-center">
      <h3 className='mb-2'>Now Playing</h3>
        <img 
          src={track.image} 
          alt={track.name} 
          className="w-[260px] h-[136px] rounded-[34px] object-cover"
        />
        <div className="mt-4 text-center">
          <h1 className="text-lg font-semibold">{track.name}</h1>
          <p className="text-sm text-gray-300">{track.desc.slice(0, 12)}</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center gap-2 mt-4">
        <div className="flex gap-4 justify-center">
          <img className="w-6 cursor-pointer" src={assets.shuffle_icon} alt="Shuffle" />
          <img className="w-6 cursor-pointer" onClick={previous} src={assets.prev_icon} alt="Previous" />
          {playStatus ? (
            <img className="w-6 cursor-pointer" onClick={pause} src={assets.pause_icon} alt="Pause" />
          ) : (
            <img className="w-6 cursor-pointer" onClick={play} src={assets.play_icon} alt="Play" />
          )}
          <img className="w-6 cursor-pointer" onClick={next} src={assets.next_icon} alt="Next" />
          <img className="w-6 cursor-pointer" src={assets.loop_icon} alt="Loop" />
        </div>

        <div className="flex items-center gap-5 w-full mt-4">
          <p>{time.currentTime.minute}:{time.currentTime.second}</p>
          <div
            onClick={seekSong}
            ref={seekBg}
            className="w-full max-w-[300px] bg-gray-300 rounded-full  cursor-pointer "
          >
            <hr ref={seekBar} className="h-1 border-none w-0 bg-green-800 rounded-full" />
          </div>
          <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>
    </div></>
    
  );
};

export default Player;
