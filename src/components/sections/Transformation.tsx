import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import CtaButton from '../ui/CtaButton'
import { BEFORE_AFTER, CHECKOUT_URL, SITE } from '../../lib/constants'

export default function Transformation() {
  return (
    <section className="bg-gradient-to-b from-[#0F0F0F] via-[#141414] to-[#0B0B0B] py-16 sm:py-20 lg:py-28 border-b border-white/5 relative">
      <Container className="flex flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="EVOLUÇÃO TÉCNICA DEFINITIVA"
          title="DE REPRODUTOR DE RECEITAS A CRIADOR DE EXPERIÊNCIAS AUTORAIS."
          subtitle="Veja como a sua mentalidade e segurança profissional serão transformadas ao longo do treinamento."
        />

        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Card Antes */}
          <Reveal>
            <div className="h-full rounded-2xl border border-red-900/30 bg-[#141010]/80 p-6 shadow-dark-card sm:p-8">
              <h3 className="mb-6 flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.25em] text-red-400">
                <i className="bi bi-x-circle-fill text-base text-red-400" aria-hidden="true" />
                Como Você Age Hoje (Antes do Curso)
              </h3>
              <ul className="space-y-4">
                {BEFORE_AFTER.before.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#9E9589]">
                    <i className="bi bi-x-lg mt-1 shrink-0 text-red-400/70" aria-hidden="true" />
                    <span className="text-sm leading-relaxed sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Card Depois */}
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border-2 border-gold/70 bg-gradient-to-br from-[#201A0F] via-[#16140F] to-[#0F0E0B] p-6 shadow-gold sm:p-8 relative overflow-hidden">
              <div className="pointer-events-none absolute -top-12 -right-12 h-36 w-36 bg-gold/15 rounded-full blur-2xl" />
              <h3 className="mb-6 flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.25em] text-gold">
                <i className="bi bi-check-circle-fill text-base text-gold" aria-hidden="true" />
                Após a Metodologia JJ Academy
              </h3>
              <ul className="space-y-4">
                {BEFORE_AFTER.after.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <i className="bi bi-check2-circle mt-1 shrink-0 font-bold text-gold text-lg" aria-hidden="true" />
                    <span className="text-sm font-semibold leading-relaxed text-white sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <CtaButton href={CHECKOUT_URL} size="lg">
          {SITE.ctaText}
        </CtaButton>
      </Container>
    </section>
  )
}
