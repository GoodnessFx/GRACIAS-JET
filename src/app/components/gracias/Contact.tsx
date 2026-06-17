import { useState } from 'react';
import { Phone, Mail, Instagram, Globe } from 'lucide-react';
import { useFadeIn } from './useFadeIn';
import { SectionLabel } from './About';
import { F } from './tokens';
import { useTheme } from './useTheme';

export function Contact() {
  const ref = useFadeIn<HTMLDivElement>();
  const { colors } = useTheme();
  return (
    <section id="contact" style={{ background: colors.bg, padding: '100px 0' }}>
      <div ref={ref} style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 48px' }}>
        <SectionLabel>Get In Touch</SectionLabel>
        <h2
          style={{
            fontFamily: F.display,
            fontWeight: 600,
            fontSize: 'clamp(36px, 4vw, 52px)',
            color: colors.text,
            lineHeight: 1.15,
            marginBottom: '12px',
          }}
        >
          Tell Us What You Need.
        </h2>
        <p style={{ fontFamily: F.body, fontWeight: 400, fontSize: '16px', color: colors.muted, lineHeight: 1.7, marginBottom: '56px', maxWidth: '560px' }}>
          Whether you are buying, selling, or simply exploring your options, a conversation costs nothing. We respond within 24 hours.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '45fr 55fr', gap: '80px', alignItems: 'start' }} className="contact-grid">
          <ContactDetails />
          <EnquiryForm />
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          #contact { padding: 64px 0 !important; }
          #contact > div { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  );
}

function ContactDetails() {
  const { colors } = useTheme();
  return (
    <div>
      <h3 style={{ fontFamily: F.display, fontWeight: 600, fontSize: '22px', color: colors.text, marginBottom: '32px' }}>
        Reach Us Directly
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <ContactRow icon={<Phone size={20} strokeWidth={1.5} color={colors.gold} />}>
          <a href="tel:+2347081910000" style={{ color: colors.text, textDecoration: 'none', fontFamily: F.body, fontWeight: 400, fontSize: '16px' }}>
            +234 7081910000
          </a>
        </ContactRow>
        <ContactRow icon={<Mail size={20} strokeWidth={1.5} color={colors.gold} />}>
          <a href="mailto:hello@graciasjetsales.com" style={{ color: colors.text, textDecoration: 'none', fontFamily: F.body, fontWeight: 400, fontSize: '16px' }}>
            hello@graciasjetsales.com
          </a>
        </ContactRow>
        <ContactRow icon={<Instagram size={20} strokeWidth={1.5} color={colors.gold} />}>
          <a href="https://www.instagram.com/graciasjetsales" target="_blank" rel="noopener noreferrer" style={{ color: colors.text, textDecoration: 'none', fontFamily: F.body, fontWeight: 400, fontSize: '16px' }}>
            @graciasjetsales
          </a>
        </ContactRow>
        <ContactRow icon={<Globe size={20} strokeWidth={1.5} color={colors.gold} />}>
          <span style={{ color: colors.text, fontFamily: F.body, fontWeight: 400, fontSize: '16px' }}>
            graciasjetsales.com
          </span>
        </ContactRow>
      </div>
      <p style={{ fontFamily: F.body, fontWeight: 400, fontSize: '13px', color: colors.muted, lineHeight: 1.6, marginTop: '40px' }}>
        We operate globally and maintain complete confidentiality on all enquiries.
      </p>
    </div>
  );
}

function ContactRow({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
      {icon}
      {children}
    </div>
  );
}

