import React from 'react';

class CatCounter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                Cats: {Math.round(this.props.cats)}{'\n'}
            </div>
        );
    }
}

export default CatCounter