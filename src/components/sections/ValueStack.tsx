import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import CtaButton from '../ui/CtaButton'
import { CHECKOUT_URL, PRECO_MIXOLOGIA, PRECO_ANTERIOR_MIXOLOGIA } from '../../lib/constants'

const includedFeatures = [
  'Acesso Completo a Todos os 8 Módulos de Mixologia',
  'Fundamentos de Equilíbrio, Ingredientes e Técnicas',
  'Análise Sensorial, Aromas, Textura e Diluição',
  'Criação de Cocktails Autorais e Apresentação',
  'Certificado JJ Bar & Barista Academy',
  'Aulas 100% Online com Acesso Imediato',
]

export default function ValueStack() {
  const hasPreviousPrice = PRECO_ANTERIOR_MIXOLOGIA && !PRECO_ANTERIOR_MIXOLOGIA.includes('XXX')
  const hasPrice = PRECO_MIXOLOGIA && !PRECO_MIXOLOGIA.includes('XXX')

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF8F3] via-[#F7EBCB]/50 to-[#FAF8F3] py-16 sm:py-20 lg:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.25) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <Container className="relative flex flex-col items-center gap-10 sm:gap-12">
        <SectionHeading
          eyebrow="CONDIÇÃO ESPECIAL DE INSCRIÇÃO"
          title="TUDO O QUE VOCÊ PRECISA PARA COMEÇAR A ENXERGAR A COQUETELARIA DE OUTRA FORMA."
          subtitle="Tenha acesso ao treinamento completo da JJ Bar &amp; Barista Academy e inicie seu desenvolvimento técnico agora."
        />

        <Reveal className="w-full max-w-xl">
          <div className="overflow-hidden rounded-2xl border-2 border-[#C6A15B] bg-white p-6 shadow-gold sm:p-8">
            <div className="border-b border-[#C6A15B]/20 pb-6 text-center">
              <span className="inline-block rounded-full bg-[#C6A15B]/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#9C7B3C]">
                Curso Completo Online
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold text-[#111111] sm:text-3xl">
                Curso de Mixologia
              </h3>
              <p className="mt-1 text-xs font-medium text-[#777777]">
                JJ Bar &amp; Barista Academy
              </p>
            </div>

            <div className="py-6 space-y-3.5">
              {includedFeatures.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#9C7B3C] text-[11px] text-white">
                    <i className="bi bi-check" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium leading-relaxed text-[#222222]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-[#C6A15B]/30 bg-[#FAF8F3] p-6 text-center">
              {hasPreviousPrice && (
                <p className="text-sm text-[#777777] line-through">
                  Preço anterior: {PRECO_ANTERIOR_MIXOLOGIA}
                </p>
              )}
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9C7B3C]">
                {hasPrice ? 'Valor Especial do Curso' : 'Valor do Curso'}
              </p>
              <p className="mt-1 font-display text-5xl font-extrabold text-[#111111] sm:text-6xl">
                {PRECO_MIXOLOGIA}
              </p>

              <div className="mt-6">
                <CtaButton href={CHECKOUT_URL} size="lg" className="w-full">
                  QUERO GARANTIR MINHA INSCRIÇÃO
                </CtaButton>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-[#666666]">
                Pagamento realizado através do checkout oficial.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
