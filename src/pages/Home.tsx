import React, { Component } from 'react';
import { selfPortrait } from '../assets';
import './styles/Home.css';

function Home (){
    return(
        <div className='home-container'>
            <div className='intro-text'>
                Hi Everyone!
                <p>My name is Enoch</p>
            </div>
            <div className='pfp-container'>
                <img className='profile-pic' src={selfPortrait} alt='self portrait'></img>
            </div>
        </div>  
    )
}

function introText() {

}

export default Home;
