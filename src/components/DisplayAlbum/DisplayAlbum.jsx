import { useContext, useState } from 'react';
import { albumsData, assets, songsData } from '../../assets/assets';
import { useParams } from 'react-router-dom';
import { PlayerContext } from '../../context/PlayerContext';
import DisplayNav from '../DisplayNav/DisplayNav';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const DisplayAlbum = () => {
  const { id } = useParams();
  const { playWithId } = useContext(PlayerContext);
  const albumData = albumsData[id];

  // State for songs
  const [songs, setSongs] = useState(songsData);
  // State for the currently playing song
  const [activeSongId, setActiveSongId] = useState(null);

  // Handle drag end event
  const handleDragEnd = (result) => {
    // Check if dropped outside the list
    if (!result.destination) return;

    // Create a new array and re-order based on drag result
    const newSongs = Array.from(songs);
    const [removed] = newSongs.splice(result.source.index, 1); // Remove the dragged item
    newSongs.splice(result.destination.index, 0, removed); // Add it to the new position

    // Update state
    setSongs(newSongs);
  };

  // Function to play the song and set it as active
  const handleSongClick = (songId) => {
    playWithId(songId); // Play the song
    setActiveSongId(songId); // Set active song ID
  };

  return (
    <>
      <DisplayNav />

      {/* Album Cover Section */}
      <div className="m-7 w-full max-w-[800px] h-[450px] mx-auto sm:ml-[189px] relative top-[140px] custom-xsm:bottom-[40px]">
        <div
          className="w-full h-[290px] left-[-160px]  
          bg-green-600 rounded-[40px] custom-smx:left-[0] custom-smx:h-[200px] 
          custom-smx:h-[10em] custom-smx:mt-[-25px] relative bg-cover 
          bg-center custom-xsm:left-[-170px] custom-sm:top-[10px]"
          style={{
            backgroundImage: `url(${assets.jacksonBackground})`,
          }}
        >
          <div className="absolute top-[100px] left-[80px] text-white 
          custom-smx:top-[50px] custom-smx:left-[20px]  custom-xsm:top-[70px]">
            <h2 className="text-2xl font-bold">Michael Jackson</h2>
            <p className="text-lg">27.852.501 monthly listeners</p>
          </div>
          <img
            src={assets.michel}
            alt="Michel"
            className="absolute top-[-150px] left-[50%] transform translate-x-[-20%] w-[90%] sm:w-[635px] 
            sm:left-[286px] custom-smx:top-[-120px] custom-smx:h-[20em] custom-smx:left-[100px] 
            custom-xsm:top-[-120px] custom-xsm:left-[240px] custom-xsm:w-[30em]  custom-sm:w-[23em]"
          />
        </div>
      </div>

      {/* Drag and Drop Context for songs only */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="songs">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="mt-4 mx-5 custom-smx:mt-[-6em]"
            >
              {songs.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      onClick={() => handleSongClick(item.id)} // Play song on row click
                      className={`grid grid-cols-3 sm:grid-cols-4 p-2 text-[#a7a7a7] cursor-pointer items-center custom-smx:flex gap-6 ${activeSongId === item.id ? 'bg-line-red' : 'hover:bg-line-red'}`} // Highlight active song
                    >
                      {/* Song Information */}
                      <p className="text-white">
                        <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
                        <img className="inline w-[54px] mr-5" src={item.image} alt={item.name} />
                      </p>

                      {/* Album Name */}
                      <p className="text-[15px]">{albumData.name}</p>

                      {/* Date Hidden on Small Screens */}
                      <p className="text-[15px] hidden sm:block">5 days ago</p>

                      {/* Song Duration */}
                      <p className="text-[15px] text-center">{item.duration}</p>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default DisplayAlbum;
