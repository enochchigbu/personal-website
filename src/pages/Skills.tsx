import React, { Component } from 'react';
import './styles/Skills.css';
import { pythonLogo, javaLogo, typescriptLogo,
         angularLogo, reactLogo, htmlCssLogo } from '../assets';

class Skills extends Component{
    render() {
        return(
            <div className='grid-container'>
                <div>
                    <img className='img' 
                    src={pythonLogo} alt='python-logo'/>
                </div>
                <div>
                    <img className='img'
                    src={javaLogo} alt='java-logo'/>
                </div>
                <div>
                    <img className='img'
                    src={typescriptLogo} alt='typescript-logo'/>
                </div>
                <div>
                    <img className='img'
                    src={htmlCssLogo} alt='html-css-logo'/>
                </div>
                <div>
                    <img className='img'
                    src={reactLogo} alt='react-logo'/>
                </div>
                <div>
                    <img className='img'
                    src={angularLogo} alt='angular-logo'/>
                </div>
            </div>
        )
    }
}

export default Skills;