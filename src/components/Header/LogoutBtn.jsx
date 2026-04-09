import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

const LogoutBtn = ({ className = '', children = 'Logout' }) => {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
    className={`inline-flex w-full rounded-full bg-[var(--text)] px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--accent-deep)] lg:w-auto ${className}`}
    onClick={logoutHandler}
    >{children}</button>
  )
}

export default LogoutBtn
