import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import CtaButton from '../ui/CtaButton'
import { CHECKOUT_URL, SITE } from '../../lib/constants'

export default function Decision() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#17130A] via-[#241D10] to-[#17130A] py-16 sm:py-24 lg:py-28 border-y border-gold/30">
      <Container className="flex flex-col items-center gap-8 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold mb-3">
            <i className="bi bi-stars" aria-hidden="true" />
            O Momento da Decisão
          </span>
          <h2 className="max-w-3xl break-words font-display text-[1.75rem] font-extrabold leading-tight text-white min-[375px]:text-3xl sm:text-4xl lg:text-5xl">
            TODO DRINK QUE VOCÊ ADMIRA NASCEU DE ALGUÉM QUE DOMINOU A CIÊNCIA DA CRIAÇÃO.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="max-w-xl space-y-2 text-base leading-relaxed text-[#C8BEA7] sm:text-lg">
            <p>Você pode continuar apenas reproduzindo receitas dos outros.</p>
            <p className="font-bold text-white text-lg sm:text-xl">
              Ou pode dar o passo para começar a criar suas próprias obras e cobrar mais por isso.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="w-full sm:w-auto">
          <CtaButton href={CHECKOUT_URL} size="lg">
            {SITE.ctaText}
          </CtaButton>
        </Reveal>
      </Container>
    </section>
  )
}
