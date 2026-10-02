import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { CHECKOUT_URL, SITE } from '../../lib/constants'

type Variant = 'primary' | 'outline' | 'dark'
type Size = 'lg' | 'md'

const variants: Record<Variant, string> = {
  primary:
    'bg-gold-gradient text-[#0B0B0B] font-extrabold shadow-gold hover:brightness-110 hover:shadow-gold-lg focus-visible:ring-gold border border-[#FFF1C5]/60',
  outline:
    'bg-transparent text-white border border-gold/70 hover:bg-gold/15 hover:border-gold focus-visible:ring-gold',
  dark:
    'bg-[#151515] text-[#F3E8CF] border border-gold/40 hover:bg-[#202020] hover:border-gold focus-visible:ring-gold shadow-dark-card',
}

const sizes: Record<Size, string> = {
  lg: 'min-h-13 px-6 py-4 text-sm font-bold uppercase tracking-wider sm:px-9 sm:py-4.5 sm:text-base',
  md: 'min-h-11 px-5 py-3 text-xs font-bold uppercase tracking-wider sm:px-7 sm:text-sm',
}

export default function CtaButton({
  children = SITE.ctaText,
  variant = 'primary',
  size = 'lg',
  className = '',
  icon = 'bi-arrow-right-circle',
  href = CHECKOUT_URL,
}: {
  children?: ReactNode
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
      className={`group relative inline-flex w-full max-w-full cursor-pointer select-none items-center justify-center gap-2.5 rounded-full text-center font-sans tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B] sm:w-auto sm:gap-3 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <span className="min-w-0 break-words drop-shadow-sm">{children}</span>
      {icon && (
        <i
          className={`bi ${icon} shrink-0 text-xl transition-transform duration-200 group-hover:translate-x-1`}
          aria-hidden="true"
        />
      )}
    </motion.a>
  )
}
