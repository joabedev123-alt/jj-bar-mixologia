import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import CtaButton from '../ui/CtaButton'
import { MODULES, CHECKOUT_URL, SITE } from '../../lib/constants'

export default function Curriculum() {
  return (
    <section id="conteudo" className="bg-[#0B0B0B] py-16 sm:py-20 lg:py-28 relative">
      <Container className="flex flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="GRADE COMPLETA DO TREINAMENTO"
          title="O PASSO A PASSO PARA VOCÊ SE TORNAR UM MIXOLOGISTA COMPLETO."
          subtitle="Uma jornada prática, aprofundada e 100% online estruturada para transformar a sua carreira e visão técnica."
        />

        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
          {MODULES.map((module, index) => (
            <Reveal key={module.number} delay={index * 0.05}>
              <div className="group flex h-full flex-col justify-between rounded-2xl border border-gold/25 bg-gradient-to-b from-[#181818] to-[#111111] p-6 shadow-dark-card transition-all duration-300 hover:border-gold/60 hover:shadow-gold-sm">
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-display text-3xl font-extrabold text-gold/30 transition-colors duration-300 group-hover:text-gold">
                      {module.number}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold border border-gold/30 transition-transform duration-300 group-hover:scale-110">
                      <i className={`bi ${module.icon} text-lg`} aria-hidden="true" />
                    </span>
                  </div>
                  
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold">
                    MÓDULO {module.number}
                  </p>
                  
                  <h3 className="mt-1 font-display text-base font-bold uppercase leading-snug text-white group-hover:text-gold transition-colors">
                    {module.title}
                  </h3>
                  
                  <p className="mt-2.5 text-xs leading-relaxed text-[#BDB49E]">
                    {module.description}
                  </p>

                  {/* Highlights de cada módulo */}
                  <div className="mt-4 space-y-1.5 pt-3 border-t border-white/10">
                    {module.highlights.map((hl) => (
                      <div key={hl} className="flex items-center gap-2 text-[11px] text-[#DDDDDD]">
                        <i className="bi bi-check2 text-gold font-bold shrink-0" aria-hidden="true" />
                        <span className="truncate">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 border-t border-gold/15 pt-3 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-[11px] font-semibold text-gold">
                    <i className="bi bi-play-circle-fill" aria-hidden="true" />
                    Aulas Práticas Online
                  </span>
                  <span className="text-[10px] uppercase font-bold text-[#888888]">100% HD</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-4 text-center">
          <CtaButton href={CHECKOUT_URL} size="lg">
            {SITE.ctaText}
          </CtaButton>
          <p className="mt-3 text-xs text-[#888888]">
            Acesso imediato a todos os 8 módulos após a confirmação da compra
          </p>
        </div>
      </Container>
    </section>
  )
}
