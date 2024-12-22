import React from 'react';
import './styles/ExperienceCard.css';

interface ExperienceCardProps {
    image?: string;
    header: string;
    subHeader?: React.ReactNode;
    description: string;
    details?: React.ReactNode[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ image, header, subHeader, description, details }) => {
    return (
        <div className="experience-section">
            <div className="experience-header">
                {image && <img src={image} alt={header} className="experience-image"/>}
                <div>
                    <h2>{header}</h2>
                    <h4>{subHeader}</h4>
                </div>
            </div>
            <p>{description}</p>
            <ul className='experience-details'>
                {details && details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                ))}
            </ul>
        </div>
    );
};

export default ExperienceCard;