import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import CtaButton from '../ui/CtaButton'
import { CHECKOUT_URL, PRECO_MIXOLOGIA, PRECO_ANTERIOR_MIXOLOGIA } from '../../lib/constants'

const pillarKeywords = ['Técnica.', 'Equilíbrio.', 'Aroma.', 'Sabor.', 'Textura.', 'Criatividade.']

export default function FinalCta() {
  const showPrice = PRECO_MIXOLOGIA && !PRECO_MIXOLOGIA.includes('XXX')

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F3E8CF] via-[#F7EBCB] to-[#FAF8F3] py-16 sm:py-24 lg:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <Container className="relative flex flex-col items-center gap-8 text-center">
        <Reveal>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C6A15B]/40 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#9C7B3C]">
            <i className="bi bi-stars" aria-hidden="true" />
            JJ Bar &amp; Barista Academy
          </span>
          <h2 className="max-w-3xl break-words font-display text-[2rem] font-bold leading-tight text-[#111111] min-[375px]:text-3xl sm:text-4xl lg:text-5xl">
            NÃO CRIE APENAS MAIS UM DRINK.
            <br />
            <span className="text-gradient-gold">CRIE UMA EXPERIÊNCIA.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="max-w-2xl">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            {pillarKeywords.map((word) => (
              <span key={word} className="font-display text-lg font-bold text-[#9C7B3C] sm:text-2xl">
                {word}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm font-medium leading-relaxed text-[#333333] sm:text-lg">
            Tudo começa quando você entende o que existe dentro de um cocktail.
          </p>
        </Reveal>

        <Reveal delay={0.18} className="flex flex-col items-center gap-1">
          {PRECO_ANTERIOR_MIXOLOGIA && !PRECO_ANTERIOR_MIXOLOGIA.includes('XXX') && (
            <p className="text-base text-[#777777] line-through">
              De {PRECO_ANTERIOR_MIXOLOGIA}
            </p>
          )}
          {showPrice && (
            <p className="font-display text-6xl font-extrabold text-[#111111] sm:text-7xl">
              {PRECO_MIXOLOGIA}
            </p>
          )}
        </Reveal>

        <Reveal delay={0.24} className="w-full sm:w-auto">
          <CtaButton href={CHECKOUT_URL} size="lg">
            QUERO APRENDER MIXOLOGIA
          </CtaButton>
        </Reveal>

        <Reveal delay={0.28}>
          <p className="text-xs text-[#666666]">
            Curso online • Acesso após confirmação da inscrição
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
