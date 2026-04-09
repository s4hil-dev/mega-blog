import React from 'react'
import { useSelector } from 'react-redux'
import { Container, LogoutBtn } from '../components'

function Profile() {
    const userData = useSelector((state) => state.auth.userData)

    const details = [
        { label: 'Name', value: userData?.name || 'Not provided' },
        { label: 'Email', value: userData?.email || 'Not provided' },
        { label: 'User ID', value: userData?.$id || 'Unavailable' },
        {
            label: 'Joined',
            value: userData?.$createdAt ? new Date(userData.$createdAt).toLocaleString() : 'Unavailable',
        },
    ]

    return (
        <section className='py-10 sm:py-14'>
            <Container>
                <div className='glass-panel mx-auto max-w-4xl rounded-[36px] p-6 sm:p-8 lg:p-10'>
                    <p className='text-xs font-semibold uppercase tracking-[0.34em] text-[var(--muted)]'>Profile</p>
                    <div className='mt-4 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between'>
                        <div>
                            <h1 className='hero-title text-5xl font-bold leading-none text-[var(--text)] sm:text-6xl'>
                                {userData?.name || 'Your account'}
                            </h1>
                            <p className='mt-4 max-w-2xl text-base leading-8 text-[var(--muted)]'>
                                Your account details and publishing identity live here.
                            </p>
                        </div>
                        <div className='w-full lg:w-auto'>
                            <LogoutBtn className='justify-center lg:min-w-[180px]'>Log out</LogoutBtn>
                        </div>
                    </div>

                    <div className='mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2'>
                        {details.map((detail) => (
                            <div
                                key={detail.label}
                                className='rounded-[26px] border border-[rgba(93,64,55,0.12)] bg-[rgba(255,250,242,0.82)] p-5 shadow-[0_12px_24px_rgba(36,23,17,0.05)]'
                            >
                                <p className='text-xs font-semibold uppercase tracking-[0.28em] text-[var(--muted)]'>
                                    {detail.label}
                                </p>
                                <p className='mt-3 break-words text-base font-semibold text-[var(--text)]'>
                                    {detail.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Profile
