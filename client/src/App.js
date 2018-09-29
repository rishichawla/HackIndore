import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 'hey node' };


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  componentDidMount(){

    const user = {
      value: this.state.value
    };


    Axios.post('http://localhost:5000/hello', {user})
    .then(res => {
      console.log(res);
     
      // if (res)
      // {
      // const d=res.detectedLanguage.language;
      // this.setState({d});
      // }
      // else {
      //   this.setState="None";
      // }
    })
  }
  /*componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }*/

  /*callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200)
      throw Error(body.message);
    return body;
  };*/
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
            <textarea id="itext" onChange={this.handleChange} />
            <button id="translate"> Translate </button>
            <p> Translated text: </p>
            <textarea value={this.state} id="otext" onChange={this.handleChange} />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
