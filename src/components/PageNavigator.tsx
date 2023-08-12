import React, { Component, useState } from 'react';
import { Home, Skills, Contact, About, Projects } from '../pages';
import './PageNavigator.css';
/**
 * Page Navigator Component
 * 
 * This is the component that handles page selection and switching.
 * 
 * 4 States ( Name : Function ):
 *      - Home : The Home page, first page a user sees
 *      - About : A page containing background info
 *      - Contact : Page that contains my contact info
 *      - Skills : Page that displays my technical skiils / projects
 *          
 *      Note: This can be added later after you do more projects
 */

type page = "Home" | "Skills" | "About" | "Contact" | "Projects"

function PageNavigatior() {
    const [currPage, setPage] = useState<page>('Home');
    return(
        <>
        <div className='container'>
            <button onClick = {e => setPage('Home')}>
                Home
            </button>
            <button onClick = {e => setPage('About')}>
                About Me
            </button>
            <button onClick = {e => setPage('Contact')}>
                Contact
            </button >
            <button onClick = {e => setPage('Skills')}>
                Skills
            </button>
            <button onClick = {e => setPage('Projects')}>
                Projects
            </button>
        </div>
        <div>
            <RenderPage p = {currPage}/>
        </div>
        </>
    )
}

function RenderPage({ p } : {p : page}) {
    switch(p){
        case 'About':
            return <About/>

        case 'Contact':
            return <Contact/>

        case 'Home':
            return <Home/>

        case 'Projects':
            return <Projects/>

        case 'Skills':
            return <Skills/>
    }
}
  

export default PageNavigatior;