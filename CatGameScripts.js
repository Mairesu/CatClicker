
//Game logic constants
var UPDATETIME = 100;

//Global cat variables
var cats = 0;
var lifetimeCats = 0;

//Catnip variables
var catnip = 0;
var catnipPrice = 100;
var catnipUnlocked = false;

//Cat lady variables
var catLadies = 0;
var catLadiesPrice = 250;
var catLadiesUnlocked = false;

/**
 * Increases the amount of cats when the player clicks on the cat
 */
function increaseCatsOnClick() {
    var catIncrease = Math.exp(0.0291 * catnip);
    cats += catIncrease;
    lifetimeCats += catIncrease;
    updateCats();
}

/**
 * Passively increases cats depending
 */
function increaseCats() {
    var catIncrease = (Math.exp(0.0433 * catLadies) - 1);
    cats += catIncrease;
    lifetimeCats += catIncrease;
    updateCats();
}

/**
 * Runs the increaseCats function every "UPDATETIME" milliseconds
 */
setInterval(increaseCats, UPDATETIME);

/**
 * Updates the cats to the html display and unlocks shop functions when certain cat milestones are reached
 */
function updateCats()   {
    document.getElementById("catCount").innerHTML = Math.floor(cats);
    document.getElementById("lifetimeCatCount").innerHTML = Math.floor(lifetimeCats);
    if(!catnipUnlocked)    {
        unlockCatnip()
    }
    if(!catLadiesUnlocked)   {
        unlockCrazyCatLadies()
    }
}

/**
 * unlocks catnip and writes it to the html display
 */
function unlockCatnip() {
    if(100 <= lifetimeCats) {
        document.getElementById("catnipShop").innerHTML =
            '<li class="shopElement shopButtonContainer">\n' +
            '        <button class="shopButton" onclick="buyCatnip()">ᐃ</button>\n' +
            '    </li>\n' +
            '    <li class="shopElement">\n' +
            '        Catnip\n' +
            '    </li>\n' +
            '    <li class="shopElement">\n' +
            '        Price: <em id="catnipPrice">100</em>\n' +
            '    </li>\n' +
            '    <li class="shopElement">\n' +
            '        Owned: <em id="catnipCount">0</em>\n' +
            '    </li>';
        catnipUnlocked = true;
    }
}

/**
 * makes buying catnip possible
 * increases price of catnip the more total catnip the player has
 */
function buyCatnip()    {
    if(cats >= catnipPrice)    {
        cats -= catnipPrice;
        catnip ++;
        catnipPrice = (100 + 2*catnip + (Math.exp(0.0655 * catnip) - 1)); //Adjust price to use exponential
        document.getElementById("catnipPrice").innerHTML = Math.floor(catnipPrice);
        document.getElementById("catnipCount").innerHTML = catnip;
        updateCats();
    }
}

/**
 * unlocks cat ladies and writes it to the html display
 */
function unlockCrazyCatLadies() {
    if (250 <= lifetimeCats) {
        document.getElementById("catLadyShop").innerHTML =
            ' <li class="shopElement shopButtonContainer">\n' +
            '        <button class="shopButton" onclick="buyCatLadies()">ᐃ</button>\n' +
            '    </li>\n' +
            '    <li class="shopElement">\n' +
            '        Crazy cat ladies\n' +
            '    </li>\n' +
            '    <li class="shopElement">\n' +
            '        Price: <em id="catLadyPrice">250</em>\n' +
            '    </li>\n' +
            '    <li class="shopElement">\n' +
            '        Owned: <em id="catLadyCount">0</em>\n' +
            '    </li>';
        catLadiesUnlocked = true;
    }
}

/**
 * makes the purchase of crazy cat ladies possible
 * increases price of cat ladies the more total catladies the player has
 */
function buyCatLadies()    {
    if(cats >= catLadiesPrice)    {
        cats -= catLadiesPrice;
        catLadies ++;
        catLadiesPrice = (250 + 2.5*catLadies + (Math.exp(0.0930 * catLadies) - 1)); //Adjust price to use exponential
        document.getElementById("catLadyPrice").innerHTML = Math.floor(catLadiesPrice);
        document.getElementById("catLadyCount").innerHTML = catLadies;
        updateCats();
    }
}