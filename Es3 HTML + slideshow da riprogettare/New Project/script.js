// Seleziono i pulsanti principali
const buttons = document.querySelectorAll(".btn");

// Seleziono le icone in alto
const topIcons = document.querySelectorAll(".top-icon");

// Seleziono i link laterali
const sideLinks = document.querySelectorAll(".side-menu a");

// Piccolo evento sui pulsanti
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    console.log("Pulsante cliccato: " + button.textContent);
  });
});

// Cambio colore alle icone quando clicco
topIcons.forEach(function (icon) {
  icon.addEventListener("click", function () {
    icon.style.color = "#38f2b2";
  });
});

// Messaggio semplice sui link laterali
sideLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    console.log("Hai cliccato il link: " + link.textContent);
  });
});
