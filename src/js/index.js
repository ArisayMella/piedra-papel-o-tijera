// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const gameItemElement = document.getElementById('game-items');
const userPickedElement = document.getElementById('user-picked');
const pcPickedElement = document.getElementById('pc-picked');
const resultElement = document.getElementById('result');

const gameOptions = ['rock', 'paper', 'scissor'];
let userSelection = null;
let pcSelection = null;

const printChoices = () => {
    userPickedElement.textContent = userSelection.toUpperCase();
    pcPickedElement.textContent = pcSelection;
};

const checkWinner = () => {
    if (userSelection === pcSelection) {
        resultElement.textContent = 'YOU WIN';
    }
}

const generateRandomPlay = () => {
    const randomPlay = Math.floor(Math.random() * gameOptions.length);
    const pcPlay = gameOptions[randomPlay];
    pcSelection = pcPlay
    //console.log(`${userSelection}--- ${pcSelection}`);
    printChoices();
}


const setUserSelection = item => {
    userSelection = item;
    generateRandomPlay();
}

gameItemElement.addEventListener('click', ev => {
    if (!ev.target.classList.contains('game-item')) return;

    console.log(ev.target.dataset. item);
});