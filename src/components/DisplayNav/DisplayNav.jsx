import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { useState } from 'react';
import { songsData } from '../../assets/assets';
import SongItem from '../SongItem/SongItem';


const DisplayNav = () => {

    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredSongs, setFilteredSongs] = useState(songsData); 
  const [isExpanded, setIsExpanded] = useState(false); // State to manage input expansion

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
    //add search logic here
    const filtered = songsData.filter(song =>
      song.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setFilteredSongs(filtered);
  setSearchTerm(''); // Clear the input after search
};
  

    return (
        <>
            <div className='w-full fixed flex items-center justify-arrownd font-semibold custom-smx:gap-6'>
                <div className='flex items-center gap-2 ml-2'>
                    <img onClick={() => navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
                    <img onClick={() => navigate(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />
                </div>
                
            <div className='flex items-center ml-5 gap-2 cursor-pointer'>
                <p className='bg-white text-black px-4 py-1 rounded-2xl'>All</p>
                <p className=' px-4 py-1 rounded-2xl custom-smx:hidden'>Music</p>
                <p className='px-4 py-1 rounded-2xl custom-smx:hidden custom-md:hidden'>Podcasts</p>
            </div>
            
 
    <div className="relative flex items-center ml-[150px] custom-smx:ml-1 custom-md:ml-[20px]">
    <input
        type="text"
        className={`transition-all duration-300 ease-in-out  rounded-full bg-[#2C0000] 
          ${isExpanded ? 'w-full' : 'w-0'} pl-10 pr-3 py-2 overflow-hidden 
          md:w-full md:pl-10 md:pr-3`} // Full width on larger screens
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
        onFocus={() => setIsExpanded(true)} // Expand on focus
        onBlur={() => { // Collapse when it loses focus, if empty
          if (searchTerm === '') setIsExpanded(false);
        }}
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="absolute left-3 top-1/2 transform -translate-y-1/2  cursor-pointer" 
        onClick={() => {
          setIsExpanded(!isExpanded); // Toggle expansion on icon click
          if (!isExpanded) setSearchTerm(''); // Clear input if expanding
        }}
      />
    </div>
      {/* Display the filtered songs */}
            {/* <div className=''>
                
                <div className='grid grid-cols-5 gap-4 custom-smx:grid-cols-2'>
                    {filteredSongs.map((item, index) => (
                        <SongItem key={index} name={item.name} id={item.id} image={item.image} />
                    ))}
                </div>

            </div> */}
            </div>
        </>
    )
}

export default DisplayNav