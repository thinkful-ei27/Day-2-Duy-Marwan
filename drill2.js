function repeat(fn, n) {
    for (i = 0; i < n; i++) {
        fn;
    }
}

function hello() {
    console.log('Hello world');
}

function goodbye() {
    console.log('Goodbye world');
}

repeat(hello(), 5);

repeat(goodbye(), 5);


function filter(arr, fn) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]) === true) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function (name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES


function hazardWarningCreator(typeOfWarning) {
    let warningCounter = 0;

    return function (location) {
        warningCounter++
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`)
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`)
    }
}

const mountainWarning = hazardWarningCreator('Mountain on the road');
const lowVisibleArea = hazardWarningCreator('Low visible area!');
const iceWarning = hazardWarningCreator('Bridge my ice in the cold');

mountainWarning('Main st');


function steps (movement){
    return movement.filter(mov => mov[0] >= 0 && mov[1] >= 0)
}

steps([]);
