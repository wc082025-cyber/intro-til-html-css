// I JavaScript

// Vi henter ut HTML elementet via document.getElementById
const myButton = document.getElementById("my-btn");

// En funksjon vi kan "kalle" på
function sayHello() {
  console.log(
    "You have clicked, i will enter your home as you have entered mine"
  );
}

// Vi bruker addEventListener til å "lytte" etter hendelser i HTML dokumentet
myButton.addEventListener("click", sayHello);
