const steps = [
  {
    number: '01',
    icon: 'bi-cart-check',
    title: 'Faça sua inscrição',
    description: 'Clique no botão e finalize sua compra pelo checkout.',
  },
  {
    number: '02',
    icon: 'bi-envelope-check',
    title: 'Receba seu acesso',
    description: 'Após a confirmação do pagamento, você recebe as informações de acesso ao conteúdo.',
  },
  {
    number: '03',
    icon: 'bi-play-circle',
    title: 'Comece a aprender',
    description: 'Assista às aulas e avance pelo treinamento.',
  },
]

export default function HowItWorksOriginal() {
  return (
    <section id="como-funciona" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <div className="mb-8 text-center sm:mb-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">Passo a passo</p>
        <h2 className="font-display text-4xl leading-none tracking-wide sm:text-5xl">
          <span className="gold-text">Como funciona</span>
        </h2>
        <div className="mx-auto mt-5 h-px w-24 bg-border"></div>
      </div>
      <div className="relative grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
        <div className="absolute left-[16%] right-[16%] top-12 hidden h-px bg-border md:block" aria-hidden="true"></div>
        {steps.map((step) => (
          <div
            key={step.number}
            className="relative flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/60 sm:p-6 md:flex-col md:items-center md:text-center"
          >
            <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-primary/60 bg-background font-display text-2xl tracking-wide text-primary">
              {step.number}
            </span>
            <div>
              <h3 className="flex items-center gap-2 font-display text-xl tracking-wider text-foreground md:justify-center sm:text-2xl">
                <i className={`bi ${step.icon} text-base text-primary`} aria-hidden="true" />
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <a
          href="#contato"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-[0_18px_40px_-16px_oklch(0.79_0.14_85/0.6)] transition-transform hover:scale-[1.03] active:scale-[0.98] sm:w-auto sm:px-8 sm:text-base"
        >
          <i className="bi bi-stars text-lg" aria-hidden="true" />
          Quero me inscrever
        </a>
      </div>
    </section>
  )
}
