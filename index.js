// note : ce code n'est pas un exemple d'architecture, mais un prétexte...

const boissons = [{}, {}, {}];

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
// doit faire un erreur "Stock insuffisant !" si le stock est insuffisant
// retourne le prix
function boire(boisson) {
  return 0;
}

function stock(boisson) {
  return boissons[0].stock;
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
  boire_sucre: boire_sucre
};
