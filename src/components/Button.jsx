import React from 'react'

const Button = ({
    children,
    type = 'button',
    textColor = 'text-white',
    bgColor = 'bg-[var(--accent)]',
    className = '',
    ...props
}) => {
  return (
    <button type={type} className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[0.02em] shadow-[0_14px_35px_rgba(36,23,17,0.14)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(36,23,17,0.16)] ${className} ${bgColor} ${textColor}`} {...props}>
        {children}
    </button>
  )
}

export default Button
