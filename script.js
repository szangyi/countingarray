"use strict";

window.addEventListener("DOMContentLoaded", arrayCounter);

const arr = [];
let counter = 0;

function arrayCounter() {
  arr.unshift(counter);
  counter++;

  if (counter > 9) {
    arr.pop(arr);
  }

  setTimeout(arrayCounter, 1000);

  console.log(arr);
}
