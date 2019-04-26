import React, {Component} from 'react';
import '../styles/Game.css';
import CatCounter from '../visual/CatCounter';

//Component representing the game logic
class Game extends Component {

    constructor() {
        super();
        this.state = {
            ticksPerSeconds: 10,

            //basically put all the variables for the game to keep here
            cats: 0,
            lifetimeCats: 0,

            catNip: 3,
            crazyCatLadies: 2,
        }
    }

    componentDidMount() {
        this.doGameTick();
    }

    //Game tick for passive cat generation
    doGameTick() {
        setInterval(() => {
            this.incrementCatsFromCatladies();
            this.incrementCatsFromCatnip();
            console.log("Cats: " + this.getCats());
        }, 1000 / this.state.ticksPerSeconds)
    }

    //TODO put these in their own components (maybe(?)) (Technically game logic so should probably be here)
    //TODO Rewrite formulas and round them to whole numbers
    incrementCatsFromCatladies() {
        this.setState({
            cats: this.getCats() + 0.05 * (this.state.crazyCatLadies)
        });
    }

    incrementCatsFromCatnip() {
        this.setState({
            cats: this.getCats() + 0.02 * (this.state.catNip)
        });
    }

    incrementCats() {
        this.setState({
            cats: this.getCats() + 1
        });
    }

    getCats() {
        return this.state.cats;
    }

    render() {
        return (
            <div className="App">
                <button onClick={e => this.incrementCats()}>
                    <header className="App-header">
                        <CatCounter cats={this.getCats()}/>
                    </header>
                </button>
            </div>
        );
    }

}

export default Game;
