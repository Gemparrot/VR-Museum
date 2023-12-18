import * as THREE from "three";

export const createCeiling = (scene, textureLoader) => {
  const ceilingTexture = textureLoader.load("../../../public/img/ceiling.jpg");

  const ceilingGeometry = new THREE.PlaneGeometry(45, 40);
  const ceilingMaterial = new THREE.MeshBasicMaterial({
    map: ceilingTexture,
    side: THREE.DoubleSide,
  });

  const ceiling = new THREE.Mesh(ceilingGeometry, ceilingMaterial);

  ceiling.rotation.x = Math.PI / 2;

  ceiling.position.y = 10;

  scene.add(ceiling);
};
