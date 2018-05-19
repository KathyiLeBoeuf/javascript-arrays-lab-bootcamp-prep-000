const app = "I don't do much."

kittens = ['Milo', 'Otis', 'Garfield'];

//pop(removes last and returns that element)
//push(adds to end and returns array new length)
//shift(removes first and returns that element)
//unshift(adds to beginning and returns array new length)
//slice(removes element by index # and returns copy of array with left over element(s), original not modified)
//splice(remove and adding elements)
//spread operator ...
//  console.log();

function destructivelyAppendKitten(element) {
  kittens.push(element);
}

//console.log(destructivelyAppendKitten(kittens));

function destructivelyPrependKitten(element) {
  //prepend adds to beginning
  kittens.unshift(element);
}

//console.log(destructivelyPrependKitten(kittens));

function destructivelyRemoveLastKitten() {
  kittens.pop();
}
//console.log(destructivelyRemoveLastKitten(kittens));

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  /* let newArray = array.shift();
  return newArray; */
}
//console.log(destructivelyRemoveFirstKittens(kittens));

/*
function appendKitten(array, element) {
  return [element, ...array];
}  */
//console.log(appendKitten(kittens, "Beau"));

function appendKitten(array, element) {
  let newArray = [...array, element];
  return newArray;
}
//console.log(appendKittens(kittens, "Snowball"));


function prependKitten(array, element) {
  return [element, ...array];
}
//console.log(prependKitten(kittens, "Gracie"));

function removeLastKitten(array) {
  return (array.slice(0, array.length - 1))
}
//console.log(removeLastKitten(kittens));

function removeFirstKitten(array) {
 return (array.slice(1));
}
//console.log(removeFirstKitten(kittens));
