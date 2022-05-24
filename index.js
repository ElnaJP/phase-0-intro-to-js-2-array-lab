const cats = ['Milo', 'Otis', 'Garfield'];
cats[0];
function destructivelyAppendCat() {
    cats.push('Ralph');
}

function destructivelyPrependCat() {
    cats.unshift('Bob');
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat() {
        let newArray = cats.slice();
        // or ES6 way
        // var newArray = [...kittens];
        newArray.push('Broom')
        return newArray
      }

function  prependCat() {
       let newArray = cats.slice();
        // or ES6 way
        // var newArray = [...kittens];
        newArray.unshift('Arnold')
        return newArray
}
function removeLastCat() {
let newArray = cats.slice()
newArray.pop()
return newArray
};
function removeFirstCat() {
let newArray= cats.slice()
newArray.shift()
return newArray
};
