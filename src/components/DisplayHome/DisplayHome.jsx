import { albumsData, songsData } from '../../assets/assets'
import AlbumItem from '../AlbumItem/AlbumItem'
import SongItem from '../SongItem/SongItem'
import DisplayNav from '../DisplayNav/DisplayNav'

const DisplayHome = () => {

    return (
        <>
            <DisplayNav />
            <div className="mb-4">
  <h1 className="my-5 font-bold text-2xl mt-[100px]">Featured Charts</h1>
  <div className="grid grid-cols-5 gap-4 custom-smx:grid-cols-2 custom-md:grid-cols-2">
    {albumsData.map((item, index) => (
      <AlbumItem key={index} name={item.name} image={item.image} id={item.id} />
    ))}
  </div>
</div>

<div className="mb-4">
  <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
  <div className="grid grid-cols-5 gap-4 custom-smx:grid-cols-2 custom-smx:w-[20em] custom-md:grid-cols-2">
    {songsData.map((item, index) => (
      <SongItem key={index} name={item.name} id={item.id} image={item.image} />
    ))}
  </div>
</div>

        </>
    )
}

export default DisplayHome