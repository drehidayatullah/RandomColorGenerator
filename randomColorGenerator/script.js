"use strict";

const getColor = document.getElementsByClassName("button1");
const colorName = document.getElementById("text");

const newColor = function () {
  let name = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += name[Math.floor(Math.random() * 16)];
  }
  document.body.style.background = color;
  colorName.innerHTML = color;
};
