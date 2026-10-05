import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'

const molecularTechniques = [
  {
    title: 'Caviar Molecular',
    tag: 'Esferificação Direta',
    description: 'Pérolas perfeitas que explodem no paladar liberando sabores intensos e concentrados ao primeiro contato.',
    icon: 'bi-record-circle',
    highlight: 'Explosão de Sabor',
  },
  {
    title: 'Gema Líquida',
    tag: 'Esferificação Reversa',
    description: 'Esferas generosas de textura aveludada com interior 100% líquido, proporcionando uma experiência multissensorial.',
    icon: 'bi-circle-fill',
    highlight: 'Visual Hipnótico',
  },
  {
    title: 'Macarrão de Gel',
    tag: 'Gelificação Térmica',
    description: 'Fios e espirais translúcidos comestíveis com infusões aromáticas que transformam a guarnição em arte.',
    icon: 'bi-bezier2',
    highlight: 'Escultura Comestível',
  },
  {
    title: 'Defumação Nobre',
    tag: 'Infusão de Fumaça',
    description: 'Aplicação de fumaça aromática fria com madeiras selecionadas para despertar memórias olfativas e sofisticação.',
    icon: 'bi-wind',
    highlight: 'Impacto Olfativo',
  },
  {
    title: 'Espumas Aveludadas',
    tag: 'Aeração & Sifão',
    description: 'Espumas densas, cremosas e estáveis que criam contraste térmico e camadas táteis inesquecíveis.',
    icon: 'bi-cloud-fog2',
    highlight: 'Textura Perfeita',
  },
]

export default function Pillars() {
  return (
    <section id="o-que-voce-vai-criar" className="relative overflow-hidden bg-[#0D0D0D] py-16 sm:py-20 lg:py-24 border-y border-white/5">
      {/* Glow dourado de fundo */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.45) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <Container className="relative flex flex-col items-center gap-10 sm:gap-14">
        {/* Cabeçalho da Seção */}
        <SectionHeading
          eyebrow="O que você vai criar"
          title="Drinks Moleculares que Ensinamos"
          subtitle="Caviar, gema, macarrão de gel, defumação e espumas — as cinco técnicas que impressionam clientes e aumentam o valor de cada taça."
        />

        {/* Grid das 5 Técnicas Moleculares */}
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 sm:gap-6">
          {molecularTechniques.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08} className="h-full">
              <div className="group flex h-full flex-col justify-between rounded-2xl border border-gold/25 bg-gradient-to-b from-[#181714] via-[#141310] to-[#0F0E0B] p-5 sm:p-6 shadow-dark-card transition-all duration-300 hover:border-gold/60 hover:shadow-gold-sm hover:-translate-y-1">
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/40 bg-gold/10 text-gold shadow-sm transition-transform duration-300 group-hover:scale-110">
                      <i className={`bi ${item.icon} text-xl`} aria-hidden="true" />
                    </span>
                    <span className="font-oswald text-2xl font-bold text-gold/30 group-hover:text-gold/60 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  <span className="inline-block text-[10px] font-bold uppercase tracking-[0.16em] text-gold/90 mb-1.5">
                    {item.tag}
                  </span>

                  <h3 className="font-display text-lg font-bold tracking-wide text-white group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-[13px] leading-relaxed text-[#C8BEA7]">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 border-t border-gold/15 pt-3 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#FBD969]">
                    {item.highlight}
                  </span>
                  <i className="bi bi-sparkles text-xs text-gold/60 group-hover:text-gold group-hover:rotate-12 transition-all" aria-hidden="true" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
