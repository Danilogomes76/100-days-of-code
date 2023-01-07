import { MergeArray } from "./index";

describe("MergeArray", () => {
  it("should have a [ 1, 2, 2, 3, 5, 6 ]", () => {
    const newArray = new MergeArray([1, 2, 3, 0, 0, 0], [2, 5, 6]);
    expect(newArray.merge()).toEqual([1, 2, 2, 3, 5, 6]);
  });

  it("should have a [ 1, 2, 2, 3, 5, 5, 6, 7 ]", () => {
    const newArray = new MergeArray([1, 2, 3, 5, 0, 0, 0], [2, 5, 6, 7]);
    expect(newArray.merge()).toEqual([1, 2, 2, 3, 5, 5, 6, 7]);
  });

  it("should not sent a array", () => {
    const newArray = new MergeArray([1, 2, 3, 5, 0, 0, 0], "Array");
    expect(newArray.merge()).toEqual("Error: Send a only array");
  });
  it("should not sent a only number array", () => {
    const newArray = new MergeArray([1, 2, 3, 5, "", 0, 0], [2, 5, 6]);
    expect(newArray.merge()).toEqual("Error: Send a only number array");
  });
});
