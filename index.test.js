/* global expect afterAll beforeAll */
const open = require("open");

// student modules to require
const sum = require("./index");


test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 1 + 5 to equal 6", () => {
  expect(sum(1, 5)).toBe(6);
});

test("adds 1 + 3 to equal 4", () => {
  expect(sum(1, 3)).toBe(7);
});


// should reflresh the html reporter
afterAll(() => {
  open("./test-report.html");
});