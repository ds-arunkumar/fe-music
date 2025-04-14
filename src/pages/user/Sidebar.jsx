import { Link, useNavigate } from 'react-router'
import {assets} from '../../assets/assets'
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const navigate = useNavigate();
  const playlists = useSelector((state)=>state.playlist.userPlaylists);
  return (
    <div className='w-[25%] h-[75%] mt-[5%] p-2 flex-col gap-2 text-white hidden lg:flex fixed'>
      <div className='bg-[#121212] h-[15%] gap-4 rounded flex flex-col justify-around'>
        <Link to="/dashboard"  className='flex items-center gap-3 pl-8 cursor-pointer'>
          <img className='w-6' src={assets.home_icon} alt=''/>
          <p className='font-bold'>Home</p>
        </Link>
        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
          <img className='w-6' src={assets.search_icon} alt=''/>
          <p className='font-bold'>Search</p>
        </div>
      </div>
      <div className='bg-[#121212] h-[85%] rounded'>
        <div className='p-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img className='w-8' src={assets.stack_icon} alt=''/>
            <p className='font-semibold'>Your Library</p>
          </div>
          <div className='flex items-center gap-3'>
            <img className='w-5' src={assets.arrow_icon} alt=''/>
            <img className='w-5' src={assets.plus_icon} alt=''/>
          </div>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
          <h1>Create your first playlist </h1>
          <p className='font-light'>it's easy we will help you</p>
          
          <Link to="/dashboard/createplaylist">
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
          </Link>
        </div>
        <div className="px-4 pt-2 pb-2 bg-[#242424] m-2 rounded">
          {playlists.length > 0 && (
            <div className="text-sm text-gray-400 mb-2">Your Playlists</div>
          )}
          {playlists.map((playlist) => (
            <Link
              key={playlist.id}
              to={`/dashboard/playlist/${playlist.id}`} // You can change this route if needed
              className="block text-white hover:text-green-400 mb-2"
            >
              {playlist.name}
            </Link>
          ))}
        </div>

        

      </div>
    </div>
  )
}

export default Sidebar