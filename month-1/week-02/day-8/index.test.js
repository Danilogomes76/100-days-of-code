import { Phone } from ".";

describe("Phone", () => {
  it('should contain a ["be", "ad", "cf"] in array', () => {
    const phone = new Phone("23");
    expect(phone.letterCombinations()).toContain("be");
    expect(phone.letterCombinations()).toContain("ad");
    expect(phone.letterCombinations()).toContain("cf");
  });

  it('should contain a ["gs", "hs", "is"] in array', () => {
    const phone = new Phone("47");
    expect(phone.letterCombinations()).toContain("gs");
    expect(phone.letterCombinations()).toContain("hs");
    expect(phone.letterCombinations()).toContain("is");
  });

  it('should contain a ["zs", "zq", "yp"] in array', () => {
    const phone = new Phone("94");
    expect(phone.letterCombinations()).toContain("wi");
    expect(phone.letterCombinations()).toContain("yg");
    expect(phone.letterCombinations()).toContain("zg");
  });

  it('should contain a ["a", "b", "c"] in array', () => {
    const phone = new Phone("2");
    expect(phone.letterCombinations()).toEqual(["a", "b", "c"]);
  });

  it('should return a "Zero and One not map a letter"', () => {
    const phone = new Phone("1");
    expect(phone.letterCombinations()).toBe(
      "Error: Zero and One not map a letter"
    );
  });

  test("verify if array is empty", () => {
    const phone = new Phone("");
    expect(phone.letterCombinations()).toHaveLength(0);
  });
});
