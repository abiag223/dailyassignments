// MAKE SURE you use the array functions to complete these problems.

// Problem 1
// Below we have an array. Take the last item off of the array.

let array1 = [1, 2, 3, 4, 5, 6];
function removeLastItem() {

  array1.pop();
  //write code here
}


// Problem 2
// Below we have an array. Take the first item off of the array.

let array2 = ["This", "Hello", "World"];
function removeFirstItem() {
  //write code here
  array2.shift();
}


// Problem 3
// Below we have an array. Remove "stuff" and "ready" from the array.

let array3 = ["well", "stuff", "money", "ready", "hello"];
function removeItems() {
  //write code here
  array3.splice(1, 2);
}



// Problem 4
// Below we have an array. Add "well" to the beginning of the array.

let array4 = ["hello", "people"];

function addItem() {
  //write code here
  array4.unshift("well");
}


// Problem 5
// Below we have an array. Add "power" in between "great" and "comes".

let array5 = ["with", "great", "comes", "great", "responsibility"];
function addMoreItem() {
  //write code here
  array5.splice(2,0,"power");
}

// Problem 6
// Below we have an array. Add 7 to the end of the array.

let array6 = [1, 2, 3, 4, 5, 6];
function addLast() {
  //write code here
array6.push(7);


}

