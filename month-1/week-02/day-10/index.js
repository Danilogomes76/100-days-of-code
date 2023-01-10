export class BinarySearchTrees {
  constructor(number) {
    this.number = number;
  }

  check(number) {
    if (number === 0) return 1;
    return number * this.check(number - 1);
  }

  binaryTree() {
    try {
      if (typeof this.number !== "number") throw new Error("Send a number");

      return (
        this.check(2 * this.number) /
        (this.check(this.number + 1) * this.check(this.number))
      );
    } catch (error) {
      return `Error: ${error.message}`;
    }
  }
}

//o valor a ESQUERDA tem que ser MENOR que o pai
//o valor a DIREITA tem que ser MAIOR que o pai

const number = new BinarySearchTrees(3);
console.log(number.binaryTree());
//OutPut: 5
