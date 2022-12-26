import { useState } from 'react';
import './App.css';

function App() {

  // UseStates variables 
  const [audioProgress, setAudioProgress] = useState(60)

  const handleMusicProgressBar = (e) => {
    setAudioProgress(e.target.value)
  }

  return (
    <>
    <div className="container">
      <video src="./Assets/Videos/Video1.mp4" autoPlay muted loop></video>
      <div className="blackScreen"></div>
      <div className="music-Container">
        <p className="musicPlayer">Music Player</p>
        <p className="music-Head-Name">Chasing</p>
        <p className="music-Artist-Name">NEFFEX</p>
        <img src="./Assets/Images/image1.jpg" alt="song Avatar" id="songAvatar" />
        <div className="musicTimerDiv">
          <p className="musicCurrentTime">00 : 00</p>
          <p className="musicTotalLength">03 : 49</p>
        </div>
        <input type="range" name="musicProgressBar" className="musicProgressBar" value={audioProgress}
        onChange={handleMusicProgressBar} />
        <div className="musicControlers">
          <i className='fa-solid fa-backward'></i>
          <i className='fa-solid fa-cirdle-play'></i>
          <i className='fa-solid fa-forward'></i>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
