import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { CHECKOUT_URL } from '../../lib/constants'

type Variant = 'primary' | 'outline' | 'dark'
type Size = 'lg' | 'md'

const variants: Record<Variant, string> = {
  primary:
    'bg-gold-gradient text-[#111111] font-bold shadow-gold hover:brightness-105 hover:shadow-lg focus-visible:ring-gold',
  outline:
    'bg-transparent text-[#111111] border border-gold/70 hover:bg-gold/15 focus-visible:ring-gold',
  dark:
    'bg-[#111111] text-[#FFFFFF] border border-gold/40 hover:bg-[#222222] focus-visible:ring-gold',
}

const sizes: Record<Size, string> = {
  lg: 'min-h-12 px-5 py-3.5 text-sm leading-tight sm:px-8 sm:py-4 sm:text-lg',
  md: 'min-h-11 px-5 py-3 text-sm leading-tight sm:px-6 sm:text-base',
}

export default function CtaButton({
  children,
  variant = 'primary',
  size = 'lg',
  className = '',
  icon = 'bi-arrow-right-circle',
  href = CHECKOUT_URL,
}: {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
  icon?: string | null
  href?: string
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
      className={`group inline-flex w-full max-w-full cursor-pointer select-none items-center justify-center gap-2.5 rounded-full text-center font-sans font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-auto sm:gap-3 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <span className="min-w-0 break-words">{children}</span>
      {icon && (
        <i
          className={`bi ${icon} shrink-0 text-xl transition-transform duration-200 group-hover:translate-x-1`}
          aria-hidden="true"
        />
      )}
    </motion.a>
  )
}
