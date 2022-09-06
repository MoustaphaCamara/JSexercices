// Créer 3 variables pour stocker 3 chiffres aléatoires

// Donner au body une couleur de fond en rgb()

// Montrer sur le body la couleur rgb()

let text = document.getElementById("text");

// mettre dans une fonction pour la call when needed
function bodyColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let color = `rgb(${red}, ${green}, ${blue})`;
  document.body.style.background = color;
  text.innerHTML = color;
}

setInterval(bodyColor, 1000);

// stop interval puis relance
// text.addEventListener("click", (e) => {
//   clearInterval(myInterval);
//   console.log(myInterval);
//   if (myInterval == 1) {
//     setInterval(myInterval);
//   }
//   if ((interval = true)) {
//     clearInterval(myInterval);
//     interval = !interval;
//   } else {
//     myInterval();
//     interval = true;
//   }
// });
// CLEARINTERVAL(nom de l'interval)
