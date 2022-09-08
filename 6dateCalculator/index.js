// Convert today date to input format
const today = new Date().toISOString().split("T")[0];
// console.log(today);
/*
toIsoString transforme le
Thu Sep 08 2022 14:20:20 GMT+0200 (heure d’été d’Europe centrale)
en
2022-09-08T12:21:10.399Z
year - month - day
séparer le tableau avec split (T)
et on récupère l'index 0 [0]
*/
start_date.value = today;
start_date.min = today;
// comme ça on peut pas aller plus tôt et réserver un truc à la veille

// Tomorrow date calc
let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
// check stack overflow
// ça veut dire tu prends date du jour et tu vas au lendemain
// console.log(tomorrow);

// convert to input format
let tomorrowFormat = tomorrow.toISOString().split("T")[0];
// console.log(tomorrowFormat);
end_date.value = tomorrowFormat;
end_date.min = tomorrowFormat;

// Empêcher que end date soit inférieure à start date
// on event sur le start_date
// change = à CHAQUE changement sur l'input
start_date.addEventListener("change", (e) => {
  // récupérer la date choisie : on la stock dans une data exemple let date
  let day = new Date(start_date.value);

  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() + 1);
    end_date.value = day.toISOString().split("T")[0];
  }
});

end_date.addEventListener("change", (e) => {
  let day = new Date(end_date.value);
  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() - 1);
    start_date.value = day.toISOString().split("T")[0];
  }
});

const bookingCalc = () => {
  let diffTime = Math.abs(
    new Date(end_date.value) - new Date(start_date.value)
  );
  //   console.log(diffTime);
  //   on a un résultat en MILLISECONDES (c'est un timeStamp) donc /1000 pour arriver aux mili, *60 pour les minutes, *60 pr les heures, *24 pr la journée
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  total.textContent = diffDays * nightPrice.textContent;
  // ceil car on arrondit tjrs au supérieur
};
// math.abs produit une valeur ABSOLUE

start_date.addEventListener("change", bookingCalc);
end_date.addEventListener("change", bookingCalc);
