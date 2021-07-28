import React, { useState } from 'react';

function ContactForm() {
    const [formState, setFormState] = useState({ name: "", email: "", message: ""});
    const { name, email, message } = formState;

    // sync internal state of component formState with the user input from the DOM
    function handleChange(e) {
        // setFormState() used to update the formState value for the name property
        setFormState({...[e.target.name], name: e.target.value })
    }

    // prevent default action of the form Submit button
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section>
            <h2>Contact Me</h2>
            <form id="contact-form" onSubmit={handleSubmit}>
                {/* name input */}
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onChange={handleChange} />
                </div>

                {/* email input */}
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" name="email" defaultValue={email} onChange={handleChange} />
                </div>

                {/* message text area */}
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onChange={handleChange} />
                </div>

                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;