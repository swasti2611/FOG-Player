import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faHouse, faGear } from '@fortawesome/free-solid-svg-icons';
import Musice from "../../assets/music.png";

const Sidebar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* Full Sidebar for Large Screens */}
            <div className='w-[15%] h-full flex-col text-white hidden lg:flex custom-md:w-[24%]'>
                <div className='bg-[#121212] h-full rounded flex flex-col gap-3'>
                    <div className='flex '>
                        <img src={Musice} alt='music-log' className='w-7 m-5' />
                        <span className='flex m-5 text-lg font-bold ml-[-9px]'>
                            <h3 className='text-[#FF5656]'>Dream</h3>Musice
                        </span>
                    </div>
                    <h3 className='pl-8'>Menu</h3>
                    <div onClick={() => navigate('/')} className='flex items-center gap-3 pl-8 cursor-pointer'>
                        <FontAwesomeIcon icon={faHouse} className='w-6 text-[#FF5656]' />
                        <p className='font-bold'>Home</p>
                    </div>

                    <div className="absolute top-[49em] left-2 right-0 p-4">
                        <h3 className="text-white my-4">General</h3>
                        <div className="flex items-center gap-3 text-white cursor-pointer">
                            <FontAwesomeIcon icon={faGear} className='text-red-color' />
                            <p className="font-bold">Setting</p>
                        </div>
                    </div>
                    
                </div>
            </div>

           

           
        </>
    );
};

export default Sidebar;
