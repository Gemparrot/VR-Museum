import { useNavigate } from "react-router-dom";
// import { startAudio, stopAudio } from "../../modules/audio";
import "./MuseumMenu.css";

const MuseumMenu = ({ museum }) => {
  // const [isAudioPlaying, setAudioPlaying] = useState(false);
  // const [isAboutVisible, setAboutVisible] = useState(false);

  const navigate = useNavigate();

  const handleExploreArtClick = () => {
    navigate(museum.route);
  };

  // const handleAboutClick = () => {
  //   console.log("About button clicked");
  //   setAboutVisible(true); // Show the About overlay
  // };

  // const handleCloseAboutClick = () => {
  //   console.log("About button clicked");
  //   setAboutVisible(false); // Hide the About overlay
  // };

  // const handleStartAudioGuideClick = () => {
  //   if (!isAudioPlaying) {
  //     startAudio(); // Start the audio
  //     setAudioPlaying(true); // Update audio state
  //   }
  // };

  // const handleStopAudioGuideClick = () => {
  //   if (isAudioPlaying) {
  //     stopAudio(); // Stop the audio
  //     setAudioPlaying(false); // Update audio state
  //   }
  // };

  return (
    <div id="menu" className="museum-menu">
      {/* <div id="img_container">
        <div id="menuImg"></div>
      </div> */}
      <div id="content_container">
        <div id="content">
          <div className="title">
            <h1>{museum.name}</h1>
          </div>
          <div className="title-info">
            <p>Welcome to an immersive 3D {museum.name} experience.</p>
            <p>{museum.text}</p>
          </div>
          <button className="play_button" onClick={handleExploreArtClick}>
            EXPLORE ART
          </button>

          {/* <div id="about_button_container">
            <button onClick={handleAboutClick}>ABOUT</button>
          </div>

          {isAboutVisible && (
            <div id="about-overlay">
              <button id="close-about" onClick={handleCloseAboutClick}>
                X
              </button>
              <h1>About the 3D Art Gallery</h1>
            </div>
          )}*/}
        </div>
      </div>

      {/* <div id="audio_controls">
        <button
          id="start_audio"
          onClick={handleStartAudioGuideClick}
          disabled={isAudioPlaying}
        >
          Start Audio Guide
        </button>
        <button
          id="stop_audio"
          onClick={handleStopAudioGuideClick}
          disabled={!isAudioPlaying}
        >
          Stop Audio Guide
        </button>
      </div> */}
    </div>
  );
};

export default MuseumMenu;
