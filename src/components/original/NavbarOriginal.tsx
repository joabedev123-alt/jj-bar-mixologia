import { useEffect, useState } from 'react'

const links = [
  { href: '#drinks', label: 'Drinks' },
  { href: '#aprender', label: 'Aprender' },
  { href: '#quem-somos', label: 'Quem Somos' },
  { href: '#instrutor', label: 'Instrutor' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contato', label: 'Contato' },
]

export default function NavbarOriginal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (!open) return
    const onKey = (e: { key: string }) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur"
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
        <a href="#inicio" className="flex min-w-0 items-center gap-2 sm:gap-3" onClick={() => setOpen(false)}>
          <img src="/images/original/logo_jj.jpg" alt="JJ Bar & Barista Store & Academy" className="h-10 w-10 shrink-0 rounded-full object-cover sm:h-11 sm:w-11" />
          <span className="truncate font-display text-base tracking-wider text-foreground min-[400px]:text-lg sm:tracking-widest">
            JJ BAR <span className="text-primary">&</span> BARISTA
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="rounded-full bg-primary px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-primary-foreground transition-transform hover:scale-105 sm:px-5 sm:text-xs"
          >
            Matricule-se
          </a>
          <button
            type="button"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
          >
            <i className={`bi ${open ? 'bi-x-lg' : 'bi-list'} text-xl`} aria-hidden="true" />
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-menu" className="border-t border-border bg-background/95 lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border py-4 text-base font-medium text-muted-foreground transition-colors last:border-0 hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
