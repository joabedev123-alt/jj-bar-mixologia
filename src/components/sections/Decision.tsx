import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import CtaButton from '../ui/CtaButton'
import { CHECKOUT_URL } from '../../lib/constants'

export default function Decision() {
  return (
    <section className="relative overflow-hidden bg-[#F3E8CF] py-16 sm:py-24 lg:py-32">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(198,161,91,0.5), transparent)' }}
        aria-hidden="true"
      />
      <Container className="flex flex-col items-center gap-8 text-center">
        <Reveal>
          <h2 className="max-w-3xl break-words font-display text-[1.75rem] font-bold leading-tight text-[#111111] min-[375px]:text-3xl sm:text-4xl lg:text-5xl">
            TODO DRINK QUE VOCÊ ADMIRA COMEÇOU COM ALGUÉM ENTENDENDO COMO CONSTRUIR UMA EXPERIÊNCIA.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="max-w-xl space-y-2 text-base leading-relaxed text-[#333333] sm:text-lg">
            <p>Você pode continuar apenas reproduzindo receitas.</p>
            <p className="font-semibold text-[#111111]">
              Ou pode começar a entender o que existe por trás delas.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="w-full sm:w-auto">
          <CtaButton href={CHECKOUT_URL} size="lg">
            QUERO COMEÇAR AGORA
          </CtaButton>
        </Reveal>
      </Container>
    </section>
  )
}
