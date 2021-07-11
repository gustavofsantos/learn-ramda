import * as R from "ramda";

const f = (x) => `f(${x})`;
const g = (x) => `g(${x})`;

describe("Composing using pipe", () => {
  it("Should pipe two functions", () => {
    const h = R.pipe(f, g);

    expect(h(1)).toBe("f(g(1))");
  });
});
