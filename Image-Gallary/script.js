

let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let box = document.querySelector('.box');

let degrees = 0;

prev.addEventListener('click', function () {
    degrees += 45;
    box.style = `transform: perspective(1000px) rotateY(${degrees}deg)`;
})

next.addEventListener('click', function () {
    degrees -= 45;
    box.style = `transform: perspective(900px) rotateY(${degrees}deg)`;
})