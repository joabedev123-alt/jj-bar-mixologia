import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Container from '../ui/Container'
import CtaButton from '../ui/CtaButton'
import { NAV_LINKS, CHECKOUT_URL, SITE } from '../../lib/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-gold/30 bg-[#0B0B0B]/95 backdrop-blur-md shadow-lg shadow-black/60'
          : 'border-b border-white/5 bg-[#0B0B0B]/85 backdrop-blur-sm'
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4 flex-nowrap sm:h-20">
        {/* Logo Monograma + Texto em linha */}
        <a href="#top" className="flex items-center gap-2.5 cursor-pointer group shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/60 bg-gradient-to-br from-[#2A2111] to-[#12100A] font-display text-xs font-bold text-gold shadow-gold-sm transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10 sm:text-sm">
            JJ
          </span>
          <div className="flex flex-col">
            <span className="font-display text-xs font-bold leading-tight text-white tracking-wide group-hover:text-gold transition-colors duration-200 sm:text-sm md:text-base whitespace-nowrap">
              JJ Bar e Barista
            </span>
            <span className="text-[9px] font-sans font-semibold uppercase tracking-[0.22em] text-[#C6A15B] whitespace-nowrap sm:text-[10px]">
              Academy
            </span>
          </div>
        </a>

        {/* Menu de Navegação em uma única linha */}
        <nav className="hidden items-center justify-center gap-3.5 lg:flex xl:gap-5 2xl:gap-6 shrink">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="cursor-pointer text-[11px] font-semibold uppercase tracking-wider text-[#C8BEA7] transition-colors duration-200 hover:text-gold whitespace-nowrap shrink-0 xl:text-xs"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Botão de Ação Direto */}
        <div className="hidden lg:block shrink-0">
          <CtaButton
            href={CHECKOUT_URL}
            size="md"
            icon={null}
            className="!px-4 !py-2.5 !text-xs !min-h-10 whitespace-nowrap"
          >
            {SITE.ctaText}
          </CtaButton>
        </div>

        {/* Botão Hamburguer Mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gold/40 text-gold bg-[#161616] hover:bg-[#222222] transition-colors duration-200 lg:hidden"
        >
          <i className={`bi ${open ? 'bi-x-lg' : 'bi-list'} text-lg`} aria-hidden="true" />
        </button>
      </Container>

      {/* Menu Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="max-h-[calc(100dvh-4rem)] overflow-x-hidden overflow-y-auto overscroll-contain border-t border-gold/20 bg-[#0F0F0F] px-4 py-6 shadow-2xl lg:hidden"
          >
            <Container className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="cursor-pointer rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors duration-200 hover:bg-gold/15 hover:text-gold"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 pt-3 border-t border-white/10">
                <CtaButton href={CHECKOUT_URL} size="md" icon="bi-sparkles" className="w-full">
                  {SITE.ctaText}
                </CtaButton>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
