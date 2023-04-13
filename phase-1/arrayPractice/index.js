// practicing arrays

const cats = ['Bob','Tanner','Sally'];

function destructivelyAppendCat() {
    cats.push('Gus');

// How is the array cats changed?
// array is changed to ['Bob','Tanner',Sally','Gus']
// .push puts something in the back


}

function destructivelyPrependCat() {
    cats.unshift('Paul');
}

// 


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
//  ... creates a copy of array or objects


}

function removeLastCat() {
    return cats.slice(0, cats.length-1);
}

function removeFirstCat() {
    return cats.slice(1);

// what is the difference between destructive and non-destructive?

// destructive changes the original data

// non-destructive just changes the copy of the og data
// mess with og data too much, you'll get bugs

}