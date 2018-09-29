import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 'hey node' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = {
      name: this.state.name
    };
  }

  componentDidMount() {
    const user = {
      name: this.state.name
    };

    axios.post('http://localhost:5000/hello', { user })
      .then(res => {
        res.send("data got");
        console.log(res);
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Your Intelligent Keyboard</h1>
        </header>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <p> Enter text to be translated: </p>
            <textarea id="itext" name="text" onChange={this.handleChange} />
            <button id="translate" type="submit"> Translate </button>
            <p> Translated text: </p>
            <textarea value={this.state} id="otext" onChange={this.handleChange} />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
