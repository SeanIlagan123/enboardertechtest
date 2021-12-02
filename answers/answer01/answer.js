var nums = [1, 2, 3, 4];

function reduce(array, num) {
    var sum = 0;
    var length = 0;
    if (typeof num !== "undefined") {
        length = num;
    } else {
        length = array.length;
    }
    for (var i = 0; i < length; i++) {
        sum += array[i];
    }
    return sum;
}


console.log(reduce(nums));
console.log(reduce(nums, 3));
