const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;
  
    return Math.sqrt(xs ** 2 + ys ** 2);
  };

// BEGIN
const getTheNearestLocation = (locations, currentPoint) => {
  if (locations.length === 0) {
    return null;
  }
  let nearestLocation = null;
  let minDistance = Infinity;
  for (let a = 0; a < locations.length; a++) {
    const [name, point] = locations[a];
    const distance = getDistance(currentPoint, point);
    if (distance < minDistance) {
      minDistance = distance;
      nearestLocation = [name, point];
    }
  }
  return nearestLocation;
};

export { getTheNearestLocation };
// END
