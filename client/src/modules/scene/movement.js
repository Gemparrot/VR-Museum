import * as THREE from "three";

// let isJumping = false;
// let jumpSpeed = 0;
// object to hold the keys pressed
export const keysPressed = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
  w: false,
  a: false,
  s: false,
  d: false,
  Space: false,
};

// parameters we get from setupRendering where updateMovement is called.
export const updateMovement = (
  delta,
  controls,
  camera,
  walls,
  paintings,
  stand
) => {
  const moveSpeed = 20 * delta;

  // Clone camera to revert position incase of collision
  const previousPosition = camera.position.clone();

  if (keysPressed.ArrowRight || keysPressed.d) {
    controls.moveRight(moveSpeed);
  }
  if (keysPressed.ArrowLeft || keysPressed.a) {
    controls.moveRight(-moveSpeed);
  }
  if (keysPressed.ArrowUp || keysPressed.w) {
    controls.moveForward(moveSpeed);
  }
  if (keysPressed.ArrowDown || keysPressed.s) {
    controls.moveForward(-moveSpeed);
  }

  // if (keysPressed[' '] && !isJumping) {
  //   isJumping = true;
  //   jumpSpeed = 5; // Adjust this value as needed
  // }

  // if (isJumping) {
  //   camera.position.y += jumpSpeed * delta;
  //   jumpSpeed -= 9.8 * delta; // Simulate gravity

  //   if (camera.position.y <= 0) { // Adjust this value as needed
  //     camera.position.y = 0;
  //     isJumping = false;
  //   }
  // }

  // Check for collisions to revert camera position
  if (checkCollision(camera, walls, paintings, stand)) {
    camera.position.copy(previousPosition);
  }
};

// function to check for collisions
export const checkCollision = (camera, walls, paintings, stand) => {
  const playerBoundingBox = new THREE.Box3();
  const cameraWorldPosition = new THREE.Vector3();
  camera.getWorldPosition(cameraWorldPosition);
  playerBoundingBox.setFromCenterAndSize(
    cameraWorldPosition,
    new THREE.Vector3(1, 1, 1)
  );

  // Check for player collision with wall
  for (let i = 0; i < walls.children.length; i++) {
    const wall = walls.children[i];
    if (playerBoundingBox.intersectsBox(wall.BoundingBox)) {
      return true;
    }
  }

  // Check for collisions with the stand
  //  if (playerBoundingBox.intersectsBox(stand.boundingBox)) {
  //   return true;
  // }

  // If no collisions, return false
  return false;
};
