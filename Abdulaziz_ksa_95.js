const modal = document.getElementById("modal");
const btn = document.getElementById("greetBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let founded = 1932;
let currentYear = new Date().getFullYear();
let age = currentYear - founded;
document.getElementById("counter").innerText ='   عمر المملكة العربية السعودية خمسة وتسعون عاما من العز والفخر';