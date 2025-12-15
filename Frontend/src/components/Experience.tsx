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
            'Automated data gathering, cleaning, report generation, and analysis processes using Python and spreadsheet tools to improve logistics reporting efficiency',
            'Created complex Google Sheets and Excel files for data collection, management, and tracking',
            'Developed clear data visualizations to communicate analysis findings to the team and facilitate easier understanding of key metrics'
        ]
    },
    {
        id: 2,
        role: 'Data System Analyst (ICTD)',
        company: 'Cooperative Development Authority',
        location: 'Cubao, Quezon City',
        period: 'June 2021 – 2023',
        achievements: [
            'Troubleshot and diagnosed problems to accurately resolve a wide range of technical issues for end-users',
            'Configured hardware, devices, and software to efficiently set up and maintain workstations for new and existing employees',
            'Provided end-user support via telephone, email, and in-person inquiries, patiently walking individuals through basic troubleshooting tasks',
            'Trained users on the operation of the Computer System, ensuring smooth adoption of new technologies',
            'Initiated an Access database for improved resource utilization, reducing costs through strategic management and contract analysis'
        ]
    },
    {
        id: 3,
        role: 'Technical Support (with Finance Focus)',
        company: 'Cooperative Development Authority',
        location: 'Cubao, Quezon City',
        period: 'February 2019 – June 2021',
        achievements: [
            'Provided technical assistance to the Finance and HR Divisions, helping to streamline their processes and improve workflow',
            'Contributed to finance operations by overseeing budgets, payroll, and accounts payable and receivable',
            'Assisted in the preparation of accurate financial statements at the end of the quarter',
            'Directed budget development, creation of budgetary controls, and maintained recordkeeping systems'
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
                        4+ years of professional experience in IT infrastructure, automation, and data analysis
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
