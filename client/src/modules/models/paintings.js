import * as THREE from "three";

import { paintingData } from "./paintingData.js";

export function createPaintings(scene, textureLoader) {
  let paintings = [];

  const frameTexture = textureLoader.load("../../../public/img/frame.jpg");

  // Loop through paintingData array and create a painting for each object in the array
  paintingData.forEach((data) => {
    const painting = new THREE.Mesh(
      new THREE.PlaneGeometry(data.width, data.height),
      new THREE.MeshLambertMaterial({ map: textureLoader.load(data.imgSrc) })
    );

    painting.position.set(data.position.x, data.position.y, data.position.z);
    painting.rotation.y = data.rotationY;

    painting.userData = {
      type: "painting",
      info: data.info,
      url: data.info.link,
    };

    painting.castShadow = true;
    painting.receiveShadow = true;

    // Create a frame for each painting
    const frame = new THREE.Mesh(
      new THREE.PlaneGeometry(data.width + 1.7, data.height + 0.8),
      new THREE.MeshLambertMaterial({ map: frameTexture })
    );

    if (Math.abs(painting.rotation.y) === Math.PI / 2) {
      if (painting.rotation.y > 0) {
        frame.position.set(
          data.position.x - 0.01,
          data.position.y,
          data.position.z
        );
        painting.position.x += 0.02;
      } else {
        frame.position.set(
          data.position.x + 0.01,
          data.position.y,
          data.position.z
        );
        painting.position.x -= 0.02;
      }
    } else if (painting.rotation.y === 0) {
      frame.position.set(
        data.position.x,
        data.position.y,
        data.position.z + 0.01
      );
      painting.position.z += 0.02;
    } else if (Math.abs(painting.rotation.y) === Math.PI) {
      frame.position.set(
        data.position.x,
        data.position.y,
        data.position.z - 0.01
      );
      painting.position.z -= 0.02;
    }

    frame.rotation.y = data.rotationY;

    scene.add(frame);

    paintings.push(painting);
  });

  return paintings;
}
