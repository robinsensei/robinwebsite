import { ExternalLink, Github } from 'lucide-react';

interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    image: string;
    liveUrl?: string;
    githubUrl?: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: 'Python Automation Suite',
        description: 'Automated data gathering, cleaning, and report generation system using Python. Streamlined logistics reporting with web scraping and task scheduling capabilities.',
        tags: ['Python', 'Pandas', 'Web Scraping', 'Automation'],
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
        liveUrl: 'https://github.com',
        githubUrl: 'https://github.com',
    },
    {
        id: 2,
        title: 'Logistics Data Pipeline',
        description: 'Complex data collection and management system built with Google Sheets API. Features data visualization dashboards for tracking key logistics metrics.',
        tags: ['Python', 'Google Sheets API', 'Data Visualization', 'SQL'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        liveUrl: 'https://github.com',
        githubUrl: 'https://github.com',
    },
    {
        id: 3,
        title: 'Network Monitoring Dashboard',
        description: 'Real-time network infrastructure monitoring tool with SIEM integration. Provides security analytics and threat detection capabilities.',
        tags: ['Network Security', 'SIEM', 'Monitoring', 'Analytics'],
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
        liveUrl: 'https://github.com',
        githubUrl: 'https://github.com',
    },
];

export function Projects() {
    return (
        <section id="projects" className="projects-section">
            <div className="container">
                {/* Section Header */}
                <div className="section-header">
                    <h2 className="section-title">
                        Featured Projects
                    </h2>
                    <p className="section-subtitle">
                        Automation and data analysis projects showcasing expertise in Python, testing, and infrastructure management
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="project-card group"
                        >
                            {/* Project Image */}
                            <div className="project-image-container">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image group-hover-scale"
                                />
                                <div className="project-overlay group-hover-opacity"></div>
                            </div>

                            {/* Project Content */}
                            <div className="project-content">
                                <h3 className="project-title">
                                    {project.title}
                                </h3>
                                <p className="project-description line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="project-tags">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="tag"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="project-links">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                        >
                                            <ExternalLink className="icon-xs" />
                                            Live Demo
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                        >
                                            <Github className="icon-xs" />
                                            Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
