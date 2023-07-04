import React from 'react'
import ReactDOM from 'react-dom'

const Contact = () => {
    return <form method="post" action="https://getform.io/f/770e3890-a0c8-4b07-bf48-623cf447e5c9">
        <label>
            Name
            <input type="text" name="name" id="name" />
        </label>
        <label>
            Email
            <input type="email" name="email" id="email" />
        </label>
        <label>
            Subject
            <input type="text" name="subject" id="subject" />
        </label>
        <label>
            Message
            <textarea name="message" id="message" rows="5" />
        </label>
        <button type="submit">Send</button>
        <input type="reset" value="Clear" />
    </form>;
};

export default Contact;
