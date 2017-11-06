// note : ce code n'est pas un exemple d'architecture, mais un prétexte...

// const vs let
const stocks = {
  cafe: 0,
  the: 0,
  chocolat: 0,
  sucre: 0
}

function stock_cafe() {
  //@todo
}

// encapsulation => supprimer stocks des exports ensuite
// option
function mes_stocks() {
  //@todo
}

function init() {
  //@todo
}

function ajouter_cafe(doses) {
  //@todo
}

function ajouter_stock(stock) {
  //@todo
}

module.exports = {
  stocks: stocks,
  init: init, 
  stock_cafe: stock_cafe,
  ajouter_cafe: ajouter_cafe, 
  ajouter_stock: ajouter_stock
};
