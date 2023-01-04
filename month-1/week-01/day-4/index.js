export class ProgresedDaysCount {
  constructor(daysArray) {
    this.daysArray = daysArray;
  }

  ProgressDays() {
    const days = this.daysArray;
    let progressDays = [];

    if (!Array.isArray(days)) return "Send a number Array";
    if (!days.every(Number.isFinite)) return "Send a only number Array";

    for (let i = 1; i < days.length; i++) {
      const previousSaturday = days[i - 1];
      const saturday = days[i];

      if (previousSaturday < saturday) {
        progressDays.push("day");
      }
    }

    return progressDays.length;
  }
}

const days = new ProgresedDaysCount([3, 4, 1, 2]);

console.log(days.ProgressDays());
//Output: 2
