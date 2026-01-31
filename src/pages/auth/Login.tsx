import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
  signOut,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
import "../../styles/Login.css";
import mailIcon from "../../assets/images/mail-01.svg";
import lockIcon from "../../assets/images/lock-password.svg";
import { Link, useLocation } from "react-router-dom";
import Buttton from "../../components/Buttton";
import googleIcon from "../../assets/images/google.svg";
import secureIllustration from "../../assets/images/Secure login-bro 1.svg";
import overlayBg from "../../assets/images/overlay-gradient.svg";
import logo from "../../assets/images/logo.svg";
type VerifyLocationState = { verifyPrompt?: boolean; email?: string } | null;

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const location = useLocation() as unknown as { state: VerifyLocationState };
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [remember, setRemember] = useState<boolean>(false);

  useEffect(() => {
    const navState = location?.state;
    if (navState?.verifyPrompt) {
      const e = navState?.email || "";
      setMessage(
        `Please verify your email${
          e ? ` (${e})` : ""
        }. We have sent a verification link to your inbox.`
      );
      try {
        localStorage.setItem("verifyEmail", e);
      } catch (err) {
        void err;
      }
      return;
    }
    try {
      const stored = localStorage.getItem("verifyEmail");
      if (stored) {
        setMessage(
          `Please verify your email (${stored}). We have sent a verification link to your inbox.`
        );
      }
    } catch (err) {
      void err;
    }
  }, [location]);

  const handleEmailLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setMessage("");
      setError("");
      setIsLoggingIn(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (!userCredential.user.emailVerified) {
        await sendEmailVerification(userCredential.user);
        await signOut(auth);
        setMessage(
          "Verification email sent. Please check your inbox and verify your email to continue."
        );
        return;
      }
      console.log("User logged in:", userCredential.user);
      try {
        localStorage.removeItem("verifyEmail");
      } catch (err) {
        void err;
      }
    } catch (error) {
      console.error("Login error:", error);
      setError(
        "Unable to login. Please check your credentials or try again later."
      );
      setIsLoggingIn(false);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setIsLoggingIn(true);
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Google login error:", error);
      setIsLoggingIn(false);
    }
  };


  return (
    <>
      {message && <div className="top-ribbon">{message}</div>}
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
          <h2 className="title">Back to smarter hiring</h2>
          <p className="subtitle">Your AI assistant is ready to streamline.</p>
          <div className="hero-illustration">
            <img
              src={secureIllustration}
              alt="Secure login illustration"
              style={{ maxWidth: 420, width: "100%", height: "auto" }}
            />
          </div>
        </div>

        <div className="card card-login">
          <div className="card-header">
            <div className="card-title">Login</div>
            <div className="card-subtitle">👋 Welcome back</div>
          </div>

          <form onSubmit={handleEmailLogin} className="form">
            {/* {message && <div className="success-message">{message}</div>} */}
            {error && <div className="error-message">{error}</div>}

            <div className="field with-icon email">
              <label htmlFor="login-email" className="label">
                Email
              </label>
              <div className="input-wrap">
                <img
                  src={mailIcon}
                  className="field-icon"
                  alt=""
                  aria-hidden="true"
                />
                <input
                  id="login-email"
                  className="input"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="field with-icon password-icon">
              <label htmlFor="login-password" className="label">
                Password
              </label>
              <div className="input-wrap">
                <img
                  src={lockIcon}
                  className="field-icon"
                  alt=""
                  aria-hidden="true"
                />
                <input
                  id="login-password"
                  className="input"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="toggle"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 4,
              }}
            >
              <label
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  color: "#374151",
                  fontSize: 14,
                }}
              >
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                Remember me
              </label>
              <Link to="/forgot-password" style={{ color: "#125759", fontSize: 14 }}>
                Forgot password
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoggingIn}
              className="btn btn-primary"
            >
              {isLoggingIn ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="divider">Or with</div>

          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            {/* <button onClick={handleGoogleLogin} disabled={isLoggingIn} className="btn-icon" aria-label="Login with Google">
            <svg width="20" height="20" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg"><path d="M533.5 278.4c0-18.2-1.5-36-4.4-53.2H272v100.6h146.9c-6.3 34.1-25.6 63-54.6 82.3v68.3h88.3c51.5-47.5 81.9-117.5 81.9-198z" fill="#4285f4"/><path d="M272 544.3c73.5 0 135.2-24.4 180.3-66.3l-88.3-68.3c-24.5 16.5-55.7 26-92 26-70.8 0-130.7-47.8-152.2-112.2H29.8v70.8C74.9 483.6 166 544.3 272 544.3z" fill="#34a853"/><path d="M119.8 320.4c-9.5-28.4-9.5-58.6 0-87l-89.9-70.7c-39 77.5-39 169.1 0 246.6l89.9-70.9z" fill="#fbbc04"/><path d="M272 107.7c39.9-.6 77.1 14 105.8 40.7l79.5-79.5C407 23.6 345.2-1.1 272 0 166 0 74.9 60.7 29.8 149.1l89.9 70.7C141.3 155.5 201.2 107.7 272 107.7z" fill="#ea4335"/></svg>
          </button>
          <button onClick={handleFacebookLogin} disabled={isLoggingIn} className="btn-icon" aria-label="Login with Facebook">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.093 10.125 24v-8.437H7.078V12.07h3.047V9.413c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.49 0-1.953.93-1.953 1.887v2.25h3.328l-.532 3.493h-2.796V24C19.612 23.093 24 18.1 24 12.073z"/></svg>
          </button> */}
            <Buttton
              label="Continue with Google"
              onClick={handleGoogleLogin}
              bgColor="#ffffff"
              textColor="#000000"
              borderColor="#e5e7eb"
              iconLeft={
                <img src={googleIcon} alt="Google" />
              }
            />
          </div>

          <div className="muted">
            Already have an account? <Link to="/signup" style={{ color: "#125759", fontFamily: "Manrope", fontWeight: "bold", fontSize: 14 }}>Signup</Link>
          </div>
        </div>
      </div>
    </>
  );
}
