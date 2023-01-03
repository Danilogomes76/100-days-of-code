export class SkewerCounter {
  constructor(grill) {
    this.grill = grill;
  }

  counterSkewer() {
    if (!Array.isArray(this.grill)) return;
    const vegetarian = this.grill.filter((skewer) => !skewer.includes("x"));
    const noVegetarian = this.grill.filter((skewer) => skewer.includes("x"));
    return [vegetarian.length, noVegetarian.length];
  }
}

const grill_1 = new SkewerCounter([
  "--xo--x--ox--",
  "--xx--x--xx--",
  "--oo--o--oo--",
  "--xx--x--ox--",
  "--xx--x--ox--",
]);

const grill_2 = new SkewerCounter([
  "--oooo-ooo--",
  "--xx--x--xx--",
  "--o---o--oo--",
  "--xx--x--ox--",
  "--xx--x--ox--",
]);

const grill_3 = new SkewerCounter([
  "--oooo-ooo--",
  "--xxxxxxxx--",
  "--o---",
  "-o-----o---x--",
  "--o---o-----",
]);

console.log(grill_1.counterSkewer());
console.log(grill_2.counterSkewer());
console.log(grill_3.counterSkewer());
// Output :
//[ 1, 0 ]
//[ 2, 3 ]
//[ 3, 2 ]
