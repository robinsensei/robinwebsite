import { ExternalLink, Github } from 'lucide-react';

import { useEffect, useRef, useState } from 'react';

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
        description: 'Automated data ingestion, cleaning, and report generation using Python (Pandas/NumPy) and Tesseract OCR for document extraction. Built analytics pipelines and visualizations to reduce manual processing and speed reporting.',
        tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'OCR', 'Automation'],
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
        liveUrl: 'https://github.com',
        githubUrl: 'https://github.com',
    },
    {
        id: 3,
        title: 'Network Monitoring Dashboard',
        description: 'Real-time network monitoring dashboard with SIEM integration (security analytics and alerting). Enables faster detection and investigation of security events and operational issues.',
        tags: ['Network Security', 'SIEM', 'Monitoring', 'Analytics'],
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    },
    {
        id: 4,
        title: 'QA Automation Framework',
        description: 'End-to-end automation framework built with Selenium and PyTest for integration and regression testing. Designed for reliability and CI integration to reduce manual regression effort.',
        tags: ['Selenium', 'PyTest', 'Automation', 'Testing', 'CI/CD'],
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
        githubUrl: 'https://github.com/robinsensei/pythontest',
    },
    {
        id: 5,
        title: 'API Testing Suite',
        description: 'API contract and regression testing harness using Postman/Newman and Python, integrated into CI pipelines for automated verification of endpoints and stability checks.',
        tags: ['API', 'Testing', 'Postman', 'Python', 'CI/CD'],
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
    },
    {
        id: 7,
        title: 'Data Warehouse ETL',
        description: 'ETL pipelines consolidating logistics data into a central data warehouse with automated scheduling and incremental loads for efficient reporting and analytics.',
        tags: ['ETL', 'SQL', 'Data Warehouse'],
        image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop',
        liveUrl: 'https://github.com',
        githubUrl: 'https://github.com',
    },
    {
        id: 8,
        title: 'Full-Stack Web Project',
        description: 'Full-stack application with a Java backend and React + Vite frontend. Deployed to Azure and Vercel for scalable hosting and fast delivery at the edge.',
        tags: ['Java', 'React', 'Vite', 'Azure', 'Vercel', 'Web Development'],
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop',
        liveUrl: 'https://urban-sync.vercel.app/',
        githubUrl: 'https://github.com/robinsensei/urbansync-prod',
    },
];

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
                        Selected automation, testing, and data engineering projects demonstrating Python, QA automation, and infrastructure expertise
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
