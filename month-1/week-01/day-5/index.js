export class Socks {
  constructor(socks) {
    this.socks = socks;
  }

  countPairs() {
    try {
      if (typeof this.socks != "string") throw new Error("Send a String");

      const socks = this.socks.split("").sort();

      let pairs = 0;
      for (let index = 0; index < socks.length; index++) {
        if (socks[index] == socks[index + 1]) {
          pairs++;
          index++;
        }
      }

      return pairs;
    } catch (error) {
      return `Error: ${error.message}`;
    }
  }
}

const socks = new Socks("CABBACCC");
console.log(socks.countPairs());
//Output: 4
