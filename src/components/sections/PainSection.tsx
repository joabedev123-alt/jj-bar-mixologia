import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { PAIN_QUESTIONS } from '../../lib/constants'

export default function PainSection() {
  return (
    <section id="o-curso" className="bg-[#F7F4EC] py-16 sm:py-20 lg:py-28">
      <Container className="flex flex-col items-center gap-8 sm:gap-12">
        <SectionHeading
          eyebrow="PENSE POR UM MOMENTO"
          title="VOCÊ SEGUE RECEITAS OU REALMENTE ENTENDE O QUE ESTÁ CRIANDO?"
        />

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PAIN_QUESTIONS.map((question, index) => (
            <Reveal key={question} delay={index * 0.07}>
              <div className="flex h-full items-start gap-3 rounded-2xl border border-[#C6A15B]/30 bg-white p-5 shadow-soft transition-all duration-300 hover:border-[#C6A15B] hover:shadow-md sm:gap-4 sm:p-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#C6A15B] bg-[#C6A15B]/10 font-display text-sm font-bold text-[#9C7B3C]">
                  {index + 1}
                </span>
                <p className="text-[15px] font-medium leading-relaxed text-[#222222] sm:text-base">
                  {question}
                </p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={PAIN_QUESTIONS.length * 0.07} className="sm:col-span-2 lg:col-span-1">
            <div className="flex h-full flex-col justify-center rounded-2xl border-2 border-[#C6A15B] bg-gradient-to-br from-[#F7EBCB] via-[#FAF8F3] to-white p-5 shadow-gold sm:p-6">
              <span className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#9C7B3C] text-white">
                <i className="bi bi-lightbulb-fill text-sm" aria-hidden="true" />
              </span>
              <p className="text-sm font-bold uppercase tracking-wider text-[#9C7B3C]">
                O Ponto Chave
              </p>
              <p className="mt-1 text-sm font-semibold leading-relaxed text-[#111111]">
                Aprender a pensar cada ingrediente com lógica, intenção e técnica.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3} className="max-w-2xl text-center">
          <p className="font-display text-lg font-bold text-[#111111] sm:text-xl">
            Existe uma grande diferença entre saber reproduzir uma receita e compreender a lógica por trás dela.
          </p>
          <p className="mt-2 text-[15px] font-medium text-[#9C7B3C] sm:text-lg">
            É essa diferença que a Mixologia começa a desenvolver.
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
