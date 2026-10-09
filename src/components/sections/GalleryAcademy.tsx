import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SmartImage from '../ui/SmartImage'

const gallery = [
  { src: '/images/Drinks.jpeg', label: 'Criações & Drinks Autorais', category: 'Mixologia de Alto Padrão' },
  { src: '/images/Turmas.jpeg', label: 'Turmas & Formação Profissional', category: 'JJ Academy' },
  { src: '/images/Alunos em ação.jpeg', label: 'Alunos em Ação na Bancada', category: 'Prática Real' },
  { src: '/images/Eventos.jpeg', label: 'Grandes Eventos & Produções', category: 'Experiência de Mercado' },
  { src: '/images/Treinamentos.jpeg', label: 'Técnicas, Insumos & Extrações', category: 'Metodologia Prática' },
  { src: '/images/Bastidores.jpeg', label: 'Bastidores & Mise en Place', category: 'Backstage Profissional' },
  { src: '/images/Alunos.jpeg', label: 'Comunidade & Networking', category: 'Especialistas de Bar' },
  { src: '/images/Cafés.jpeg', label: 'Cafeteria & Coffee Cocktails', category: 'Hospitalidade de Luxo' },
]

export default function GalleryAcademy() {
  return (
    <section id="galeria" className="relative border-y border-border bg-card/40 py-16 sm:py-24">
      <Container className="flex flex-col items-center gap-8 sm:gap-12">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
            Conheça a JJ Academy
          </p>
          <h2 className="font-display text-4xl leading-tight tracking-wide sm:text-5xl">
            <span className="gold-text">VIVÊNCIA REAL DE QUEM ESTÁ NO MERCADO TODOS OS DIAS.</span>
          </h2>
          <div className="mx-auto mt-5 mb-5 h-px w-24 bg-border" />
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Mais do que teoria: conheça o universo prático, os bastidores, as turmas e a excelência que consolidaram a JJ Bar e Barista Academy como referência nacional.
          </p>
        </div>

        {/* Grid dos 8 Cards de Galeria */}
        <div className="grid w-full grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {gallery.map((item, index) => (
            <Reveal key={item.src} delay={(index % 4) * 0.08}>
              <div className="group relative aspect-square overflow-hidden rounded-xl sm:rounded-2xl border border-border bg-card shadow-lg transition-all duration-300 hover:border-primary/80 hover:scale-[1.02]">
                <SmartImage
                  src={item.src}
                  alt={item.label}
                  label={item.label}
                  icon="bi-images"
                  className="h-full w-full"
                  imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-95" />
                <div className="absolute inset-x-0 bottom-0 p-3 text-left sm:p-4">
                  <span className="block text-[9px] font-bold uppercase tracking-wider text-primary sm:text-[10px] sm:tracking-widest">
                    {item.category}
                  </span>
                  <p className="mt-0.5 font-display text-sm font-bold leading-tight text-foreground sm:text-base">
                    {item.label}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Banner de Autoridade */}
        <Reveal delay={0.2} className="w-full">
          <div className="rounded-2xl border border-border bg-card p-5 sm:rounded-3xl sm:p-8 text-center gold-frame">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left max-w-2xl">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary block mb-1">
                  15+ ANOS DE TRADIÇÃO &amp; INOVAÇÃO
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                  Estrutura profissional reconhecida por bartenders de todo o país.
                </h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                  Metodologia testada em milhares de eventos, bares de ponta e consultorias de alto impacto.
                </p>
              </div>

              <div className="flex items-center gap-4 shrink-0 rounded-2xl border border-border bg-background/60 p-4">
                <div className="flex -space-x-3 overflow-hidden">
                  <img className="inline-block h-11 w-11 rounded-full ring-2 ring-primary object-cover" loading="lazy" decoding="async" src="/images/felipe martins.jpeg" alt="Felipe Martins" />
                  <img className="inline-block h-11 w-11 rounded-full ring-2 ring-primary object-cover" loading="lazy" decoding="async" src="/images/ensei neto.jpeg" alt="Ensei Neto" />
                  <img className="inline-block h-11 w-11 rounded-full ring-2 ring-primary object-cover" loading="lazy" decoding="async" src="/images/rafael andrade.jpeg" alt="Rafael Andrade" />
                </div>
                <div className="text-left">
                  <span className="text-sm font-bold text-foreground block">+5.000 Alunos</span>
                  <span className="text-xs text-primary font-medium">Formados no Brasil e Exterior</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
