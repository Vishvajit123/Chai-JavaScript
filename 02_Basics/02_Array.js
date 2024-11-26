let marvalHeros = ["Thar", "Ironman", "Spiderman"];
let dcHeros = ["superman" , "flash", "batman"];
let Heros = ["superman" , "flash", "batman"];

// marvalHeros.push(dcHeros);
// console.log(marvalHeros);
// console.log(marvalHeros[3][1]);



//concat two or more arrays using concat method
marvalHeros = marvalHeros.concat(dcHeros.concat(Heros));
// console.log(marvalHeros);

//concat two or more arrayusing spread operator ...
const allNewHeros = [...marvalHeros, ...dcHeros];
// console.log(allNewHeros);


// const numbers = [1,2,3,[4,5,6],7,[6,7],[4,5]];
// console.log(numbers);
// console.log(numbers.flat());
// console.log(numbers);


// console.log(Array.isArray("vishvajit"));   //check this is array or not
// console.log(Array.from("vishvajit"));      //if it is not array it will convert it into array
// console.log(Array.from({name: "vishvajit"}));


// convert diff values into array using Array.of()
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
