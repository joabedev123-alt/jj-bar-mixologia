const testimonials = [
  {
    initials: 'MO',
    name: 'Monique',
    role: 'Noiva e Empresária',
    quote:
      'Vocês arrasaram no meu casamento, sério, foi inesquecível, já quero fazer os cursos de vocês pra me tornar uma Bartender. Ou será uma empreendedora, pode? Hahaha. Oremos, ansiosa para começar.',
  },
  {
    initials: 'GU',
    name: 'Guilherme',
    role: 'Bartender',
    quote:
      'Fiz o curso presencial com o Felipe, com o Bob e o Ensei, valeu galera, primeiro curso da minha carreira e já foi uma atitude positiva na minha vida colocando em prática todos os aprendizados. Obrigado mestres!!!',
  },
  {
    initials: 'VI',
    name: 'Vitor',
    role: 'Empresário de Eventos e Cafeteria',
    quote:
      'Trabalhei na JJ depois montei meu próprio negócio. A JJ foi uma escola pra mim, cada evento, cada aprendizado, levo isso pra minha vida, além de valores, aprendi a ser um empreendedor na prática mesmo.',
  },
]

export default function TestimonialsOriginal() {
  return (
    <section id="depoimentos" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <div className="mb-8 text-center sm:mb-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">Depoimentos</p>
        <h2 className="font-display text-4xl leading-none tracking-wide sm:text-5xl">
          <span className="gold-text">O que dizem nossos alunos</span>
        </h2>
        <div className="mx-auto mt-5 h-px w-24 bg-border"></div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="relative flex flex-col rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/60 sm:p-6"
          >
            <i className="bi bi-quote absolute right-4 top-2 text-5xl leading-none text-primary/20" aria-hidden="true" />
            <div className="mb-3 flex gap-0.5 text-sm text-primary" aria-label="5 estrelas">
              {Array.from({ length: 5 }, (_, i) => (
                <i key={i} className="bi bi-star-fill" aria-hidden="true" />
              ))}
            </div>
            <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/60 bg-background font-display text-lg tracking-wider text-primary">
                {t.initials}
              </span>
              <span className="min-w-0">
                <span className="block font-semibold text-foreground">{t.name}</span>
                <span className="block text-xs uppercase tracking-widest text-primary">{t.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
