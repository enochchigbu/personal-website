import React, { Component } from 'react';
import './Contact.css';

/**
 * Contact Page
 * 
 * Where the user can contact me
 */

class Contact extends Component{
    render() {
        return(
            <div className='container'>
                <div className='text-area'>
                    <p>Contact Me</p>
                    <p>Email: enochchigbu@gmail.com</p>
                    <div>
                        <button className='insta-button'>Instagram</button>
                    </div>
                    <div>
                        <button className='linkedin-button'>LinkedIn</button>
                    </div>
                    <div>
                        <button className='github-button'>Github</button>
                    </div>
                </div>
                <div className='input-area'>
                    <div className='input-container'>
                        <header>Name</header>
                        <textarea className='input-field'/>                        
                    </div>
                    <div className='input-container'>
                        <header>Email</header>
                        <textarea className='input-field'/>
                    </div>
                    <div className='input-container'>
                        <header>Message</header>
                        <textarea className='input-field'/>
                    </div>
                    <button>
                        Submit
                    </button>
                </div>
            </div>
        )
    }
}

export default Contact;