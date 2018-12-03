function produceDrivingRange(blockRange) {
  return function(begin, end) {
    let distance = parseInt(end) - parseInt(begin)
    if ( distance < blockRange ) {
      return `within range by ${Math.abs(blockRange - distance)}`
    } else {
      return `${Math.abs(blockRange - distance)} blocks out of range`
    }
  }
}

function produceTipCalculator(tipAmount) {
  return function(fare) {
    return fare * tipAmount;
  };
}
 
function createDriver() {
  let driverId = 0;
  // return the class
  return class {
    constructor(name, manufacturePrice) {
      this.name = name;
      this.manufacturePrice = manufacturePrice;
      this.id = ++driverId;
    }
 
    retailPrice(marketMultiplier) {
      return marketMultiplier * this.manufacturePrice;
    }
  };
}