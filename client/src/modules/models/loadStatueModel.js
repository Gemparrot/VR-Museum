import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const loadStatueModel = (scene, stand) => {
  const loader = new GLTFLoader();

  loader.load(
    "../../../public/models/porsche_918_spyder/scene.gltf",
    (gltf) => {
      const statue = gltf.scene;

      statue.position.set(
        stand.position.x,
        stand.position.y + 0.5,
        stand.position.z
      );

      //Scale Statue
      // const scale = 0.5; // Adjust this value as needed
      // statue.scale.set(scale, scale, scale);

      scene.add(statue);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
};
