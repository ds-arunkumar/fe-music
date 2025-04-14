import { useState } from "react";
import { albumsData, assets, songsData } from "../../assets/assets";
import Sidebar from "./Sidebar";
import { Link, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addPlaylist } from "../../redux/features/musics/playlistSlice";




const CreatePlaylist = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const albumData = albumsData[0];
  console.log({  albumData, albumsData });

  const [playlistName, setPlaylistName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSongs, setSelectedSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState(songsData);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const results = songsData.filter(song=>
      song.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())
    );
    setFilteredSongs(results)
  }

  const toggleSelectSong = (song) => {
    const alreadySelected = selectedSongs.find((s) => s.id === song.id);
    if (alreadySelected) {
      setSelectedSongs(prev => prev.filter(s => s.id !== song.id));
    } else {
      setSelectedSongs(prev => [...prev, song]);
    }
  };

  const handleSavePlaylist = () => {
    if (!playlistName || selectedSongs.length === 0) {
      alert("Please add a playlist name and select at least one song.");
      return;
    }
    console.log("Playlist Saved:");
    console.log("Name:", playlistName);
    console.log("Songs:", selectedSongs);

    const newPlaylist = {
      id: Date.now(),
      name: playlistName,
      songs: selectedSongs,
    }
  
    dispatch(addPlaylist(newPlaylist));
  
    alert("Playlist saved successfully!");
    setPlaylistName("");
    setSelectedSongs([]);
  }

  

  if (!albumData) {
    return (
      <div className="text-white text-center pt-[6%]">
        <h2 className="text-2xl font-bold">Playlist not found</h2>
        <Link to="/dashboard" className="text-blue-400 underline mt-4 block">
          Go back to dashboard
        </Link>
      </div>
    );
  }



  return (
    <div className=" bg-black h-full w-full overflow-auto">
      <Sidebar/> 
      <div className="pt-[6%] flex gap-8 flex-col md:flex-row md:items-end w-[75%] ml-[25%] text-white">
        <img className="w-48" src={albumData.image} alt={albumData.name} />
        <div className="flex flex-col w-full">
          <input
            type="text"
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
            placeholder="Enter playlist name..."
            className="text-5xl font-bold bg-transparent border-b border-gray-600 focus:outline-none mb-3 md:text-7xl"
          />
          <h4>{albumData.desc}</h4>
        </div>
      </div>

      {/* Search Input */}
      <div className="w-[75%] ml-[25%] mt-10">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search songs..."
          className="w-[25%] px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
            onClick={handleSavePlaylist}
            className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 float-right mr-6"
          >
            Save Playlist
          </button>
      </div>

      {/* Song List */}
      <div className="w-[75%] ml-[25%] mt-5 mb-20">
        {filteredSongs.length > 0 ? (
          filteredSongs.map((song, index) => {
            const isSelected = selectedSongs.find(s => s.id === song.id);
            return (
              <div
                key={index}
                onClick={() => toggleSelectSong(song)}
                className={`flex items-center justify-between p-3 rounded cursor-pointer mb-2
                  ${isSelected ? "bg-green-600" : "hover:bg-gray-700"} text-white`}
              >
                <div className="flex items-center gap-3">
                  <img src={song.image} alt={song.name} className="w-10 h-10 rounded" />
                  <span>{song.name}</span>
                </div>
                <span className="text-sm text-gray-300">{song.duration}</span>
              </div>
            );
          })
        ) : (
          <p className="text-gray-400 text-center mt-5">No songs found.</p>
        )}
        </div>
        
      </div> 
    
  )
}

export default CreatePlaylist