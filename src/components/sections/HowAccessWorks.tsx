import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import CtaButton from '../ui/CtaButton'
import { ACCESS_STEPS, CHECKOUT_URL, SITE } from '../../lib/constants'

export default function HowAccessWorks() {
  return (
    <section id="como-acessar" className="relative overflow-hidden bg-gradient-to-b from-[#0F0F0F] via-[#141414] to-[#0B0B0B] py-16 sm:py-20 lg:py-28 border-y border-white/5">
      <Container className="flex flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="PASSO A PASSO SIMPLES &amp; RÁPIDO"
          title="COMO É O ACESSO AO CURSO DE MIXOLOGIA?"
          subtitle="Tudo foi planejado para você começar a estudar em menos de 2 minutos após a sua inscrição."
        />

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ACCESS_STEPS.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.08}>
              <div className="relative flex h-full flex-col justify-between rounded-3xl border border-gold/30 bg-gradient-to-b from-[#1A1813] to-[#121212] p-6 shadow-dark-card transition-all duration-300 hover:border-gold hover:shadow-gold-sm">
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold border border-gold/30">
                      <i className={`bi ${step.icon} text-xl`} aria-hidden="true" />
                    </span>
                    <span className="font-display text-2xl font-extrabold text-gold/30">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-display text-base font-bold text-white leading-snug">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#BDB49E]">
                    {step.description}
                  </p>
                </div>

                <div className="mt-5 border-t border-gold/15 pt-3">
                  <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-gold">
                    <i className="bi bi-check-circle-fill text-gold" aria-hidden="true" />
                    100% Automatizado
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Card explicativo com compatibilidade de dispositivos */}
        <Reveal delay={0.3} className="w-full max-w-4xl">
          <div className="rounded-3xl border border-gold/40 bg-[#12100A] p-6 sm:p-8 shadow-soft">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold text-2xl mb-2">
                  <i className="bi bi-phone" aria-hidden="true" />
                </span>
                <p className="font-bold text-white text-sm">Assista no Celular &amp; Tablet</p>
                <p className="text-xs text-[#AAAAAA] mt-0.5">App exclusivo para estudar onde estiver</p>
              </div>

              <div className="flex flex-col items-center sm:border-x sm:border-white/10 sm:px-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold text-2xl mb-2">
                  <i className="bi bi-laptop" aria-hidden="true" />
                </span>
                <p className="font-bold text-white text-sm">Computador &amp; Smart TV</p>
                <p className="text-xs text-[#AAAAAA] mt-0.5">Aulas em altíssima resolução com zoom</p>
              </div>

              <div className="flex flex-col items-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold text-2xl mb-2">
                  <i className="bi bi-infinity" aria-hidden="true" />
                </span>
                <p className="font-bold text-white text-sm">Acesso Vitalício &amp; Ilimitado</p>
                <p className="text-xs text-[#AAAAAA] mt-0.5">Reveja todas as aulas quantas vezes quiser</p>
              </div>
            </div>
          </div>
        </Reveal>

        <CtaButton href={CHECKOUT_URL} size="lg">
          {SITE.ctaText}
        </CtaButton>
      </Container>
    </section>
  )
}
