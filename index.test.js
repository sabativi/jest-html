/* global expect afterAll beforeAll */
const open = require("open");

// student modules to require
const sum = require("./index");


test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 3 + 2 to equal 5", () => {
  expect(sum(3, 2)).toBe(5);
});

test("adds 1 + 3 to equal 4", () => {
  expect(sum(1, 3)).toBe(4);
});


// should reflresh the html reporter
afterAll(() => {
  open("./test-report.html");
});