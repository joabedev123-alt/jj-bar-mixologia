import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { PAIN_QUESTIONS } from '../../lib/constants'

export default function PainSection() {
  return (
    <section id="o-curso" className="bg-[#0B0B0B] py-16 sm:py-20 lg:py-28 relative">
      <Container className="flex flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="DIAGNÓSTICO PROFISSIONAL"
          title="VOCÊ APENAS COPIA RECEITAS OU REALMENTE ENTENDE O QUE ESTÁ CRIANDO?"
          subtitle="Faça uma reflexão honesta sobre a sua segurança técnica na bancada do bar."
        />

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PAIN_QUESTIONS.map((question, index) => (
            <Reveal key={question} delay={index * 0.07}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-gold/25 bg-[#141414] p-5 shadow-dark-card transition-all duration-300 hover:border-gold/60 hover:bg-[#181818] sm:p-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-gold/50 bg-gold/10 font-display text-sm font-bold text-gold">
                  {index + 1}
                </span>
                <p className="text-[15px] font-medium leading-relaxed text-[#E7D5A7] sm:text-base">
                  {question}
                </p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={PAIN_QUESTIONS.length * 0.07} className="sm:col-span-2 lg:col-span-1">
            <div className="flex h-full flex-col justify-center rounded-2xl border-2 border-gold/70 bg-gradient-to-br from-[#241C10] via-[#1A160F] to-[#12100A] p-6 shadow-gold-sm">
              <span className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-gold text-[#0B0B0B] shadow-sm">
                <i className="bi bi-lightbulb-fill text-base" aria-hidden="true" />
              </span>
              <p className="text-xs font-bold uppercase tracking-wider text-gold">
                A Grande Virada de Chave
              </p>
              <p className="mt-1 text-sm font-semibold leading-relaxed text-white">
                Aprender a pensar cada ingrediente com fundamentação química, equilíbrio sensorial e intenção criativa.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3} className="max-w-2xl text-center rounded-2xl border border-white/10 bg-[#121212] p-6 sm:p-8">
          <p className="font-display text-lg font-bold text-white sm:text-xl">
            Existe um abismo entre quem apenas reproduz receitas e quem compreende a alquimia por trás de cada gota.
          </p>
          <p className="mt-2 text-[15px] font-semibold text-gold sm:text-lg">
            É exatamente essa maestria que você desenvolve na JJ Bar e Barista Academy.
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
