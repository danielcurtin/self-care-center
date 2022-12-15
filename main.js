var affirmButton = document.querySelector("#affirmation");
var mantraButton = document.querySelector("#mantra");
var submitButton = document.querySelector("#receive-msg");
var favoriteButton = document.querySelector(".favorite");
var favButtonImg = document.querySelector("#fav-button");
var meditateIcon = document.querySelector(".meditation-icon");
var displayedMessage = document.querySelector(".displayed-message");

var favorites = [];

//event listeners
submitButton.addEventListener("click", outputRandom);
favoriteButton.addEventListener("click", favoriteMessage);

//functions
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
};

function displayMessage() {
    meditateIcon.classList.add("hidden");
    displayedMessage.classList.remove("hidden");
    favoriteButton.classList.remove("hidden");
};

function displayIcon() {
    meditateIcon.classList.remove("hidden");
    displayedMessage.classList.add("hidden");
    favoriteButton.classList.add("hidden");
};

function outputRandom() {
    if (mantraButton.checked) {
        displayMessage();
        displayedMessage.innerText = mantras[getRandomIndex(mantras)];
        mantraButton.checked = false;
    } else if (affirmButton.checked) {
        displayMessage();
        displayedMessage.innerText = affirmations[getRandomIndex(affirmations)];
        affirmButton.checked = false;
    } else {
        displayIcon();
        return;
    };
};

function favoriteMessage() {
    favButtonImg.src = "./assets/red-heart.png";
};