import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import * as THREE from "three";

import { scene, setupScene } from "../../modules/scene/scene.js";
import { setupRendering } from "../../modules/scene/renderer.js";
import { setupLighting } from "../../modules/scene/lighting.js";
import { keysPressed, updateMovement } from "../../modules/scene/movement.js";

import { createWalls } from "../../modules/structure/wall.js";
import { setupFloor } from "../../modules/structure/floor.js";
import { createCeiling } from "../../modules/structure/ceiling.js";

import { createPaintings } from "../../modules/models/paintings.js";
import { createBoundingBoxes } from "../../modules/models/boundingBox.js";
import { addObjectsToScene } from "../../modules/models/sceneHelpers.js";
import { loadStatueModel } from "../../modules/models/loadStatueModel.js";
import { createStand } from "../../modules/structure/stand.js";
import { clickHandling } from "../../modules/models/clickHandling.js";

function App() {
  const { id } = useParams();

  const clock = useRef(new THREE.Clock());

  useEffect(() => {
    const canvas = document.querySelector("#myThreeJsCanvas");
    let { camera, controls, renderer } = setupScene(canvas);

    canvas.addEventListener("click", function () {
      controls.lock();
    });

    const handleKeyDown = (event) => {
      keysPressed[event.key] = true;
      const delta = clock.current.getDelta();
      updateMovement(delta, controls, camera, walls, paintings, stand);
      // console.log(keysPressed)
    };

    const handleKeyUp = (event) => {
      keysPressed[event.key] = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    const textureLoader = new THREE.TextureLoader();

    const walls = createWalls(scene, textureLoader);
    const floor = setupFloor(scene);
    const ceiling = createCeiling(scene, textureLoader);
    const paintings = createPaintings(scene, textureLoader);
    const lighting = setupLighting(scene, paintings);
    const stand = createStand();
    scene.add(stand);

    loadStatueModel(scene, stand);

    createBoundingBoxes(walls);
    createBoundingBoxes(paintings);
    // createBoundingBoxes([stand]);

    addObjectsToScene(scene, paintings);

    clickHandling(renderer, camera, paintings);

    // setupRendering(scene, camera, renderer, paintings, controls, walls);

    // loadStatueModel(scene);

    // setupVR(renderer);

    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.current.getDelta();
      updateMovement(delta, controls, camera, walls);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas" />
    </div>
  );
}

export default App;
