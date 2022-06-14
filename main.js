const azalt = document.querySelector(".azalt");
const artir = document.querySelector(".artir");
const reset = document.querySelector(".reset");

let i = 0;

artir.addEventListener("click", function () {
  i++;
  document.querySelector("#value").innerHTML = i;
  azalt.disabled=false;
  if (i > 0) {
    value.style.color = "green";
  }
});

azalt.addEventListener("click", function () {

  if (i==0 ){
    azalt.disabled=true;
  }

  document.querySelector("#value").innerHTML = i; 
  i--;
});

reset.addEventListener("click", function () {
  i = 0;
  document.querySelector("#value").innerHTML = i;

  if (i === 0) {
    value.style.color = "black";
  }
});


const main = document.querySelector("main");
const colors = [
  "black",
  "yellow",
  "blue",
  "green",
  "orange",
  "coral",
  "cyan",
  "hotpink",
];

let a = 0;
setInterval(function () {
  if (a == colors.length) a = 0;
  main.style.background = colors[a];
  a++;
}, 2000);
