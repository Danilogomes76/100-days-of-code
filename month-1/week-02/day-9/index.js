export class TrappingRainWater {
  constructor(height) {
    this.height = height;
  }

  trappedWaterQuantity() {
    try {
      const height = this.height;
      let water = 0;

      if (!Array.isArray(height)) {
        throw new Error("Send a array");
      }

      if (height.some((n) => n < 0)) {
        throw new Error("Height cannot be a negative number");
      }

      if (height.some((n) => typeof n != "number")) {
        throw new Error("Send a only number array");
      }

      for (let i = 0; i < height.length; i++) {
        let leftWall = 0;
        let rightWall = 0;

        for (let L = i; L >= 0; L--) {
          if (height[L] > leftWall) {
            leftWall = height[L];
          }
        }

        for (let R = i; R < height.length; R++) {
          if (height[R] > rightWall) {
            rightWall = height[R];
          }
        }

        const smallestWall = leftWall > rightWall ? rightWall : leftWall;
        water += smallestWall - height[i];
      }

      return water;
    } catch (error) {
      return `Error: ${error.message}`;
    }
  }
}

const height = new TrappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
console.log(height.trappedWaterQuantity());
//Output: 6

const height_2 = new TrappingRainWater([4, 2, 0, 3, 2, 5]);
console.log(height_2.trappedWaterQuantity());
//Output: 9
