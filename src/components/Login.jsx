import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import {Button, Input, Logo} from "./index"
import {useDispatch} from "react-redux"
import authService from "../appwrite/auth"
import {useForm} from "react-hook-form"

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const login = async(data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin({ userData }));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className='flex min-h-[70vh] items-center justify-center py-8'>
        <div className='glass-panel mx-auto w-full max-w-xl rounded-[32px] p-8 sm:p-10'>
        <div className="mb-4 flex justify-center">
                    <span className="inline-block w-full max-w-[110px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">Welcome Back</p>
        <h2 className="hero-title mt-3 text-center text-5xl font-bold leading-none text-[var(--text)]">Sign in to write and read</h2>
        <p className="mt-4 text-center text-base leading-7 text-[var(--muted)]">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-semibold text-[var(--accent-deep)] transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="mt-8 rounded-2xl bg-[rgba(182,63,37,0.08)] px-4 py-3 text-center text-sm font-medium text-[#8d2f1d]">{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
                <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />
                <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                    required: true,
                })}
                />
                <Button
                type="submit"
                className="w-full"
                >Sign in</Button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login
