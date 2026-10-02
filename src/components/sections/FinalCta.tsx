import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import CtaButton from '../ui/CtaButton'
import { CHECKOUT_URL, PRECO_MIXOLOGIA, PRECO_ANTERIOR_MIXOLOGIA, PRECO_PARCELADO, SITE } from '../../lib/constants'

const pillarKeywords = ['Técnica.', 'Equilíbrio.', 'Aroma.', 'Sabor.', 'Textura.', 'Criatividade.']

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#14120C] via-[#1A160E] to-[#0B0B0B] py-16 sm:py-24 lg:py-32 border-t border-gold/30">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.4) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      
      <Container className="relative flex flex-col items-center gap-8 text-center">
        <Reveal>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold">
            <i className="bi bi-stars" aria-hidden="true" />
            JJ Bar e Barista Academy
          </span>
          <h2 className="max-w-3xl break-words font-display text-[2rem] font-extrabold leading-tight text-white min-[375px]:text-3xl sm:text-4xl lg:text-5xl">
            NÃO CRIE APENAS MAIS UM DRINK.
            <br />
            <span className="text-gradient-gold">CRIE UMA EXPERIÊNCIA INESQUECÍVEL.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="max-w-2xl">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            {pillarKeywords.map((word) => (
              <span key={word} className="font-display text-lg font-bold text-gold sm:text-2xl">
                {word}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm font-medium leading-relaxed text-[#C8BEA7] sm:text-lg">
            Tudo começa no momento em que você compreende a verdadeira ciência da mixologia.
          </p>
        </Reveal>

        <Reveal delay={0.18} className="flex flex-col items-center gap-1 rounded-2xl border border-gold/30 bg-[#12100A] px-8 py-5 shadow-dark-card">
          <p className="text-sm text-[#888888] line-through font-medium">
            De {PRECO_ANTERIOR_MIXOLOGIA} por apenas
          </p>
          <p className="font-display text-5xl sm:text-6xl font-black text-white">
            {PRECO_MIXOLOGIA}
          </p>
          <p className="text-xs font-semibold text-gold mt-0.5">
            ou em até {PRECO_PARCELADO} no cartão
          </p>
        </Reveal>

        <Reveal delay={0.24} className="w-full sm:w-auto">
          <CtaButton href={CHECKOUT_URL} size="lg">
            {SITE.ctaText}
          </CtaButton>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#888888]">
            <span className="flex items-center gap-1.5">
              <i className="bi bi-shield-check text-gold" aria-hidden="true" />
              Garantia de 7 Dias
            </span>
            <span className="flex items-center gap-1.5">
              <i className="bi bi-globe2 text-gold" aria-hidden="true" />
              100% Online
            </span>
            <span className="flex items-center gap-1.5">
              <i className="bi bi-patch-check text-gold" aria-hidden="true" />
              Certificado JJ Academy
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
