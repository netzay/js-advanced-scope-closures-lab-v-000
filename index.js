
 function produceDrivingRange() {
  let ItemId = 10;
  // return the class
  return class {
    constructor(blockRange) {
      this.blockRange = blockRange;
      this.id = ++ItemId;
    }
 
    retailPrice(marketMultiplier) {
      return marketMultiplier * this.manufacturePrice;
    }
  };
}
 