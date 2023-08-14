import React, { Component } from 'react';
import './Contact.css';
import { linkedInLogo, githubLogo, instragramLogo } from '../assets';

/**
 * Contact Page
 * 
 * Where the user can contact me
 */

class Contact extends Component{
    render() {
        return(
            <div className='contact-container'>
                <div className='text-area'>
                    <p>Contact Me</p>
                    <p>Email: enochchigbu@gmail.com</p>
                    <div>
                        <button className='insta-button'
                        onClick={e => window.open("https://instagram.com/enoch.chigbu")}>
                            <img src={instragramLogo} alt='instagram'
                            className='insta-logo'></img>
                        </button>
                    </div>
                    <div>
                        <button className='linkedin-button' 
                        onClick={e => window.open("https://linkedin.com/in/enoch-chigbu-b10127202/")}>
                            <img src={linkedInLogo} alt="linkedin"
                            className='linkedin-logo'></img>
                        </button>
                    </div>
                    <div>
                        <button className='github-button' 
                        onClick={e => window.open("https://github.com/enochchigbu")}>
                            <img src={githubLogo} alt='github'
                            className='github-logo'></img>
                        </button>
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