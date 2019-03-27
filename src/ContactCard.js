import React from 'react';
import './App.css';

const ContactCard = props => {
    const { name, email } = props;
    return (
      <div className="ContactCard">
        <h4>{name}</h4>
        <p>{email}</p>
      </div>
    );
}

export default ContactCard;
