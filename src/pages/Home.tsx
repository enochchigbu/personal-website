import React, { Component, useState } from 'react';
import { selfPortrait } from '../assets';
import './styles/Home.css';
import { TypedText } from '../components';

function Home (){
    // checks if page has been already loaded, false on initialization
    const [init, setInit] = useState<boolean>(false);

    return(
        <div className='home-container'>
            <div className='intro-text'>
                <TypedText text='Hello, my name is Enoch' time={300}/>
                <p className='intro-text-paragraph'>
                   Computer science student at San Diego State University
                   <br/>
                   <br/>
                   Aspiring Software Engineer
                </p>
            </div>
            <div className='pfp-container'>
                <img className='profile-pic' src={selfPortrait} alt='self portrait'></img>
            </div>
        </div>  
    )
}

export default Home;
