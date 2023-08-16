import React, { Component } from 'react';
import './styles/Skills.css';
import { pythonLogo, javaLogo, typescriptLogo,
         angularLogo, reactLogo, htmlCssLogo } from '../assets';

class Skills extends Component{
    render() {
        return(
            <div className='grid-container'>
                <div>
                    <img className = 'python-img' 
                    src={pythonLogo} alt='python-logo'/>
                </div>
                <div>
                    <img className='java-img'
                    src={javaLogo} alt='java-logo'/>
                </div>
                <div>
                    <img className='typescript-img'
                    src={typescriptLogo} alt='typescript-logo'/>
                </div>
                <div>
                    <img src={htmlCssLogo} alt='html-css-logo'/>
                </div>
                <div>
                    <img src={reactLogo} className='react-img'
                    alt='react-logo'/>
                </div>
                <div>
                    <img src={angularLogo} alt='angular-logo'/>
                </div>
            </div>
        )
    }
}

export default Skills;