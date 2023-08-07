import React, { Component, useState } from 'react';
import './PageSelector.css';

/**
 * Page Selector Component
 * 
 * This is the component that handles page selection and switching.
 * 
 * 4 States ( Name : Function ):
 *      - Home : The Home page, first page a user sees
 *      - About : A page containing background info
 *      - Contact : Page that contains my contact info
 *      - Skills : Page that displays my technical skiils / projects
 *          Note: This can be added later after you do more projects
 */

enum Pages { HOME, ABOUT, CONTACT, SKILLS }

interface ComponentProps{ page : Pages }

class PageSelector extends Component<ComponentProps>{
    render() {
        return(
            <div>
                <button>
                    Home
                </button>
                <button>
                    About Me
                </button>
                <button>
                    Contact
                </button>
                <button>
                    Skills/Projects
                </button>
            </div>
        )
    }
}

export default PageSelector;