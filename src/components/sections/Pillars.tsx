import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { PILLARS } from '../../lib/constants'

export default function Pillars() {
  return (
    <section className="relative overflow-hidden bg-[#0F0F0F] py-16 sm:py-20 lg:py-28 border-y border-white/5">
      {/* Glow dourado */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.4) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <Container className="relative flex flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="MIXOLOGIA É MUITO MAIS DO QUE MISTURAR BEBIDAS."
          title="CRIAR UM GRANDE DRINK COMEÇA ANTES MESMO DA COQUETELEIRA."
          subtitle={
            <>
              Um cocktail profissional nasce da compreensão de equilíbrio, insumos, técnicas de extração, aromas e percepção sensorial.
              <br className="hidden sm:block" />
              A Mixologia transforma o preparo mecânico em um verdadeiro processo criativo de alto valor.
            </>
          }
        />

        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
          {PILLARS.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.08}>
              <div className="group flex h-full flex-col justify-between rounded-2xl border border-gold/25 bg-gradient-to-b from-[#181818] to-[#121212] p-6 shadow-dark-card transition-all duration-300 hover:border-gold/60 hover:shadow-gold-sm">
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/40 bg-gold/10 text-gold shadow-sm transition-transform duration-300 group-hover:scale-110">
                      <i className={`bi ${pillar.icon} text-xl`} aria-hidden="true" />
                    </span>
                    <span className="font-display text-2xl font-extrabold text-gold/30">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold tracking-wide text-white group-hover:text-gold transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#BDB49E]">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-5 border-t border-gold/15 pt-3.5 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                    Pilar Fundamental
                  </span>
                  <i className="bi bi-arrow-right text-xs text-gold/60 group-hover:text-gold group-hover:translate-x-1 transition-all" aria-hidden="true" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
