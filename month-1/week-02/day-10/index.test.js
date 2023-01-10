import { BinarySearchTrees } from ".";

describe("BinarySearcgTrees", () => {
  it("should return 5", () => {
    const number = new BinarySearchTrees(3);
    expect(number.binaryTree()).toBe(5);
  });
  it("should return error message", () => {
    const number = new BinarySearchTrees("23");
    expect(number.binaryTree()).toBe("Error: Send a number");
  });
});