function EnquiryForm() {
  const { colors } = useTheme();
  const [values, setValues] = useState({ name: '', email: '', phone: '', interest: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  function validate() {
    const e: Record<string, string> = {};
    if (!values.name.trim()) e.name = 'Name is required';
    if (!values.email.trim() || !/\\S+@\\S+\\.\\S+/.test(values.email)) e.email = 'Valid email required';
    if (!values.interest || values.interest === '') e.interest = 'Please select an option';
    if (!values.message.trim()) e.message = 'Message is required';
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSuccess(true);
  }

  if (success) {
    return (
      <div style={{ padding: '48px 0' }}>
        <p style={{ fontFamily: F.display, fontStyle: 'italic', fontWeight: 400, fontSize: '22px', color: colors.text, lineHeight: 1.5 }}>
          Your enquiry has been received. We will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Field label="Full Name" error={errors.name}>
        <input
          type="text"
          placeholder="Your Full Name"
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          style={inputStyle(!!errors.name)}
          onFocus={(e) => { e.target.style.borderColor = colors.gold; e.target.style.outline = 'none'; }}
          onBlur={(e) => { e.target.style.borderColor = errors.name ? colors.red : colors.border; }}
        />
      </Field>
      <Field label="Email Address" error={errors.email}>
        <input
          type="email"
          placeholder="your@email.com"
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          style={inputStyle(!!errors.email)}
          onFocus={(e) => { e.target.style.borderColor = colors.gold; e.target.style.outline = 'none'; }}
          onBlur={(e) => { e.target.style.borderColor = errors.email ? colors.red : colors.border; }}
        />
      </Field>
      <Field label="Phone Number">
        <input
          type="tel"
          placeholder="+1 234 567 8900"
          value={values.phone}
          onChange={(e) => setValues({ ...values, phone: e.target.value })}
          style={inputStyle(false)}
          onFocus={(e) => { e.target.style.borderColor = colors.gold; e.target.style.outline = 'none'; }}
          onBlur={(e) => { e.target.style.borderColor = colors.border; }}
        />
      </Field>
      <Field label="I am looking to" error={errors.interest}>
        <select
          value={values.interest}
          onChange={(e) => setValues({ ...values, interest: e.target.value })}
          style={{ ...inputStyle(!!errors.interest), appearance: 'none' as const, cursor: 'pointer' }}
          onFocus={(e) => { e.target.style.borderColor = colors.gold; e.target.style.outline = 'none'; }}
          onBlur={(e) => { e.target.style.borderColor = errors.interest ? colors.red : colors.border; }}
        >
          <option value="">Select one</option>
          <option value="buy">Buy a Private Jet</option>
          <option value="sell">Sell My Aircraft</option>
          <option value="consult">Consult on Acquisition</option>
          <option value="other">Other</option>
        </select>
      </Field>
      <Field label="Message" error={errors.message}>
        <textarea
          rows={5}
          placeholder="Tell us what you are looking for. Any detail helps us serve you better."
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
          style={{ ...inputStyle(!!errors.message), resize: 'vertical' as const }}
          onFocus={(e) => { e.target.style.borderColor = colors.gold; e.target.style.outline = 'none'; }}
          onBlur={(e) => { e.target.style.borderColor = errors.message ? colors.red : colors.border; }}
        />
      </Field>
      <SubmitBtn submitting={submitting} />
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  const { colors } = useTheme();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {children}
      {error && <span style={{ fontFamily: F.body, fontWeight: 400, fontSize: '12px', color: colors.red }}>{error}</span>}
    </div>
  );
}

function inputStyle(hasError: boolean): React.CSSProperties {
  const { colors } = useTheme();
  return {
    background: colors.surface,
    border: `1px solid ${hasError ? colors.red : colors.border}`,
    color: colors.text,
    padding: '14px 16px',
    borderRadius: '2px',
    fontFamily: F.body,
    fontWeight: 400,
    fontSize: '15px',
    width: '100%',
    boxSizing: 'border-box' as const,
    outline: 'none',
    transition: 'border-color 0.2s ease',
  };
}

function SubmitBtn({ submitting }: { submitting: boolean }) {
  const { colors } = useTheme();
  const [hov, setHov] = useState(false);
  return (
    <button
      type="submit"
      disabled={submitting}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: '100%',
        background: hov && !submitting ? '#B8973E' : colors.gold,
        color: colors.bg,
        fontFamily: F.body,
        fontWeight: 700,
        fontSize: '13px',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        padding: '16px',
        borderRadius: '2px',
        border: 'none',
        cursor: submitting ? 'wait' : 'pointer',
        transition: 'background 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        marginTop: '8px',
      }}
    >
      {submitting ? (
        <>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'spin 1s linear infinite' }}>
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
          </svg>
          Sending...
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </>
      ) : (
        'Send Enquiry'
      )}
    </button>
  );
}
