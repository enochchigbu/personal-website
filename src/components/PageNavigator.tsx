import React, { Component, useState } from 'react';
import { Home, Skills, Contact, About } from '../pages';
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

type page = "Home" | "Skills" | "About" | "Contact"

function PageNavigatior() {
    const [currPage, setPage] = useState<page>('Home');
    return(
        <>
        <div>
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
                Skills/Projects
            </button>
        </div>
        <div>
            <RenderPage p = {currPage}/>
        </div>
        </>
    )
}

function RenderPage({ p } : {p : page}) {
    if (p === "Home"){ 
      return (<Home/> );
    }
    else if (p === "About") {
      return (<About/>);
    }
    else if (p === "Contact"){
      return( <Contact/>);
    }
    else { 
      return (<Skills/>);
    }
}
  

export default PageNavigatior;