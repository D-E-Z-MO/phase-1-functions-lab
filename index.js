const scuberHq = 42

function distanceFromHqInBlocks(someValue) {
  let distance = someValue - scuberHq;
  return Math.abs(distance);
} 

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks (location) * 264}

  function distanceTravelledInFeet(start, destination) {
    let travelledInFeet = (start - destination) * 264
    return Math.abs(travelledInFeet);
  }
  calculatesFarePrice(start, destination)
  const free = 400;
  let result = null;
  if (distanceTravelledInFeet <= free){
    let result = 0;
    return result
  } else if (distanceTravelledInFeet > free < 2000){
    let result =
    distanceTravelledInFeet * .02;
    return result
  }else if (distanceTravelledInFeet > 2000 <= 2500) {
    let result = 25;
    return result
  }else {
    console.log('cannot travel that far')
  } 
