// BASE CARDS COLLECTION

const baseCollection = [
    { id: 1, art: '1.png' },
    { id: 2, art: '2.png' },
    { id: 3, art: '3.png' },
    { id: 4, art: '4.png' },
    { id: 5, art: '5.png' },
    { id: 6, art: '6.png' },
    { id: 7, art: '7.png' },
    { id: 8, art: '8.png' },
];

const board = document.querySelector('.board');
const startButton = document.getElementById('startButton');
const timer = document.getElementById('timer');
const gameArt = document.getElementById('gameArt');
const backgroundMusic = new Audio('assets/audio/pokemonGym.mp3');
const winEffect = new Audio('assets/audio/win.mp3');

// SHUFFLE CARDS AND GENERATE PAIRS

const shuffled = [...shuffle(baseCollection), ...shuffle(baseCollection)];

// GENERATE BOARD

generateBoard(shuffled);

gameArt.addEventListener('change', () => {
    generateBoard(shuffled);
})

startButton.addEventListener('click', startGame);

// setInterval ID

let tm1;

// FUNCTIONS

// START GAME

function startGame() {
    backgroundMusic.volume = 0.3;
    backgroundMusic.play();
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        console.log('reached');
        card.classList.remove('flipped');
        card.addEventListener('click', () => flip(card));
    });
    gameArt.remove();
    startButton.remove();
    tm1 = setInterval(() => {
        let timeLeft = parseInt(timer.textContent) + 1;
        timer.textContent = timeLeft < 10 ? `0${timeLeft}` : timeLeft;
    }, 1000);
}

// FLIP CARD

function flip(card) {
    card.classList.add('flipped');

    const flippedCards = document.querySelectorAll('.flipped');

    if (flippedCards.length === 2) {
        preventClick();
        checkForMatch(flippedCards[0], flippedCards[1]);
    }
}

// STOP USER FROM FLIPPING CARDS

function preventClick() {
    board.classList.add('prevent-click');
    setTimeout(() => {
        board.classList.remove('prevent-click');
    }, 500)
}

// CHECK IF FLIPPED CARDS MATCH

function checkForMatch(cardOne, cardTwo) {
    const idOne = cardOne.getAttribute('data-card-id');
    const idTwo = cardTwo.getAttribute('data-card-id');
    if (idOne === idTwo) {
        cardOne.classList.remove('flipped');
        cardTwo.classList.remove('flipped');
        cardOne.classList.add('matched');
        cardTwo.classList.add('matched');
    } else {
        setTimeout(() => {
            cardOne.classList.remove('flipped');
            cardTwo.classList.remove('flipped');
        }, 800);
    }

    // CHECK ALL CARDS FOUND AND END THE GAME

    const matchedCards = document.querySelectorAll('.matched');
    if (matchedCards.length / 2 === baseCollection.length) {
        backgroundMusic.pause();
        winEffect.play();
        clearInterval(tm1);
        board.innerHTML = `WINNER! You have found all of them in ${timer.textContent} seconds.`;
        board.classList.add('win');
        timer.remove();
        let restartButton = document.createElement('button');
        restartButton.classList.add('restart');
        restartButton.innerText = 'Play Again ?';
        board.appendChild(restartButton);
    }
}

// GENERATE CARD ELEMENT + ADD IT TO DOM

function generateBoard(cardsArray) {
    board.innerHTML = '';
    cardsArray.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card', 'flipped');
        cardElement.setAttribute('data-card-id', card.id);

        const front = document.createElement('div');
        front.classList.add('front');
        cardElement.appendChild(front);

        const back = document.createElement('div');
        back.classList.add('back');
        const img = document.createElement('img');
        img.src = `assets/img/${gameArt.value}/${card.art}`;
        back.appendChild(img);
        cardElement.appendChild(back);

        board.appendChild(cardElement);
    })
}

// SHUFFLE ARRAY - FISHER YATES ALGORITHM

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('restart')) {
        location.reload();
    }
});