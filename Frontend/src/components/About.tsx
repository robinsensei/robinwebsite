import { Code2, Database, Globe, Layers, Server, Shield } from 'lucide-react';

const skills = [
    { name: 'Programming/Automation', icon: Code2, items: ['Python', 'JavaScript', 'HTML/CSS', 'Web Scraping', 'Task Automation'] },
    { name: 'Data Analysis', icon: Database, items: ['Pandas', 'NumPy', 'SQL', 'Data Visualization'] },
    { name: 'Networking', icon: Globe, items: ['Switches/Routers', 'Network Monitoring', 'Troubleshooting', 'Infrastructure'] },
    { name: 'Cyber Security', icon: Shield, items: ['SIEM (Sumo Logic)', 'Security Analytics', 'Penetration Testing'] },
    { name: 'IT Support', icon: Server, items: ['Help Desk', 'System Maintenance', 'User Training', 'Technical Documentation'] },
    { name: 'Finance/Admin', icon: Layers, items: ['Financial Analysis', 'Account Reconciliation', 'Reporting', 'Budget Management'] },
];

export function About() {
    return (
        <section id="about" className="about-section">
            <div className="container">
                {/* Section Header */}
                <div className="section-header">
                    <h2 className="section-title">
                        About Me
                    </h2>
                    <p className="section-subtitle">
                        QA and Automation-focused IT Professional with over 4 years of experience in system analysis, data automation, and application support. Strong background in manual and automated testing, Python-based automation, API testing, and web technologies (HTML, CSS, JavaScript). Proven ability to improve system reliability and operational efficiency through test automation, data validation, and process optimization.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="skills-grid">
                    {skills.map((skill) => {
                        const Icon = skill.icon;
                        return (
                            <div
                                key={skill.name}
                                className="skill-card group"
                            >
                                <div className="skill-header">
                                    <div className="skill-icon-container group-hover-bg">
                                        <Icon className="icon-md text-primary" />
                                    </div>
                                    <h3 className="skill-title">
                                        {skill.name}
                                    </h3>
                                </div>
                                <div className="skill-items">
                                    {skill.items.map((item) => (
                                        <span
                                            key={item}
                                            className="skill-item"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Stats */}
                <div className="stats-grid">
                    {[
                        { label: 'Years Experience', value: '4+' },
                        { label: 'Projects Completed', value: '50+' },
                        { label: 'Certifications', value: '10+' },
                        { label: 'Technologies', value: '20+' },
                    ].map((stat) => (
                        <div key={stat.label} className="stat-item">
                            <div className="stat-value gradient-text">
                                {stat.value}
                            </div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
