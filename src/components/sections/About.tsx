import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import SmartImage from '../ui/SmartImage'

const gallery = [
  { src: '/images/Drinks.jpeg', label: 'Drinks & Cocktails', category: 'Criações' },
  { src: '/images/Eventos.jpeg', label: 'Eventos & Produção', category: 'Ambiente Real' },
  { src: '/images/Treinamentos.jpeg', label: 'Preparações & Técnicas', category: 'Prática' },
  { src: '/images/Bastidores.jpeg', label: 'Bastidores & Mise en Place', category: 'Backstage' },
  { src: '/images/Alunos em ação.jpeg', label: 'Alunos em Ação', category: 'Workstation' },
  { src: '/images/Turmas.jpeg', label: 'Aulas & Formações', category: 'Academy' },
  { src: '/images/Alunos.jpeg', label: 'Comunidade de Bar', category: 'Networking' },
  { src: '/images/Cafés.jpeg', label: 'Cafeteria & Hospitalidade', category: 'Especialidades' },
]

export default function About() {
  return (
    <section className="bg-[#FAF8F3] py-16 sm:py-20 lg:py-28">
      <Container className="flex flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="VIVÊNCIA REAL DO MERCADO"
          title={
            <>
              NÃO APRENDA SOMENTE COM SLIDES.
              <br />
              VEJA O UNIVERSO DO BAR NA PRÁTICA.
            </>
          }
          subtitle="A experiência prática de quem está no dia a dia de eventos, alta coquetelaria, bares e formação de profissionais."
        />

        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
          {gallery.map((item, index) => (
            <Reveal key={item.src} delay={(index % 4) * 0.08}>
              <div className="group relative aspect-square overflow-hidden rounded-2xl border border-[#C6A15B]/30 bg-white shadow-soft transition-all duration-300 hover:border-[#C6A15B] hover:shadow-md">
                <SmartImage
                  src={item.src}
                  alt={item.label}
                  label={item.label}
                  icon="bi-images"
                  className="h-full w-full"
                  imgClassName="h-full w-full object-cover transition-transform duration-500 group-hover:scale-108"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 text-left">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#E7D5A7]">
                    {item.category}
                  </span>
                  <p className="mt-0.5 font-display text-sm font-semibold text-white sm:text-base">
                    {item.label}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
