import React from 'react';
import ContactCard from './ContactCard';

const ContactCardList = props => {
    const { data } = props;
    return (
        <div>
            {data.map(contact => <ContactCard key={contact.email} name={contact.name} email={contact.email}/>)}
        </div>
    )
}

export default ContactCardList;