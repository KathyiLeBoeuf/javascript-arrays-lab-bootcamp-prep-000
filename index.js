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

function destructivelyAppendKittens(array, element) {
  array.push("Shelby");
  return array;
}

//console.log(destructivelyAppendKittens(kittens));

function destructivelyPrependKittens(array, element) {
  //prepend adds to beginning
  array.unshift("Pepper");
  return array;
}

//console.log(destructivelyPrependKittens(kittens));

function destructivelyRemoveLastKittens(array) {
  array.pop();
  return array;
}
//console.log(destructivelyRemoveLastKittens(kittens));

function destructivelyRemoveFirstKittens(array) {
  array.shift();
  return array;
  /* let newArray = array.shift();
  return newArray; */
}
//console.log(kittens);
//console.log(destructivelyRemoveFirstKittens(kittens));
/*
function appendKitten(array, element) {
  return [element, ...array];
}  */
//console.log(appendKitten(kittens, "Beau"));

function appendKittens(array, element) {
  let newArray = [...array, element];
  return newArray;
}
//console.log(kittens);
//console.log(appendKittens(kittens, "Snowball"));
//console.log(kittens);

function prependKitten(array, element) {
  return [...array, element];
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
