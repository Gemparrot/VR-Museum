// statue.js
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

export const loadStatueModel = (scene) => {
  const loader = new GLTFLoader();

  loader.load(
    "../public/models/statue/scene.gltf",
    (gltf) => {
      const statue = gltf.scene;

      console.log("STATUE", statue);

      statue.position.set(0, -3.2, 0);

      statue.scale.set(0.06, 0.06, 0.06);

      statue.traverse((child) => {
        if (child.isMesh) {
          map: child.material.map,
            (child.material.metalness = 0.0),
            (child.material.roughness = 0.2),
            (child.castShadow = true);

          console.log("Material:", child.material);
        }
      });

      scene.add(statue);
    },
    undefined,
    (error) => {
      console.error("An error occurred while loading the model.", error);
    }
  );
};
