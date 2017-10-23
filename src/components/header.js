import React, {Component} from 'react';

export class Header extends Component {
    constructor(props) {
        super();

        this.name = props.initialUser.name;
        this.state = {
            age: props.initialUser.age,
            homeLink: props.initialLinkName
        };
    }

    onMakeOrder() {
        this.setState({
            age: this.state.age + 3
        });
    }



    render() {
        return (
            <div>
                <div>{ this.props.homeLink }</div>
                { this.props.initialUser.name }
                { this.state.age }
                <button onClick={() =>
                    this.onMakeOrder()
                } className="btn btn-primary">events</button>
                <hr/>
                <button onClick={() => this.props.onTest()} className="btn btn-primary">onTest</button>

            </div>
        )
    }
}
