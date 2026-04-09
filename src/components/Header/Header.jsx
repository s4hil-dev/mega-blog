import React from 'react'
import {Container, Logo} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { HiMiniHome, HiMiniInformationCircle, HiMiniPlusCircle, HiMiniUserCircle } from 'react-icons/hi2'
import { FiLogIn, FiUserPlus } from 'react-icons/fi'


const Header = () => {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const location = useLocation()

   const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true,
      icon: HiMiniHome,
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
      icon: FiLogIn,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
      icon: FiUserPlus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
      icon: HiMiniPlusCircle,
    },
    {
      name: "Profile",
      slug: "/profile",
      active: authStatus,
      icon: HiMiniUserCircle,
    },
    {
      name: "About",
      slug: "/about",
      active: true,
      icon: HiMiniInformationCircle,
    },
  ]


  return (
    <>
    <header className='sticky top-0 z-30 border-b border-[rgba(93,64,55,0.12)] bg-[rgba(247,241,231,0.75)] py-4 backdrop-blur-xl'>
      <Container>
        <nav className='flex flex-col gap-4 rounded-[30px] border border-[rgba(93,64,55,0.10)] bg-[rgba(255,250,242,0.78)] px-5 py-4 shadow-[0_18px_40px_rgba(36,23,17,0.07)] lg:flex-row lg:items-center lg:justify-between'>
          <div className='flex items-center justify-between lg:min-w-0'>
            <Link to='/'>
              <Logo width='92px' />
            </Link>
            <div className='ml-4 hidden lg:block lg:min-w-0'>
              <p className='hero-title text-3xl font-bold text-[var(--text)]'>The editorial side of your ideas</p>
              <p className='text-sm text-[var(--muted)]'>Write, publish, and revisit stories with a calmer visual rhythm.</p>
            </div>
          </div>
          <div className='hidden lg:flex lg:min-h-0 lg:w-auto lg:border lg:border-[rgba(93,64,55,0.10)] lg:bg-[rgba(255,248,241,0.82)] lg:px-3 lg:py-3 lg:shadow-[0_14px_30px_rgba(36,23,17,0.07)] lg:rounded-[24px]'>
            <ul className='flex flex-col gap-2 lg:flex-row lg:flex-wrap lg:items-center'>
            {navItems.map((item) => 
              item.active ? (
                <li key={item.name}>
                  <button
                  onClick={() => navigate(item.slug)}
                   className='inline-flex w-full rounded-full px-5 py-3 text-left text-sm font-semibold text-[var(--muted)] transition duration-200 hover:bg-[rgba(191,109,58,0.12)] hover:text-[var(--accent-deep)] lg:w-auto lg:px-4 lg:py-2.5'
                  >{item.name}</button>
                </li>
              ) : null
            )}
            </ul>
          </div>
        </nav>
      </Container> 
    </header>
    <div className='fixed inset-x-0 bottom-0 z-40 border-t border-[rgba(93,64,55,0.12)] bg-[rgba(255,248,241,0.96)] px-4 py-3 backdrop-blur-xl lg:hidden'>
      <div className='mx-auto flex max-w-xl items-center justify-around rounded-[26px] border border-[rgba(93,64,55,0.10)] bg-[rgba(255,252,247,0.92)] px-2 py-2 shadow-[0_16px_34px_rgba(36,23,17,0.12)]'>
        {navItems.map((item) =>
          item.active ? (() => {
            const Icon = item.icon
            const isCurrent = location.pathname === item.slug

            return (
              <button
                key={item.name}
                type='button'
                onClick={() => navigate(item.slug)}
                className={`flex min-w-0 flex-1 flex-col items-center gap-1 rounded-[18px] px-2 py-2 text-center text-[11px] font-semibold transition duration-200 ${isCurrent ? 'bg-[rgba(191,109,58,0.14)] text-[var(--accent-deep)]' : 'text-[var(--muted)] hover:bg-[rgba(191,109,58,0.12)] hover:text-[var(--accent-deep)]'}`}
              >
                <Icon className='text-[1.2rem]' />
                <span className='truncate'>{item.name}</span>
              </button>
            )
          })() : null
        )}
      </div>
    </div>
    </>
  )
}

export default Header
