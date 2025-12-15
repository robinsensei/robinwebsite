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
            'Automated data gathering, cleaning, and reporting using Python and spreadsheets — reduced manual reporting time by 40%',
            'Built complex Google Sheets and Excel solutions for reliable data collection, tracking, and consolidation',
            'Produced clear data visualizations and dashboards to surface key logistics metrics for stakeholders'
        ]
    },
    {
        id: 2,
        role: 'Data System Analyst (ICTD)',
        company: 'Cooperative Development Authority',
        location: 'Cubao, Quezon City',
        period: 'June 2021 – December 2023',
        achievements: [
            'Analyzed and monitored information systems to ensure data accuracy and system reliability',
            'Performed QA activities including manual testing, Python automation, and API testing to validate functionality and data integrity',
            'Troubleshot and resolved 50+ hardware and software issues per month, maintaining high user satisfaction',
            'Configured and maintained workstations, devices, and software to support business operations',
            'Provided end-user support via phone, email, and in-person assistance; delivered user training to improve adoption',
            'Implemented an Access database to optimize resource utilization and reduce operational costs'
        ]

    },
    {
        id: 3,
        role: 'Technical Support (with Finance Focus)',
        company: 'Cooperative Development Authority',
        location: 'Cubao, Quezon City',
        period: 'February 2019 – June 2021',
        achievements: [
            'Provided technical support to Finance and HR divisions, streamlining processes and improving workflow efficiency',
            'Supported finance operations including payroll, accounts payable/receivable, and preparation of financial statements',
            'Developed budgetary controls and maintained accurate recordkeeping systems to support audits and reporting'
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
