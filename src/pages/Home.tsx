import React, { Component } from 'react';
import { selfPortrait } from '../assets';
import './styles/Home.css';
import { TypedText } from '../components';

function Home (){
    return(
        <div className='home-container'>
            <div className='intro-text'>
                <TypedText text='Hello, my name is Enoch' time={300}/>
                <p className='intro-text-paragraph'>
                    Im a computer science student and an aspiring software engineer
                </p>
            </div>
            <div className='pfp-container'>
                <img className='profile-pic' src={selfPortrait} alt='self portrait'></img>
            </div>
        </div>  
    )
}

export default Home;
