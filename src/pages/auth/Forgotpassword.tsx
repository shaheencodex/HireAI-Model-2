import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import "../../styles/Login.css";
import mailIcon from "../../assets/images/mail-01.svg";
import overlayBg from "../../assets/images/overlay-gradient.svg";
import logo from "../../assets/images/logo.svg";
export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setError("");
      setMessage("");
      setIsSending(true);
      await sendPasswordResetEmail(auth, email);
      setMessage("Reset link sent. Please check your inbox.");
    } catch {
      setError("Unable to send reset link. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div
      className="auth-container"
      style={{
        backgroundImage: `url(${overlayBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero">
        <Link to="/" aria-label="Go to home">
          <img src={logo} alt="" width={120} height={120} style={{ cursor: 'pointer' }} />
        </Link>
        <h2 className="title">From job description to shortlisting.</h2>
        <p className="subtitle">Resume sorting, interviews, and insights all powered by AI.</p>
      </div>

      <div className="card card-login">
        <div className="card-header">
          <div className="card-title">Forgot Password</div>
          <div className="card-subtitle">🔑 No worries. Let's get you back in.</div>
        </div>

        <form onSubmit={handleReset} className="form">
          {message && <div className="success-message">{message}</div>}
          {error && <div className="error-message">{error}</div>}

          <div className="field with-icon email">
            <label htmlFor="reset-email" className="label">Email</label>
            <div className="input-wrap">
              <img src={mailIcon} className="field-icon" alt="" aria-hidden="true" />
              <input
                id="reset-email"
                className="input"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" disabled={isSending} className="btn btn-primary">
            {isSending ? "Sending..." : "Get Link"}
          </button>
        </form>

        <div className="muted">
          Back to <Link to="/login" style={{ color: "#125759", fontWeight: "500", fontFamily: "Nohemi" }}>Login</Link>
        </div>
      </div>
    </div>
  );
}