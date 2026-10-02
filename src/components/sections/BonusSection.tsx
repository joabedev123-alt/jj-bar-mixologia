import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import CtaButton from '../ui/CtaButton'
import { BONUSES, CHECKOUT_URL, SITE } from '../../lib/constants'

export default function BonusSection() {
  return (
    <section id="bonus" className="relative overflow-hidden bg-gradient-to-b from-[#121212] via-[#17140E] to-[#0D0D0D] py-16 sm:py-20 lg:py-28 border-y border-gold/20">
      {/* Glow dourado */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.4) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <Container className="relative flex flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="BÔNUS EXCLUSIVOS DESTA OFERTA"
          title="RECEBA + R$ 497 EM MATERIAIS EXCLUSIVOS DE PRESENTE."
          subtitle="Ao garantir sua vaga no Curso de Mixologia hoje, você leva 3 ferramentas indispensáveis para acelerar seus resultados profissionais."
        />

        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
          {BONUSES.map((bonus, index) => (
            <Reveal key={bonus.title} delay={index * 0.1}>
              <div className="relative flex h-full flex-col justify-between rounded-3xl border-2 border-gold/40 bg-gradient-to-b from-[#1E1A12] via-[#15130E] to-[#0E0E0E] p-7 shadow-dark-card transition-all duration-300 hover:border-gold hover:shadow-gold-sm">
                {/* Tag flutuante */}
                <div className="absolute -top-3.5 right-6 rounded-full border border-gold bg-gold-gradient px-3.5 py-1 shadow-sm">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0B0B0B]">
                    {bonus.tag}
                  </span>
                </div>

                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold/15 text-gold border border-gold/30">
                      <i className={`bi ${bonus.icon} text-xl`} aria-hidden="true" />
                    </span>
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-gold">
                        {bonus.number}
                      </span>
                      <p className="text-xs text-[#888888] line-through font-medium">
                        Vendido por {bonus.value}
                      </p>
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white leading-snug">
                    {bonus.title}
                  </h3>

                  <p className="mt-1 text-xs font-semibold text-[#E7D5A7]">
                    {bonus.subtitle}
                  </p>

                  <p className="mt-3.5 text-xs leading-relaxed text-[#BDB49E]">
                    {bonus.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-gold/20 pt-4 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#AAAAAA]">
                    Valor nesta oferta:
                  </span>
                  <span className="font-display text-base font-extrabold text-gold uppercase">
                    100% Gratuito
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Resumo dos bônus */}
        <Reveal delay={0.3} className="w-full max-w-2xl text-center rounded-2xl border border-gold/30 bg-[#12100A] p-6 shadow-soft">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold text-[#0B0B0B] text-xl font-bold">
              <i className="bi bi-gift-fill" aria-hidden="true" />
            </span>
            <div className="text-center sm:text-left">
              <p className="font-display text-lg font-bold text-white">
                Todos os 3 bônus já estão liberados dentro da sua área de membros
              </p>
              <p className="text-xs text-[#C8BEA7]">
                Disponíveis para download e consulta imediata assim que sua matrícula for concluída.
              </p>
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
