export const paintingData = [
  // Front Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `Cars/${i + 1}.jpg`,
    width: 5,
    height: 3,
    position: { x: -15 + 10 * i, y: 2, z: -19.5 },
    rotationY: 0,
    info: {
      // info about the painting
      title: `Car ${i + 1}`,
    },
  })),

  // Back Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `Cars/${i + 5}.jpg`,
    width: 5,
    height: 3,
    position: { x: -15 + 10 * i, y: 2, z: 19.5 },
    rotationY: Math.PI,
    info: {
      title: `Car ${i + 5}`,
    },
  })),

  // Left Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `Cars/${i + 9}.jpg`,
    width: 5,
    height: 3,
    position: { x: -19.5, y: 2, z: -15 + 10 * i },
    rotationY: Math.PI / 2,
    info: {
      title: `Car ${i + 9}`,
    },
  })),

  // Right Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `Cars/${i + 13}.jpg`,
    width: 5,
    height: 3,
    position: { x: 19.5, y: 2, z: -15 + 10 * i },
    rotationY: -Math.PI / 2,
    info: {
      title: `Car ${i + 13}`,
    },
  })),
];
