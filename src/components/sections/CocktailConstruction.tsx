import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import SmartImage from '../ui/SmartImage'
import { COCKTAIL_ELEMENTS } from '../../lib/constants'

export default function CocktailConstruction() {
  const leftElements = COCKTAIL_ELEMENTS.slice(0, 4)
  const rightElements = COCKTAIL_ELEMENTS.slice(4, 8)

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF8F3] via-[#F7EBCB]/40 to-[#FAF8F3] py-16 sm:py-20 lg:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <Container className="relative flex flex-col items-center gap-12 sm:gap-16">
        <SectionHeading
          eyebrow="ARQUITETURA DO DRINK"
          title="TODO GRANDE COCKTAIL É UMA CONSTRUÇÃO."
          subtitle="Quando você começa a entender a função de cada elemento, deixa de enxergar apenas uma receita e passa a compreender sua estrutura."
        />

        {/* Layout centralizado: elementos à esquerda, imagem do drink no meio, elementos à direita */}
        <div className="grid w-full grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Coluna Esquerda: Base, Modificadores, Doçura, Acidez */}
          <div className="order-2 lg:order-1 lg:col-span-4 flex flex-col gap-4">
            {leftElements.map((el, index) => (
              <Reveal key={el.name} delay={index * 0.08}>
                <div className="group rounded-2xl border border-[#C6A15B]/30 bg-white p-4 shadow-soft transition-all duration-300 hover:border-[#C6A15B] hover:shadow-md sm:p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C6A15B]/15 text-[#9C7B3C] transition-transform duration-300 group-hover:scale-110">
                      <i className={`bi ${el.icon} text-lg`} aria-hidden="true" />
                    </span>
                    <div>
                      <h4 className="font-display text-base font-bold tracking-wide text-[#111111]">
                        {el.name}
                      </h4>
                      <p className="text-xs font-semibold text-[#9C7B3C]">
                        {el.role}
                      </p>
                    </div>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-[#555555] sm:text-sm">
                    {el.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Imagem Central: Drink Sofisticado */}
          <div className="order-1 lg:order-2 lg:col-span-4">
            <Reveal delay={0.15}>
              <div className="relative mx-auto max-w-sm overflow-hidden rounded-[2rem] border-2 border-[#C6A15B] bg-white p-3 shadow-gold">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.5rem]">
                  <SmartImage
                    src="/images/hero.jpeg"
                    alt="Construção de Cocktail — JJ Bar & Barista Academy"
                    label="Construção e Equilíbrio"
                    icon="bi-cup-straw"
                    className="h-full w-full"
                    imgClassName="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-center text-white">
                    <span className="inline-block rounded-full bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#E7D5A7] backdrop-blur-sm">
                      Harmonia Perfeita
                    </span>
                    <p className="mt-2 font-display text-lg font-bold">
                      Estrutura Sensorial Integrada
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Coluna Direita: Aromas, Textura, Diluição, Garnish */}
          <div className="order-3 lg:col-span-4 flex flex-col gap-4">
            {rightElements.map((el, index) => (
              <Reveal key={el.name} delay={index * 0.08 + 0.1}>
                <div className="group rounded-2xl border border-[#C6A15B]/30 bg-white p-4 shadow-soft transition-all duration-300 hover:border-[#C6A15B] hover:shadow-md sm:p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C6A15B]/15 text-[#9C7B3C] transition-transform duration-300 group-hover:scale-110">
                      <i className={`bi ${el.icon} text-lg`} aria-hidden="true" />
                    </span>
                    <div>
                      <h4 className="font-display text-base font-bold tracking-wide text-[#111111]">
                        {el.name}
                      </h4>
                      <p className="text-xs font-semibold text-[#9C7B3C]">
                        {el.role}
                      </p>
                    </div>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-[#555555] sm:text-sm">
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
