import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-content">
                    {/* Copyright */}
                    <div className="copyright">
                        <span>© {currentYear} RCD Portfolio. Made with</span>
                        <Heart className="icon-xs text-red" />
                        <span>by RCD</span>
                    </div>

                    {/* Social Links */}
                    <div className="footer-social-links">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-social-link"
                            aria-label="GitHub"
                        >
                            <Github className="icon-sm" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-social-link"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="icon-sm" />
                        </a>
                        <a
                            href="mailto:contact@example.com"
                            className="footer-social-link"
                            aria-label="Email"
                        >
                            <Mail className="icon-sm" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
