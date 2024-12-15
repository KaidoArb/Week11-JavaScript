const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["pig1.png", "pig2.png", "pig3.png", "pig4.png"];

myButton.addEventListener('click', changeImage);

function changeImage() {
    let randomIndex = Math.floor(Math.random() * images.length);
    image.src = "img/"+images[randomIndex]
}