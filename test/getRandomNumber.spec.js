import { expect } from "chai";
import { getRandomNumber } from "../getRandomNumber.js";

describe("Will test getRandomNumber function", () => {
  it("Should return random number", async () => {
    const result = getRandomNumber();

    expect(result).is.a("number");
  });
});
