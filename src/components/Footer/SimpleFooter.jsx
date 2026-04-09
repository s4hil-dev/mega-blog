import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function SimpleFooter() {
  return (
    <section className="relative mt-12 overflow-hidden border-t border-[rgba(93,64,55,0.12)] bg-[rgba(255,250,242,0.5)] py-10">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 rounded-[34px] border border-[rgba(93,64,55,0.12)] bg-[rgba(255,250,242,0.72)] p-6 shadow-[0_12px_24px_rgba(36,23,17,0.05)] sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <div className="mb-4 inline-flex items-center">
              <Logo width="100px" />
            </div>
            <p className="text-sm leading-7 text-[var(--muted)]">
              Thoughtful publishing for longer-form writing, built around calm color, generous spacing, and readable typography.
            </p>
          </div>
          <div className="lg:text-right">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
              Explore
            </p>
            <Link
              className="inline-flex rounded-full border border-[rgba(93,64,55,0.12)] bg-[rgba(255,248,241,0.92)] px-5 py-3 text-base font-semibold text-[var(--text)] transition hover:bg-[rgba(191,109,58,0.12)] hover:text-[var(--accent-deep)]"
              to="/about"
            >
              About MegaBlog
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-[rgba(93,64,55,0.12)] pt-6 text-sm text-[var(--muted)]">
          © 2026 MegaBlog. Crafted for readable publishing.
        </div>
      </div>
    </section>
  )
}

export default SimpleFooter
