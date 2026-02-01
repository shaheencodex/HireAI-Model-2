import { useLocation, Link } from "react-router-dom";
import "../../styles/Login.css";
import mailIcon from "../../assets/images/mail-01.svg";
import overlayBg from "../../assets/images/overlay-gradient.svg";
import logo from "../../assets/images/AMZLogo.png";
export default function VerifyEmailSent() {
  const location = useLocation() as unknown as { state?: { email?: string } };
  const email =
    location?.state?.email ||
    (typeof window !== "undefined"
      ? localStorage.getItem("verifyEmail") || ""
      : "");

  return (
    <div
      className="auth-container"
      style={{
        gridTemplateColumns: "1fr 520px",
        backgroundImage: `url(${overlayBg})`,
        backgroundColor: "#292d3a",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero">
        <Link to="/" aria-label="Go to home">
          <img
            src={logo}
            alt=""
            width={320}
            height={320}
            style={{ cursor: "pointer" }}
          />
        </Link>
        <h2 className="title">Verify your email</h2>
        <p className="subtitle">We sent you a verification link.</p>
      </div>

      <div
        className="card"
        role="status"
        aria-live="polite"
        style={{ maxWidth: 520, width: "100%" }}
      >
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 8 }}
        >
          <img
            src={mailIcon}
            alt="Mail"
            className="mail-icon w-[72px] h-[72px]"
          />
        </div>

        <div
          className="card-header"
          style={{ textAlign: "center", marginTop: 8 }}
        >
          <div className="card-title">Verify your email</div>
          <div className="card-subtitle">
            We sent a link to {email || "your email"}.
          </div>
        </div>

        <div className="success-message" style={{ marginTop: 8 }}>
          Check your inbox and click the verification link to activate your
          account.
        </div>

        <div className="muted" style={{ marginTop: 16 }}>
          Didn’t get the email? Check spam or{" "}
          <Link to="/login">try logging in</Link> to resend.
        </div>
      </div>
    </div>
  );
}
