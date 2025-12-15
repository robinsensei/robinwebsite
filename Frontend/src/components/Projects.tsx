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
        title: 'Python Automation Projects',
        description: 'Automated data gathering, cleaning, and report generation system using Python. Auto detection using Tesseract OCR and data analytics using Pandas, NumPy, Matplotlib.',
        tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'OCR', 'Automation'],
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
        liveUrl: 'https://github.com',
        githubUrl: 'https://github.com',
    },
    {
        id: 3,
        title: 'Network Monitoring Dashboard',
        description: 'Real-time network infrastructure monitoring tool with SIEM integration. Provides security analytics and threat detection capabilities.',
        tags: ['Network Security', 'SIEM', 'Monitoring', 'Analytics'],
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',

    },
    {
        id: 4,
        title: 'QA Automation Framework',
        description: 'End-to-end test automation framework using Selenium and PyTest, focused on reliable end-to-end and integration testing.',
        tags: ['Selenium', 'PyTest', 'Automation', 'Testing'],
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
        githubUrl: 'https://github.com/robinsensei/pythontest',
    },
    {
        id: 5,
        title: 'API Testing Suite',
        description: 'Robust API testing harness built with Postman/Newman and Python for contract testing and automated regression checks.',
        tags: ['API', 'Testing', 'Postman', 'Python'],
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',

    },
    
    {
        id: 7,
        title: 'Data Warehouse ETL',
        description: 'ETL pipelines for consolidating logistics data into a data warehouse, with automated scheduling and incremental loads.',
        tags: ['ETL', 'SQL', 'Data Warehouse'],
        image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop',
        liveUrl: 'https://github.com',
        githubUrl: 'https://github.com',
    },
    {
        id: 8,
        title: 'Web Development',
        description: 'This website is built using Java (backend) and React with Vite (frontend). It is deployed on Azure (free tier) and Vercel for fast edge delivery.',
        tags: ['Java', 'React', 'Vite', 'Azure', 'Vercel', 'Web Development'],
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop',
        liveUrl: 'https://urban-sync.vercel.app/',
        githubUrl: 'https://github.com/robinsensei/urbansync-prod',
    },
];

import { useEffect, useRef, useState } from 'react';

export function Projects() {
    const trackRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isPaused, setIsPaused] = useState(false);
    const touchStartX = useRef<number | null>(null);
    const scrollSpeed = 0.5; // pixels per frame (adjust for speed)

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        let animationFrame: number | null = null;

        const step = () => {
            if (!track || isPaused) {
                animationFrame = requestAnimationFrame(step);
                return;
            }

            // scroll the container (parent of track)
            const container = containerRef.current;
            if (!container) return;

            container.scrollLeft += scrollSpeed;

            // when we've scrolled past the first duplicate set, reset
            if (container.scrollLeft >= track.scrollWidth / 2) {
                container.scrollLeft -= track.scrollWidth / 2;
            }

            animationFrame = requestAnimationFrame(step);
        };

        animationFrame = requestAnimationFrame(step);

        return () => {
            if (animationFrame) cancelAnimationFrame(animationFrame);
        };
    }, [isPaused]);

    // Prev / Next handlers
    const itemWidth = 320 + 24; // card width + gap (adjust if needed)
    const scrollBy = (dir: number) => {
        const container = containerRef.current;
        if (!container) return;
        container.scrollBy({ left: dir * itemWidth, behavior: 'smooth' });
    };

    // Touch handlers for swipe
    const onTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
        setIsPaused(true);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        const startX = touchStartX.current;
        if (startX == null) return;
        const currentX = e.touches[0].clientX;
        const dx = startX - currentX;
        const container = containerRef.current;
        if (container) container.scrollLeft += dx;
        touchStartX.current = currentX;
    };

    const onTouchEnd = () => {
        touchStartX.current = null;
        setIsPaused(false);
    };

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                {/* Section Header */}
                <div className="section-header">
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">
                        Automation and data analysis projects showcasing expertise in Python, testing, and infrastructure management
                    </p>
                </div>

                {/* Controls */}
                <div className="projects-controls">
                    <button className="carousel-control prev" onClick={() => scrollBy(-1)} aria-label="Previous">
                        ‹
                    </button>
                    <button className="carousel-control next" onClick={() => scrollBy(1)} aria-label="Next">
                        ›
                    </button>
                </div>

                {/* Carousel container */}
                <div
                    className="projects-carousel js-carousel"
                    ref={containerRef}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    <div className="carousel-track" ref={trackRef}>
                        {[...projects, ...projects].map((project, index) => (
                            <div key={`${project.id}-${index}`} className="project-card group carousel-item">
                                <div className="project-image-container">
                                    <img src={project.image} alt={project.title} className="project-image group-hover-scale" />
                                    <div className="project-overlay group-hover-opacity"></div>
                                </div>

                                <div className="project-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description line-clamp-3">{project.description}</p>

                                    <div className="project-tags">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="tag">{tag}</span>
                                        ))}
                                    </div>

                                    <div className="project-links">
                                        {project.liveUrl && (
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                                                <ExternalLink className="icon-xs" /> Live Demo
                                            </a>
                                        )}
                                        {project.githubUrl && (
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                                                <Github className="icon-xs" /> Code
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
