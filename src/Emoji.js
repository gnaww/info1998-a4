import React, { useState } from 'react';
import './App.css';
import emoji from 'node-emoji';

const Emoji = props => {
    const [value, setValue] = useState('');
    const [results, setResults] = useState([]);

    const handleChange = event => {
        let res = event.target.value === '' ? [] : emoji.search(event.target.value);
        setValue(event.target.value);
        setResults(res);
    };

    return (
        <div>
            <form>
                <h1>Emoji Search</h1>
                <input className="InputBox" type="text" value={value} onChange={handleChange} />
            </form>
            <ul>
                {results.map(elt => <li>{elt.key}: {elt.emoji}</li>)}
            </ul>
        </div>
    );
}

export default Emoji;
