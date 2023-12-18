import * as THREE from "three";

// Create a bounding box
export const createBoundingBoxes = (objects) => {
  if (!Array.isArray(objects)) {
    objects = objects.children;
  }

  // loop over each object in objects and add a bounding box to it
  objects.forEach((object) => {
    object.BoundingBox = new THREE.Box3();
    object.BoundingBox.setFromObject(object);
  });
};

// if (!Array.isArray(objects)) {
//     objects = objects.children;
//   }
