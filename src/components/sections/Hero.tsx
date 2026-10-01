import { motion } from 'framer-motion'
import Container from '../ui/Container'
import CtaButton from '../ui/CtaButton'
import SmartImage from '../ui/SmartImage'
import { CHECKOUT_URL, PRECO_MIXOLOGIA, PRECO_ANTERIOR_MIXOLOGIA } from '../../lib/constants'

const trustItems = [
  { icon: 'bi-gem', label: 'Mixologia Autoral' },
  { icon: 'bi-sliders', label: 'Equilíbrio Sensorial' },
  { icon: 'bi-patch-check', label: 'Formação Completa' },
  { icon: 'bi-award', label: 'Experiência de Mercado' },
]

export default function Hero() {
  const showPrice = PRECO_MIXOLOGIA && !PRECO_MIXOLOGIA.includes('XXX')

  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-white via-[#FAF8F3] to-[#F7F4EC] pb-14 pt-8 sm:pb-20 sm:pt-14 lg:pb-28 lg:pt-16">
      <div
        className="pointer-events-none absolute -top-32 right-[-10%] h-[460px] w-[460px] rounded-full opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.2) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Lado da copy */}
          <div className="order-1 flex min-w-0 flex-col items-start gap-5 sm:gap-6">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#C6A15B]/40 bg-[#C6A15B]/10 px-3 py-1.5 text-[10px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-[#9C7B3C] sm:px-4 sm:text-xs sm:tracking-[0.2em]"
            >
              <i className="bi bi-stars" aria-hidden="true" />
              CURSO COMPLETO DE MIXOLOGIA
            </motion.span>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="flex flex-col gap-2"
            >
              <h1 className="break-words text-[2.15rem] font-bold leading-[1.08] text-[#111111] sm:text-5xl lg:text-[3.3rem]">
                TRANSFORME INGREDIENTES EM{' '}
                <span className="text-gradient-gold">EXPERIÊNCIAS.</span>
              </h1>
              <p className="font-display text-lg font-semibold italic text-[#9C7B3C] sm:text-2xl">
                APRENDA A CRIAR DRINKS QUE VÃO ALÉM DE UMA RECEITA.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="max-w-xl text-[15px] leading-relaxed text-[#333333] sm:text-lg"
            >
              Descubra os fundamentos, técnicas e conceitos que estão por trás da criação de cocktails equilibrados, criativos e profissionais. Aprenda a compreender sabores, aromas, texturas, ingredientes e combinações para começar a desenvolver suas próprias criações.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="flex w-full flex-wrap items-center gap-2.5 sm:gap-3"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C6A15B]/30 bg-white/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#333333]">
                <i className="bi bi-globe2 text-[#9C7B3C]" aria-hidden="true" />
                100% Online
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C6A15B]/30 bg-white/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#333333]">
                <i className="bi bi-lightning-charge text-[#9C7B3C]" aria-hidden="true" />
                Acesso Imediato
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C6A15B]/30 bg-white/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#333333]">
                <i className="bi bi-award text-[#9C7B3C]" aria-hidden="true" />
                Certificado JJ Academy
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full rounded-2xl border border-[#C6A15B]/35 bg-white/90 p-5 shadow-soft sm:p-6"
            >
              {showPrice && (
                <div className="mb-4">
                  {PRECO_ANTERIOR_MIXOLOGIA && !PRECO_ANTERIOR_MIXOLOGIA.includes('XXX') && (
                    <p className="text-sm text-[#777777] line-through">
                      De {PRECO_ANTERIOR_MIXOLOGIA}
                    </p>
                  )}
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9C7B3C]">
                    Por apenas
                  </p>
                  <p className="font-display text-5xl font-extrabold text-[#111111] sm:text-6xl">
                    {PRECO_MIXOLOGIA}
                  </p>
                </div>
              )}

              <div>
                <CtaButton href={CHECKOUT_URL} size="lg" className="w-full sm:w-auto">
                  QUERO APRENDER MIXOLOGIA
                </CtaButton>
              </div>
              <p className="mt-3 flex items-center gap-1.5 text-xs leading-relaxed text-[#666666]">
                <i className="bi bi-shield-check text-[#9C7B3C]" aria-hidden="true" />
                Curso online • Acesso após confirmação da inscrição
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="grid grid-cols-2 gap-x-4 gap-y-2.5 pt-2 sm:flex sm:flex-wrap sm:gap-6"
            >
              {trustItems.map((item) => (
                <span
                  key={item.label}
                  className="flex items-center gap-2 text-xs font-medium text-[#444444] sm:text-sm"
                >
                  <i className={`bi ${item.icon} text-[#9C7B3C]`} aria-hidden="true" />
                  {item.label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Lado da Imagem Premium */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative order-2 min-w-0"
          >
            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-[#C6A15B]/35 shadow-soft sm:rounded-[2rem] lg:max-w-none">
              <SmartImage
                src="/images/Drinks.jpeg"
                alt="Mixologia JJ Bar & Barista Academy — Drinks e Cocktails Sofisticados"
                label="Mixologia JJ Bar & Barista Academy"
                icon="bi-cup-straw"
                className="w-full h-auto block"
                imgClassName="w-full h-auto max-h-[560px] object-cover block"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Badge de autoridade flutuante sobre a imagem */}
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-white/90 p-3.5 backdrop-blur-md shadow-lg sm:bottom-6 sm:left-6 sm:right-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-[#111111] font-bold">
                    <i className="bi bi-award-fill text-lg" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-sm font-bold text-[#111111] sm:text-base">
                      JJ Bar &amp; Barista Academy
                    </p>
                    <p className="text-xs text-[#555555]">
                      Metodologia prática e sensorial de criação de cocktails
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -inset-2 -z-10 rounded-[1.5rem] border border-[#C6A15B]/20 sm:-inset-4 sm:rounded-[2.5rem]" />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
