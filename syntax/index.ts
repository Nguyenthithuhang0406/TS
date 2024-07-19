//lesson30: default parameters
const sum7 = (x: number, y: number, z = false) => {
  if (z === false) {
    return x + y;
  }

  if (z) {
    return x - y;
  }
};

console.log("check sum7: ", sum7(7, 1, true));