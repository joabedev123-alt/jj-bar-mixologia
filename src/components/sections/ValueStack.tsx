import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import CtaButton from '../ui/CtaButton'
import { CHECKOUT_URL, PRECO_MIXOLOGIA, PRECO_ANTERIOR_MIXOLOGIA, PRECO_PARCELADO, SITE } from '../../lib/constants'

const includedItems = [
  { text: 'Acesso Completo aos 8 Módulos de Mixologia Profissional', value: 'R$ 497,00' },
  { text: 'BÔNUS 01: Treinamento "Como Transformar Mixologia em Negócio"', value: 'R$ 197,00' },
  { text: 'BÔNUS 02: Planilha de Precificação Inteligente de Drinks & CMV', value: 'R$ 147,00' },
  { text: 'BÔNUS 03: E-book Exclusivo "10 Drinks Moleculares Autorais"', value: 'R$ 153,00' },
  { text: 'Certificado Oficial Emitido pela JJ Bar e Barista Academy', value: 'Incluso' },
  { text: 'Aulas Práticas Gravadas em Alta Definição (100% Online)', value: 'Incluso' },
  { text: 'Suporte Exclusivo a Dúvidas na Plataforma', value: 'Incluso' },
  { text: 'Acesso Vitalício & Ilimitado sem Mensalidades', value: 'Incluso' },
]

export default function ValueStack() {
  return (
    <section id="oferta" className="relative overflow-hidden bg-gradient-to-b from-[#121212] via-[#1A160F] to-[#0D0D0D] py-16 sm:py-24 lg:py-32 border-y border-gold/30">
      {/* Glow dourado */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.4) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <Container className="relative flex flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="OFERTA ESPECIAL LIMITADA"
          title="TUDO O QUE VOCÊ PRECISA PARA DOMINAR A MIXOLOGIA DE ALTO PADRÃO."
          subtitle="Aproveite o lote promocional de lançamento com mais de 70% de desconto e garanta todos os bônus inclusos."
        />

        <Reveal className="w-full max-w-2xl">
          <div className="overflow-hidden rounded-3xl border-2 border-gold/60 bg-gradient-to-b from-[#1E1A11] via-[#15130E] to-[#0A0A0A] p-6 shadow-gold sm:p-10 relative">
            {/* Faixa Superior Promocional */}
            <div className="absolute top-0 right-0 left-0 bg-gold-gradient py-1.5 text-center">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#0B0B0B]">
                CONDIÇÃO EXCLUSIVA DE LANÇAMENTO ONLINE
              </span>
            </div>

            <div className="border-b border-gold/20 pb-6 pt-4 text-center mt-2">
              <span className="inline-block rounded-full bg-gold/15 border border-gold/40 px-4 py-1 text-xs font-bold uppercase tracking-wider text-gold">
                Formação Completa + 3 Bônus
              </span>
              <h3 className="mt-3 font-display text-2xl sm:text-4xl font-extrabold text-white">
                Curso de Mixologia
              </h3>
              <p className="mt-1 text-xs sm:text-sm font-medium text-gold">
                JJ Bar e Barista Academy
              </p>
            </div>

            {/* Checklist de Itens Inclusos com Valores */}
            <div className="py-6 space-y-3.5">
              {includedItems.map((item) => (
                <div key={item.text} className="flex items-start justify-between gap-3 border-b border-white/5 pb-2.5">
                  <div className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold text-[11px] font-bold text-[#0B0B0B] mt-0.5">
                      <i className="bi bi-check" aria-hidden="true" />
                    </span>
                    <span className="text-xs sm:text-sm font-medium leading-relaxed text-[#E7D5A7]">
                      {item.text}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-gold shrink-0 hidden sm:block">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Caixa de Preço e CTA */}
            <div className="rounded-2xl border-2 border-gold/50 bg-[#12100A] p-6 sm:p-8 text-center shadow-dark-card">
              <p className="text-sm text-[#888888] line-through font-medium">
                De {PRECO_ANTERIOR_MIXOLOGIA} + R$ 497 em bônus (Valor Total: R$ 994,00)
              </p>
              
              <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-gold mt-1">
                Por apenas nesta página:
              </p>

              <div className="my-2 flex items-center justify-center gap-2">
                <span className="font-display text-5xl sm:text-6xl font-black text-white tracking-tight">
                  {PRECO_MIXOLOGIA}
                </span>
                <span className="text-xs font-bold text-gold uppercase tracking-wider">
                  à vista
                </span>
              </div>

              <p className="text-sm font-semibold text-[#E7D5A7]">
                ou em até <span className="text-white font-bold">{PRECO_PARCELADO}</span> no cartão
              </p>

              <div className="mt-6">
                <CtaButton href={CHECKOUT_URL} size="lg" className="w-full text-base">
                  {SITE.ctaText}
                </CtaButton>
              </div>

              {/* Selos de Garantia e Segurança */}
              <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 text-xs text-[#AAAAAA]">
                <span className="flex items-center gap-1.5 text-white">
                  <i className="bi bi-shield-lock-fill text-gold" aria-hidden="true" />
                  Garantia de 7 Dias
                </span>
                <span className="flex items-center gap-1.5 text-white">
                  <i className="bi bi-lightning-charge-fill text-gold" aria-hidden="true" />
                  Acesso Imediato
                </span>
                <span className="flex items-center gap-1.5 text-white">
                  <i className="bi bi-credit-card-2-front-fill text-gold" aria-hidden="true" />
                  Pagamento Seguro Hotmart
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
