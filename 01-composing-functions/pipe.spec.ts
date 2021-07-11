import { pipe } from "ramda";

const f = (x) => `f(${x})`;
const g = (x) => `g(${x})`;
const h = (x) => `h(${x})`;

describe("Composing using pipe", () => {
  it("Should return the result", () => {
    expect(f(1)).toBe("f(1)");
    expect(g(1)).toBe("g(1)");
  });

  it("Should pipe two functions", () => {
    const h = pipe(f, g);

    expect(h(1)).toBe("g(f(1))");

    /**
     * 👨‍🏫 The result is "g(f(1))" because the argument "1" is applyied
     * first in the "f" function, then the result, "f(1)" is applyied
     * into the second function, "g", which returns "g(f(1))".
     *
     * "f(1)" is just a string
     */
  });

  it("Should pipe three functions", () => {
    const w = pipe(f, g, h);

    expect(w("x")).toBe("h(g(f(x)))");
  });

  it("Should create a function that returns the firstName in uppercase", () => {
    const user = {
      firstName: "Gustavo",
      lastName: "Santos"
    };

    const firstName = (user) => user.firstName;
    const toUpperCase = (text) => text.toUpperCase();

    const upFirstName = pipe(firstName, toUpperCase);

    expect(upFirstName(user)).toBe("GUSTAVO");

    /**
     * 👨‍🏫 When apply the object "user" to the "firstName" function,
     * that function returns the value holding in the "firstName" property.
     * In this case, the value is "Gustavo".
     *
     * The the value "Gustavo" is applyied into the "toUpperCase" function,
     * that returns the value "GUSTAVO"
     */
  });
});
