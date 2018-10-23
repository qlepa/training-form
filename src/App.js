import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Menu extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <h1>Kreator Treningu</h1>
            </div>
        )
    }
}

class AgeForm extends React.Component {
    constructor(props) {
        super(props);
        this.setState = {
            ageGroup: ''
        }

    }
handleAgeGroup = e => {
        this.setState({
            ageGroup: e.target.value
        })
}
handleSubmit = e => {
        e.preventDefault();
        let correct = true;
        let errors = 'Wybierz grupę więkową';
        if (this.state.ageGroup) {

        }
}
    render() {
        return (
            <div>
                <h2>Wybierz kategorię wiekową</h2>
                <form onSubmit={this.handleSubmit}>
                    <select id="ageGroup" value={this.state.ageGroup} onChange={this.handleAgeGroup}>
                        <option>--------</option>
                        <option>Junior A-C</option>
                        <option>Junior D</option>
                        <option>Junior E</option>
                        <option>Junior F</option>
                        <option>Junior G</option>
                    </select>
                </form>
            </div>

        )
    }
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
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
}

export default App;
