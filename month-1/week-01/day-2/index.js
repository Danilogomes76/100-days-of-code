export class FindWord {
  constructor(word) {
    this.word = word;
  }

  findANemo() {
    const splitSentence = this.word.split(" ");
    const nemoPositionIndex = splitSentence.indexOf("Nemo");
    if (nemoPositionIndex == -1) return "I can't find Nemo :(";
    const nemoPositionInSentence = nemoPositionIndex + 1;
    return `I found Nemo at ${nemoPositionInSentence}!`;
  }
}

const word = new FindWord("I am finding Nemo !");
console.log(word.findANemo());
// Output: I found Nemo at 4!
