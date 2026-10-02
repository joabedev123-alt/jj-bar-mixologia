import { motion } from 'framer-motion'
import Container from '../ui/Container'
import CtaButton from '../ui/CtaButton'
import SmartImage from '../ui/SmartImage'
import { CHECKOUT_URL, PRECO_MIXOLOGIA, PRECO_ANTERIOR_MIXOLOGIA, PRECO_PARCELADO, SITE } from '../../lib/constants'

const trustItems = [
  { icon: 'bi-gem', label: 'Mixologia Autoral' },
  { icon: 'bi-sliders', label: 'Equilíbrio Sensorial' },
  { icon: 'bi-patch-check', label: 'Certificado JJ Academy' },
  { icon: 'bi-camera-reels', label: 'Aulas Práticas 100% Online' },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-[#0B0B0B] via-[#121212] to-[#0D0D0D] pb-16 pt-8 sm:pb-24 sm:pt-14 lg:pb-32 lg:pt-16">
      {/* Luz ambiente dourada de fundo */}
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[550px] w-[550px] rounded-full opacity-35 blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.4) 0%, rgba(212,175,55,0.05) 60%, transparent 80%)' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-[-10%] h-[450px] w-[450px] rounded-full opacity-20 blur-[100px]"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Grid Pattern sutil */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.03]" 
        style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Coluna de Copy e Oferta */}
          <div className="order-1 flex min-w-0 flex-col items-start gap-6 lg:col-span-7">
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex max-w-full items-center gap-2 rounded-full border border-gold/50 bg-gradient-to-r from-gold/15 via-gold/10 to-transparent px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#FBD969] shadow-gold-sm"
            >
              <i className="bi bi-stars text-gold" aria-hidden="true" />
              <span>JJ BAR E BARISTA ACADEMY • FORMAÇÃO OFICIAL</span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="flex flex-col gap-3"
            >
              <h1 className="break-words font-display text-[2.35rem] font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-[3.5rem] tracking-tight">
                TRANSFORME INGREDIENTES EM{' '}
                <span className="text-gradient-gold drop-shadow-sm">EXPERIÊNCIAS.</span>
              </h1>
              <p className="font-display text-lg font-semibold italic text-[#E7D5A7] sm:text-2xl">
                Aprenda a criar cocktails que vão muito além de uma simples receita.
              </p>
            </motion.div>

            {/* Subtítulo Copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="max-w-xl text-[15px] leading-relaxed text-[#C8BEA7] sm:text-lg"
            >
              Descubra os fundamentos químicos, técnicas profissionais e conceitos sensoriais por trás da coquetelaria autoral. Domine o equilíbrio de sabores, aromas, texturas e crie suas próprias receitas exclusivas com a metodologia da maior escola de coquetelaria e cafeteria.
            </motion.p>

            {/* Badges de Destaque */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="flex w-full flex-wrap items-center gap-2.5 sm:gap-3"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-[#171717] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-sm">
                <i className="bi bi-globe2 text-gold" aria-hidden="true" />
                100% Online &amp; Prático
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-[#171717] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-sm">
                <i className="bi bi-lightning-charge-fill text-gold" aria-hidden="true" />
                Acesso Imediato
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-[#171717] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-sm">
                <i className="bi bi-award-fill text-gold" aria-hidden="true" />
                Certificado Reconhecido
              </span>
            </motion.div>

            {/* Box de Oferta Dark & Gold */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full rounded-2xl border border-gold/40 bg-gradient-to-br from-[#1A1813] via-[#141414] to-[#0E0E0E] p-6 shadow-dark-card relative overflow-hidden"
            >
              <div className="pointer-events-none absolute top-0 right-0 h-32 w-32 bg-gold/10 rounded-full blur-2xl" />
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5 pb-5 border-b border-gold/20">
                <div>
                  <p className="text-xs text-[#888888] font-medium line-through">
                    De {PRECO_ANTERIOR_MIXOLOGIA} por apenas
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
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

              <div>
                <CtaButton href={CHECKOUT_URL} size="lg" className="w-full sm:w-auto">
                  {SITE.ctaText}
                </CtaButton>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-[#AAAAAA]">
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
                  Aulas Práticas em HD
                </span>
              </div>
            </motion.div>

            {/* Itens de Confiança */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="grid grid-cols-2 gap-x-4 gap-y-3 pt-2 sm:flex sm:flex-wrap sm:gap-6"
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

          {/* Coluna da Imagem / Banner Mixologia */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative order-2 min-w-0 lg:col-span-5"
          >
            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-gold/40 bg-[#141414] shadow-gold-lg sm:rounded-[2.25rem] lg:max-w-none group">
              <SmartImage
                src="/images/Drinks.jpeg"
                alt="Curso de Mixologia — JJ Bar e Barista Academy"
                label="Curso de Mixologia — JJ Academy"
                icon="bi-cup-straw"
                className="w-full h-auto block"
                imgClassName="w-full h-auto max-h-[580px] object-cover block transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/20 to-transparent" />
              
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
                      Referência em Formação de Coquetelaria e Bar
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Borda decorativa de luxo ao redor */}
            <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2.5rem] border border-gold/20 opacity-70 sm:-inset-4 sm:rounded-[3rem]" />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
