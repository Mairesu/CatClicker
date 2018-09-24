import React from 'react';
import ReactDOM from 'react-dom';
import Upgrade from 'reactCatScript';

/**
 * Class which is responsible for rendering
 * the react components
 */
class App extends React.Component {
    render() {
        return (
            /* inside here you add all objects, components
            and such thar are to be rendered */
            <div>
                <Upgrade name="catnip" itemUnlock="0" startingPrice="100" imgUrl=""/>
            </div>

        );
    }
}

// render the react components
ReactDOM.render(App, document.getElementById('upgradables'));
