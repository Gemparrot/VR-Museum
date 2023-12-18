import * as THREE from "three";
import { VRButton } from "three/examples/jsm/webxr/VRButton.js";

export const setupRendering = (
  scene,
  camera,
  renderer,
  paintings,
  controls,
  walls
) => {
  const clock = new THREE.Clock();

  renderer.shadowMap.enabled = true;

  // Enable WebXR in the renderer
  renderer.xr.enabled = true;

  const vrButton = VRButton.createButton(renderer);

  vrButton.style.position = "absolute";
  vrButton.style.top = "10px";
  vrButton.style.left = "10px";

  document.body.appendChild(vrButton);

  let render = function () {
    //   const delta = clock.getDelta();
    //   updateMovement(delta, controls, camera, walls);
    //   const distanceThreshold = 8;
    //   let paintingToShow;
    //   paintings.forEach((painting) => {
    //     const distanceToPainting = camera.position.distanceTo(painting.position);
    //     if (distanceToPainting < distanceThreshold) {
    //       paintingToShow = painting;
    //     }
    //   });
    //   if (paintingToShow) {
    //     displayPaintingInfo(paintingToShow.userData.info);
    //   } else {
    //     hidePaintingInfo();
    //   }
    //   renderer.gammaOutput = true;
    //   renderer.gammaFactor = 2.2;
    //   renderer.render(scene, camera);
    //   requestAnimationFrame(render);
    // };
    // render();
  };

  function animate() {
    renderer.setAnimationLoop(function () {
      renderer.render(scene, camera);
    });
  }

  animate();
};
