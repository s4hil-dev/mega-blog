import React, {useId} from 'react'

function Select({
    options,
    label,
    className = '',
    ...props
}, ref) {
    const id = useId()
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className='mb-2 inline-block pl-1 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]'>{label}</label>}
        <select
        {...props}
        id={id}
        ref={ref}
        className={`w-full rounded-2xl border border-[rgba(93,64,55,0.14)] bg-[rgba(255,250,242,0.92)] px-4 py-3 text-[var(--text)] outline-none transition duration-200 focus:border-[rgba(191,109,58,0.55)] focus:bg-white focus:shadow-[0_0_0_4px_rgba(191,109,58,0.10)] ${className}`}
        >
            {options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}

export default React.forwardRef(Select)
