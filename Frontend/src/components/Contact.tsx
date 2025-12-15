import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                {/* Section Header */}
                <div className="section-header">
                    <h2 className="section-title">
                        Get In Touch
                    </h2>
                    <p className="section-subtitle">
                        Have a project in mind? Let's work together to create something amazing.
                    </p>
                </div>

                <div className="contact-grid">
                    {/* Contact Info */}
                    <div className="contact-info">
                        <h3 className="contact-title">
                            Contact Information
                        </h3>
                        <div className="contact-list">
                            <div className="contact-item">
                                <div className="contact-icon-container">
                                    <Mail className="icon-md text-primary" />
                                </div>
                                <div>
                                    <div className="contact-label">Email</div>
                                    <a
                                        href="mailto:robinsondomingo11@gmail.com"
                                        className="contact-link"
                                    >
                                        robinsondomingo11@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon-container">
                                    <Phone className="icon-md text-primary" />
                                </div>
                                <div>
                                    <div className="contact-label">Phone</div>
                                    <a
                                        href="tel:+639615431176"
                                        className="contact-link"
                                    >
                                        +63 961 543 1176
                                    </a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon-container">
                                    <MapPin className="icon-md text-primary" />
                                </div>
                                <div>
                                    <div className="contact-label">Location</div>
                                    <div className="contact-text">
                                        Quezon City, Philippines
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-container">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label
                                    htmlFor="name"
                                    className="form-label"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                    placeholder="Your name"
                                />
                            </div>

                            <div className="form-group">
                                <label
                                    htmlFor="email"
                                    className="form-label"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div className="form-group">
                                <label
                                    htmlFor="message"
                                    className="form-label"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="form-textarea"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary btn-submit"
                            >
                                Send Message
                                <Send className="icon-sm" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
