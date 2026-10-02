import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { FOR_WHO_CARDS } from '../../lib/constants'

export default function ForWho() {
  return (
    <section id="para-quem" className="bg-[#0F0F0F] py-16 sm:py-20 lg:py-28 relative border-t border-white/5">
      <Container className="flex flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="PERFIL DO ALUNO"
          title="ESSE TREINAMENTO É PARA QUEM QUER IR MUITO ALÉM DA RECEITA."
          subtitle="Seja para iniciar do zero com o método correto ou para elevar sua autoridade como profissional experiente."
        />

        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {FOR_WHO_CARDS.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.08}>
              <div className="group flex h-full flex-col justify-between rounded-3xl border border-gold/25 bg-gradient-to-b from-[#181818] to-[#121212] p-6 shadow-dark-card transition-all duration-300 hover:border-gold/60 hover:shadow-gold-sm">
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold border border-gold/30 transition-transform duration-300 group-hover:scale-110">
                      <i className={`bi ${card.icon} text-xl`} aria-hidden="true" />
                    </span>
                    <i className="bi bi-check-circle-fill text-xl text-gold" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-base font-bold tracking-wide text-white group-hover:text-gold transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#BDB49E]">
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
