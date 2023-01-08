export class Phone {
  constructor(phoneNumber) {
    this.phoneNumber = phoneNumber;
  }

  alphabet() {
    const letters = [];
    for (let i = 97; i <= 122; i++) {
      letters.push(String.fromCharCode(i));
    }
    return letters;
  }

  numberWithLetter() {
    const numberOneToNine = "23456789".split("");
    const letters = this.alphabet();
    let numberWithLetter = {};

    for (let i = 0; i < numberOneToNine.length; i++) {
      if (numberOneToNine[i] == "7") {
        numberWithLetter[numberOneToNine[i]] = letters.splice(0, 4);
        continue;
      }
      if (numberOneToNine[i] == "9") {
        numberWithLetter[numberOneToNine[i]] = letters.splice(0, 4);
        continue;
      }
      numberWithLetter[numberOneToNine[i]] = letters.splice(0, 3);
    }

    return numberWithLetter;
  }

  letterCombinations() {
    try {
      const phoneArr = this.phoneNumber.split("");
      const numberWithLetter = this.numberWithLetter();
      let combinations = [];

      if (phoneArr.includes("0") || phoneArr.includes("1")) {
        throw new Error("Zero and One not map a letter");
      }

      if (phoneArr.length == 0) {
        return combinations;
      }

      if (phoneArr.length < 2) {
        combinations = [...numberWithLetter[phoneArr[0]]];
      }

      for (let i = 1; i < phoneArr.length; i++) {
        if (phoneArr[i] in numberWithLetter) {
          for (let char1 of phoneArr[i - 1]
            ? numberWithLetter[phoneArr[i - 1]]
            : numberWithLetter[phoneArr[i]]) {
            for (let char2 of phoneArr[i]
              ? numberWithLetter[phoneArr[i]]
              : numberWithLetter[phoneArr[i - 1]]) {
              combinations.push(char1 + char2);
            }
          }
        }
      }
      return combinations;
    } catch (error) {
      return `Error: ${error.message}`;
    }
  }
}

const phone = new Phone("23");
console.log(phone.letterCombinations());
//Output: ['ad', 'ae', 'af','bd', 'be', 'bf','cd', 'ce', 'cf']
