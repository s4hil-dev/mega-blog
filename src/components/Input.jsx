import React, {useId} from 'react'

const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref){
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label 
            className='mb-2 inline-block pl-1 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]' 
            htmlFor={id}>
                {label}
            </label>
            }
            <input
            type={type}
            className={`w-full rounded-2xl border border-[rgba(93,64,55,0.14)] bg-[rgba(255,250,242,0.92)] px-4 py-3 text-[var(--text)] outline-none transition duration-200 placeholder:text-[rgba(108,84,74,0.7)] focus:border-[rgba(191,109,58,0.55)] focus:bg-white focus:shadow-[0_0_0_4px_rgba(191,109,58,0.10)] ${className}`}
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input
