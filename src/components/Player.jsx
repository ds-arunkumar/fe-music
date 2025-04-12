import { useEffect, useRef, useState } from "react"
import { assets, songsData } from "../assets/assets"

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const currentSong = songsData[currentSongIndex];

  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying){
      audioRef.current.pause();
      setIsPlaying(false)
    } else{
      audioRef.current.play();
      setIsPlaying(true)
      
    }
  }

  const handleNext = () =>{
    setCurrentSongIndex((prev)=>{
      const nextIndex = prev === songsData.length -1 ? 0 : prev + 1;
    return nextIndex
    }
    
    )
    setTimeout(playSong, 100);
  }

  const handlePrev = () => {
    setCurrentSongIndex((prev)=>{
      const prevIndex = prev === 0 ? songsData.length - 1 : prev - 1;
      return prevIndex
    }
      
    )
    setTimeout(playSong, 100)
  }

  const playSong = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        if (err.name !== "AbortError") {
          console.error("Playback error:", err);
        }
      });
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }
  useEffect(()=>{
    if (audioRef.current){
      audioRef.current.volume = 1;
    }
  },[])
  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4 fixed w-full bottom-0'>
      <audio ref={audioRef} src={currentSong.file}
      onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
      onLoadedMetadata={() => setDuration(audioRef.current.duration)}
       />
      <div className='hidden lg:flex items-center gap-4'>
        <img className='w-12' src={currentSong.image} alt='' />
        <div>
          <p>{currentSong.name}</p>
          <p>{currentSong.desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className='flex gap-4'>
          <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt=''/>
          <img onClick={handlePrev} className='w-4 cursor-pointer' src={assets.prev_icon} alt=''/>          
          {isPlaying ?(
            <img onClick={togglePlayPause} className='w-4 cursor-pointer' src={assets.pause_icon} alt=''/>
            
          ):(
            <img onClick={togglePlayPause} className='w-4 cursor-pointer' src={assets.play_icon} alt=''/> 
          )}     
          <img onClick={handleNext} className='w-4 cursor-pointer' src={assets.next_icon} alt=''/>
          <img className='w-4 cursor-pointer' src={assets.loop_icon} alt=''/>
        </div>
        <div className='flex items-center gap-5'>
          <p>{formatTime(currentTime)}</p>
          <div  className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer relative h-1'
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const width = rect.width;
            const newTime = (clickX / width) * duration;
            audioRef.current.currentTime = newTime;
            setCurrentTime(newTime);
          }}
          >
             <div
      className='absolute top-0 left-0 h-1 bg-green-800 rounded-full'
      style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
    >
  </div>
          </div>
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