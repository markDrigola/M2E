import React, {Component} from "react";

import "./App.css";
import { Header } from './components/header';
import { Home } from './components/home';
import { Autocomplete } from './components/autocomplete';

class App extends Component {
    constructor() {
        super();

        this.state = {
            homeLink: "Header"
        }
    }
    onTest() {
        alert('hello');
    }

    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName
        })
    }
    render() {
        const user = {
            name: "Mark",
            age: 25
        };
        return (
            <div className="container">
                <div className="App">
                    {/*<Header*/}
                        {/*initialUser={ user }*/}
                        {/*homeLink={ this.state.homeLink }*/}
                        {/*onTest={ this.onTest }*/}
                        {/*initialLinkName={ this.state.homeLink }*/}
                    {/*/>*/}
                    {/*<Home changeLink={ this.onChangeLinkName.bind(this) } />*/}

                    <Autocomplete/>
                </div>
            </div>
        );
    }
}

export default App;
