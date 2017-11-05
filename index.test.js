/* global expect afterAll beforeAll */
const open = require("open");

// required student code
code = require("./index");

beforeEach(() => {
  code.init(
    ["café", "thé", "chocolat"],
    [30, 20, 10],
    [0.40, 0.50, 0.60]
  );
})

// module test => change here only
test("Init => 30 cafés", () => {
  console.log(code.stock('café'));
  expect(code.stock('café')).toBe(30);
});

test("Init => 10 chocolats", () => {
  expect(code.stock('chocolat')).toBe(10);
});

test("Init => 20 thés", () => {
  expect(code.stock('the')).toBe(20);
});



// should refresh the html reporter
afterAll(() => {
  open("./test-report.html");
});