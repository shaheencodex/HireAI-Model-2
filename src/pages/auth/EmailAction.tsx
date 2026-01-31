import { useEffect, useState } from 'react'
import {  useSearchParams, Link } from 'react-router-dom'
import { applyActionCode, checkActionCode } from 'firebase/auth'
import { auth } from '../../firebase/firebase'
import '../../styles/Login.css'
import overlayBg from '../../assets/images/overlay-gradient.svg'
import logo from '../../assets/images/logo.svg'
export default function EmailAction() {
  const [search] = useSearchParams()
  const mode = search.get('mode')
  const oobCode = search.get('oobCode')

  const [status, setStatus] = useState<'idle' | 'verifying' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    const run = async () => {
      if (!mode || !oobCode) {
        setStatus('error')
        setMessage('Invalid action link.')
        return
      }
      if (mode !== 'verifyEmail') {
        setStatus('error')
        setMessage('Unsupported action.')
        return
      }
      try {
        setStatus('verifying')
        await checkActionCode(auth, oobCode)
        await applyActionCode(auth, oobCode)
        setStatus('success')
        setMessage('Your email has been verified. You can now log in.')
      } catch (e) {
        console.error(e)
        setStatus('error')
        setMessage('This verification link is invalid or expired.')
      }
    }
    run()
  }, [mode, oobCode])

  return (
    <div
      className="auth-container"
      style={{
        gridTemplateColumns: '1fr 520px',
        backgroundImage: `url(${overlayBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero">
         <Link to="/" aria-label="Go to home">
          <img src={logo} alt="" width={120} height={120} style={{ cursor: 'pointer' }} />
        </Link>
        <h2 className="title">Email verification</h2>
        <p className="subtitle">We are processing your verification link.</p>
      </div>

      <div className="card">
        <div className="card-header">
          <div className="card-title">Verify your email</div>
          <div className="card-subtitle">{status === 'verifying' ? 'Verifying…' : ''}</div>
        </div>

        {status === 'verifying' && (
          <div className="muted">Please wait while we verify your email…</div>
        )}

        {status === 'success' && (
          <div className="success-message">{message}</div>
        )}

        {status === 'error' && (
          <div className="error-message">{message}</div>
        )}

        <div style={{ marginTop: 16, textAlign: 'center' }}>
          <Link to="/login" className="btn btn-primary" style={{ display: 'inline-block', width: '100%' }}>Go to login</Link>
        </div>
      </div>
    </div>
  )
}
