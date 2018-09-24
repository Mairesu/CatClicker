import React from "react";

let lifetimeCats = 0;
let catNipCount = 0;

/*
TODO FIX THIS CLASS (WIP)
Class representing an upgrade (WIP)
 */
class Upgrade extends React.Component{

    constructor = (name, itemUnlock, startingPrice, imgUrl) => {
        this.name = name;
        this.itemUnlock = itemUnlock;
        this.startingPrice = startingPrice;
        this.imgUrl = imgUrl;
    };

    /**
     * TODO TEST AND SEE IF IT WORKS
     * WIP: Not sure if it works atm.
     *
     * returns a list containing the details
     * for the specified component using JSX.
     *
     * @returns a list containing the details
     * for the specified component using JSX.
     */
    unlock() {
        if (itemUnlock <= this.lifetimeCats) {
            return (
              <ul className="shopList">
                  <li className="shopElement shopButtonContainer">
                    <button className="shopButton" onClick="buyCatnip">ᐃ</button>
                  </li>
                  <li className="shopElement">
                      <!-- this.name; -->
                      <p>test</p>;
                  </li>
                  <li className="shopElement">
                      <!-- Price: <em id="catnipPrice">this.startingPrice</em> -->
                      <p>test</p>;
                  </li>
                  <li className="shopElement">
                      <!-- Owned: <em id="catnipCount">this.catNipCount</em> -->
                      <p>test</p>;
                  </li>
              </ul>
            );
        }
    };
}

// exports
export default Upgrade;
