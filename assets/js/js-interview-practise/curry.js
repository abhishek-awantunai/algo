var getSpeed = function (distance) {
  return function (time) {
    return distance / time;
  };
};

var londonDistance = getSpeed(400);

console.log(Math.floor(londonDistance(15)));
