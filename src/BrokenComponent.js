import React, { Component } from 'react';

export default class BrokenComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Random User' };

        this.sayHelloToSamInstead = this.sayHelloToSamInstead.bind(this);
    }

    sayHelloToSamInstead() {
        this.setState({ name: 'Sam' });
    }

    render() {
        const { name } = this.state;

        /// BROKEN: Why isn't Sam greeted? Check the example code to see the difference.
        /// You can also try to prettify the component, but that's completely optional.

        return (
        <div>
            <div>
            {'Hello '}
            {name}
            .
            </div>
            <button type="button" onClick={this.sayHelloToSamInstead}>Say Hello to Sam instead</button>
        </div>
        );
    }
}