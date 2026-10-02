import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import SmartImage from '../ui/SmartImage'

const mixologyAspects = [
  'Sabores & Química',
  'Aromas Voláteis',
  'Texturas & Espumas',
  'Temperatura & Gelo',
  'Controle de Diluição',
  'Insumos Artesanais',
  'Técnicas de Extração',
  'Apresentação & Garnish',
  'Equilíbrio Matemático',
]

const conceptualLabels = [
  { label: 'Garnish', note: 'Visual & aroma de topo', top: '10%', side: 'right' },
  { label: 'Aroma', note: 'Óleos e botânicos voláteis', top: '22%', side: 'left' },
  { label: 'Acidez', note: 'Frescor e contraste cítrico', top: '36%', side: 'right' },
  { label: 'Textura', note: 'Sensação tátil aveludada', top: '50%', side: 'left' },
  { label: 'Doçura', note: 'Equilíbrio e sustentação', top: '64%', side: 'right' },
  { label: 'Base', note: 'Espinha dorsal alcoólica', top: '76%', side: 'left' },
  { label: 'Diluição', note: 'Controle hídrico e térmico', top: '88%', side: 'right' },
]

export default function WhatIsMixology() {
  return (
    <section className="bg-[#0B0B0B] py-16 sm:py-20 lg:py-28 overflow-hidden relative">
      <Container className="flex flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="CIÊNCIA SENSORIAL &amp; ALQUIMIA"
          title="AFINAL, O QUE É MIXOLOGIA?"
          subtitle={
            <>
              Mixologia é a convergência entre arte, química e gastronomia líquida. É o conhecimento profundo que permite a você criar coquetéis balanceados e memoráveis sem depender de receitas copiadas.
            </>
          }
        />

        {/* Aspectos observados */}
        <Reveal className="w-full">
          <div className="rounded-2xl border border-gold/30 bg-gradient-to-r from-[#141414] via-[#1A1813] to-[#141414] p-6 shadow-dark-card sm:p-8 text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-gold">
              Um mixologista profissional domina com precisão:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              {mixologyAspects.map((aspect) => (
                <span
                  key={aspect}
                  className="rounded-full border border-gold/35 bg-[#1C1C1C] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-sm hover:border-gold hover:text-gold transition-colors"
                >
                  {aspect}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Composição Editorial Conceitual do Cocktail */}
        <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col gap-5">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold">
                <i className="bi bi-diagram-3-fill text-gold" aria-hidden="true" />
                Desconstrução Conceitual
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                A anatomia sensorial de uma criação autoral de luxo.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#C8BEA7] sm:text-base">
                Ao enxergar um drink através da metodologia JJ Academy, você compreende cada camada que constrói o resultado: da pureza do destilado base à tensão aromática liberada pela casca do cítrico e pelas espumas moleculares.
              </p>
            </Reveal>

            <div className="space-y-3 pt-1">
              <Reveal delay={0.1}>
                <div className="rounded-xl border border-gold/25 bg-[#141414] p-4.5">
                  <p className="text-sm font-bold text-white flex items-center gap-2">
                    <i className="bi bi-stars text-gold" aria-hidden="true" />
                    Harmonia entre Ciência e Arte
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[#A89F8D] sm:text-sm">
                    Não se trata de adivinhação, mas de entender a termodinâmica, a acidez e as reações químicas entre destilados e botânicos.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="rounded-xl border border-gold/25 bg-[#141414] p-4.5">
                  <p className="text-sm font-bold text-white flex items-center gap-2">
                    <i className="bi bi-award-fill text-gold" aria-hidden="true" />
                    Intenção em Cada Gole
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[#A89F8D] sm:text-sm">
                    Cada detalhe — do cristal da taça à densidade do xarope — é calibrado para proporcionar uma experiência que fideliza clientes.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="relative mx-auto w-full max-w-lg overflow-hidden rounded-3xl border-2 border-gold/40 bg-gradient-to-b from-[#181818] via-[#121212] to-[#0A0A0A] p-4 sm:p-6 shadow-gold">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-gold/30">
                  <SmartImage
                    src="/images/Drinks.jpeg"
                    alt="Anatomia da Mixologia — JJ Bar e Barista Academy"
                    label="Anatomia Sensorial do Drink"
                    icon="bi-cup-straw"
                    className="h-full w-full"
                    imgClassName="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

                  {/* Editorial Graphic Overlay Labels */}
                  <div className="hidden sm:block">
                    {conceptualLabels.map((item, idx) => {
                      const isRight = item.side === 'right'
                      return (
                        <div
                          key={item.label}
                          className="absolute flex items-center gap-2"
                          style={{
                            top: item.top,
                            [isRight ? 'right' : 'left']: '0.75rem',
                          }}
                        >
                          <div className={`flex items-center gap-2 rounded-xl border border-gold/40 bg-[#0B0B0B]/90 px-3 py-1.5 text-left backdrop-blur-md shadow-lg ${isRight ? 'flex-row-reverse text-right' : ''}`}>
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-[10px] font-extrabold text-[#0B0B0B]">
                              {idx + 1}
                            </span>
                            <div>
                              <p className="font-display text-xs font-bold leading-none text-white sm:text-sm">
                                {item.label}
                              </p>
                              <p className="text-[10px] text-gold font-medium">
                                {item.note}
                              </p>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Badge mobile simplificada */}
                  <div className="absolute inset-x-3 bottom-3 rounded-xl border border-gold/40 bg-[#0B0B0B]/90 p-3 backdrop-blur-md sm:hidden text-center">
                    <p className="font-display text-xs font-bold text-white">
                      7 Camadas da Alquimia do Drink
                    </p>
                  </div>
                </div>

                {/* Grid dos 7 Elementos para Mobile */}
                <div className="mt-3 grid grid-cols-2 gap-2 sm:hidden">
                  {conceptualLabels.map((item, idx) => (
                    <div key={item.label} className="flex items-center gap-2 rounded-xl border border-gold/25 bg-[#141414] px-2.5 py-1.5 shadow-sm">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gold text-[9px] font-extrabold text-[#0B0B0B]">
                        {idx + 1}
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-[11px] font-bold text-white">
                          {item.label}
                        </p>
                        <p className="truncate text-[9px] text-gold">
                          {item.note}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
