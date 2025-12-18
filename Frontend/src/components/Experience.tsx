import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface Experience {
    id: number;
    role: string;
    company: string;
    location: string;
    period: string;
    achievements: string[];
}

const experiences: Experience[] = [
    {
        id: 1,
        role: 'Logistic Personnel (Data Analyst)',
        company: 'PRIFE International',
        location: 'Pasig, Quezon City',
        period: 'April 2024 – December 2024',
        achievements: [
            'Automated data gathering, validation, and reporting using Python and spreadsheets, reducing manual processing time by 40%.',
            'Performed manual and automated QA testing to validate system functionality, data accuracy, and backend processes.',
            'Executed API testing to verify data integrity, response accuracy, and system behavior.',
            'Designed and maintained test data sets using Google Sheets and Excel for validation and reporting.',
            'Created data visualizations and reports to support defect analysis and performance tracking.'
        ]
    },
    {
    id: 2,
    role: 'Data System Analyst (ICTD)',
    company: 'Cooperative Development Authority',
    location: 'Cubao, Quezon City',
    period: 'June 2021 – January 2023',
        achievements: [
            'Monitored and maintained internal information systems to ensure data accuracy, system stability, and performance.',
            'Troubleshot and resolved 50+ system, hardware, and software issues per month, identifying root causes and preventing recurrence.',
            'Assisted in system testing and validation during deployments and configuration changes.',
            'Created and maintained an Access database to support system tracking and resource utilization.',
            'Provided user support and training, ensuring proper system usage and issue reporting.'
        ]

    },
    {
        id: 3,
        role: 'Technical Support (with Finance Focus)',
        company: 'Cooperative Development Authority',
        location: 'Cubao, Quezon City',
        period: 'February 2019 – June 2021',
        achievements: [
            'Provided technical assistance to the Finance and HR Divisions, helping to streamline their processes and improve workflow.',
            'Contributed to finance operations by overseeing budgets, payroll, and accounts payable and receivable.',
            'Assisted in testing financial processes related to payroll, budgeting, and reporting.',
            'Maintained documentation and records to support audits and system verification.'
        ]
    }
];

export function Experience() {
    return (
        <section id="experience" className="experience-section">
            <div className="container">
                {/* Section Header */}
                <div className="section-header">
                    <h2 className="section-title">
                        Work Experience
                    </h2>
                    <p className="section-subtitle">
                        Experienced IT Professional with over 4 years of hands-on experience in IT infrastructure, automation testing, and data analysis
                    </p>
                </div>

                {/* Experience Timeline */}
                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <div key={exp.id} className="experience-item">
                            {/* Timeline Connector */}
                            <div className="timeline-connector">
                                <div className="timeline-dot"></div>
                                {index < experiences.length - 1 && <div className="timeline-line"></div>}
                            </div>

                            {/* Experience Card */}
                            <div className="experience-card">
                                <div className="experience-header">
                                    <div>
                                        <h3 className="experience-role">{exp.role}</h3>
                                        <div className="experience-company">
                                            <Briefcase className="icon-xs" />
                                            <span>{exp.company}</span>
                                        </div>
                                    </div>
                                    <div className="experience-meta">
                                        <div className="experience-period">
                                            <Calendar className="icon-xs" />
                                            <span>{exp.period}</span>
                                        </div>
                                        <div className="experience-location">
                                            <MapPin className="icon-xs" />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>
                                </div>

                                <ul className="experience-achievements">
                                    {exp.achievements.map((achievement, i) => (
                                        <li key={i}>{achievement}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
