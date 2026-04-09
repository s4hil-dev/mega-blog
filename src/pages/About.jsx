import React from 'react'
import { Container } from '../components'

function About() {
    return (
        <section className='py-10 sm:py-14'>
            <Container>
                <div className='glass-panel mx-auto max-w-5xl rounded-[36px] p-6 sm:p-8 lg:p-12'>
                    <p className='text-xs font-semibold uppercase tracking-[0.34em] text-[var(--muted)]'>About MegaBlog</p>
                    <h1 className='hero-title mt-4 text-5xl font-bold leading-none text-[var(--text)] sm:text-6xl lg:text-7xl'>
                        A calmer space for thoughtful publishing
                    </h1>
                    <div className='mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.8fr]'>
                        <div className='rounded-[28px] border border-[rgba(93,64,55,0.12)] bg-[rgba(255,250,242,0.82)] p-6 shadow-[0_12px_24px_rgba(36,23,17,0.05)]'>
                            <p className='text-base leading-8 text-[var(--muted)]'>
                                MegaBlog is a writing-focused app built to keep publishing simple. It combines Appwrite for authentication and content storage with a lighter editorial interface designed for reading and writing without clutter.
                            </p>
                            <p className='mt-5 text-base leading-8 text-[var(--muted)]'>
                                The goal is straightforward: help you create posts, manage your profile, and browse articles in a cleaner, warmer environment that feels more like a magazine than a dashboard.
                            </p>
                        </div>
                        <div className='rounded-[28px] border border-[rgba(93,64,55,0.12)] bg-[rgba(255,250,242,0.82)] p-6 shadow-[0_12px_24px_rgba(36,23,17,0.05)]'>
                            <p className='text-xs font-semibold uppercase tracking-[0.28em] text-[var(--muted)]'>What it includes</p>
                            <ul className='mt-4 space-y-4 text-base leading-7 text-[var(--text)]'>
                                <li>Authentication with Appwrite</li>
                                <li>Post creation, editing, and deletion</li>
                                <li>Rich text editing with TinyMCE</li>
                                <li>Responsive reading experience</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default About
