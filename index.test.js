/* global expect afterAll beforeAll */
const open = require("open");

beforeEach(() => {
  code.init();
})

// required student code
code = require("./index");

// module test => change here only
test("Init => 20 cafés", () => {
  expect(code.stocks['cafe']).toBe(20);
});

test("Init => 10 chocolat", () => {
  expect(code.stocks['chocolat']).toBe(10);
});

test("Init => 10 thés", () => {
  expect(code.stocks['the']).toBe(10);
});

test("Init, échanger café/thé", () => {
  code.echanger_cafe_the();
  expect(code.stocks.cafe).toBe(10);
  expect(code.stocks.cafe).toBe(20);
})

test("Init => 50 sucres", () => {
  expect(code.stocks['sucre']).toBe(50);
});

test("Init, ajouter_cafe(5) => 25 cafés", () => {
  code.ajouter_cafe(5);
  expect(code.stocks['cafe']).toBe(25);
});

test("Protection du stock", () => {
  let stocks = code.stocks;
  stocks.sucre = 10;
  expect(code.stocks.sucre).toBe(50);
})

test("Écrire un test pour ajouter_stock", () => {
  //console.log(code.ajouter_stock);
  expect(code.ajouter_stock).toBeFalsy();
});

// should refresh the html reporter
afterAll(() => {
  open("./test-report.html");
});