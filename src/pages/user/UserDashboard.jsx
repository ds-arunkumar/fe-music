import Sidebar from "./Sidebar"
import { albumsData, songsData } from "../../assets/assets"
import AlbumItem from "./AlbumItem"
import SongItem from "./SongItem"
import Player from "../../components/Player"


const UserDashboard = () => {
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
                id={item._id} 
                image={item.image}
              />))}
          </div>
          
          <div className='mb-1 text-white'>
          <h1 className='my-1 font-bold text-2xl text-white'>Today's biggest hits</h1>
          <div className='flex overflow-auto'>
            {songsData.map((item,index)=>(<SongItem key={index} name={item.name} desc={item.desc} id={item._id} image={item.image}/>))}
          </div>
        </div>
        </div>

        </div>
      </div>
      <Player/>
    </div>
    
  )
}

export default UserDashboard