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

test("Un café coûte 0.40", () => {
  expect(code.boire('café')).toBe(0.40);
});

test("Un thé coûte 0.50", () => {
  expect(code.boire('thé')).toBe(0.50);
});

test("Un chocolat coûte 0.60", () => {
  expect(code.boire('chocolat')).toBe(0.60);
});

test("Trop de café... peut provoquer des erreurs !"), () => {
  let i = 1;
  while (i <= 30) {
    code.boire('café');
  }
  expect(code.boire('café')).toThrow();
}

test("Le chocolat, c'est bon sans trop de sucre", () => {
  expect(code.boire_sucre('chocolat', 1)).toBe(0.60);
  expect(code.boire_sucre('chocolat')).toBe(0.72);
})

test("Trop de sucre tue le sucre !", () => {
  expect(code.boire_sucre('chocolat', 5)).toBe(1.08);
  expect(code.boire_sucre('chocolat', 10)).toBe(1.08);
})

// should refresh the html reporter
afterAll(() => {
  open("./test-report.html");
});