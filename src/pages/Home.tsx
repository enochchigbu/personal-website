import React, { useState } from 'react';
import { selfPortrait } from '../assets';
import './styles/Home.css';
import { TypedText } from '../components';

function Home (){
    // checks if page has been already loaded, false on initialization
    const [typedTextSurfaced, setTypedTextSurfaced] = useState<boolean>(false);

    return(
        <div className='home-container'>
            <div className='intro-text'>
                <TypedText texts={['Hello, my name is Enoch']} time={100} onComplete={() => setTypedTextSurfaced(true)}/>
                {typedTextSurfaced && (
                    <div className = 'intro-text-body'>
                        <div className='intro-text-paragraph'>
                            <text className='typed-text-heading'><TypedText texts={['Programmer', 'Problem Solver', 'Software Engineer.']} time={100}/></text>
                            <br />
                            <br />
                            <div className="contact-info">
                                <a href="mailto:enochchigbu@email.com">enochchigbu@gmail.com</a>
                                <a href="tel:+19167935062">+1 916-793-5062</a>
                            </div>
                        </div>

                        <div className='intro-text-portraits'>
                            <img className="portrait-pic" src={selfPortrait} alt="" />
                        </div>
                    </div>
                )}
            </div>
        </div>  
    )
}

export default Home;
