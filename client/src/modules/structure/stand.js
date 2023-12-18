import * as THREE from "three";

export const createStand = () => {
  // Load the texture
  const textureLoader = new THREE.TextureLoader();
  const standTexture = textureLoader.load(
    "../../../public/img/white-texture.jpg"
  );

  // Create a box geometry for the stand
  const standGeometry = new THREE.BoxGeometry(3.5, 5, 3.5);

  // Apply the texture to the material
  const standMaterial = new THREE.MeshLambertMaterial({ map: standTexture });

  const stand = new THREE.Mesh(standGeometry, standMaterial);

  // Position the stand at the center of the floor and slightly above the floor
  stand.position.set(0, -2.75, 0);

  // Create a box geometry for the top part
  const topGeometry = new THREE.BoxGeometry(5.5, 0.5, 5.5);

  const top = new THREE.Mesh(topGeometry, standMaterial);

  // Position the top part above the stand
  top.position.set(0, 0, 0);

  // Create a group and add the stand and the top part to it
  const group = new THREE.Group();
  group.add(stand);
  group.add(top);

  return group;
};
