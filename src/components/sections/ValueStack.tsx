import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import { CHECKOUT_URL, PRECO_MIXOLOGIA, PRECO_PARCELADO } from '../../lib/constants'

const items = [
  { name: 'O que é Mixologia, Fundamentos & História da Coquetelaria', price: 'R$ 197' },
  { name: 'Estrutura dos Drinks', price: 'R$ 97' },
  { name: 'Lista Equipamentos e Insumos', price: 'R$ 97' },
  { name: 'Lista de Ingredientes', price: 'R$ 97' },
  { name: 'Técnicas de Mixologia', price: 'R$ 197' },
  { name: 'Empreendendo com mixologia e Criação de drinks autorais', price: 'R$ 197' },
  { name: 'Precificação', price: 'R$ 47' },
  { name: 'Escala e Crescimento', price: 'R$ 197' },
  { name: 'Curso prático de mixologia', price: 'R$ 997' },
]

const bonuses = [
  'Lista de equipamentos e ingredientes',
  'Drinks moleculares',
  'Planilha de precificação',
]

export default function ValueStack() {
  return (
    <section id="oferta" className="relative overflow-hidden bg-gradient-to-b from-[#0B0B0B] via-[#14120D] to-[#0B0B0B] py-10 sm:py-16 lg:py-20 border-y border-gold/20">
      {/* Glow dourado suave no fundo */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.45) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <Container className="relative flex flex-col items-center gap-6 sm:gap-10 px-3 sm:px-6">
        {/* Cabeçalho da Seção */}
        <div className="flex w-full max-w-4xl flex-col items-center text-center gap-2 sm:gap-3">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
              <i className="bi bi-stars" aria-hidden="true" />
              Condição Especial de Inscrição
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white uppercase tracking-tight">
              TUDO O QUE VOCÊ PRECISA PARA COMEÇAR A <span className="gold-text">ENXERGAR A COQUETELARIA</span> DE OUTRA FORMA.
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="max-w-2xl text-xs sm:text-base leading-relaxed text-[#C8BEA7]">
              Tenha acesso ao treinamento completo da JJ Bar &amp; Barista Academy e inicie seu desenvolvimento técnico agora.
            </p>
          </Reveal>
        </div>

        {/* Quadro Principal na Mesma Paleta Dark & Gold do Site */}
        <Reveal className="w-full max-w-5xl">
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-gold/40 bg-gradient-to-b from-[#18140D] via-[#12100B] to-[#0A0A0A] p-4 sm:p-8 lg:p-10 shadow-2xl relative">
            
            {/* Faixa Superior Promocional */}
            <div className="absolute top-0 right-0 left-0 bg-gold-gradient py-1 text-center">
              <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#0B0B0B]">
                LOTE PROMOCIONAL EXCLUSIVO COM ACESSO IMEDIATO
              </span>
            </div>

            <div className="pt-3 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
              
              {/* Coluna Esquerda: Itens do Curso e Módulos */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-gold/20 pb-2.5 mb-2.5">
                    <div>
                      <span className="inline-block rounded-full bg-gold/15 border border-gold/30 px-2 py-0.5 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-gold">
                        CURSO COMPLETO ONLINE
                      </span>
                      <h3 className="mt-0.5 font-display text-xl sm:text-3xl font-extrabold text-white">
                        Curso de Mixologia
                      </h3>
                    </div>
                    <p className="text-right text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gold/80">
                      JJ Bar &amp; Barista Academy
                    </p>
                  </div>

                  {/* Lista compacta e elegante dos 9 itens */}
                  <div className="space-y-1.5 sm:space-y-2">
                    {items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-2.5 sm:px-3 py-1.5 transition-colors hover:border-gold/30 hover:bg-gold/[0.03]"
                      >
                        <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 flex-1">
                          <span className="flex h-4.5 w-4.5 sm:h-5 sm:w-5 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold text-[11px] border border-gold/40">
                            <i className="bi bi-check-lg" aria-hidden="true" />
                          </span>
                          <span className="text-[11px] sm:text-sm font-medium text-[#F3E8CF] leading-tight">
                            {item.name}
                          </span>
                        </div>
                        <span className="shrink-0 rounded bg-gold/10 border border-gold/30 px-2 py-0.5 text-[10px] sm:text-xs font-bold text-gold whitespace-nowrap ml-1.5">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Totalizador */}
                <div className="mt-3 flex items-center justify-between rounded-xl border border-gold/30 bg-[#0E0D0A] px-3.5 py-2">
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#A89F8D]">
                    Total de todos os módulos:
                  </span>
                  <span className="font-display text-base sm:text-lg font-bold text-white/50 line-through">
                    R$ 2.123
                  </span>
                </div>
              </div>

              {/* Coluna Direita: Box da Oferta + Bônus + CTA */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border-2 border-gold/60 bg-gradient-to-b from-[#241D12] via-[#1B160E] to-[#100E0A] p-4 sm:p-6 text-center shadow-gold relative">
                  
                  {/* Badge Topo */}
                  <div className="inline-block rounded-full bg-gold-gradient px-3 py-0.5 text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-[#0B0B0B] shadow-sm">
                    OFERTA ESPECIAL HOJE
                  </div>

                  {/* Bloco de Bônus Inclusos */}
                  <div className="mt-2.5 sm:mt-3 rounded-xl border border-gold/30 bg-[#0D0B08] p-3 text-left">
                    <p className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-gold flex items-center gap-1.5 mb-1.5">
                      <i className="bi bi-gift-fill text-gold" aria-hidden="true" />
                      + 3 BÔNUS EXCLUSIVOS INCLUSOS:
                    </p>
                    <ul className="space-y-1">
                      {bonuses.map((bonus, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-1.5 text-[11px] sm:text-xs font-semibold text-[#F3E8CF] leading-tight">
                          <span className="text-gold font-bold">{bIdx + 1})</span>
                          <span>{bonus}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Chamada de Preço */}
                  <p className="text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.2em] text-gold mt-3">
                    Hoje você só paga:
                  </p>

                  <div className="my-1 flex items-baseline justify-center gap-2">
                    <span className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)]">
                      {PRECO_MIXOLOGIA}
                    </span>
                    <span className="text-[10px] font-extrabold text-gold uppercase tracking-wider">
                      à vista
                    </span>
                  </div>

                  <p className="text-[10px] sm:text-xs font-semibold text-[#C8BEA7]">
                    ou em até <span className="font-bold text-white">{PRECO_PARCELADO}</span> no cartão
                  </p>

                  {/* Botão de Ação */}
                  <div className="mt-3">
                    <a
                      href={CHECKOUT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex min-h-[48px] w-full cursor-pointer select-none items-center justify-center gap-2 rounded-full bg-gold-gradient py-3 px-6 text-center font-sans text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#0B0B0B] shadow-gold hover:brightness-110 active:scale-[0.98] transition-all duration-200 border border-[#FFF1C5]"
                    >
                      <span>QUERO ME INSCREVER</span>
                      <i className="bi bi-arrow-right-circle text-base transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                    </a>
                  </div>

                  {/* Selos de Garantia */}
                  <div className="mt-3 pt-2.5 border-t border-white/10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-[9px] sm:text-[11px] font-medium text-[#A89F8D]">
                    <span className="flex items-center gap-1 text-white/90">
                      <i className="bi bi-shield-check text-gold" aria-hidden="true" />
                      Garantia 7 Dias
                    </span>
                    <span className="flex items-center gap-1 text-white/90">
                      <i className="bi bi-lightning-charge-fill text-gold" aria-hidden="true" />
                      Acesso Imediato
                    </span>
                    <span className="flex items-center gap-1 text-white/90">
                      <i className="bi bi-credit-card-fill text-gold" aria-hidden="true" />
                      Pagamento Seguro
                    </span>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </Reveal>
      </Container>
    </section>
  )
}
