import { motion } from 'framer-motion'
import Container from '../ui/Container'
import CtaButton from '../ui/CtaButton'
import SmartImage from '../ui/SmartImage'
import { CHECKOUT_URL, PRECO_MIXOLOGIA, PRECO_ANTERIOR_MIXOLOGIA, PRECO_PARCELADO } from '../../lib/constants'

const heroQuestions = [
  'Você quer expandir o seu negócio ou sua profissão trazendo uma nova receita mensal através da mixologia?',
  'Quer criar drinks autorais que aumentem o ticket médio e o lucro do seu bar, cafeteria ou restaurante?',
  'Quer dominar esferificação, gelificação, defumação e espumas para se diferenciar da concorrência?',
  'Quer transformar eventos, happy hours e datas especiais em uma nova fonte de renda para o seu negócio?',
  'Quer ser reconhecido como especialista no seu mercado e passar a cobrar mais pelo que já faz?',
]

const trustItems = [
  { icon: 'bi-gem', label: 'Mixologia Molecular Autoral' },
  { icon: 'bi-sliders', label: 'Equilíbrio Sensorial' },
  { icon: 'bi-patch-check', label: 'Certificado JJ Academy' },
  { icon: 'bi-camera-reels', label: 'Aulas Práticas 100% Online' },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-[#090909] via-[#11100D] to-[#0A0A0A] pb-16 pt-8 sm:pb-24 sm:pt-12 lg:pb-28 lg:pt-16">
      {/* Luz ambiente dourada / Bokeh de bar de fundo */}
      <div
        className="pointer-events-none absolute -top-20 right-[-5%] h-[600px] w-[600px] rounded-full opacity-30 blur-[130px]"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.45) 0%, rgba(180,130,30,0.15) 50%, transparent 80%)' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 left-[-10%] h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Grid Pattern de Luxo */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.035]" 
        style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Coluna Principal — Cópia Idêntica a ft01 */}
          <div className="order-1 flex min-w-0 flex-col items-start gap-5 lg:col-span-7">
            {/* Tag Badge: CURSO DE */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center border border-[#C5A869]/80 bg-[#16140F]/80 px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-[0.28em] text-[#E0C068] shadow-sm"
            >
              CURSO DE
            </motion.div>

            {/* Headline: MIXOLOGIA MOLECULAR */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="flex flex-col gap-0 leading-[0.92]"
            >
              <h1 className="font-oswald tracking-tight font-extrabold uppercase text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-[6rem] leading-[0.94]">
                <span className="block bg-gradient-to-r from-[#F7E19A] via-[#D4AF37] to-[#B38728] bg-clip-text text-transparent drop-shadow-sm">
                  MIXOLOGIA
                </span>
                <span className="block text-white">
                  MOLECULAR
                </span>
              </h1>
            </motion.div>

            {/* Subtítulo Copy Idêntico a ft01 */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="max-w-2xl text-[15px] sm:text-lg leading-relaxed text-[#D1C7B7] font-normal"
            >
              Ciência, criatividade e técnica para criar experiências únicas — e transformar o seu bar, cafeteria ou eventos em uma nova receita mensal.
            </motion.p>

            {/* Card de Perguntas / Qualificação — Cópia Idêntica a ft01 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="w-full rounded-2xl border border-[#C5A869]/40 bg-gradient-to-b from-[#181611]/95 via-[#13110C]/90 to-[#0E0D09]/95 p-6 sm:p-7 shadow-2xl backdrop-blur-md relative overflow-hidden"
            >
              <div className="pointer-events-none absolute top-0 right-0 h-40 w-40 bg-[#D4AF37]/10 rounded-full blur-3xl" />

              {/* Título do Card */}
              <h2 className="font-sans text-base sm:text-lg font-bold leading-snug text-white">
                Você quer expandir o seu negócio ou sua profissão trazendo uma nova receita mensal através da mixologia?
              </h2>

              {/* Texto de Transição */}
              <p className="mt-2.5 mb-4 text-xs sm:text-sm text-[#A89E8B] leading-normal font-normal">
                Se alguma dessas perguntas mexeu com você, este curso é o próximo passo:
              </p>

              {/* Lista com Ícones de Check Dourados */}
              <ul className="flex flex-col gap-3 sm:gap-3.5">
                {heroQuestions.map((question, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center text-gold pt-0.5">
                      <i className="bi bi-check-lg text-lg font-bold text-gold" aria-hidden="true" />
                    </span>
                    <span className="text-xs sm:text-[14px] leading-relaxed text-[#E7DFCF] font-normal">
                      {question}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Box de Oferta e CTA Integrado */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="w-full rounded-2xl border border-gold/40 bg-gradient-to-b from-[#171612] via-[#12110D] to-[#0D0C09] p-5 sm:p-6 shadow-dark-card"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 pb-4 border-b border-gold/20">
                <div>
                  <p className="text-xs text-[#888888] font-medium line-through">
                    De {PRECO_ANTERIOR_MIXOLOGIA} por apenas
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-oswald text-4xl sm:text-5xl font-bold text-white tracking-tight">
                      {PRECO_MIXOLOGIA}
                    </span>
                    <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                      à vista
                    </span>
                  </div>
                  <p className="text-xs text-[#C8BEA7] font-medium mt-0.5">
                    ou em até <span className="text-white font-bold">{PRECO_PARCELADO}</span>
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-xl bg-gold/15 border border-gold/30 px-3.5 py-2">
                  <i className="bi bi-gift-fill text-gold text-lg" aria-hidden="true" />
                  <div className="text-[11px] leading-tight">
                    <span className="font-bold text-white block">+ 3 BÔNUS INCLUSOS</span>
                    <span className="text-gold font-medium">Economize R$ 497 hoje</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-2.5">
                <CtaButton href={CHECKOUT_URL} size="lg" className="w-full sm:w-auto">
                  Seja um Mixologista
                </CtaButton>
                <div className="flex items-center gap-2 text-xs font-semibold text-gold">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
                  </span>
                  <span>Vagas limitadas por turma</span>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-[#AAAAAA] pt-3 border-t border-white/5">
                <span className="flex items-center gap-1.5">
                  <i className="bi bi-shield-check text-gold" aria-hidden="true" />
                  Compra Segura Hotmart
                </span>
                <span className="flex items-center gap-1.5">
                  <i className="bi bi-arrow-counterclockwise text-gold" aria-hidden="true" />
                  Garantia de 7 Dias
                </span>
                <span className="flex items-center gap-1.5">
                  <i className="bi bi-play-btn-fill text-gold" aria-hidden="true" />
                  Aulas Práticas 100% Online
                </span>
              </div>
            </motion.div>

            {/* Selos de Confiança */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="grid grid-cols-2 gap-x-4 gap-y-2.5 pt-1 sm:flex sm:flex-wrap sm:gap-5"
            >
              {trustItems.map((item) => (
                <span
                  key={item.label}
                  className="flex items-center gap-2 text-xs font-semibold text-[#C8BEA7] sm:text-sm"
                >
                  <i className={`bi ${item.icon} text-gold`} aria-hidden="true" />
                  {item.label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Coluna Visual — Drinks & Metodologia Mixologia */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="relative order-2 min-w-0 lg:col-span-5 lg:sticky lg:top-24"
          >
            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-gold/40 bg-[#141414] shadow-gold-lg sm:rounded-[2.25rem] lg:max-w-none group">
              <SmartImage
                src="/images/Drinks.jpeg"
                alt="Curso de Mixologia Molecular — JJ Bar e Barista Academy"
                label="Mixologia Molecular — JJ Academy"
                icon="bi-cup-straw"
                className="w-full h-auto block"
                imgClassName="w-full h-auto max-h-[580px] object-cover block transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/25 to-transparent" />
              
              {/* Badge de Destaque Superior */}
              <div className="absolute top-4 left-4 rounded-full border border-gold/50 bg-[#0B0B0B]/85 px-3.5 py-1.5 backdrop-blur-md shadow-lg">
                <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold">
                  <i className="bi bi-star-fill text-gold text-[10px]" aria-hidden="true" />
                  Metodologia Exclusiva
                </span>
              </div>

              {/* Card de Autoridade Inferior */}
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-gold/35 bg-[#141414]/90 p-4 backdrop-blur-md shadow-2xl sm:bottom-6 sm:left-6 sm:right-6">
                <div className="flex items-center gap-3.5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-[#0B0B0B] font-extrabold shadow-gold-sm">
                    <i className="bi bi-award-fill text-xl" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-sm sm:text-base font-bold text-white tracking-wide">
                      JJ Bar e Barista Academy
                    </p>
                    <p className="text-xs text-[#C8BEA7]">
                      Referência Nacional em Coquetelaria Molecular &amp; Bar
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Borda decorativa de luxo */}
            <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2.5rem] border border-gold/20 opacity-70 sm:-inset-4 sm:rounded-[3rem]" />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
