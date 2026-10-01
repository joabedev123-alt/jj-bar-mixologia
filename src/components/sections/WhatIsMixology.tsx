import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import SmartImage from '../ui/SmartImage'

const mixologyAspects = [
  'Sabores',
  'Aromas',
  'Texturas',
  'Temperatura',
  'Diluição',
  'Ingredientes',
  'Técnicas',
  'Apresentação',
  'Equilíbrio',
]

const conceptualLabels = [
  { label: 'Garnish', note: 'Visual & aroma de topo', top: '10%', side: 'right' },
  { label: 'Aroma', note: 'Óleos e botânicos voláteis', top: '22%', side: 'left' },
  { label: 'Acidez', note: 'Frescor e contraste', top: '36%', side: 'right' },
  { label: 'Textura', note: 'Sensação tátil em boca', top: '50%', side: 'left' },
  { label: 'Doçura', note: 'Equilíbrio e sustentação', top: '64%', side: 'right' },
  { label: 'Base', note: 'Espinha dorsal alcoólica', top: '76%', side: 'left' },
  { label: 'Diluição', note: 'Controle hídrico e térmico', top: '88%', side: 'right' },
]

export default function WhatIsMixology() {
  return (
    <section className="bg-white py-14 sm:py-20 lg:py-28 overflow-hidden">
      <Container className="flex flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="CONCEITO &amp; CIÊNCIA SENSORIAL"
          title="AFINAL, O QUE É MIXOLOGIA?"
          subtitle={
            <>
              Mixologia é o estudo e a aplicação de conhecimentos relacionados à construção de bebidas e cocktails. Ela envolve muito mais do que simplesmente combinar ingredientes.
            </>
          }
        />

        {/* Aspectos observados */}
        <Reveal className="w-full">
          <div className="rounded-2xl border border-[#C6A15B]/30 bg-[#FAF8F3] p-5 shadow-soft sm:p-8">
            <p className="mb-3.5 text-center text-xs font-bold uppercase tracking-[0.2em] text-[#9C7B3C]">
              Um mixologista observa constantemente:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {mixologyAspects.map((aspect) => (
                <span
                  key={aspect}
                  className="rounded-full border border-[#C6A15B]/40 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#111111] shadow-sm sm:px-4 sm:py-2 sm:text-sm"
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
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#9C7B3C]">
                <i className="bi bi-diagram-3" aria-hidden="true" />
                Desconstrução Conceitual
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-[#111111] sm:text-3xl">
                A anatomia sensorial de uma criação autoral.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#444444] sm:text-base">
                Ao enxergar um drink através da mixologia, você compreende cada camada que constrói o resultado: da pureza do destilado base à tensão aromática liberada pela casca do cítrico na finalização.
              </p>
            </Reveal>

            <div className="space-y-3 pt-1">
              <Reveal delay={0.1}>
                <div className="rounded-xl border border-[#C6A15B]/30 bg-[#FAF8F3] p-4">
                  <p className="text-sm font-bold text-[#111111]">
                    Harmonia entre Ciência e Arte
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[#555555] sm:text-sm">
                    Não se trata de regras engessadas, mas de compreender como elementos químicos e sensoriais reagem entre si.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="rounded-xl border border-[#C6A15B]/30 bg-[#FAF8F3] p-4">
                  <p className="text-sm font-bold text-[#111111]">
                    Intenção em Cada Gole
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[#555555] sm:text-sm">
                    Cada decisão na taça — do tipo de gelo à escolha do copo — altera a percepção de quem degusta.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="relative mx-auto w-full max-w-lg overflow-hidden rounded-2xl border-2 border-[#C6A15B]/40 bg-gradient-to-b from-[#FAF8F3] via-white to-[#F7EBCB]/40 p-3 sm:p-6 shadow-soft">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-[#C6A15B]/30">
                  <SmartImage
                    src="/images/Drinks.jpeg"
                    alt="Anatomia da Mixologia — JJ Bar & Barista Academy"
                    label="Anatomia Sensorial do Drink"
                    icon="bi-cup-straw"
                    className="h-full w-full"
                    imgClassName="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />

                  {/* Editorial Graphic Overlay / Diagram Labels para telas md+ */}
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
                          <div className={`flex items-center gap-2 rounded-lg border border-white/40 bg-white/95 px-3 py-1.5 text-left backdrop-blur-md shadow-md ${isRight ? 'flex-row-reverse text-right' : ''}`}>
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#9C7B3C] text-[10px] font-bold text-white">
                              {idx + 1}
                            </span>
                            <div>
                              <p className="font-display text-xs font-bold leading-none text-[#111111] sm:text-sm">
                                {item.label}
                              </p>
                              <p className="text-[10px] text-[#666666]">
                                {item.note}
                              </p>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Badge mobile simplificada sobre a imagem */}
                  <div className="absolute inset-x-3 bottom-3 rounded-lg border border-white/30 bg-white/95 p-2.5 backdrop-blur-md sm:hidden">
                    <p className="text-center font-display text-xs font-bold text-[#111111]">
                      7 Camadas Estruturais do Cocktail
                    </p>
                  </div>
                </div>

                {/* Grid dos 7 Elementos para Mobile */}
                <div className="mt-3 grid grid-cols-2 gap-1.5 sm:hidden">
                  {conceptualLabels.map((item, idx) => (
                    <div key={item.label} className="flex items-center gap-2 rounded-lg border border-[#C6A15B]/30 bg-white px-2.5 py-1.5 shadow-sm">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#9C7B3C] text-[9px] font-bold text-white">
                        {idx + 1}
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-[11px] font-bold text-[#111111]">
                          {item.label}
                        </p>
                        <p className="truncate text-[9px] text-[#666666]">
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
