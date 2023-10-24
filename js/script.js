//Dichiarazione e inizializzazione delle variabili
const images = ["./img/01.jpg", "./img/02.jpg", "./img/03.jpg", "./img/04.jpg", "./img/05.jpg"];
console.log(images);

const imgCarousel = document.querySelector(".items");
console.log(imgCarousel);

let imgString = "";

//Ciclo per inserire le varie classi nella nostra stringa
for (let i = 0; i < images.length; i++)
{
    const curImg = images[i];
    imgString += `<div class="item"> <img src="${curImg}" alt=""> </div>`;
}

//Aggiunta dei bottoni
imgString += `<div class="prev"></div>`;
imgString += `<div class="next"></div>`;
console.log(imgString);

//Inserimento della stringa nel file Html
imgCarousel.innerHTML = imgString;

//Assegniamo ad ogni classe che contiene la singola immagine una nostra variabile
const imgSlide = document.querySelectorAll(".item");
console.log(imgSlide);

//Partiamo dalla prima classe, nonchè la prima immagine
let currentSlideIndex = 0;
imgSlide[currentSlideIndex].classList.add("active");

