import React from "react";

let lifetimeCats = 0;

/*
Class representing an upgrade (WIP)
 */
class Upgrade extends React.Component{

    constructor = (name, itemUnlock, startingPrice) => {
        this.name = name;
        this.itemUnlock = itemUnlock;
        this.startingPrice = startingPrice;
    };

    unlock = (itemUnlock) => {
        if (itemUnlock <= lifetimeCats) {
            return (
              <div>

              </div>
            );
        }
    }
}

