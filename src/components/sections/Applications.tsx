import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { APPLICATIONS } from '../../lib/constants'

export default function Applications() {
  return (
    <section className="bg-[#0B0B0B] py-16 sm:py-20 lg:py-28 relative">
      <Container className="flex flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="CAMPO DE ATUAÇÃO E MERCADO"
          title="ONDE APLICAR A MIXOLOGIA DE ALTO PADRÃO?"
          subtitle="Amplie seu leque de atuação profissional e multiplique o valor da sua hora de trabalho em múltiplos setores da gastronomia e eventos."
        />

        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
          {APPLICATIONS.map((app, index) => (
            <Reveal key={app.title} delay={index * 0.05}>
              <div className="group flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-gold/25 bg-[#141414] p-5 text-center shadow-dark-card transition-all duration-300 hover:border-gold/60 hover:bg-[#181818] sm:p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/40 bg-gold/15 text-gold shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <i className={`bi ${app.icon} text-xl`} aria-hidden="true" />
                </span>
                <h3 className="font-display text-xs sm:text-sm font-bold tracking-wider text-white group-hover:text-gold transition-colors">
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
