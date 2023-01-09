import { TrappingRainWater } from "./";

describe("TrappingRainWater", () => {
  it("Should return a six water trapped", () => {
    const height = new TrappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
    expect(height.trappedWaterQuantity()).toBe(6);
  });

  it("Should return a nine water trapped", () => {
    const height = new TrappingRainWater([4, 2, 0, 3, 2, 5]);
    expect(height.trappedWaterQuantity()).toBe(9);
  });

  it("Should return a error message 'Send a only number array'", () => {
    const height = new TrappingRainWater([4, 2, 0, "", 2, 5]);
    expect(height.trappedWaterQuantity()).toBe(
      "Error: Send a only number array"
    );
  });

  it("Should return a error message 'Send a array'", () => {
    const height = new TrappingRainWater(10);
    expect(height.trappedWaterQuantity()).toBe("Error: Send a array");
  });

  it("Should return a error message 'Height cannot be a negative number'", () => {
    const height = new TrappingRainWater([0, 1, 0, 2, 1, 0, -1, 3, 2, 1, 2, 1]);
    expect(height.trappedWaterQuantity()).toBe(
      "Error: Height cannot be a negative number"
    );
  });
});
