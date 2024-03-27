/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let switchCardButton = document.querySelector("#button");
  switchCardButton.addEventListener("click", function() {
    let icons = ["♦", "♥", "♠", "♣"];
    let values = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "K",
      "Q",
      "J",
      "A"
    ];

    let randomValue = Math.floor(Math.random() * values.length);
    let randomIcons = Math.floor(Math.random() * icons.length);

    function colorSuits(icon) {
      if (icon === "♠" || icon === "♣") {
        return "black";
      } else {
        return "red";
      }
    }

    let cardHTML = `
  <div id="card-symbol-top" class="cardSymbol ${colorSuits(
    icons[randomIcons]
  )}">
  ${icons[randomIcons]}
  </div>
  <div class="card-number">
    <h2>${values[randomValue]}</h2>
  </div>
  <div id="card-symbol-bottom" class="cardSymbol ${colorSuits(
    icons[randomIcons]
  )}">
  ${icons[randomIcons]}
  </div>
`;

    let cardContainer = document.querySelector("#card");
    cardContainer.innerHTML = cardHTML;
  });
};
