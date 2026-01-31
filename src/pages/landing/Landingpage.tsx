import React from 'react';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/useAuth';
import '../../styles/Login.css';
import Features from '../../components/Features';
import crownIcon from '../../assets/images/crown-03.svg';
import logo from '../../assets/images/logo.svg';
import gridOverlay from '../../assets/images/gridoverlay.svg';
import '../../styles/Landing.css';
import Modal from '../../components/model';
import { colors } from '../../styles/colors';
export default function LandingPage() {
  const { isLoggedIn } = useAuth();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [anchorRect, setAnchorRect] = React.useState<DOMRect | null>(null);
  return (
    <div
      style={{
        backgroundImage: `url(${gridOverlay}), radial-gradient(900px 540px at 102% -6%, rgba(18,87,86,0.16) 0%, rgba(18,87,86,0) 60%), radial-gradient(900px 540px at -6% 102%, rgba(18,87,86,0.16) 0%, rgba(18,87,86,0) 60%)`,
        backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
        backgroundPosition: 'center, center, center',
        backgroundSize: 'contain, cover, cover',
      }}
    >
      <Header
        childrenLeft={
          <button
            className="upgrade-btn"
            onClick={(e) => {
              const rect = (
                e.currentTarget as HTMLElement
              ).getBoundingClientRect();
              setAnchorRect(rect);
              setModalOpen(true);
            }}
            style={{
              height: 40,
              padding: '0 14px',
              borderRadius: 12,
              border: '1.5px solid #125759',
              background: 'transparent',
              color: '#125759',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontWeight: 600,
            }}
          >
            <img src={crownIcon} alt="" width={24} height={24} />
            <span style={{ color: '#125759', fontFamily: 'manrope' }}>
              Upgrade to{' '}
              <span
                style={{
                  color: '#ffffff',
                  background: '#125759',
                  padding: '0 4px',
                  borderRadius: 4,
                  fontFamily: 'manrope',
                }}
              >
                PRO
              </span>
            </span>
          </button>
        }
        childrenCenter={
          <div
            style={{
              fontWeight: 700,
              color: '#125759',
              textDecoration: 'login',
              textUnderlineOffset: 6,
            }}
          >
            <img src={logo} alt="" width={120} height={120} />
          </div>
        }
      />
      <main
        className="landing"
        style={{
          display: 'grid',
          justifyItems: 'center',
          textAlign: 'center',
          marginTop: 62,
          padding: '0 16px',
        }}
      >
        <h1
          className="landing-title"
          style={{
            fontSize: 56,
            lineHeight: 1.12,
            margin: 0,
            color: '#0f172a',
            fontFamily: 'Nohemi',
            maxWidth: 900,
            fontWeight: 700,
          }}
        >
          Hire smarter. Faster. Through a seamless{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #27C1A8, #125756)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: 'Nohemi',
              fontWeight: 700,
            }}
          >
            AI-driven experience
          </span>
          .
        </h1>
        <p
          className="landing-subtitle"
          style={{
            color: '#6b7280',
            marginTop: 14,
            fontFamily: 'manrope',
            maxWidth: 680,
            fontWeight: 400,
          }}
        >
          Automate job creation, resume matching, and interviews all in one
          seamless flow.
        </p>

        {!isLoggedIn ? (
          <div
            className="landing-cta"
            style={{ display: 'flex', gap: 16, marginTop: 24 }}
          >
            <Link
              to="/signup"
              className="btn btn-primary"
              style={{
                padding: '0 24px',
                height: 58,
                width: 240,
                fontSize: 20,

                textDecoration: 'none',
                borderRadius: 12,
                // boxShadow: '0 4px 0 rgba(15,71,72,0.25)',
                fontFamily: 'Nohemi',
              }}
            >
              Signup for FREE
            </Link>
          </div>
        ) : (
          <div
            className="landing-cta"
            style={{ display: 'flex', gap: 16, marginTop: 24 }}
          >
            <Link
              to="/dashboard"
              className="btn btn-primary"
              style={{
                padding: '0 24px',
                height: 58,
                width: 240,
                fontSize: 20,
                textDecoration: 'none',
                borderRadius: 12,
                // boxShadow: '0 4px 0 rgba(15,71,72,0.25)',
                fontFamily: 'Nohemi',
              }}
            >
              Go to Dashboard
            </Link>
          </div>
        )}

        <h3
          style={{
            marginTop: 56,
            color: '#111827',
            fontFamily: 'Nohemi',
            fontWeight: 500,
          }}
        >
          What Hire AI Does for You
        </h3>
        <Features />
      </main>
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Upgrade to PRO"
        anchorRect={anchorRect || undefined}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: 16,
          }}
        >
          <div
            style={{
              border: `1px solid ${colors.primary}22`,
              borderRadius: 12,
              padding: 16,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            <div style={{ fontWeight: 700, color: colors.primary }}>Basic</div>
            <div style={{ fontSize: 24, fontWeight: 800, color: '#0f172a' }}>
              Free
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: 18,
                color: '#374151',
                lineHeight: 1.6,
              }}
            >
              <li>Job posting</li>
              <li>Resume upload</li>
              <li>Basic matching</li>
            </ul>
            <button
              onClick={() => setModalOpen(false)}
              style={{
                marginTop: 'auto',
                height: 40,
                borderRadius: 10,
                border: `1px solid ${colors.primary}`,
                background: 'transparent',
                color: colors.primary,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Continue Free
            </button>
          </div>

          <div
            style={{
              border: `2px solid ${colors.secondary}`,
              borderRadius: 12,
              padding: 16,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              background: `${colors.secondary}0D`,
            }}
          >
            <div style={{ fontWeight: 700, color: colors.primary }}>Pro</div>
            <div style={{ fontSize: 24, fontWeight: 800, color: '#0f172a' }}>
              $19<span style={{ fontWeight: 500, fontSize: 14 }}>/mo</span>
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: 18,
                color: '#374151',
                lineHeight: 1.6,
              }}
            >
              <li>All Basic features</li>
              <li>AI interview</li>
              <li>Advanced matching</li>
            </ul>
            <Link
              to="/pricing"
              style={{
                marginTop: 'auto',
                height: 40,
                borderRadius: 10,
                border: 'none',
                background: colors.primary,
                color: '#ffffff',
                fontWeight: 700,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 16px',
              }}
            >
              Upgrade to Pro
            </Link>
          </div>

          <div
            style={{
              border: `1px solid ${colors.primary}22`,
              borderRadius: 12,
              padding: 16,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            <div style={{ fontWeight: 700, color: colors.primary }}>
              Enterprise
            </div>
            <div style={{ fontSize: 24, fontWeight: 800, color: '#0f172a' }}>
              Contact
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: 18,
                color: '#374151',
                lineHeight: 1.6,
              }}
            >
              <li>Unlimited jobs</li>
              <li>Custom workflows</li>
              <li>Dedicated support</li>
            </ul>
            <Link
              to="/contact"
              style={{
                marginTop: 'auto',
                height: 40,
                borderRadius: 10,
                border: `1px solid ${colors.disabled}`,
                background: 'transparent',
                color: colors.disabled,
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 16px',
              }}
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
}
