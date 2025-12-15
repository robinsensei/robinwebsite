import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
    return (
        <section className="hero-section">
            {/* Animated background elements */}
            <div className="hero-bg-elements">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content">
                    {/* Badge */}
                    <div className="badge">
                        <span className="badge-dot-container">
                            <span className="badge-dot-ping"></span>
                            <span className="badge-dot"></span>
                        </span>
                        Available for new opportunities
                    </div>

                    {/* Main heading */}
                    <div className="hero-headings">
                        <h1 className="hero-title">
                            <span className="block-text">
                                Robinson C. Domingo
                            </span>
                            <span className="gradient-text">
                                QA Automation Engineer & Python Developer
                            </span>
                        </h1>
                        <p className="hero-description">
                            4+ years of experience in IT infrastructure management, automation testing,
                            and data analysis. Specialized in Python automation, network security, and
                            delivering high-quality technical solutions for improved operational efficiency.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="cta-buttons">
                        <a
                            href="#projects"
                            className="btn btn-primary group"
                        >
                            View My Work
                            <ArrowRight className="icon-sm group-hover-translate" />
                        </a>
                        <a
                            href="#contact"
                            className="btn btn-secondary"
                        >
                            Get In Touch
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="social-links">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="GitHub"
                        >
                            <Github className="icon-md" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="icon-md" />
                        </a>
                        <a
                            href="mailto:robinsondomingo11@gmail.com"
                            className="social-link"
                            aria-label="Email"
                        >
                            <Mail className="icon-md" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </div>
        </section>
    );
}
