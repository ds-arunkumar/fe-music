import Sidebar from "./Sidebar"
import { albumsData, songsData } from "../../assets/assets"
import AlbumItem from "./AlbumItem"
import SongItem from "./SongItem"
import { useDispatch } from "react-redux"
import { playPause, setActiveSong } from "../../redux/features/musics/playerSlice"


const UserDashboard = () => {


  const dispatch = useDispatch();

  const handleSongClick = (song, index)=>{
    dispatch(setActiveSong({song, data: songsData, i: index}));
    dispatch(playPause(true));
  }



 
  return (
    
    <div className="flex flex-col bg-black ">
      <div className="flex flex-row">
        <Sidebar/>
        <div className="w-[75%] ml-[25%] mt-[5%] overflow-auto h-[800px]">
        <div className='mb-1'>
          <h1 className='my-1 font-bold text-2xl text-white'>Featured Charts</h1>
          <div className='flex overflow-auto '>
            {albumsData.map((item,index)=>(
              <AlbumItem 
                key={index} 
                name={item.name} 
                desc={item.desc} 
                id={item.id} 
                image={item.image}
              />))}
          </div>
          
          <div className='mb-1 text-white'>
            <h1 className='my-1 font-bold text-2xl text-white'>Today's biggest hits</h1>
            <div className='flex overflow-auto'>
              {songsData.map((item,index)=>(
                <div 
                  key={index}
                  onClick={()=> handleSongClick(item, index)}
                  className="cursor-pointer"
                >
                  <SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>
                </div>
                ))}
            </div>
          </div>
        </div>

        </div>
      </div>
      
    </div>
    
  )
}

export default UserDashboard