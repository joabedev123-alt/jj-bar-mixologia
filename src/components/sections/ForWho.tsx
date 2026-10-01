import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { FOR_WHO_CARDS } from '../../lib/constants'

export default function ForWho() {
  return (
    <section id="para-quem" className="bg-[#F7F4EC] py-16 sm:py-20 lg:py-28">
      <Container className="flex flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="PERFIL DO ALUNO"
          title="ESSE CURSO É PARA QUEM QUER IR ALÉM DA RECEITA."
          subtitle="Seja para dar os primeiros passos ou para transformar sua forma de criar drinks, o curso foi estruturado para desenvolver seu repertório."
        />

        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {FOR_WHO_CARDS.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.08}>
              <div className="group flex h-full flex-col justify-between rounded-2xl border border-[#C6A15B]/30 bg-white p-6 shadow-soft transition-all duration-300 hover:border-[#C6A15B] hover:shadow-md">
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C6A15B]/15 text-[#9C7B3C] transition-transform duration-300 group-hover:scale-110">
                      <i className={`bi ${card.icon} text-lg`} aria-hidden="true" />
                    </span>
                    <i className="bi bi-check2 text-xl font-bold text-[#9C7B3C]" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-bold tracking-wide text-[#111111]">
                    {card.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#444444]">
                    {card.description}
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
