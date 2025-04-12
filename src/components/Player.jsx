import { useDispatch, useSelector } from "react-redux"
import { assets } from "../assets/assets"
import { nextSong, playPause, prevSong } from "../redux/features/musics/playerSlice";
import { useEffect, useRef, useState } from "react";
 
 const Player = () => {
  const {activeSong, isPlaying, currentIndex} = useSelector((state)=>state.player);
  const dispatch = useDispatch();

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef(null);

  const handlePlayPause = () => {
    console.log('play/pause clicked')
    dispatch(playPause(!isPlaying));
  }

  const handleNext = () => {
    dispatch(nextSong(currentIndex + 1));
  };

  const handlePrev = () => {
    dispatch(prevSong(currentIndex - 1));
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !activeSong?.file) return;
  
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };
  
    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };
  
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
  
    // ✅ Handle play/pause outside the return
    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => console.log("Playing audio"))
          .catch((error) => console.error("Audio play error:", error));
      }
    } else {
      audio.pause();
      console.log("Paused audio");
    }
  
    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [isPlaying, activeSong, audioRef]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };
  
   return (
     <div className='h-[10%] bg-black flex justify-between items-center text-white px-4 fixed w-full bottom-0'>
       {activeSong && (
          <div className='hidden lg:flex items-center gap-4'>
            <img className='w-12' src={activeSong.image} alt='' />
            <div>
              <p>{activeSong.name}</p>
              <p>{activeSong.desc?.slice(0, 12)}</p>
            </div>
          </div>
        )}
       <div className='flex flex-col items-center gap-1 m-auto'>
         <div className='flex gap-4'>
           <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt=''/>
           <img onClick={handlePrev} className='w-4 cursor-pointer' src={assets.prev_icon} alt=''/>          
           {isPlaying ?(
            <img onClick={handlePlayPause} className='w-4 cursor-pointer' src={assets.pause_icon} alt=''/>
            
           ):(
            <img onClick={handlePlayPause} className='w-4 cursor-pointer' src={assets.play_icon} alt=''/>
           )}      
           <img onClick={handleNext}  className='w-4 cursor-pointer' src={assets.next_icon} alt=''/>
           <img className='w-4 cursor-pointer' src={assets.loop_icon} alt=''/>
           <audio key={activeSong?.file} ref={audioRef} src={activeSong?.file || ''} autoPlay onEnded={handleNext} />
         </div>
         <div className='flex items-center gap-5'>
           <p>{formatTime(currentTime)}</p>
           <input
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={(e) => {
                const seekTime = e.target.value;
                audioRef.current.currentTime = seekTime;
                setCurrentTime(seekTime);
              }}
              className="w-full h-1 bg-gray-300 rounded-full appearance-none cursor-pointer"
            />
           <p>{formatTime(duration)}</p>
         </div>
       </div>
       <div className='hidden lg:flex items-center gap-2 opacity-75'>
         <img className='w-4' src={assets.plays_icon} alt="" />
         <img className='w-4' src={assets.mic_icon} alt="" />
         <img className='w-4' src={assets.queue_icon} alt="" />
         <img className='w-4' src={assets.speaker_icon} alt="" />
         <img className='w-4' src={assets.volume_icon} alt="" />
         <div className='w-20 bg-slate-50 h-1 rounded'>
 
         </div>
         <img className='w-4' src={assets.mini_player_icon} alt="" />
         <img className='w-4' src={assets.zoom_icon} alt="" />
 
       </div>
     </div>
   )
 }
 
 export default Player