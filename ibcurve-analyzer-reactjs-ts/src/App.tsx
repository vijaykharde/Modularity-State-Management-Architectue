import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    comp: GenericComponent;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
export class GenericComponent<T> extends Component {
    render() {
        return (<div>Hello, Generic Component</div>);
    }
}