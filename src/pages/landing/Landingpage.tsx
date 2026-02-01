import React from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import "../../styles/Login.css";
import Features from "../../components/Features";
import crownIcon from "../../assets/images/crown-03.svg";
import logo from "../../assets/images/AMZLogo.png";
//import gridOverlay from "../../assets/images/gridoverlay.svg";
import "../../styles/Landing.css";
import Modal from "../../components/model";
import { colors } from "../../styles/colors";
export default function LandingPage() {
  const { isLoggedIn } = useAuth();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [anchorRect, setAnchorRect] = React.useState<DOMRect | null>(null);
  return (
    <div
      style={{
        // background: "linear-gradient(to bottom right, #1d1f27 75%, #00c48c 100%)",
        backgroundColor: "#1d1f27",
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
              padding: "0 14px",
              borderRadius: 12,
              border: "1.5px solid #01a982",
              background: "transparent",
              color: "#01a982",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontWeight: 600,
            }}
          >
            <img
              src={crownIcon}
              alt=""
              width={24}
              height={24}
              style={{
                filter:
                  "invert(42%) sepia(96%) saturate(423%) hue-rotate(118deg) brightness(92%) contrast(95%)",
              }}
            />
            <span style={{ color: "#01a982", fontFamily: "manrope" }}>
              Upgrade to{" "}
              <span
                style={{
                  color: "#ffffff",
                  background: "#01a982",
                  padding: "0 4px",
                  borderRadius: 4,
                  fontFamily: "manrope",
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
              color: "#01a982",
              textDecoration: "login",
              textUnderlineOffset: 6,
            }}
          >
            <img src={logo} alt="" width={320} height={320} />
          </div>
        }
      />
      <main
        className="landing"
        style={{
          display: "grid",
          justifyItems: "center",
          textAlign: "center",
          marginTop: 62,
          padding: "0 16px",
        }}
      >
        <h1
          className="landing-title"
          style={{
            fontSize: 56,
            lineHeight: 1.12,
            margin: 0,
            color: "#ffffff",
            fontFamily: "Nohemi",
            maxWidth: 900,
            fontWeight: 700,
          }}
        >
          Hire smarter. Faster. Through a seamless{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #01a982 0%, #27C1A8 80%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "Nohemi",
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
            color: "#67686e",
            marginTop: 14,
            fontFamily: "manrope",
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
            style={{ display: "flex", gap: 16, marginTop: 24 }}
          >
            <Link
              to="/signup"
              className="btn btn-primary"
              style={{
                padding: "0 24px",
                height: 58,
                width: 240,
                fontSize: 20,

                textDecoration: "none",
                borderRadius: 12,
                // boxShadow: '0 4px 0 rgba(15,71,72,0.25)',
                fontFamily: "Nohemi",
              }}
            >
              Signup for FREE
            </Link>
          </div>
        ) : (
          <div
            className="landing-cta"
            style={{ display: "flex", gap: 16, marginTop: 24 }}
          >
            <Link
              to="/dashboard"
              className="btn btn-primary"
              style={{
                padding: "0 24px",
                height: 58,
                width: 240,
                fontSize: 20,
                textDecoration: "none",
                borderRadius: 12,
                // boxShadow: '0 4px 0 rgba(15,71,72,0.25)',
                fontFamily: "Nohemi",
              }}
            >
              Go to Dashboard
            </Link>
          </div>
        )}

        <h3
          style={{
            marginTop: 56,
            color: "#67686e",
            fontFamily: "Nohemi",
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
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 16,
          }}
        >
          <div
            style={{
              border: `1px solid ${colors.primary}22`,
              borderRadius: 12,
              padding: 10,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div style={{ fontWeight: 700, color: colors.primary }}>Basic</div>
            <div style={{ fontSize: 24, fontWeight: 800, color: "#ffffff" }}>
              Free
            </div>
            <ul
              style={{
                margin: 0,
                padding: 5,
                color: "#ffffff",
                lineHeight: 1.6,
              }}
            >
              <li>
                <span>✔</span>Job posting
              </li>
              <li>
                <span>✔</span>Resume upload
              </li>
              <li>
                <span>✔</span>Basic matching
              </li>
            </ul>
            <button
              onClick={() => setModalOpen(false)}
              style={{
                marginTop: "auto",
                height: 50,
                borderRadius: 10,
                border: `1px solid ${colors.primary}`,
                background: "transparent",
                color: colors.primary,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Continue Free
            </button>
          </div>

          <div
            style={{
              border: `2px solid ${colors.secondary}`,
              borderRadius: 12,
              padding: 10,
              display: "flex",
              flexDirection: "column",
              gap: 12,
              background: `${colors.secondary}0D`,
            }}
          >
            <div style={{ fontWeight: 700, color: colors.primary }}>Pro</div>
            <div style={{ fontSize: 24, fontWeight: 800, color: "#ffffff" }}>
              $19<span style={{ fontWeight: 500, fontSize: 14 }}>/mo</span>
            </div>
            <ul
              style={{
                margin: 0,
                padding: 5,
                color: "#ffffff",
                lineHeight: 1.6,
              }}
            >
              <li>
                <span>✔</span>All Basic features
              </li>
              <li>
                <span>✔</span>AI interview
              </li>
              <li>
                <span>✔</span>Advanced matching
              </li>
            </ul>
            <Link
              to="/pricing"
              style={{
                marginTop: "auto",
                height: 50,
                borderRadius: 10,
                border: "none",
                background: colors.primary,
                color: "#ffffff",
                fontWeight: 700,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 16px",
              }}
            >
              Upgrade to Pro
            </Link>
          </div>

          <div
            style={{
              border: `1px solid ${colors.primary}22`,
              borderRadius: 12,
              padding: 10,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div style={{ fontWeight: 700, color: colors.primary }}>
              Enterprise
            </div>
            <div style={{ fontSize: 24, fontWeight: 800, color: "#ffffff" }}>
              Contact
            </div>
            <ul
              style={{
                margin: 0,
                padding: 5,
                color: "#ffffff",
                lineHeight: 1.6,
              }}
            >
              <li>
                <span>✔</span>Unlimited jobs
              </li>
              <li>
                <span>✔</span>Custom workflows
              </li>
              <li>
                <span>✔</span>Dedicated support
              </li>
            </ul>
            <Link
              to="/contact"
              style={{
                marginTop: "auto",
                height: 50,
                borderRadius: 10,
                border: `1px solid ${colors.primary}`,
                background: "transparent",
                color: colors.primary,
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 12px",
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
