import * as THREE from "three";

export const setupFloor = (scene) => {
  const textureLoader = new THREE.TextureLoader();

  const FloorTexture = textureLoader.load("../../../public/img/Floor.jpg");
  const FloorTextureVertical = textureLoader.load(
    "../../../public/img/floor.jpg"
  );

  // Repeat the texture
  FloorTexture.wrapS = THREE.RepeatWrapping;
  FloorTexture.wrapT = THREE.RepeatWrapping;
  // Adjust these values to get the desired effect
  FloorTexture.repeat.set(10, 10);

  FloorTextureVertical.wrapS = THREE.RepeatWrapping;
  FloorTextureVertical.wrapT = THREE.RepeatWrapping;
  // Adjust these values to get the desired effect
  FloorTextureVertical.repeat.set(10, 10);

  const planeGeometry = new THREE.PlaneGeometry(45, 45);
  const planeMaterial = new THREE.MeshStandardMaterial({
    map: FloorTexture,
    side: THREE.DoubleSide,
  });

  const planeMaterialVertical = new THREE.MeshStandardMaterial({
    map: FloorTextureVertical,
    side: THREE.DoubleSide,
  });

  const floorPlane = new THREE.Mesh(planeGeometry, planeMaterial);
  const floorPlaneVertical = new THREE.Mesh(
    planeGeometry,
    planeMaterialVertical
  );

  floorPlane.rotation.x = Math.PI / 2;
  floorPlane.position.y = -Math.PI;

  floorPlaneVertical.rotation.x = Math.PI / 2;
  floorPlaneVertical.position.y = -Math.PI;

  scene.add(floorPlane);
  scene.add(floorPlaneVertical);
};
