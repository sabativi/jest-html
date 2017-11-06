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

test("Le café, boisson de base", () => {
  code.inserer_piece(code.piece10);
  code.inserer_piece(code.piece20);
  possibles = code.boissons_possibles();
  expect(possibles.length).toBe(1);
  expect(possibles[1]).toBe('café');
});

test("Avec 1€, un café et un chocolat", () => {
  code.inserer_piece(code.piece100);
  credit = code.boire('café');
  expect(credit).toBe(0.60);
  credit = code.boire('chocolat');
  expect(code.credit()).toBe(0);
})

test("Le chocolat, une boisson hors de prix !", () => {
  code.inserer_piece(code.piece20);
  code.inserer_piece(code.piece20);
  possibles = code.boissons_possibles();
  expect(possibles.length).toBe(2);
  expect(possibles.includes('chocolat')).toBeFalsy();
});

test("Thé ou café, il faut choisir", () => {
  code.inserer_piece(code.piece20);
  code.inserer_piece(code.piece20);
  possibles = code.boissons_possibles();
  expect(possibles.length).toBe(2);
  code.boire('café');
  possibles = code.boissons_possibles();
  expect(possibles.length).toBe(0);
});

test("I want my money back!", () => {
  code.inserer_piece(code.piece100);
  code.boire('café');
  monnaie = code.rendre_monnaie();
  expect(monnaie['piece50']).toBeDefined()
  expect(monnaie['piece50']).toBe(1);
  expect(monnaie['piece20']).toBeDefined()
  expect(monnaie['piece20']).toBe(1);
});

test("Volo mihi nummos !", () => {
  code.inserer_piece(code.piece200);
  code.boire('chocolat');
  expect(code.ut_pecuniam()).toBe("MCD");
  code.boire('chocolat');
  expect(code.ut_pecuniam()).toBe("LXXX");
});

// le prix est diminué de 20 cents quand le compteur de boissons
// déjà délivrées est un nombre premier
test("La chance n'est pas toujours un hasard...", () => {
  code.inserer_piece(code.piece200);
  expect(code.prix('café')).toBe(0.30);
  cout = code.boire('café');
  expect(cout).toBe(0.30);
  expect(code.prix('café')).toBe(0.30);
  cout = code.boire('café');
  expect(cout).toBe(0.30);
  expect(code.prix('café')).toBe(0.10);
  cout = code.boire('café');
  expect(cout).toBe(0.10);
  expect(code.prix('café')).toBe(0.10);
  // dans la vraie vie, on évite ça...
  code.compteur = 16;
  expect(code.prix('café')).toBe(0.30);
  cout = code.boire('café');
  expect(cout).toBe(0.30);
  expect(code.prix('café')).toBe(0.10);
  cout = code.boire('café');
  expect(cout).toBe(0.10);
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