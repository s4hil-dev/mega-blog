import React from 'react'

const Logo = ({width = '100px'}) => {
  return (
    <div
      style={{ width }}
      className='rounded-2xl border border-[rgba(93,64,55,0.14)] bg-[rgba(255,250,242,0.75)] px-3 py-2 text-center shadow-[0_10px_30px_rgba(36,23,17,0.08)]'
    >
      <span className='hero-title block text-2xl font-bold text-[var(--text)]'>Mega</span>
      <span className='block text-[10px] font-semibold uppercase tracking-[0.35em] text-[var(--muted)]'>Blog</span>
    </div>
  )
}

export default Logo
