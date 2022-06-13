const azalt = document.querySelector(".azalt");
const artir = document.querySelector(".artir");
const reset = document.querySelector(".reset");

let i = 0;

azalt.addEventListener("click", function () {
  i--;
  document.querySelector("#value").innerHTML = i;
  if (i < 0) {value.style.color = "red";}
});

artir.addEventListener("click", function () {
  i++;
  document.querySelector("#value").innerHTML = i;
  if (i > 0) {value.style.color = "green";}
});

reset.addEventListener("click", function () {
  i = 0;
  document.querySelector("#value").innerHTML = i;

  if (i === 0) {value.style.color = "black";}
});
