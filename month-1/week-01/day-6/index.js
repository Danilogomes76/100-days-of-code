export class NextPrime {
  constructor(number) {
    this.number = number;
  }

  isPrime(num) {
    if (num < 2) {
      return false;
    }

    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  findAPrime() {
    if (this.isPrime(this.number)) {
      return this.number;
    }

    let nextPrime = this.number + 1;

    while (!this.isPrime(nextPrime)) {
      nextPrime++;
    }

    return nextPrime;
  }
}

const number = new NextPrime(11);
console.log(number.findAPrime());
//Output: 11
