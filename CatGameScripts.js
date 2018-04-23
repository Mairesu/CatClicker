var UPDATETIME = 100;

var cats = 0;

var catnip = 0;
var catnipPrice = 100;
var catnipUnlocked = false;

var catLadies = 0;
var catLadiesPrice = 250;
var catLadiesUnlocked = false;


function increaseCatsOnClick() {
    //cats += Math.floor(Math.pow(1.0718, catnip));
    cats += Math.exp(0.0669 * catnip);
    updateCats();
}

function increaseCats() {
    cats += (Math.exp(0.083 * catLadies) - 1); //Make Crazy cat ladies strong for late game
    updateCats();
}
setInterval(increaseCats, UPDATETIME);


function updateCats()   {
    document.getElementById("catCount").innerHTML = Math.floor(cats);
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
        catnipPrice = Math.pow(100, (1 + (0.0212*catnip))); //Adjust price to use exponential
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
        catLadiesPrice = Math.pow(250, (1 + (0.0212*catLadies))); //Adjust price to use exponential
        document.getElementById("catLadyPrice").innerHTML = Math.floor(catLadiesPrice);
        document.getElementById("catLadyCount").innerHTML = catLadies;
        updateCats();
    }
}