const app = "I don't do much."

kittens = ['Milo', 'Otis', 'Garfield'];

function appendKittens(array, element) {
  let newArray = [...array, element];
  return newArray;
}

//console.log(kittens);
//console.log(appendKittens(kittens, "Snowball"));

//pop(removes last and returns that element)
//push(adds to end and returns array new length)
//shift(removes first and returns that element)
//unshift(adds to beginning and returns array new length)
//slice(removes element by index # and returns copy of array with left over element(s), original not modified)
//splice(remove and adding elements)
//spread operator ...
//  console.log();

function destructivelyAppendKittens(array) {
  array.push();
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

// not sure //
function destructivelyRemoveFirstKittens(array) {
  let newArray = array.shift();
  return newArray;
}
kittens = ['Milo', 'Otis', 'Garfield', '1', '2', '3'];
console.log(kittens);

console.log(destructivelyRemoveFirstKittens(kittens));

function appendKitten(array, element) {
  let newArray = array.push(element);
  return newArray;
}

function prependKitten(array, element) {
  let newArray = array.unshift(element);
  return newArray;
}


function removeLastKitten(array, element) {
  return (array.slice(0, array.length - 1))
}

function removeFirstKitten(array, element) {
 return (array.slice(1));
}

