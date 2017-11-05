// note : ce code n'est pas un exemple d'architecture, mais un prétexte...

const boissons = [{}, {}, {}];

let credit = 0;
// utilisation d'"énumérations"
const pieces = {
  piece10: 10,
  piece20: 20,
  piece50: 50,
  piece1: 100,
  piece2: 200
}

function init_noms(noms) {
  if (noms.length != boissons.length) {
    throw("Il faut " + boissons.length + " noms !");
  }
  for (let i = 0; i < boissons.length; i++) {
    boissons[i].nom = noms[i]
  }
}

function init_stocks(stocks) {
  boissons[0].stock = 30;
}

function init_prix(prix) {

}

function init(noms, stocks, prix) {
  init_noms(noms);
  init_stocks(stocks);
  init_prix(prix);
}

//@todo retourner un objet {nom: 'nom', prix: prix}
// représentant la boisson la moins chère
function la_moins_chere() {
  return boissons[0];  
}


//@todo boisson est le nom de la boisson (chaîne de caractères)
// doit faire une erreur "Stock insuffisant !" si le stock est insuffisant
// doit faire une erreur "Crédit insuffisant !" si le crédit est insuffisant (ben oui...)
// retourne le prix et le crédit restant (objet)
function boire(boisson) {
  return {prix: 0, credit: 0};
}

function stock(boisson) {
  return boissons[0].stock;
}

//@todo renvoie la "liste" des boissons disponibles selon le stock
// utilisation des tableaux en liste (push/pop), cf https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array
// aller plus loin : http://www.collectionsjs.com/list
function boissons_disponibles() {
  return ['café'];
}

//@todo renvoie la "liste" des boissons possibles, selon le stock et le crédit
function boissons_possibles() {
  return null;
}

//@todo mettre à jour le crédit selon la pièce insérée
function inserer_piece(piece) {
  credit = credit + 5;
}

//@todo comme la précédente, on suppose le sucre infini
// le prix augmente de 20% par sucre jusqu'au double du prix max
// sauf chocolat qui contient un sucre gratuit
function boire_sucre(boisson, nb_sucres) {
  return 0;
}

module.exports = {
  init: init,
  init_noms: init_noms,
  init_prix: init_prix,
  init_stocks: init_stocks,
  la_moins_chere: la_moins_chere,
  boire: boire,
  stock: stock,
  boire_sucre: boire_sucre,
  credit: credit,
  pieces: pieces
};
