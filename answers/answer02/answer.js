var stringArray = ['eight', 'nine', 'four', 'seven', 'two', 'six', 'ab', 'a', 'ccc', 'cc', 'll'];
var numArray = [1.6, 2.4, 2.5, 4.4, 4.9, 5.9];
var key = [];

function groupBy(array, iterate) {
    var object = {};
    if (iterate == "length") {
        for (var i = 0; i < array.length; i++) {
            key.push(String(array[i]).length);
        }   // add elements to key array based off string length of element
        for (var i = 0; i < key.length; i++) {
            object[key[i]] = keyLength(array, key[i]); // Assign value to key in object
        }
    }
    if (iterate == Math.floor) {
        for (var i = 0; i < array.length; i++) {
            key.push(Math.floor(array[i]));
        }
        for (var i = 0; i < key.length; i++) {
            object[key[i]] = keyFloor(array, key[i]); // Assign value to key in object
        }
    }
    key = [];
    return object;
}

function keyLength(array, key) {
    var values = [];
    for (var i = 0; i < array.length; i++) {
        if (String(array[i]).length == key) {
            values.push(array[i]);
        }
    }
    return values;
}

function keyFloor(array, key) {
    var values = [];
    for (var i = 0; i < array.length; i++) {
        if (Math.floor(array[i]) == key) {
            values.push(array[i]);
        }
    }
    return values;
}

var resultString = groupBy(stringArray, 'length');
var resultNum = groupBy(numArray, Math.floor);

console.log(resultString);
console.log(resultNum);