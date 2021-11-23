const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat (Ralph) {
    cats.push(Ralph);
}

function destructivelyPrependCat (Bob){
    cats.unshift(Bob);
}

function destructivelyRemoveLastCat (){
    cats.pop();
}

function destructivelyRemoveFirstCat (){
    cats.shift(); 
}


 
function appendCat(Broom) {
    const copyOfCats = cats.slice();
    copyOfCats.push(Broom);
    return copyOfCats;
}

function prependCat(A) {
    const copyOfCats = cats.slice();
    copyOfCats.unshift(A);
    return copyOfCats;
}

function removeLastCat(A) {
    const copyOfCats = cats.slice();
    copyOfCats.pop(A);
    return copyOfCats;
}

function removeFirstCat(A) {
    const copyOfCats = cats.slice();
    copyOfCats.shift(A);
    return copyOfCats;
}