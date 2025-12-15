import { Mail, MapPin, Phone, Github, Linkedin, Facebook, Copy } from 'lucide-react';
import { useState } from 'react';

function WhatsAppIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" className={props.className} aria-hidden="true">
      <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.373 0 .003 5.372.003 12.001c0 2.115.555 4.183 1.608 6.005L0 24l6.217-1.596A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-11.999 0-3.195-1.247-6.196-3.48-8.525z" fill="currentColor"/>
      <path d="M17.08 14.08c-.27-.14-1.61-.79-1.86-.88-.25-.09-.43-.14-.61.14s-.7.88-.86 1.06c-.16.18-.32.21-.59.07-.27-.14-1.13-.42-2.15-1.33-.8-.72-1.34-1.62-1.5-1.89-.16-.28-.02-.43.12-.57.12-.12.27-.31.4-.47.13-.16.17-.27.27-.45.09-.18.04-.34-.02-.47-.07-.14-.61-1.48-.84-2.03-.22-.52-.45-.45-.61-.46-.16-.01-.34-.01-.52-.01-.18 0-.47.07-.72.34-.25.27-.98.96-.98 2.34 0 1.37 1 2.7 1.14 2.89.14.18 1.97 3.12 4.78 4.24 1.47.58 2.2.62 3 .58.48-.03 1.56-.63 1.78-1.24.22-.61.22-1.13.15-1.24-.07-.11-.25-.18-.52-.32z" fill="#fff"/>
    </svg>
  );
}

function ViberIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" className={props.className} aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#6C5CE7" />
      <path d="M16.9 8.3c-.6-.6-1.6-.6-2.7-.3-.3.1-.6.1-.8-.1-.2-.2-.5-.5-.8-.8-.6-.6-1.4-.6-2 .0-.6.6-.6 1.4 0 2l.5.5c-.6.9-1 2-1 3.1 0 3 2.5 5.5 5.5 5.5 1.1 0 2.2-.3 3.1-1l.5.5c.6.6 1.4.6 2 0 .6-.6.6-1.4 0-2l-1.2-1.2c.3-1.1.1-2.1-.5-2.8-.7-.7-1.6-.9-2.7-.5L16.9 8.3z" fill="#fff"/>
    </svg>
  );
}

export function Contact() {
  const email = 'robinsondomingo11@gmail.com';
  const phone = '+63 961 543 1176';
  const phoneDigits = '639615431176';
  const waLink = `https://wa.me/${phoneDigits}`;
  const viberLink = `viber://chat?number=%2B${phoneDigits}`;
  const location = 'Quezon City, Philippines';
  const facebookUrl = 'https://www.facebook.com/robindomingocarag';

  const [copied, setCopied] = useState(false);
  const [srMessage, setSrMessage] = useState('');

  const copyToClipboard = async (text: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setSrMessage('Email address copied to clipboard');
      window.setTimeout(() => {
        setCopied(false);
        setSrMessage('');
      }, 2000);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      setSrMessage('Copy failed — please copy manually');
      window.setTimeout(() => setSrMessage(''), 2000);
    }
  };

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div className="container">
        <h2 id="contact-heading" className="section-title">Contact</h2>

        <div className="contact-grid">
          <div className="contact-cards">
            <article className="contact-card" aria-labelledby="email-title">
              <div className="contact-card-icon">
                <Mail className="icon-md text-primary" />
              </div>
              <div className="contact-card-body">
                <div id="email-title" className="contact-card-title">Email</div>
                <div className="contact-text">{email}</div>
                <div className="contact-actions">
                  <a href={`mailto:${email}`} className="btn btn-ghost" aria-label="Send email">
                    Send
                  </a>
                  <button type="button" className="btn btn-ghost" onClick={() => copyToClipboard(email)} aria-label="Copy email">
                    <Copy className="icon-sm" />
                    <span style={{ marginLeft: 8 }}>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            </article>

            <article className="contact-card" aria-labelledby="phone-title">
              <div className="contact-card-icon">
                <Phone className="icon-md text-primary" />
              </div>
              <div className="contact-card-body">
                <div id="phone-title" className="contact-card-title">Phone</div>
                <div className="contact-text">{phone}</div>
                <div className="contact-actions">
                  <a href={`tel:${phone.replace(/\s+/g, '')}`} className="btn btn-ghost" aria-label="Call phone">
                    Call
                  </a>
                  <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" aria-label="WhatsApp chat">
                    <WhatsAppIcon className="icon-sm" />
                    <span style={{ marginLeft: 8 }}>WhatsApp</span>
                  </a>
                  <a href={viberLink} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" aria-label="Viber chat">
                    <ViberIcon className="icon-sm" />
                    <span style={{ marginLeft: 8 }}>Viber</span>
                  </a>
                </div>
              </div>
            </article>

            <article className="contact-card" aria-labelledby="location-title">
              <div className="contact-card-icon">
                <MapPin className="icon-md text-primary" />
              </div>
              <div className="contact-card-body">
                <div id="location-title" className="contact-card-title">Location</div>
                <div className="contact-text">{location}</div>
              </div>
            </article>
          </div>

          <aside className="contact-sidebar" aria-label="Social links">
            <div className="contact-sidebar-inner">
              <h3 className="contact-sidebar-title">Find me online</h3>
              <div className="social-links">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                  <Linkedin className="icon-md" />
                </a>
                <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                  <Facebook className="icon-md" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                  <Github className="icon-md" />
                </a>
              </div>
              <p className="contact-note">You can email me directly or connect via WhatsApp, Viber, LinkedIn, Facebook or GitHub.</p>
            </div>
          </aside>
        </div>

        <div aria-live="polite" className="sr-only">{srMessage}</div>
      </div>
    </section>
  );
}