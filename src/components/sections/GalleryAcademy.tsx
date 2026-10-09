import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SmartImage from '../ui/SmartImage'

const gallery = [
  { src: '/images/Drinks.jpeg', label: 'Criações & Drinks Autorais' },
  { src: '/images/Turmas.jpeg', label: 'Turmas & Formação Profissional' },
  { src: '/images/Alunos em ação.jpeg', label: 'Alunos em Ação na Bancada' },
  { src: '/images/Eventos.jpeg', label: 'Grandes Eventos & Produções' },
  { src: '/images/Treinamentos.jpeg', label: 'Técnicas, Insumos & Extrações' },
  { src: '/images/Bastidores.jpeg', label: 'Bastidores & Mise en Place' },
  { src: '/images/Alunos.jpeg', label: 'Comunidade & Networking' },
  { src: '/images/Cafés.jpeg', label: 'Cafeteria & Coffee Cocktails' },
  { src: '/images/original/hero_molecular.jpg', label: 'Mixologia Molecular na Prática' },
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

        {/* Grade 3x3 de fotos */}
        <div className="grid w-full max-w-4xl grid-cols-3 gap-1.5 sm:gap-4">
          {gallery.map((item, index) => (
            <Reveal key={item.src} delay={(index % 3) * 0.08}>
              <div className="group relative aspect-square overflow-hidden rounded-lg border border-border bg-card shadow-lg transition-all duration-300 hover:border-primary/80 sm:rounded-2xl">
                <SmartImage
                  src={item.src}
                  alt={item.label}
                  label={item.label}
                  icon="bi-images"
                  className="h-full w-full"
                  imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
