import React, { Component } from 'react';
import Emoji from './Emoji';
import Translator from './Translator';
import Image from './Image';
import ContactCardList from './ContactCardList';
import BrokenComponent from './BrokenComponent';
import './App.css';

class App extends Component {
    render() {
        return (
        <div className="App">
            <Emoji/>
            <Translator/>
            <Image/>
            <ContactCardList data={[{name: 'Foo Bar', email: 'foo@bar.com' }, {name: 'Will Wang', email: 'wow7@cornell.edu'}]}/>
            <BrokenComponent/>
        </div>
        );
    }
}

export default App;
