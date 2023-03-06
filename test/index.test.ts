import { initialCommit } from "../src";

describe("index", () => {
  it("expect initial commit to return true", () => {
    expect(initialCommit("tora-pan")).toEqual(
      "This is my first commit tora-pan."
    );
  });
});
