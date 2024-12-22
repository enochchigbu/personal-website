import React from 'react';
import './styles/Experience.css';
import { ExperienceCard } from '../components';

const Experience = () => {
    return (
        <div className="experience">
            <h1>Experience</h1>
            <div className='experience-cards'>
                <ExperienceCard
                    header="Incoming Software Engineer"
                    subHeader={
                        <>
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
                                alt="Google Logo" 
                                className='subheader-logo'
                            />- March 2025
                        </>
                    }
                    description="Working in NYC. Contact me if you would like to connect!"
                />
                <ExperienceCard
                    header="Software Engineer Intern"
                    subHeader={
                        <>
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
                                alt="Google Logo" 
                                className='subheader-logo'
                            />- Summer 2024
                        </>
                    }
                    description="Seattle. Worked on building secure advertising pipelines for Android Privacy Sandbox. 
                                Check out some open source code I wrote below!"
                    details={[
                        <a href="https://cs.android.com/android/_/android/platform/packages/modules/AdServices/+/a2e3c1f51ca0cd37a211a3641365b2aa31c3877a" 
                        target="_blank" rel="noopener noreferrer">Custom Audience Data Pipeline</a>,
                        <a href="https://cs.android.com/android/_/android/platform/packages/modules/AdServices/+/38ad53e8d52c05ef4a4e5397a889232426146400" 
                        target="_blank" rel="noopener noreferrer">New Custom Audience Field</a>
                    ]}
                />
                <ExperienceCard
                    header="Student Training in Engineering Intern"
                    subHeader={
                        <>
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
                                alt="Google Logo" 
                                className='subheader-logo'
                            />- Summer 2023
                        </>
                    }
                    description="New York City. Surfaced additional telemetry to the Ads frontend platform, 
                                giving advertisement sellers more information about their campaign performance
                                among specific demographic groups."
                />
                <ExperienceCard
                    header="Cyber Risk Organization"
                    subHeader={
                        <>
                            <img 
                                src="https://brand.sdsu.edu/_images/_logo-section/downloads/1000-horizontal-reverse.jpg" 
                                alt="SDSU Logo" 
                                className='subheader-logo'
                                style={{height: '50px'}}
                            />- President (2024) and Technical Officer (2023)
                        </>
                    }
                    description="Led the club in organizing events and collaborations. 
                                Taught students with interactive labs in Python and Jupyter.
                                Developed an interactive website for new and current members."
                    details={[
                        <a href="https://sdsucyb.org" 
                        target="_blank" rel="noopener noreferrer">Cyborg Website</a>,
                    ]}
                />

                <ExperienceCard
                    header="Quantum Computing Club"
                    subHeader={
                        <>
                            <img 
                                src="https://brand.sdsu.edu/_images/_logo-section/downloads/1000-horizontal-reverse.jpg" 
                                alt="SDSU Logo" 
                                className='subheader-logo'
                                style={{height: '50px'}}
                            />- Technical Officer (2023)
                        </>
                    }
                    description="Learned the general basics about quantum computing. 
                                Led events held by IBM (Fall Fest) and Qiskit (Hackathon).
                                Developed an interactive website for club events."
                    details={[
                        <a href="https://aztecquantum.org" 
                        target="_blank" rel="noopener noreferrer">Quantum Computing Website</a>,
                    ]}
                />
            </div>
        </div>
    );
};

export default Experience;