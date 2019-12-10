import React, {Component} from 'react';
import '../styles/Game.css';
import CatCounter from '../visual/CatCounter';

//Component representing the game logic
class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ticksPerSeconds: 10,

            //basically put all the variables for the game to keep here
            cats: 0,
            lifetimeCats: 0,

            catnip: 0,
            basePrice_catnip: 10,

            crazyCatLadies: 0,
            basePrice_catladies: 50,
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
        }, 1000 / this.state.ticksPerSeconds)
    }


    incrementCatsFromCatnip() {
        this.setState({
            cats: this.state.cats + (0.2 / this.state.ticksPerSeconds) * (this.state.catnip)
        });
    }

    incrementCatsFromCatladies() {
        this.setState({
            cats: this.state.cats + (0.666 / this.state.ticksPerSeconds) * (this.state.crazyCatLadies)
        });
    }

    incrementCats() {
        this.setState({
            cats: this.state.cats + 1
        });
    }

    incrementCatnip() {
        this.setState({
            catnip: this.state.catnip + 1
        });
    }

    incrementCatladies() {
        this.setState({
            crazyCatLadies: this.state.crazyCatLadies + 1
        });
    }

    getCatnipPrice() {
        return Math.ceil(this.state.basePrice_catnip * Math.pow(1.1, this.state.catnip));
    }

    getCatladiesPrice() {
        return Math.ceil(this.state.basePrice_catladies * Math.pow(1.22, this.state.crazyCatLadies));
    }

    buyCatnip() {
        if(this.state.cats >= this.getCatnipPrice())   {
            this.setState({
                cats: this.state.cats - this.getCatnipPrice()
            });
            this.incrementCatnip();
        }
    }

    buyCatladies() {
        if(this.state.cats >= this.getCatladiesPrice())   {
            this.setState({
                cats: this.state.cats - this.getCatladiesPrice()
            });
            this.incrementCatladies();
        }
    }

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <button className="CatButton" onClick={e => this.incrementCats()}>
                            <header>
                                <CatCounter cats={this.state.cats}/>
                            </header>
                        </button>
                    </li>
                    <li>
                        <header>
                            Catnip: {this.state.catnip}
                        </header>
                    </li>
                    <li>
                        <button className="CatButton" onClick={e => this.buyCatnip()}>
                            <header>
                                Buy catnip: {this.getCatnipPrice()}
                            </header>
                        </button>
                    </li>
                    <li>
                        <header>
                            Crazy catladies: {this.state.crazyCatLadies}
                        </header>
                    </li>
                    <li>
                        <button className="CatLady" onClick={e => this.buyCatladies()}>
                            <header>
                                Buy crazy cat lady: {this.getCatladiesPrice()}
                            </header>
                        </button>
                    </li>
                </ul>
            </div>
        );
    }

}

export default Game;
