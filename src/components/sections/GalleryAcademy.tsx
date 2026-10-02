import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
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
    <section id="galeria" className="bg-[#0B0B0B] py-16 sm:py-20 lg:py-28 relative">
      <Container className="flex flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="CONHEÇA A JJ ACADEMY"
          title="VIVÊNCIA REAL DE QUEM ESTÁ NO MERCADO TODOS OS DIAS."
          subtitle="Mais do que teoria: conheça o universo prático, os bastidores, as turmas e a excelência que consolidaram a JJ Bar e Barista Academy como referência nacional."
        />

        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
          {gallery.map((item, index) => (
            <Reveal key={item.src} delay={(index % 4) * 0.08}>
              <div className="group relative aspect-square overflow-hidden rounded-2xl border border-gold/30 bg-[#141414] shadow-dark-card transition-all duration-300 hover:border-gold hover:shadow-gold-sm">
                <SmartImage
                  src={item.src}
                  alt={item.label}
                  label={item.label}
                  icon="bi-images"
                  className="h-full w-full"
                  imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-black/40 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-95" />
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 text-left">
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-gold block">
                    {item.category}
                  </span>
                  <p className="mt-0.5 font-display text-xs font-bold text-white sm:text-sm">
                    {item.label}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Banner de Autoridade da Academy */}
        <Reveal delay={0.2} className="w-full">
          <div className="rounded-3xl border border-gold/40 bg-gradient-to-r from-[#1E190F] via-[#141414] to-[#1E190F] p-6 sm:p-8 text-center shadow-gold-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold block mb-1">
                  15+ ANOS DE TRADIÇÃO &amp; INOVAÇÃO
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  Estrutura profissional reconhecida por bartenders de todo o país.
                </h3>
                <p className="text-xs sm:text-sm text-[#C8BEA7] mt-1">
                  Metodologia testada em milhares de eventos, bares de ponta e consultorias de alto impacto.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <div className="flex -space-x-3 overflow-hidden">
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-gold object-cover" src="/images/felipe martins.jpeg" alt="Felipe Martins" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-gold object-cover" src="/images/ensei neto.jpeg" alt="Ensei Neto" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-gold object-cover" src="/images/rafael andrade.jpeg" alt="Rafael Andrade" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-bold text-white block">+5.000 Alunos</span>
                  <span className="text-[10px] text-gold font-medium">Formados e Atuando</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
