import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import CtaButton from '../ui/CtaButton'
import { MODULES, CHECKOUT_URL } from '../../lib/constants'

export default function Curriculum() {
  return (
    <section id="conteudo" className="bg-[#FAF8F3] py-16 sm:py-20 lg:py-28">
      <Container className="flex flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="GRADE COMPLETA DO TREINAMENTO"
          title="CONHECIMENTO PARA VOCÊ ENXERGAR UM DRINK DE OUTRA FORMA."
          subtitle="Uma jornada passo a passo estruturada para desenvolver o seu olhar técnico, criativo e profissional."
        />

        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
          {MODULES.map((module, index) => (
            <Reveal key={module.number} delay={index * 0.06}>
              <div className="group flex h-full flex-col justify-between rounded-2xl border border-[#C6A15B]/30 bg-white p-6 shadow-soft transition-all duration-300 hover:border-[#C6A15B] hover:shadow-md">
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-display text-3xl font-extrabold text-[#C6A15B]/40 transition-colors duration-300 group-hover:text-[#9C7B3C]">
                      {module.number}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C6A15B]/10 text-[#9C7B3C] transition-transform duration-300 group-hover:scale-110">
                      <i className={`bi ${module.icon} text-lg`} aria-hidden="true" />
                    </span>
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#888888]">
                    MÓDULO {module.number}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-bold uppercase leading-snug text-[#111111]">
                    {module.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#444444]">
                    {module.description}
                  </p>
                </div>

                <div className="mt-5 border-t border-[#C6A15B]/15 pt-3">
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-[#9C7B3C]">
                    <i className="bi bi-play-circle" aria-hidden="true" />
                    Aulas Práticas &amp; Teóricas
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <CtaButton href={CHECKOUT_URL} size="lg">
          QUERO ACESSAR TODOS OS MÓDULOS
        </CtaButton>
      </Container>
    </section>
  )
}
