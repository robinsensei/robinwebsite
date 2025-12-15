import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Projects', href: '#projects' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-content">
                    {/* Logo */}
                    <div className="navbar-logo">
                        <Code2 className="icon" />
                        <span className="logo-text">
                            DevPortfolio
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="navbar-links desktop-only">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="nav-link"
                            >
                                {link.name}
                            </a>
                        ))}
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="navbar-mobile-toggle mobile-only">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="mobile-menu-btn"
                        >
                            {isMobileMenuOpen ? (
                                <X className="icon" />
                            ) : (
                                <Menu className="icon" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="mobile-menu mobile-only">
                    <div className="mobile-menu-links">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mobile-nav-link"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
