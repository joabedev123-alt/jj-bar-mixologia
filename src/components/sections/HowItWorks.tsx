import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { HOW_IT_WORKS } from '../../lib/constants'

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <Container className="flex flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="PASSO A PASSO"
          title="COMO FUNCIONA"
          subtitle="Um processo simples e direto para você iniciar seu treinamento imediatamente."
        />

        <div className="relative grid w-full grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
          <div
            className="absolute left-0 right-0 top-9 hidden h-px bg-[#C6A15B]/30 sm:block"
            aria-hidden="true"
          />
          {HOW_IT_WORKS.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.1}>
              <div className="relative flex flex-col items-center gap-4 text-center">
                <span className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white text-2xl font-display font-extrabold text-[#9C7B3C] shadow-soft ring-4 ring-[#FAF8F3] border-2 border-[#C6A15B]/40">
                  {step.number}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C6A15B]/10 text-[#9C7B3C]">
                  <i className={`bi ${step.icon}`} aria-hidden="true" />
                </span>
                <h3 className="font-display text-lg font-bold text-[#111111] sm:text-xl">
                  {step.title}
                </h3>
                <p className="max-w-[260px] text-sm leading-relaxed text-[#555555]">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
