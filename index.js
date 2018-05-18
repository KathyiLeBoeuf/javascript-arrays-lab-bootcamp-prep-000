const app = "I don't do much."

kittens = ['Milo', 'Otis', 'Garfield'];

function appendKittens(array, element) {
  let newArray = [...array, element];
  return newArray;
}

//console.log(kittens);
//console.log(appendKittens(kittens, "Snowball"));
//console.log(kittens);

//pop(removes last and returns that element)
//push(adds to end and returns array new length)
//shift(removes first and returns that element)
//unshift(adds to beginning and returns array new length)
//slice(removes element by index # and returns copy of array with left over element(s), original not modified)
//splice(remove and adding elements)
//spread operator ...
//  console.log();

function destructivelyAppendKittens(array, element) {
  array.push();
  return array;
}
console.log(kittens);
console.log(destructivelyAppendKittens(kittens));

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

// not sure //
function destructivelyRemoveFirstKittens(array) {
  let newArray = array.shift();
  return newArray;
}
//kittens = ['Milo', 'Otis', 'Garfield', '1', '2', '3'];
//console.log(kittens);
//console.log(destructivelyRemoveFirstKittens(kittens));

function appendKitten(array, element) {
  return [element, ...array];
}

function prependKitten(array, element) {
  return [...array, element];
  
}

function removeLastKitten(array, element) {
  return (array.slice(0, array.length - 1))
}

function removeFirstKitten(array, element) {
 return (array.slice(1));
}

