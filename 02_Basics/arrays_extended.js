const marvelHeros =["thor", "ironman","spiderman"]
const dc = ["superman", "flash", "batman"]

// marvelHeros.push(dc)

// console.log(marvelHeros); //the array which have been pushed will act as an element
// console.log(marvelHeros[3]);
// console.log(marvelHeros[3][1]);

// newArr=marvelHeros.concat(dc)
// console.log(newArr);

// const all_new_heros = [...marvelHeros,...dc]
// console.log(all_new_heros);

// const anotherArray = [1,2,[3,4],[5,6,7,[8,9]]]
// // array in aother array in another array
// const usableAnother = anotherArray.flat(Infinity)
// console.log(usableAnother);

console.log((Array.isArray("ccp")));
console.log((Array.from("ccp")));
console.log((Array.from({name: "ccp"}))); //interesting


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));