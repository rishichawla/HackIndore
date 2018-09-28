import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {

    event.preventDefault();
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
            <textarea value={this.state.value} id="itext" onSubmit={this.state.value} onChange={this.handleChange} />
            <button id="translate"> Translate </button>
            <p> Translated text: </p>
            <textarea value={this.state.value} id="otext" onChange={this.handleChange} />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
