import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
class App extends Component {
    render() {
        return (
            <div className="App" >
                Counter is { this.props.ctr} &nbsp;
                <button onClick={this.props.onIncrementCounter} >Add 1</button>&nbsp;
                <button onClick={this.props.resetCounter}>Reset</button>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Edit <code>src/App.js</code> and save to reload.</p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React </a>
                </header>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: 'INC_COUNTER' }),
        resetCounter: () => dispatch({ type: 'RESET_COUNTER' })
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
