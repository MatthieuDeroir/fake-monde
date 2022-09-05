import logo from '../logo.png';
import React from 'react';
import Button from '@mui/material/Button'
import Campaign from '@mui/icons-material/Campaign'

class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            render: true //Set render state to false
        }
    }
    componentDidMount() {
        setTimeout(function () { //Start the timer
            this.setState({ render: false }) //After 1 second, set render to true
        }.bind(this), 10000)
    }
    render() {
        if (this.state.render) {
            return (
                <img src={logo} className="App-logo" alt="logo" />
            );
        }

    }
}

export default Loading; 
