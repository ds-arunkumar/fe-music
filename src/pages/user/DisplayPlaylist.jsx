import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router"
import Sidebar from "./Sidebar";
import { playPause, setActiveSong } from "../../redux/features/musics/playerSlice";


const DisplayPlaylist = () => {
  const dispatch = useDispatch();
  const {id}= useParams();
  const playlists = useSelector((state)=>state.playlist.userPlaylists);
  const playlist = playlists.find(p=>p.id.toString()===id);

  if (!playlist){
    return <div className="text-white pt-[6%]">Playlist not found</div>
  }
  return (
    <div>
      <Sidebar/>
        <div className="text-white p-6 ml-[25%]">
        <h1 className="text-3xl font-bold mb-4">{playlist.name}</h1>
        {playlist.songs.map((song, index) => (
          <div 
            key={index} 
            onClick={() => {
              dispatch(setActiveSong({ song, data: playlist.songs, i: index }));
              dispatch(playPause(true));
            }}
            className="mb-2 flex items-center gap-4 cursor-pointer hover:bg-gray-800">
            <img src={song.image} alt={song.name} className="w-12 h-12 rounded" />
            <span>{song.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DisplayPlaylist