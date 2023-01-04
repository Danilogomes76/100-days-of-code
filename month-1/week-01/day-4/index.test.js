import { ProgresedDaysCount } from "./index";

describe("ProgresedDaysCount", () => {
  it("should have a 2 progress Days", () => {
    const days = new ProgresedDaysCount([3, 4, 1, 2]);
    expect(days.ProgressDays()).toBe(2);
  });

  it("should have a 1 progress Days", () => {
    const days = new ProgresedDaysCount([3, 4, 1, 0]);
    expect(days.ProgressDays()).toBe(1);
  });

  it("should have a 3 progress Days", () => {
    const days = new ProgresedDaysCount([3, 4, 5, 6]);
    expect(days.ProgressDays()).toBe(3);
  });

  it("should have a 0 progress Days", () => {
    const days = new ProgresedDaysCount([5, 4, 3, 2]);
    expect(days.ProgressDays()).toBe(0);
  });

  it("is not a Array", () => {
    const days = new ProgresedDaysCount(5, 4, 3, 2);
    expect(days.ProgressDays()).toBe("Send a number Array");
  });

  it("is not a only number Array", () => {
    const days = new ProgresedDaysCount([5, 4, 3, ""]);
    expect(days.ProgressDays()).toBe("Send a only number Array");
  });
});
