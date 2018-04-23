var UPDATETIME = 100;

var cats = 0;
var lifetimeCats = 0;

var catnip = 0;
var catnipPrice = 100;
var catnipUnlocked = false;

var catLadies = 0;
var catLadiesPrice = 250;
var catLadiesUnlocked = false;


function increaseCatsOnClick() {
    var catIncrease = Math.exp(0.0291 * catnip);
    cats += catIncrease;
    lifetimeCats += catIncrease;
    updateCats();
}

function increaseCats() {
    var catIncrease = (Math.exp(0.0433 * catLadies) - 1);
    cats += catIncrease;
    lifetimeCats += catIncrease;
    updateCats();
}
setInterval(increaseCats, UPDATETIME);


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

function unlockCatnip() {
    if(100 <= cats) {
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

function unlockCrazyCatLadies() {
    if (250 <= cats) {
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

function buyCatLadies()    {
    if(cats >= catLadiesPrice)    {
        cats -= catLadiesPrice;
        catLadies ++;
        catLadiesPrice = (250 + 2.5*catLadies + (Math.exp(0.0989 * catLadies) - 1)); //Adjust price to use exponential
        document.getElementById("catLadyPrice").innerHTML = Math.floor(catLadiesPrice);
        document.getElementById("catLadyCount").innerHTML = catLadies;
        updateCats();
    }
}