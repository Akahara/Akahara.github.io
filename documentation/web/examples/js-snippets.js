/************** Syntaxe basique ************** */

let a = 4;
// boucle for classique
for(let i = 0; i < 3; i++)
  console.log("i + 3 =", i+3);

// liste, les éléments ne sont pas forcément du même type
let array = [ a, 4, "foo" ];
// ajouter à une liste
array.push(43);

// les objets
let car = { wheels: 4, speed: 80, name: "a car" };
// un objet peut être indexé de ces manière
console.log(car['wheels'], car.wheels);

// les textes peuvent être composés avec +
let str1 = "a " + "text";
// les ` permettent de formater avec des variables
let str2 = `${str1} with ${a} words`; // a text with 4 words
let str4 = `the car has ${car.wheels} wheels, or maybe ${car.wheels+3}`; // the car has 4 wheels, or maybe 7

// boucle foreach, avec les clés d'un objet
for(let key in car) {
    let value = car[key];
    /* ... */
}
// boucle foreach, sur un tableau
for(let value of array) { /* ... */ }

// fonctions
function foo(param1, param2) {
    /* ... */
}


/************** Les objets ************** */

let allNotes = {
    avg: 10,
    lessons: [
        {
            name: 'maths',
            notes: [ 8, 9 ]
        },
        {
            name: 'physics',
            notes: [ 10, 11, 12 ]
        }
    ]
};

let avg = allNotes.avg; // 10
let mathNotes = allNotes.lessons[0].notes; // [ 8, 9 ]


/************** Interactions ************** */

// par id
let resultDiv = document.getElementById("result");
// par sélecteur css (sélectionne le premier)
let container = document.querySelector(".container");
let textInput = document.querySelector("input[type=text]");
// par sélecteur css (renvoie un tableau avec tous les éléments)
let coloredElements = document.querySelectorAll(".colored");
// par sélecteur css depuis un autre élément
let button = container.querySelector("button");

// changer l'id (à éviter)
button.id = 'new-id';
// changer les classes
button.classList.add('new-class');
container.classList.remove('container');
// modifier directement le css
button.style.backgroundColor = 'red'; // ok pour 1 propriété
button.style.border = '1px solid blue'; // à éviter, utilisez plutôt les classes
// cacher/afficher un élément
button.hidden = true;
button.hidden = false;

// remplacer le texte d'un élément
resultDiv.innerText = "New text";
// remplacer toute la hiérarchie d'un élément (rarement utile)
resultDiv.innerHTML = "<span style=\"background-color:red\">New span</span>";
// ajouter un élément
let div = document.createElement('div');
div.innerText = "...";
resultDiv.appendChild(div);
// retirer complètement un élément
resultDiv.remove();


/************** Evenements ************** */

function triggerOnClick(event) {
    console.log(event); // affiche l'événement
    console.log(this); // affiche l'élément qui reçoit l'événement
    this.style.backgroundColor = 'red'; // par exemple
}

button.addEventListener('click', triggerOnClick);

// même principe avec une lambda, cf la section lambda, plus bas
button.addEvenetListener('click', () => console.log('clicked!'));


/************** Express avec nodejs ************** */

const express = require('express');
// create the web app (server)
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  
app.use(express.static('public'));
app.listen(80, () => console.log("Running on http://localhost"));