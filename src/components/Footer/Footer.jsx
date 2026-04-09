import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative mt-12 overflow-hidden border-t border-[rgba(93,64,55,0.12)] bg-[rgba(255,250,242,0.5)] py-10">
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center">
                                <Logo width="100px" />
                            </div>
                            <div>
                                <p className="max-w-sm text-sm leading-7 text-[var(--muted)]">
                                    Thoughtful publishing for longer-form writing, built around calm color, generous spacing, and readable typography.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="mb-9 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
                                Company
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-[var(--text)] transition hover:text-[var(--accent-deep)]"
                                        to="/"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-[var(--text)] transition hover:text-[var(--accent-deep)]"
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-[var(--text)] transition hover:text-[var(--accent-deep)]"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-[var(--text)] transition hover:text-[var(--accent-deep)]"
                                        to="/"
                                    >
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="mb-9 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
                                Support
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-[var(--text)] transition hover:text-[var(--accent-deep)]"
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-[var(--text)] transition hover:text-[var(--accent-deep)]"
                                        to="/"
                                    >
                                        Help
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-[var(--text)] transition hover:text-[var(--accent-deep)]"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-[var(--text)] transition hover:text-[var(--accent-deep)]"
                                        to="/"
                                    >
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="mb-9 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-[var(--text)] transition hover:text-[var(--accent-deep)]"
                                        to="/"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-[var(--text)] transition hover:text-[var(--accent-deep)]"
                                        to="/"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-[var(--text)] transition hover:text-[var(--accent-deep)]"
                                        to="/"
                                    >
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-[rgba(93,64,55,0.12)] pt-6 text-sm text-[var(--muted)]">
                    © 2026 MegaBlog. Crafted for readable publishing.
                </div>
            </div>
        </section>
  )
}

export default Footer
