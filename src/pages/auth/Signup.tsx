import React, { useState, useEffect } from 'react'
import { auth } from '../../firebase/firebase'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, sendEmailVerification } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom' 
import '../../styles/Login.css'
import mailIcon from '../../assets/images/mail-01.svg'
import userIcon from '../../assets/images/user.svg'
import lockIcon from '../../assets/images/lock-password.svg'
import signupIllustration from '../../assets/images/signup.svg'
import logo from '../../assets/images/logo.svg'
const getFirebaseErrorMessage = (error: any): string => {
  if (typeof error === 'string') return error;
  switch (error.code) {
    case 'auth/email-already-in-use':
      return 'This email address is already in use.'
    case 'auth/invalid-email':
      return 'Please enter a valid email address.'
    case 'auth/weak-password':
      return 'Password should be at least 6 characters.'
    case 'auth/operation-not-allowed':
      return 'Email/password sign-in is disabled.'
    default:
      return 'An unexpected error occurred. Please try again.'
  }
}

export default function Register() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [fullName, setFullName] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showConfirm, setShowConfirm] = useState<boolean>(false)
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [verifyMsg, setVerifyMsg] = useState<string>('')
  const navigate = useNavigate()

  useEffect(() => {
    try {
      const stored = localStorage.getItem('verifyEmail')
      if (stored) {
        setVerifyMsg(`Please verify your email (${stored}). We have sent a verification link to your inbox.`)
      }
    } catch (e) { void e }
  }, [])

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('') 
    
    if (!fullName.trim()) {
      setError('Full name is required')
      return
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    setIsLoggingIn(true)
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      console.log('User registered:', userCredential.user)
      
      if (auth.currentUser && fullName.trim()) {
        await updateProfile(auth.currentUser, { displayName: fullName.trim() })
      }

      if (auth.currentUser) {
        const actionUrl = typeof window !== 'undefined' ? `${window.location.origin}/auth-action` : undefined
        await sendEmailVerification(auth.currentUser, actionUrl ? { url: actionUrl, handleCodeInApp: true } : undefined)
        try { localStorage.setItem('verifyEmail', email) } catch (e) { void e }
      }

      navigate('/verify-email-sent', { state: { email } }) 
    } catch (err) {
      console.error('Registration error:', err)
      setError(getFirebaseErrorMessage(err))
    } finally {
      setIsLoggingIn(false)
    }
  }

  const handleGoogleRegister = async () => {
    const provider = new GoogleAuthProvider()
    setError('')
    setIsLoggingIn(true)
    try {
      const result = await signInWithPopup(auth, provider)
      console.log('Google user:', result.user)
      navigate('/') 
    } catch (err) {
      console.error('Google registration error:', err)
      setError(getFirebaseErrorMessage(err))
      setIsLoggingIn(false) 
    }
  }


  return (
    <>
    {verifyMsg && <div className="top-ribbon">{verifyMsg}</div>}
    <div className="auth-container" style={{ paddingTop: verifyMsg ? 96 : undefined }}>
      <div className="hero">
         <Link to="/" aria-label="Go to home">
          <img src={logo} alt="" width={120} height={120} style={{ cursor: 'pointer' }} />
        </Link>
        <h2 className="title">From job description to shortlisting.</h2>
        <p className="subtitle">Resume sorting, interviews, and insights all powered by AI.</p>
        <div className="hero-illustration">
          <img src={signupIllustration} alt="Signup illustration" style={{ maxWidth: 420, width: '100%', height: 'auto' }} />
        </div>
        
        {/* <div className="hero-illustration">
          <svg width="100%" viewBox="0 0 460 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="60" width="380" height="240" rx="12" fill="white" stroke="#eef2f7" strokeWidth="2"/>
            <rect x="56" y="76" width="348" height="16" rx="4" fill="#f3f4f6"/>
            <rect x="56" y="108" width="80" height="24" rx="6" fill="#ec4899" fillOpacity="0.2"/>
            <rect x="148" y="108" width="80" height="24" rx="6" fill="#a855f7" fillOpacity="0.2"/>
            <rect x="56" y="148" width="348" height="128" rx="6" fill="#f8fafc"/>
            <rect x="72" y="164" width="316" height="8" rx="4" fill="#e5e7eb"/>
            <rect x="72" y="184" width="280" height="8" rx="4" fill="#e5e7eb"/>
            <rect x="72" y="204" width="316" height="8" rx="4" fill="#e5e7eb"/>
            <rect x="72" y="224" width="240" height="8" rx="4" fill="#e5e7eb"/>
            <rect x="40" y="60" width="380" height="240" rx="12" stroke="url(#gradient-border)" strokeWidth="3"/>
            <defs>
              <linearGradient id="gradient-border" x1="40" y1="60" x2="420" y2="300" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ec4899"/>
                <stop offset="0.5" stopColor="#a855f7"/>
                <stop offset="1" stopColor="#0ea5e9"/>
              </linearGradient>
            </defs>
          </svg>
        </div> */}
      </div>

      <div className="card">
        <div className="card-header">
          <div className="card-title">Signup</div>
          <div className="card-subtitle">🚀 Let's get started.</div>
        </div>

        <form onSubmit={handleRegister} className="form">
          {/* Email */}
          <div className="field with-icon email">
            <label htmlFor="email" className="label">Email</label>
            <div className="input-wrap">
              <img src={mailIcon} className="field-icon" alt="" aria-hidden="true" />
              <input id="email" className="input" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
          </div>

          <div className="field with-icon name">
            <label htmlFor="fullName" className="label">Full Name</label>
            <div className="input-wrap">
              <img src={userIcon} className="field-icon" alt="" aria-hidden="true" />
              <input id="fullName" className="input" type="text" placeholder="Enter your full name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
            </div>
          </div>

          {/* Password */}
          <div className="field password with-icon password-icon">
            <label htmlFor="password" className="label">Password</label>
            <div className="input-wrap">
              <img src={lockIcon} className="field-icon" alt="" aria-hidden="true" />
              <input id="password" className="input" type={showPassword ? 'text' : 'password'} placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} />
              <button type="button" className="toggle" onClick={() => setShowPassword((v) => !v)} aria-label="Toggle password visibility">{showPassword ? '🙈' : '👁️'}</button>
            </div>
          </div>

          <div className="field password with-icon password-icon">
            <label htmlFor="confirmPassword" className="label">Repeat Password</label>
            <div className="input-wrap">
              <img src={lockIcon} className="field-icon" alt="" aria-hidden="true" />
              <input id="confirmPassword" className="input" type={showConfirm ? 'text' : 'password'} placeholder="Re-enter your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required minLength={6} />
              <button type="button" className="toggle" onClick={() => setShowConfirm((v) => !v)} aria-label="Toggle confirm password visibility">{showConfirm ? '🙈' : '👁️'}</button>
            </div>
          </div>
          
          {/* Error Message Display */}
          {error && (
            <div className="error-message">{error}</div>
          )}

          {/* Register Button */}
          <button type="submit" disabled={isLoggingIn} className="btn btn-primary">
            {isLoggingIn ? 'Signing up...' : 'Signup'}
          </button>
          <div className="divider">Or with</div>

          {/* Google full-width button */}
          <button onClick={handleGoogleRegister} disabled={isLoggingIn} className="btn-google" aria-label="Sign up with Google" type="button" style={{ marginTop: 12 }}>
            <svg width="20" height="20" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg"><path d="M533.5 278.4c0-18.2-1.5-36-4.4-53.2H272v100.6h146.9c-6.3 34.1-25.6 63-54.6 82.3v68.3h88.3c51.5-47.5 81.9-117.5 81.9-198z" fill="#4285f4"/><path d="M272 544.3c73.5 0 135.2-24.4 180.3-66.3l-88.3-68.3c-24.5 16.5-55.7 26-92 26-70.8 0-130.7-47.8-152.2-112.2H29.8v70.8C74.9 483.6 166 544.3 272 544.3z" fill="#34a853"/><path d="M119.8 320.4c-9.5-28.4-9.5-58.6 0-87l-89.9-70.7c-39 77.5-39 169.1 0 246.6l89.9-70.9z" fill="#fbbc04"/><path d="M272 107.7c39.9-.6 77.1 14 105.8 40.7l79.5-79.5C407 23.6 345.2-1.1 272 0 166 0 74.9 60.7 29.8 149.1l89.9 70.7C141.3 155.5 201.2 107.7 272 107.7z" fill="#ea4335"/></svg>
            <span>Continue with Google</span>
          </button>
        </form>

        <div className="muted">
          Already have an account? <Link to="/login" style={{ color: "var(--color-primary)",fontWeight: "bold", fontFamily: "Manrope", fontSize: 14 }}>Log in</Link>
        </div>
      </div>
    </div>
    </>
  )
}