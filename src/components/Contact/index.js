import React from 'react';

function ContactForm() {
    return (
        <section>
            <h2>Contact Me</h2>
            <form id="contact-form">
                {/* name input */}
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" />
                </div>

                {/* email input */}
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <label type="email" name="email" />
                </div>

                {/* message text area */}
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" />
                </div>

                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;