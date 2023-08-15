import React, { Component } from 'react';
import { selfPortrait } from '../assets';
import './Home.css';

class Home extends Component{
    render() {
        return(
            <div className='home-container'>
                <div className='intro-text'>
                    Hello, I'm Enoch
                </div>
                <div style={{ flex:1 }}>
                    <img className='profile-pic' src={selfPortrait} alt='self portrait'></img>
                </div>
            </div>  
        )
    }
}

export default Home;
