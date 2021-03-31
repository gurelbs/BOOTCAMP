import './App.css';
import React,{useState,useEffect,useRef} from 'react'
function App() {
  const [isPlay, setIsPlay] = useState(false)
  const videoRef = useRef()
  useEffect(() => {
    const playVideoBtn = () => {
      if (isPlay){
        videoRef.current.play() 
        videoRef.current.loop = isPlay
      } else {
        videoRef.current.pause()  
      } 
    }
    playVideoBtn()
  }, [isPlay])
  return (
    <div className="App">
        <video ref={videoRef}>
        <source src="https://cdn.videvo.net/videvo_files/video/free/2017-08/small_watermarked/170724_15_Setangibeach_preview.webm"
            type="video/mp4"/>
            <source src="https://cdn.videvo.net/videvo_files/video/free/2017-08/small_watermarked/170724_15_Setangibeach_preview.webm"
            type="video/webm"/>      
        </video>
        <div className="flex">
          <button 
            onClick={() => setIsPlay(!isPlay)}
            className={`btn fas ${!isPlay ? 'fa-play' : 'fa-pause'}`}/>
        </div>
    </div>
  );
}

export default App;
