import React, { Component } from 'react';
import { selfPortrait } from '../assets';
import './styles/Home.css';

class Home extends Component{
    render() {
        return(
            <div className='home-container'>
                <div className='intro-text'>
                    Hi Everyone!
                    <p>My name is Enoch. Im a</p>
                </div>
                <div style={{ flex:1 }}>
                    <img className='profile-pic' src={selfPortrait} alt='self portrait'></img>
                </div>
            </div>  
        )
    }
}

function introText() {

}

export default Home;
