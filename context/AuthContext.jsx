import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import nookies from 'nookies'
import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase-config'

const AuthContext = createContext({ user: null })

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    return auth.onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null)
        nookies.set(undefined, 'token', '', { path: '/' })
      } else {
        const token = await user.getIdToken()
        setUser(user)
        nookies.set(undefined, 'token', token, { path: '/' })
      }
    })
  }, [])

  // force refresh the token every 10 minutes
  useEffect(() => {
    const handle = setInterval(async () => {
      console.log(`refreshing token...`)
      const user = auth.currentUser
      if (user) await user.getIdToken(true)
    }, 10 * 60 * 1000)
    return () => clearInterval(handle)
  }, [])

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = async () => {
    setUser(null)
    await signOut(auth)
  }

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
