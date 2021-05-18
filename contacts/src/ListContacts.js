import React from 'react';

const ListConacts = () => {
    return (
        contacts.map((contact) => {
            <li key={contact.id} className='contact-list-item'>
                <div
                    className='contact-avatar'
                    style={{
                        backgroundImage: `url(${contaxt.avatarURL})`
                    }} >
                </div>
                <div className='contact-details'>
                    <p>{contact.name}</p>
                    <p>{contact.handle}</p>
                </div>
                <button className='contact-remove'>
                    Remove
                </button>
            </li>
        }
        )
    )}


export default ListConacts;