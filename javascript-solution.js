// PRINT REVERSE

// THIS FUNNCTION WILL ACCEPT AN ARRAY 
function printReverse(array) {
    for (var i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}

printReverse([3,2,1,4,5,7]);

// IS UNIFORM OR NOT

function isUniForm(array){
    var firstNum = array[0];
    for (var i = 1; i < array.length; i++){
        if (array[i] !== firstNum){
            return false;
        }
    }

    return true;
}

isUniForm([1,1,1,1,1,1]);

// SUM OF AN ARRAY

function sumArray(array){
    var total = 0;
    array.forEach(function(element){
        total += element;
    });
    return total;
}

sumArray([2,3,4,6,6,6,6]);

// FIND MAX OF AN ARRAY

function max(array){
    var maxNumber = array[0];
    for (var index = 1; index < array.length; index++) {
        if (maxNumber < array[i]){
            maxNumber = array[i];
        }
    }
    return maxNumber;
}

max([1,2,3]);