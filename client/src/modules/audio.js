import * as THREE from "three";

let sound;
let bufferLoaded = false;

// setup audio for the scene
export const setupAudio = (camera) => {
  console.log("Setting up audio");

  // create an audio listener and add it to the camera
  const listener = new THREE.AudioListener();
  camera.add(listener);

  sound = new THREE.Audio(listener);

  const audioLoader = new THREE.AudioLoader();
  audioLoader.load(
    "../../public/sounds/tiersen.mp3",
    function (buffer) {
      console.log("Audio file loaded");

      // load the audio file
      sound.setBuffer(buffer);
      sound.setLoop(true);
      sound.setVolume(0.5);
      bufferLoaded = true;
    },
    undefined,
    function (error) {
      console.error("Error loading audio file:", error);
    }
  );
};

// play audio
export const startAudio = () => {
  // check if the buffer is loaded before playing
  if (sound && bufferLoaded) {
    sound.play();

    console.log("Audio started");
  }
};

// pause audio
export const stopAudio = () => {
  if (sound) {
    sound.pause();
    console.log("Audio stopped");
  }
};
