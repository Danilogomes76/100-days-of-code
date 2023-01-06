import { NextPrime } from "./index";

describe("NextPrime", () => {
  it("should return a 11", () => {
    const number = new NextPrime(11);
    expect(number.findAPrime()).toBe(11);
  });

  it("should return a 29", () => {
    const number = new NextPrime(24);
    expect(number.findAPrime()).toBe(29);
  });

  it("should return a 13", () => {
    const number = new NextPrime(12);
    expect(number.findAPrime()).toBe(13);
  });
});
