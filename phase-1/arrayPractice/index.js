// practicing arrays

const cats = ['Bob','Tanner','Sally'];

function destructivelyAppendCat() {
    cats.push('Gus');

// How is the array cats changed?

}

function destructivelyPrependCat() {
    cats.unshift('Paul');
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    return [...cats, name];
}

function prependCat(name) {
    return [name, ...cats]

// what does ... do?

}

function removeLastCat() {
    return cats.slice(0, cats.length-1);
}

function removeFirstCat() {
    return cats.slice(1);

// what is the difference betweedn destructive and non-destructive?


}