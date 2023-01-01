export class ageToConvert {
  constructor(age) {
    this.age = age;
  }

  ageToDay() {
    if (this.age <= 0 || typeof this.age !== "number") {
      console.log("Check the Age");
      return;
    }

    return this.age * 365;
  }
}

const age = new ageToConvert(15);
console.log(age.ageToDay());
//Output 5475
