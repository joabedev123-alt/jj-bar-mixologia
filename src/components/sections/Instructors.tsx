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
    <section id="professor" className="bg-white py-16 sm:py-20 lg:py-28">
      <Container className="flex flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="INSTRUTOR"
          title="APRENDA COM QUEM VIVE O UNIVERSO DO BAR."
        />

        <div className="mx-auto w-full max-w-4xl">
          <Reveal>
            <div className="grid grid-cols-1 items-center gap-8 overflow-hidden rounded-2xl border border-[#C6A15B]/35 bg-[#FAF8F3] p-6 shadow-soft sm:p-10 md:grid-cols-12 md:gap-10">
              {/* Foto Real do Felipe */}
              <div className="md:col-span-5">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-[#C6A15B]/30 shadow-sm">
                  <SmartImage
                    src="/images/felipe martins.jpeg"
                    alt="Felipe Martins — Professor JJ Bar & Barista Academy"
                    label="Felipe Martins"
                    icon="bi-person-circle"
                    className="h-full w-full"
                    imgClassName="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              </div>

              {/* Informações e Texto Base */}
              <div className="flex flex-col gap-4 md:col-span-7">
                <div>
                  <span className="inline-block rounded-full bg-[#C6A15B]/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#9C7B3C]">
                    Professor &amp; Especialista
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-bold text-[#111111] sm:text-3xl">
                    FELIPE MARTINS
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#9C7B3C] sm:text-base">
                    Bartender • Barista • Profissional de Eventos
                  </p>
                </div>

                <div className="space-y-3 text-sm leading-relaxed text-[#444444] sm:text-base">
                  <p>
                    Felipe Martins atua diretamente no universo de bar, café, eventos e formação profissional.
                  </p>
                  <p>
                    Na <span className="font-semibold text-[#111111]">JJ Bar &amp; Barista Academy</span>, utiliza sua experiência prática para aproximar os alunos da realidade do mercado.
                  </p>
                </div>

                <div className="mt-2 border-t border-[#C6A15B]/20 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#777777]">
                    Canais e Redes:
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {instructorSocials.map((social) => (
                      <a
                        key={social.handle}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-[#C6A15B]/30 bg-white px-3 py-1 text-xs font-medium text-[#333333] transition-colors duration-200 hover:border-[#9C7B3C] hover:text-[#9C7B3C]"
                      >
                        <i className={`bi ${social.icon}`} aria-hidden="true" />
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
