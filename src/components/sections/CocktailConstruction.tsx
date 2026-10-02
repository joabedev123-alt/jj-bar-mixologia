import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import SmartImage from '../ui/SmartImage'
import { COCKTAIL_ELEMENTS } from '../../lib/constants'

export default function CocktailConstruction() {
  const leftElements = COCKTAIL_ELEMENTS.slice(0, 4)
  const rightElements = COCKTAIL_ELEMENTS.slice(4, 8)

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0B0B0B] via-[#121212] to-[#0B0B0B] py-16 sm:py-20 lg:py-28 border-t border-white/5">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.4) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <Container className="relative flex flex-col items-center gap-12 sm:gap-16">
        <SectionHeading
          eyebrow="ARQUITETURA DE UM COCKTAIL"
          title="TODO GRANDE DRINK É UMA OBRA ESTRUTURADA."
          subtitle="Quando você domina a função de cada componente, deixa de ser refém de receitas e passa a criar com total liberdade e sofisticação."
        />

        {/* Layout centralizado com 4 cards à esquerda, imagem ao meio, 4 cards à direita */}
        <div className="grid w-full grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Coluna Esquerda */}
          <div className="order-2 lg:order-1 lg:col-span-4 flex flex-col gap-4">
            {leftElements.map((el, index) => (
              <Reveal key={el.name} delay={index * 0.08}>
                <div className="group rounded-2xl border border-gold/25 bg-[#141414] p-4.5 shadow-dark-card transition-all duration-300 hover:border-gold/60 hover:bg-[#181818] sm:p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold border border-gold/30 transition-transform duration-300 group-hover:scale-110">
                      <i className={`bi ${el.icon} text-lg`} aria-hidden="true" />
                    </span>
                    <div>
                      <h4 className="font-display text-base font-bold tracking-wide text-white group-hover:text-gold transition-colors">
                        {el.name}
                      </h4>
                      <p className="text-xs font-semibold text-gold">
                        {el.role}
                      </p>
                    </div>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-[#BDB49E] sm:text-sm">
                    {el.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Imagem Central */}
          <div className="order-1 lg:order-2 lg:col-span-4">
            <Reveal delay={0.15}>
              <div className="relative mx-auto max-w-sm overflow-hidden rounded-[2.25rem] border-2 border-gold/60 bg-[#141414] p-3.5 shadow-gold">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.75rem]">
                  <SmartImage
                    src="/images/hero.jpeg"
                    alt="Construção e Arquitetura de Cocktails — JJ Bar e Barista Academy"
                    label="Construção e Equilíbrio Sensorial"
                    icon="bi-cup-straw"
                    className="h-full w-full"
                    imgClassName="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-center text-white">
                    <span className="inline-block rounded-full bg-gold/20 border border-gold/40 px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-gold backdrop-blur-md">
                      Equilíbrio Perfeito
                    </span>
                    <p className="mt-2 font-display text-lg font-bold text-white">
                      Estrutura Sensorial Integrada
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Coluna Direita */}
          <div className="order-3 lg:col-span-4 flex flex-col gap-4">
            {rightElements.map((el, index) => (
              <Reveal key={el.name} delay={index * 0.08 + 0.1}>
                <div className="group rounded-2xl border border-gold/25 bg-[#141414] p-4.5 shadow-dark-card transition-all duration-300 hover:border-gold/60 hover:bg-[#181818] sm:p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold border border-gold/30 transition-transform duration-300 group-hover:scale-110">
                      <i className={`bi ${el.icon} text-lg`} aria-hidden="true" />
                    </span>
                    <div>
                      <h4 className="font-display text-base font-bold tracking-wide text-white group-hover:text-gold transition-colors">
                        {el.name}
                      </h4>
                      <p className="text-xs font-semibold text-gold">
                        {el.role}
                      </p>
                    </div>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-[#BDB49E] sm:text-sm">
                    {el.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
