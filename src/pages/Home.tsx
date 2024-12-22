import React, { useState } from 'react';
import { selfPortrait, naturePng } from '../assets';
import './styles/Home.css';
import { TypedText } from '../components';

function Home (){
    // checks if page has been already loaded, false on initialization
    const [typedTextSurfaced, setTypedTextSurfaced] = useState<boolean>(false);

    return(
        <div className='home-container'>
            <div className='intro-text'>
                <TypedText text='Hello, my name is Enoch' time={100} onComplete={() => setTypedTextSurfaced(true)}/>
                {typedTextSurfaced && (
                    <div className = 'intro-text-body'>
                        <p className='intro-text-paragraph'>
                            I'm a software engineer who is passionate about creating scalable, efficient, and secure software solutions.
                            <br/>
                            <br/>
                            Outside of coding, I enjoy exploring the intersections of cybersecurity, quantum computing and 
                            machine learning, working on side hustles, exploring nature, and playing basketball.
                        </p>

                        <div className='intro-text-portraits'>
                            <img className="portrait-pic" src={selfPortrait} alt="" />
                            {/* <img className="nature-pic" src={naturePng} alt="" /> */}
                        </div>
                    </div>
                )}
            </div>
        </div>  
    )
}

export default Home;
