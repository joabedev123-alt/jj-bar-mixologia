import { SOCIAL_LINKS } from '../../lib/constants'

const contacts = [
  ...SOCIAL_LINKS.map((social) => ({ href: social.url, icon: social.icon, title: social.title, subtitle: social.handle })),
  { href: 'https://www.jjbarebarista.com.br', icon: 'bi-globe', title: 'Site Oficial', subtitle: 'jjbarebarista.com.br' },
]

export default function ContactOriginal() {
  return (
    <section id="contato" className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="mb-8 text-center sm:mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">Fale com a gente</p>
          <h2 className="font-display text-4xl leading-none tracking-wide sm:text-5xl">
            <span className="gold-text">Contatos & Redes Sociais</span>
          </h2>
          <div className="mx-auto mt-5 h-px w-24 bg-border"></div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {contacts.map((contact) => (
            <a
              key={contact.href}
              href={contact.href}
              target="_blank"
              rel="noreferrer"
              className="flex min-w-0 items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary/60 active:scale-[0.99] sm:p-6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-background text-primary">
                <i className={`bi ${contact.icon} text-lg`} aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block font-semibold text-foreground">{contact.title}</span>
                <span className="block truncate text-sm text-muted-foreground">{contact.subtitle}</span>
              </span>
            </a>
          ))}
        </div>
        <p className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
          <i className="bi bi-chat-square-text text-primary" aria-hidden="true" />
          Atendimento para matrículas, dúvidas sobre o curso e parcerias corporativas.
        </p>
      </div>
    </section>
  )
}
