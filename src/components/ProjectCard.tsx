// TODO: Create this when adding projects page

import React from 'react';
import './styles/ProjectCard.css';

interface ProjectCardProps {
    image?: string;
    header: string;
    subHeader?: React.ReactNode;
    description: string;
    details?: React.ReactNode[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, header, subHeader, description, details }) => {
    return (
        <div className="">
            
        </div>
    );
};

export default ProjectCard;