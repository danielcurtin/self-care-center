var affirmButton = document.querySelector("#affirmation");
var mantraButton = document.querySelector("#mantra");
var submitButton = document.querySelector("#receive-msg");
var favoriteButton = document.querySelector(".favorite");
var favButtonImg = document.querySelector("#fav-button");
var meditateIcon = document.querySelector(".meditation-icon");
var displayedMessage = document.querySelector(".displayed-message");

var favorites = [];
var currentFavorited = false;

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
    disableFav();
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
    };
};

function enableFav() {
    currentFavorited = true;
    favButtonImg.src = "./assets/red-heart.png";
};

function disableFav() {
    currentFavorited = false;
    favButtonImg.src = "./assets/heart-outline.png";
}

function favoriteMessage() {
    var currentMsg = displayedMessage.innerText;
    if (!currentFavorited) {
        enableFav();
        favorites.push(currentMsg);
    } else {
        for (var i = 0; i < favorites.length; i++) {
            if (currentMsg === favorites[i]) {
                favorites.splice(i, 1);
            }
        }
        disableFav();
    };
};