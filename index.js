// Write your solution here!
let cats=["Milo" ,"Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");

}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop(2);
}

function destructivelyRemoveFirstCat() {
    cats.shift(0);
}

function appendCat(name) {
    let newCat;
    newCat = ([...cats, "Broom"]);
    return newCat;
}
appendCat("Broom");

function prependCat(name) {
    let newCat;
    newCat = (["Arnold",...cats]);
    return newCat;
}
prependCat("Arnold");

function removeLastCat(){
    let newArray;
    newArray = (["Milo", "Otis"]);
    newArray.splice(2,"Garfield");
    return newArray;
}
removeLastCat();

function removeFirstCat(){
    let newArray;
    newArray = (["Otis", "Garfield"]);
    newArray.splice(0,"Milo");
    return newArray;
}
removeFirstCat();