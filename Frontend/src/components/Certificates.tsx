import { ExternalLink, Download } from 'lucide-react';

export function Certificates() {
  const assets = [
    { id: 'awsbadge', title: 'AWS Badge', type: 'image', path: new URL('../assets/CT/awsbadgeRobinsensei.png', import.meta.url).href },
    { id: 'soc', title: 'SOC Certificate', type: 'image', path: new URL('../assets/CT/Robinson C. Domingo SOC.png', import.meta.url).href },
    { id: 'ptkl', title: 'PTKL Certificate', type: 'image', path: new URL('../assets/CT/Robinson Domingo PTKL.png', import.meta.url).href },
    { id: 'cir', title: 'Cybersecurity Incident Response', type: 'image', path: new URL('../assets/CT/CIR.png', import.meta.url).href },
    { id: 'national', title: 'National Cyber Drill', type: 'image', path: new URL('../assets/CT/National Cyber Drill.png', import.meta.url).href },
    { id: 'js', title: 'JavaScript Training', type: 'image', path: new URL('../assets/CT/Javascript.png', import.meta.url).href },
    { id: 'coursera1', title: 'Coursera 1', type: 'image', path: new URL('../assets/CT/coursera1.png', import.meta.url).href },
    { id: 'coursera2', title: 'Coursera 2', type: 'image', path: new URL('../assets/CT/coursera2.png', import.meta.url).href },
    { id: 'coursera3', title: 'Coursera 3', type: 'image', path: new URL('../assets/CT/coursera3.png', import.meta.url).href },
    { id: 'coursera4', title: 'Coursera 4', type: 'image', path: new URL('../assets/CT/coursera4.png', import.meta.url).href },
  ];

  return (
    <section id="certificates" className="certificates-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Certificates & Training</h2>
          <p className="section-subtitle">Selected certifications and training courses demonstrating skills and continuous learning.</p>
        </div>

        <div className="cert-grid">
          {assets.map((a) => (
            <div className="cert-card" key={a.id} aria-label={a.title}>
              {a.type === 'image' ? (
                <img src={a.path} alt={a.title} className="cert-thumb" />
              ) : (
                <div className="cert-placeholder">
                  <svg width="48" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <rect x="3" y="3" width="18" height="18" rx="2" fill="#f3f4f6"/>
                    <path d="M7 7h6v2H7z" fill="#e5e7eb"/>
                    <path d="M7 11h10v2H7z" fill="#e5e7eb"/>
                    <path d="M7 15h10v2H7z" fill="#e5e7eb"/>
                  </svg>
                </div>
              )}

              <div className="cert-meta">
                <div className="cert-title">{a.title}</div>
                <div className="cert-actions">
                  <a href={a.path} target="_blank" rel="noopener noreferrer" className="btn-ghost" aria-label={`Open ${a.title}`}>
                    <ExternalLink className="icon-sm" />
                    <span>View</span>
                  </a>
                  <a href={a.path} download className="btn-ghost" aria-label={`Download ${a.title}`}>
                    <Download className="icon-sm" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
