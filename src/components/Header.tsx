import React, { useMemo, useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/useAuth'

export type HeaderProps = {
  fullName?: string | null
  email?: string | null
  onLogout?: () => Promise<void> | void
  onProfile?: () => void
  childrenLeft?: React.ReactNode
  childrenCenter?: React.ReactNode
}

export default function Header({ fullName, email, onProfile, childrenLeft, childrenCenter }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const { isLoggedIn } = useAuth()

  const initial = useMemo(() => {
    const n = (fullName || '').trim()
    if (n) return n[0]?.toUpperCase()
    const e = (email || '').trim()
    if (e) return e[0]?.toUpperCase()
    return 'U'
  }, [fullName, email])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!menuRef.current) return
      if (!menuRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // const doLogout = async () => {
  //   try {
  //     if (onLogout) {
  //       await onLogout()
  //     } else {
  //       await signOut(auth)
  //     }
  //   } finally {
  //     setOpen(false)
  //   }
  // }

  return (
    
    <header style={styles.header}>
      <div style={styles.left}>{childrenLeft}</div>
      <div style={styles.center}>{childrenCenter}</div>
      <div style={styles.right} ref={menuRef}>
        {!isLoggedIn ? (
          <Link to="/login" style={styles.loginBtn as React.CSSProperties}>Login</Link>
        ) : (
          <>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Open profile menu"
              style={styles.avatar as React.CSSProperties}
            >
              <span>{initial}</span>
            </button>
            {open && (
              <div style={styles.menu as React.CSSProperties} role="menu" aria-label="Profile menu">
                <button style={styles.menuItem as React.CSSProperties} onClick={() => { setOpen(false); onProfile?.() }}>Profile</button>
                {/* <button style={styles.menuItem as React.CSSProperties} onClick={doLogout}>Logout</button> */}
              </div>
            )}
          </>
        )}
      </div>
    </header>
  )
}

const styles: Record<string, React.CSSProperties> = {
  header: {
    position: 'relative',
    height: 64,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    alignItems: 'center',
    padding: '0 20px',
    background: 'transparent',
  },
  left: { display: 'flex', alignItems: 'center', gap: 12 },
  center: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
  right: { display: 'flex', alignItems: 'center', justifyContent: 'flex-end', position: 'relative' },
  loginBtn: {
    height: 36,
    padding: '0 14px',
    borderRadius: 10,
    border: '1.5px solid #125759',
    color: '#125759',
    background: '#ffffff',
    textDecoration: 'none',
    fontWeight: 600,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: '50%',
    border: '1px solid #9aaab0',
    background: '#0f4b4c',
    color: '#fff',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 700,
    letterSpacing: 0.2,
    boxShadow: '0 1px 2px rgba(0,0,0,0.06)'
  },
  menu: {
    position: 'absolute',
    top: 48,
    right: 0,
    width: 180,
    background: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: 12,
    boxShadow: '0 10px 24px rgba(0,0,0,0.10)',
    padding: 8,
    zIndex: 30,
  },
  menuItem: {
    width: '100%',
    height: 40,
    border: 'none',
    borderRadius: 10,
    background: 'transparent',
    textAlign: 'left' as const,
    padding: '0 10px',
    cursor: 'pointer',
    color: '#111827',
  },
}
