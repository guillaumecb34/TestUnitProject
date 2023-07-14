import { expect } from "chai";
import sinon from "sinon";
import { multiply } from "../multiply.js";

const sandbox = sinon.createSandbox();

let mockMultiply;

describe("Will test multiply function", () => {
  beforeEach(() => {
    mockMultiply = sandbox.stub().returns(10);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("Should call the create function", async () => {
    multiply(5, mockMultiply);

    sandbox.assert.calledOnce(mockMultiply);
  });

  it("Should return the correct value", async () => {
    const result = multiply(5, mockMultiply);

    expect(result).to.equal(50);
  });
});
