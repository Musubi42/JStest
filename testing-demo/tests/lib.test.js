const lib = require("../lib");

/**
 * Faire évaluer l'anglais à Rafaello
 *
 * Comment ne commit qu'une seule partie du code, afin d'avoir un truc vrmnt nice ?
 **/

// The fat way to write test
// Write as much test as there are different branches in the function
test("Absolute - Should return a positive number if the param is positive", () => {
  const result = lib.absolute(1);
  expect(result).toEqual(1); // toEqual vs toBe diffenrence ? Ben du coup d'après la doc c la même que pour les nombres
});

test("Absolute - Should return a positive number if the param is negative", () => {
  const result = lib.absolute(-1);
  expect(result).toEqual(1);
});

test("Absolute - Should return a 0 number if the param is 0", () => {
  const result = lib.absolute(0);
  expect(result).toEqual(0);
});

// The clean and maintanable way to write test
describe("Absolute", () => {
  it("Should return a positive number if the param is positive", () => {
    const result = lib.absolute(1);
    expect(result).toEqual(1); // toEqual vs toBe diffenrence ? Ben du coup d'après la doc c la même que pour les nombres
  });

  it("Should return a positive number if the param is negative", () => {
    const result = lib.absolute(-1);
    expect(result).toEqual(1);
  });

  it("Should return a 0 number if the param is 0", () => {
    const result = lib.absolute(0);
    expect(result).toEqual(0);
  });
});

/**
 * Thanks to Jest I can refactor my code with confidence,
 * Because I can change it, then test it easily to be sure the behaviour is still the same.
 **/

// When testing String, don't write to specific test
// As this test is to specific, he can easily break, by adding a mark to the text
describe("Greet", () => {
  it("Should return a greeting message", () => {
    const result = lib.greet("Raph");
    expect(result).toBe("Welcome Raph");
  });
});

// The more general way to write this kind of test
// The usage of RegEx can solve the problem
describe("Greet", () => {
  it("Should return a greeting message", () => {
    const result = lib.greet("Raph");
    // The way the test is written, it only check if the result contain the param that have been passed to function
    expect(result).toMatch(/Raph/);
    // I can also use "toContain", it's another to write more general test, if I don't want to use RegExp
    expect(result).toContain("Raph");
    // Does the test is caseSensitive ?
    // How to constrol the sensitiveness of test ?
  });
});

// Testing Arrays
describe("Currencies", () => {
  it("should return supported currencies", () => {
    const result = lib.getCurrencies();

    // This test below is too general to be realy efficient
    expect(result).toBeDefined();
    expect(result).not.toBeNull();

    // The to specific way of doing this
    expect(result[0]).toBe("USD");
    expect(result[1]).toBe("AUD");
    expect(result[2]).toBe("EUR");
  });
});
