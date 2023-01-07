export class MergeArray {
  constructor(arr_1, arr_2) {
    this.arr1 = arr_1;
    this.arr2 = arr_2;
  }

  merge() {
    try {
      if (!Array.isArray(this.arr1) || !Array.isArray(this.arr2))
        throw new Error("Send a only array");
      if (
        !this.arr1.every(Number.isFinite) ||
        !this.arr2.every(Number.isFinite)
      )
        throw new Error("Send a only number array");

      const merged = this.arr1.concat(this.arr2).sort();

      const noZero = merged.filter((num) => num != 0);

      return noZero;
    } catch (error) {
      return `Error: ${error.message}`;
    }
  }
}

const newArray = new MergeArray([1, 2, 3, 5, 0, 0, 0], [2, 5, 6, 7]);
console.log(newArray.merge());
// OutPut: [1, 2, 2, 3, 5, 5, 6, 7];
