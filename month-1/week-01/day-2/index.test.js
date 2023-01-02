import { FindWord } from "./index";

describe("FindNemo", () => {
  it("should have a Nemo in position 4", () => {
    const word = new FindWord("I am finding Nemo !");
    expect(word.findANemo()).toBe("I found Nemo at 4!");
  });

  it("should have a Nemo in position 1", () => {
    const word = new FindWord("Nemo is here");
    expect(word.findANemo()).toBe("I found Nemo at 1!");
  });

  it("should have a Nemo in position 6", () => {
    const word = new FindWord("Onde sera que esta o Nemo ?");
    expect(word.findANemo()).toBe("I found Nemo at 6!");
  });

  it("should not encounter a Nemo", () => {
    const word = new FindWord("Onde esta aquele peixe palhaço ?");
    expect(word.findANemo()).toBe("I can't find Nemo :(");
  });
});
