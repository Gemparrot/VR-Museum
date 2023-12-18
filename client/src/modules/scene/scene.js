import * as THREE from "three";
import { PointerLockControls } from "three-stdlib";
import { VRButton } from "three/examples/jsm/webxr/VRButton.js";

export const scene = new THREE.Scene(); // create a scene
let camera;
let controls;
let renderer;
// let initialCameraY;

export const setupScene = (canvas) => {
  camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  scene.add(camera);
  camera.position.set(0, 2, 15);
  // initialCameraY = camera.position.y;

  //renderer = new THREE.WebGLRenderer({ antialias: false });

  let renderer = new THREE.WebGLRenderer({ canvas: canvas });

  renderer.setSize(window.innerWidth, window.innerHeight);
  //document.body.appendChild(renderer.domElement);

  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  controls = new PointerLockControls(camera, renderer.domElement);
  scene.add(controls.getObject());

  window.addEventListener("resize", onWindowResize, false);

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  // Create a custom VR button
  const vrButton = document.createElement("button");

  // Set the button's id to 'VRButton' for styling purposes
  vrButton.id = "VRButton";

  // Create an img element
  const img = document.createElement("img");

  // Set the src attribute to the URL of your image
  img.src = "../../../public/assets/vr-glasses.png";

  // Add some custom styling to the image
  img.style.width = "100%";
  img.style.height = "100%";

  // Append the image to the VR button
  vrButton.appendChild(img);

  // Add some custom styling to the VR button
  vrButton.style.position = "absolute";
  vrButton.style.top = "10px";
  vrButton.style.right = "10px";
  vrButton.style.width = "100px";
  vrButton.style.height = "50px";

  // Add the VR button to the document
  document.body.appendChild(vrButton);

  // Add event listener to the VR button
  vrButton.addEventListener("click", async () => {
    if (!renderer.xr.isPresenting) {
      const session = await navigator.xr.requestSession("immersive-vr", {
        optionalFeatures: ["local-floor", "bounded-floor"],
      });
      renderer.xr.setSession(session);
    } else {
      renderer.xr.setSession(null);
    }
  });

  return { camera, controls, renderer };
};
