import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'ghost'
} & ButtonHTMLAttributes<HTMLButtonElement>

const variantClass: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white',
  ghost:
    'rounded-lg px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800',
}

export function Button({ children, variant = 'primary', className = '', ...rest }: ButtonProps) {
  return (
    <button type="button" className={`${variantClass[variant]} ${className}`.trim()} {...rest}>
      {children}
    </button>
  )
}
