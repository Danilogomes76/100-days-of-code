import { Socks } from "./index";

describe("Socks", () => {
  it("should return a two pair socks", () => {
    const socks = new Socks("AABB");
    expect(socks.countPairs()).toBe(2);
  });

  it("should return a one pair socks", () => {
    const socks = new Socks("AA");
    expect(socks.countPairs()).toBe(1);
  });

  it("should return a zero pair socks", () => {
    const socks = new Socks("");
    expect(socks.countPairs()).toBe(0);
  });

  it("should sent a string", () => {
    const socks = new Socks(23);
    expect(socks.countPairs()).toBe("Error: Send a String");
  });
});
