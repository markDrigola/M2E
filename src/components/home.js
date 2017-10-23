import React, { Component } from 'react';

export class Home extends Component {
    constructor() {
        super();

        this.state = {
            homeLink: "Change link"
        }
    }

    onChangeName() {
        this.props.changeLink(this.state.homeLink);
    }

    onChangeHandler(event) {
        this.setState({
            homeLink: event.target.value
        })
    }

    render() {
        return (
          <div>
              <div className="panel">
                  Home
                  <input type="text"
                         value={ this.state.homeLink }
                         onChange={(event)=> this.onChangeHandler(event)}
                  />
                  <button onClick={this.onChangeName.bind(this) } className="btn btn-primary">Change link</button>
              </div>
          </div>
        );
    }
}