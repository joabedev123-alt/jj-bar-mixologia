import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import CtaButton from '../ui/CtaButton'
import { BEFORE_AFTER, CHECKOUT_URL } from '../../lib/constants'

export default function Transformation() {
  return (
    <section className="bg-gradient-to-b from-[#F7EBCB] via-[#F3E8CF] to-[#FAF8F3] py-16 sm:py-20 lg:py-28">
      <Container className="flex flex-col items-center gap-8 sm:gap-12">
        <SectionHeading
          title="DE EXECUTAR RECEITAS PARA ENTENDER A CONSTRUÇÃO DE UM DRINK."
          subtitle="Desenvolva uma nova postura de aprendizado prático e evolução contínua na coquetelaria."
        />

        <div className="grid w-full grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-[#C6A15B]/25 bg-white/95 p-6 shadow-soft sm:p-8">
              <h3 className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#777777]">
                <i className="bi bi-x-circle text-base text-[#999999]" aria-hidden="true" />
                Antes da Mixologia
              </h3>
              <ul className="space-y-4">
                {BEFORE_AFTER.before.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#555555]">
                    <i className="bi bi-dash-lg mt-1 shrink-0 text-[#999999]" aria-hidden="true" />
                    <span className="text-sm leading-relaxed sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border-2 border-[#C6A15B] bg-gradient-to-br from-white to-[#FDF9F0] p-6 shadow-gold sm:p-8">
              <h3 className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#9C7B3C]">
                <i className="bi bi-check-circle-fill text-base" aria-hidden="true" />
                Depois do Treinamento
              </h3>
              <ul className="space-y-4">
                {BEFORE_AFTER.after.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <i className="bi bi-check-lg mt-1 shrink-0 font-bold text-[#9C7B3C]" aria-hidden="true" />
                    <span className="text-sm font-medium leading-relaxed text-[#111111] sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <CtaButton href={CHECKOUT_URL} size="lg">
          QUERO APRENDER A CONSTRUIR DRINKS
        </CtaButton>
      </Container>
    </section>
  )
}
