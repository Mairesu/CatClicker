import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Class which is responsible for rendering
 * the react components
 */
class App extends React.Component {
    render() {
        return (
          /* inside here you add all objects, components
          and such thar are to be rendered */
          console.log("Adding objects representing upgradables in the future")
        );
    }
}

// render the react components
ReactDOM.render(App, document.getElementById('upgradables'));
