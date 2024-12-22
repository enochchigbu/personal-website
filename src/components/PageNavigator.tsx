import { useState } from 'react';
import { Home, Skills, Contact, Experience, Projects } from '../pages';
import './styles/PageNavigator.css';
/**
 * Page Navigator Component
 * 
 * This is the component that handles page selection and switching.
 * 
 * 5 States ( Name : Function )
 *      - Home : The Home page, first page a user sees
 *      - About : A page containing background info
 *      - Contact : Page that contains my contact info
 *      - Experience : Page that displays my technical skiils
 *      - Projects : Page that displays the projects I have made
 *          
 *      Note: This can be added later after you do more projects
 */

type page = "Home" | "Experience" | "Skills" | "Contact" | "Projects"

function PageNavigatior() {
    const [currPage, setPage] = useState<page>('Home');
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <div className="header-container">
                <div className="logo-container">
                    <button
                        onClick={() => window.open('https://github.com/enochchigbu', '_blank')}
                        className="social-button"
                    >
                        <img src="https://preview.redd.it/a-proposal-for-a-new-r-github-logo-v0-wl8v8rmmir7d1.png?width=1080&crop=smart&auto=webp&s=28e401abba4695e218c473e8a3c2f7f1579b1d5f" 
                            alt="GitHub" className="icon" />
                    </button>
                    <button
                        onClick={() => window.open('https://linkedin.com/in/enochchigbu', '_blank')}
                        className="social-button"
                    >
                        <img src="https://img.icons8.com/m_rounded/512/FFFFFF/linkedin.png" 
                            alt="LinkedIn" className="icon" />
                    </button>
                    <button
                        onClick={() => window.open('https://instagram.com/enoch.chigbu', '_blank')}
                        className="social-button"
                    >
                        <img src="https://img.icons8.com/m_outlined/512/FFFFFF/instagram-new.png" alt="Instagram" className="icon" />
                    </button>
                </div>
                <div className="hamburger-menu" onClick={() => setSidebarOpen(!isSidebarOpen)}>
                    ☰
                </div>
                
                <div className="nav-container">
                    <button className={currPage === 'Home' ? 'selected' : 'non-selected'}onClick={() => setPage('Home')}>
                        Home
                    </button>
                    <button className={currPage === 'Experience' ? 'selected' : 'non-selected'} onClick={() => setPage('Experience')}>
                        Experience
                    </button>
                    <button className={currPage === 'Skills' ? 'selected' : 'non-selected'} onClick={() => setPage('Skills')}>
                        Skills
                    </button>
                    <button className={currPage === 'Contact' ? 'selected' : 'non-selected'} onClick={() => setPage('Contact')}>
                        Contact
                    </button>
                </div>
            </div>
            
            {isSidebarOpen && (
                <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                    <button onClick={() => setSidebarOpen(false)} className="close-sidebar">
                        x
                    </button>
                    <button onClick={() => { setPage('Home'); setSidebarOpen(false); }}>
                        Home
                    </button>
                    <button onClick={() => { setPage('Experience'); setSidebarOpen(false); }}>
                        Experience
                    </button>
                    <button onClick={() => { setPage('Skills'); setSidebarOpen(false); }}>
                        Skills
                    </button>
                    <button onClick={() => { setPage('Contact'); setSidebarOpen(false); }}>
                        Contact
                    </button>
                </div>
            )}
            <div>
                <RenderPage p={currPage} />
            </div>
        </>
    );
}

function RenderPage({ p } : {p : page}) {
    switch(p){
        case 'Experience':
            return <Experience/>

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