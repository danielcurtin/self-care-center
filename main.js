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

var favoritedMsg;
var unFavButton;




submitButton.addEventListener("click", outputRandomMsg);
favoriteButton.addEventListener("click", favoriteMessage);
viewFavsButton.addEventListener("click", showSaved);
homeButton.addEventListener("click", showHomeClean);




function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
};

function displayMessage() {
    meditateIcon.classList.add("hidden");
    visibleMsg.classList.remove("hidden");
    favoriteButton.classList.remove("hidden");
};

function displayIcon() {
    visibleMsg.classList.add("hidden");
    favoriteButton.classList.add("hidden");
    meditateIcon.classList.remove("hidden");
};

function outputRandomMsg() {
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

    for (var i = 0; i < favorites.length; i++) {
        if (visibleMsg.innerText === favorites[i]) {
            enableFav();
        };
    };
};

function enableFav() {
    currentFavorited = true;
    favButtonImg.src = "./assets/red-heart.png";
};

function disableFav() {
    currentFavorited = false;
    favButtonImg.src = "./assets/heart-outline.png";
};

function favoriteMessage() {
    var currentMsg = visibleMsg.innerText;

    if (!currentFavorited) {
        for (var i = 0; i < favorites.length; i++) {
            if (currentMsg === favorites[i]) {
                return;
            };
        };
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

function showHomeClean() {
    if (meditateIcon.classList.contains("hidden")) {
        visibleMsg.classList.toggle("hidden");
        meditateIcon.classList.toggle("hidden");
        favoriteButton.classList.toggle("hidden");
    };

    switchPages();
};

function switchPages() {
    favDisplayBox.innerHTML = "";
    headers.classList.toggle("hidden");
    optionBox.classList.toggle("hidden");
    homeButton.classList.toggle("hidden");
    msgDisplayBox.classList.toggle("hidden");
    favDisplayBox.classList.toggle("hidden");
    viewFavsButton.classList.toggle("hidden");
};

function updateSavedElements() {
    favDisplayBox.innerHTML = "";

    for (var i = 0; i < favorites.length; i++) {
        var createBox = document.createElement("div");
        var newFavButton = document.createElement("button");
        var newFavImg = document.createElement("img");
        

        createBox.setAttribute("class", "faved-msg-box");
        createBox.setAttribute("id", `f${i}`);
        createBox.innerText = favorites[i];
        favDisplayBox.appendChild(createBox);

        newFavButton.setAttribute("class", "already-faved");
        createBox.appendChild(newFavButton);

        newFavImg.setAttribute("src", "./assets/red-heart.png");
        newFavImg.setAttribute("style", "height: 30px; width: 30px;");
        newFavButton.appendChild(newFavImg);
        
        newFavButton.addEventListener("click", deleteFav);
    };
};

function showSaved() {
    switchPages();
    updateSavedElements();
};

function deleteFav(e) {
    var clicked = e.currentTarget.parentElement;

    for (var i = 0; i < favorites.length; i++) {
        if (clicked.innerText === favorites[i]) {
            favorites.splice(i, 1);
            updateSavedElements();
            return;
        };
    };
};