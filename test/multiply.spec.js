import { expect } from "chai";
import sinon from "sinon";
import { multiply } from "../multiply.js";

const sandbox = sinon.createSandbox();

let mockGetRandomNumber;

describe("Will test multiply function", () => {
  beforeEach(() => {
    mockGetRandomNumber = sandbox.stub().returns(10);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("Should call the create function", async () => {
    multiply(5, mockGetRandomNumber);

    sandbox.assert.calledOnce(mockGetRandomNumber);
  });

  it("Should return the correct value", async () => {
    const result = multiply(5, mockGetRandomNumber);

    expect(result).to.equal(50);
  });
});
