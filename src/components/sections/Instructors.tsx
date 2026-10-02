import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import SmartImage from '../ui/SmartImage'
import { SOCIAL } from '../../lib/constants'

const instructorSocials = [
  { ...SOCIAL.felipe, label: '@felipejjbarebarista' },
  { ...SOCIAL.academy, label: '@jjbarebaristastore_academy' },
  { ...SOCIAL.eventosBarista, label: '@jjbarebarista' },
  { ...SOCIAL.eventosBar, label: '@jjbar_eventos' },
]

export default function Instructors() {
  return (
    <section id="professor" className="bg-[#0B0B0B] py-16 sm:py-20 lg:py-28 relative">
      <Container className="flex flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="INSTRUTOR &amp; CORPO DOCENTE"
          title="APRENDA COM QUEM VIVE O UNIVERSO DO BAR TODOS OS DIAS."
          subtitle="A experiência prática de quem lidera grandes operações, eventos de luxo e formação de bartenders renomados."
        />

        <div className="mx-auto w-full max-w-4xl">
          <Reveal>
            <div className="grid grid-cols-1 items-center gap-8 overflow-hidden rounded-3xl border-2 border-gold/40 bg-gradient-to-br from-[#181611] via-[#13120E] to-[#0D0D0D] p-6 shadow-gold sm:p-10 md:grid-cols-12 md:gap-10">
              {/* Foto Real do Felipe */}
              <div className="md:col-span-5">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-gold/40 shadow-dark-card group">
                  <SmartImage
                    src="/images/felipe martins.jpeg"
                    alt="Felipe Martins — Especialista e Fundador da JJ Bar e Barista Academy"
                    label="Felipe Martins"
                    icon="bi-person-circle"
                    className="h-full w-full"
                    imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
              </div>

              {/* Informações e Biografia */}
              <div className="flex flex-col gap-4 md:col-span-7">
                <div>
                  <span className="inline-block rounded-full bg-gold/15 border border-gold/40 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-gold">
                    Mestre &amp; Especialista em Mixologia
                  </span>
                  <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-white">
                    FELIPE MARTINS
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-gold">
                    Fundador da JJ Bar e Barista Academy • Mixologista • Consultor de Bares
                  </p>
                </div>

                <div className="space-y-3 text-xs sm:text-sm leading-relaxed text-[#C8BEA7]">
                  <p>
                    Com anos de trajetória na alta coquetelaria, cafeterias de especialidade e grandes eventos corporativos e sociais, Felipe Martins desenvolveu um método de ensino dinâmico, direto ao ponto e focado em autonomia criativa.
                  </p>
                  <p>
                    À frente da <span className="font-bold text-white">JJ Bar e Barista Academy</span>, já formou mais de 5.000 profissionais, conectando a ciência dos coquetéis à realidade de mercado e rentabilidade.
                  </p>
                </div>

                <div className="mt-2 border-t border-gold/20 pt-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-gold">
                    Conecte-se nas Redes Oficiais:
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {instructorSocials.map((social) => (
                      <a
                        key={social.handle}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-[#161616] px-3.5 py-1.5 text-xs font-medium text-white transition-colors duration-200 hover:border-gold hover:text-gold"
                      >
                        <i className={`bi ${social.icon} text-gold`} aria-hidden="true" />
                        {social.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
