import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { APPLICATIONS } from '../../lib/constants'

export default function Applications() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <Container className="flex flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="CAMPO DE ATUAÇÃO"
          title="O CONHECIMENTO EM MIXOLOGIA PODE SER APLICADO EM DIFERENTES CONTEXTOS."
          subtitle="Amplie suas possibilidades com fundamentos técnicos que se adaptam a diversos formatos e ambientes do setor de bebidas e hospitalidade."
        />

        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
          {APPLICATIONS.map((app, index) => (
            <Reveal key={app.title} delay={index * 0.05}>
              <div className="group flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-[#C6A15B]/30 bg-[#FAF8F3] p-5 text-center shadow-soft transition-all duration-300 hover:border-[#C6A15B] hover:bg-white hover:shadow-md sm:p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C6A15B]/30 bg-white text-[#9C7B3C] shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <i className={`bi ${app.icon} text-xl`} aria-hidden="true" />
                </span>
                <h3 className="font-display text-sm font-bold tracking-wider text-[#111111] sm:text-base">
                  {app.title}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
