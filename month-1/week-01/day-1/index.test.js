import { ageToConvert } from "./index";

describe("ageToConvert", () => {
  it("should have a type number", () => {
    const ageToCheck = new ageToConvert(20);
    expect(typeof ageToCheck.age).toBe("number");
  });

  it("must not have a number less than or equal to 0", () => {
    const ageToCheck = new ageToConvert(20);
    expect(ageToCheck.age).not.toBeLessThanOrEqual(0);
  });

  it("should return 20 age to 7300 days", () => {
    const ageToCheck = new ageToConvert(20);
    expect(ageToCheck.ageToDay()).toBe(7300);
  });

  it("should return 35 age to 12775 days", () => {
    const ageToCheck = new ageToConvert(35);
    expect(ageToCheck.ageToDay()).toBe(12775);
  });

  it("should return 15 age to 5475 days", () => {
    const ageToCheck = new ageToConvert(15);
    expect(ageToCheck.ageToDay()).toBe(5475);
  });
});
