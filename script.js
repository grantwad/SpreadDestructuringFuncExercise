// SPREAD AND DESTRUCTURING WITH FUNCTIONS EXERCISE

// 1a
const jPDinos = [
  "Velociraptors",
  "Tyrannosaurus Rex",
  "Dilophosaurus"
];

// 1b
function seeDinos(a, ...b){
  console.log(a);
  console.log(b);
}
seeDinos(...jPDinos);
/*
Velociraptors
[ 'Tyrannosaurus Rex', 'Dilophosaurus' ]
*/

console.log("============");

// 2a
const jPCharacters = {
  alanGrant: "Sam Neill",
  ellieSattler: "Laura Dern",
  ianMalcolm: "Jeff Goldblum"
};

// 2b
seeCharacters = ({ellieSattler}) => {
  console.log(ellieSattler);
}
seeCharacters(jPCharacters); // Laura Dern