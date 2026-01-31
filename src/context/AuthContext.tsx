import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase/firebase'
import { AuthContext } from './AuthContextBase'
import type { AuthContextType } from './AuthContextBase'

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthContextType['user']>(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser)
        setIsLoggedIn(true)
      } else {
        setUser(null)
        setIsLoggedIn(false)
      }
    })
    return () => unsubscribe()
  }, [])

  const login: AuthContextType['login'] = (u) => {
    setUser(u)
    setIsLoggedIn(true)
  }

  const logout: AuthContextType['logout'] = async () => {
    try {
      await signOut(auth)
    } finally {
      setUser(null)
      setIsLoggedIn(false)
    }
  }

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
