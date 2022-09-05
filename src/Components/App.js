import React from 'react';
import Loading from './loading'
import Button from '@mui/material/Button'
import Campaign from '@mui/icons-material/Campaign'
import Article from './article';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      render: false //Set render state to false
    }
  }
  componentDidMount() {
    setTimeout(function () { //Start the timer
      this.setState({ render: true }) //After 1 second, set render to true
    }.bind(this), 2000)
  }

  render() {
    if (!this.state.render) {
      return (
        <div className="App">
          <header className="App-header">
            <Loading />
          </header>

        </div>
      );
    }
    else {
      return (


        <Article />

      );
    }

  }
}

export default App; 
