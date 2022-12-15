var affirmButton = document.querySelector("#affirmation");
var mantraButton = document.querySelector("#mantra");
var submitButton = document.querySelector("#receive-msg");
var favoriteButton = document.querySelector(".favorite");
var viewFavsButton = document.querySelector("#view-favs")
var homeButton = document.querySelector("#home");

var headers = document.querySelector("header");
var optionBox = document.querySelector(".option-box");
var msgDisplayBox = document.querySelector(".msg-display-box");
var favDisplayBox = document.querySelector(".fav-display");

var favButtonImg = document.querySelector("#fav-button");
var meditateIcon = document.querySelector(".meditation-icon");
var visibleMsg = document.querySelector(".displayed-message");

var favorites = [];
var currentFavorited = false;


//event listeners
submitButton.addEventListener("click", outputRandom);
favoriteButton.addEventListener("click", favoriteMessage);
viewFavsButton.addEventListener("click", showSaved);
homeButton.addEventListener("click", switchPages);


//event handlers
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
};

function displayMessage() {
    meditateIcon.classList.add("hidden");
    visibleMsg.classList.remove("hidden");
    favoriteButton.classList.remove("hidden");
};

function displayIcon() {
    meditateIcon.classList.remove("hidden");
    visibleMsg.classList.add("hidden");
    favoriteButton.classList.add("hidden");
};

function outputRandom() {
    disableFav();
    if (mantraButton.checked) {
        displayMessage();
        visibleMsg.innerText = mantras[getRandomIndex(mantras)];
        mantraButton.checked = false;
    } else if (affirmButton.checked) {
        displayMessage();
        visibleMsg.innerText = affirmations[getRandomIndex(affirmations)];
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
    var currentMsg = visibleMsg.innerText;
    if (!currentFavorited) {
        enableFav();
        favorites.push(currentMsg);
    } else {
        for (var i = 0; i < favorites.length; i++) {
            if (currentMsg === favorites[i]) {
                favorites.splice(i, 1);
            };
        };
        disableFav();
    };
};

function switchPages() {
    favDisplayBox.innerHTML = "";
    viewFavsButton.classList.toggle("hidden");
    homeButton.classList.toggle("hidden");
    headers.classList.toggle("hidden");
    optionBox.classList.toggle("hidden");
    msgDisplayBox.classList.toggle("hidden");
    favDisplayBox.classList.toggle("hidden");
};

function showSaved() {
    switchPages();

    for (var i = 0; i < favorites.length; i++) {
        var createBox = document.createElement("div");
        createBox.setAttribute("class", "faved-msg-box");
        createBox.innerText = favorites[i];
        favDisplayBox.appendChild(createBox);
    };
};