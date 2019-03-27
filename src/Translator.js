import React, { useState } from 'react';
import './App.css';
import DoggoTranslator from 'doggotranslator';
let doggoTranslator = new DoggoTranslator('en');

const Translator = props => {
    const [value, setValue] = useState('');
    const [translation, setTranslation] = useState('');
    
    const handleChange = event => {
        setValue(event.target.value);
    }

    const handleSubmit = event => {
        let res = doggoTranslator.translateSentence(value, false);
        setTranslation(res);
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Translator</h1>
                <input className="InputBox" type="text" value={value} onChange={handleChange} />
                <button type="submit" className="Button">Translate!</button>
            </form>
            <p><span role="img" aria-label="doggo">🐕</span> Doggo Translation <span role="img" aria-label="doggo">🐕</span></p>
            <p>{translation}</p>
        </div>
    );
}

export default Translator;
