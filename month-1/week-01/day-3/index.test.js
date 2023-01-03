import { SkewerCounter } from ".";

describe("SkewerCounter", () => {
  it("must contain 1 vegetarian and 4 no vegetarian", () => {
    const grill = new SkewerCounter([
      "--xo--x--ox--",
      "--xx--x--xx--",
      "--oo--o--oo--",
      "--xx--x--ox--",
      "--xx--x--ox--",
    ]);
    expect(grill.counterSkewer()).toEqual([1, 4]);
  });

  it("must contain 0 vegetarian and 3 no vegetarian", () => {
    const grill = new SkewerCounter([
      "--xo--x--ox--",
      "--xx--x--ox--",
      "--xx--x--ox--",
    ]);
    expect(grill.counterSkewer()).toEqual([0, 3]);
  });

  it("must contain 4 vegetarian and 0 no vegetarian", () => {
    const grill = new SkewerCounter([
      "--oo--o--oo--",
      "--oo--o---",
      "--oo--oo--",
      "--ooo--oo--",
    ]);
    expect(grill.counterSkewer()).toEqual([4, 0]);
  });

  it("Array not sent", () => {
    const grill = new SkewerCounter("--oo--o--oo--");
    expect(grill.counterSkewer()).toBeUndefined();
  });
});
