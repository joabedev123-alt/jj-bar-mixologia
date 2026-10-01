import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { PILLARS } from '../../lib/constants'

export default function Pillars() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <Container className="flex flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="MIXOLOGIA É MUITO MAIS DO QUE MISTURAR BEBIDAS."
          title="CRIAR UM GRANDE DRINK COMEÇA ANTES MESMO DA COQUETELEIRA."
          subtitle={
            <>
              Um cocktail profissional nasce da compreensão de equilíbrio, ingredientes, técnicas, aromas, apresentação e experiência.
              <br className="hidden sm:block" />
              A Mixologia transforma o preparo de drinks em um processo de criação. E é exatamente essa visão que queremos desenvolver durante o curso.
            </>
          }
        />

        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
          {PILLARS.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.08}>
              <div className="group flex h-full flex-col justify-between rounded-2xl border border-[#C6A15B]/30 bg-[#FAF8F3] p-6 shadow-soft transition-all duration-300 hover:border-[#C6A15B] hover:bg-white hover:shadow-md">
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C6A15B]/40 bg-white text-[#9C7B3C] shadow-sm transition-transform duration-300 group-hover:scale-110">
                      <i className={`bi ${pillar.icon} text-xl`} aria-hidden="true" />
                    </span>
                    <span className="font-display text-2xl font-extrabold text-[#C6A15B]/25">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold tracking-wide text-[#111111]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#444444]">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-5 border-t border-[#C6A15B]/20 pt-4">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9C7B3C]">
                    Pilar Fundamental
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
