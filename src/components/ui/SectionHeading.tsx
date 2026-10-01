import type { ReactNode } from 'react'
import Reveal from './Reveal'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}: {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  align?: 'center' | 'left'
  light?: boolean
}) {
  const alignClass = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start'

  return (
    <div className={`flex w-full max-w-3xl flex-col gap-3 sm:gap-4 ${alignClass}`}>
      {eyebrow && (
        <Reveal>
          <span className="inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1.5 text-center text-[11px] font-semibold uppercase leading-relaxed tracking-[0.16em] text-[#9C7B3C] sm:px-4 sm:text-xs sm:tracking-[0.2em]">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={`break-words text-[1.75rem] font-bold leading-[1.12] min-[375px]:text-3xl sm:text-4xl lg:text-5xl ${
            light ? 'text-[#111111]' : 'text-[#111111]'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.16}>
          <p className="text-[15px] leading-relaxed text-[#333333] sm:text-lg">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  )
}
