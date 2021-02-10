"use strict";

window.addEventListener("DOMContentLoaded", countingArray);

const arr = [];
let counter = 0;

function countingArray() {
  arr.unshift(counter);
  counter++;

  if (counter > 9) {
    arr.pop(arr);
  }

  setTimeout(countingArray, 1000);

  console.log(arr);
}
