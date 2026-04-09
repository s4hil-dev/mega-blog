import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Footer, Header } from './components/index'
import { Outlet } from 'react-router-dom'


const App = () => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [dispatch])
  

  return !loading ? (
    <>
      <div className='app-shell'>
        <div className='relative z-10 flex min-h-screen flex-col'>
          <Header />
          <main className='flex-1 pb-28 lg:pb-16'>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  ) : null
}

export default App
