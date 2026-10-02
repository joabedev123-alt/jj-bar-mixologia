import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { FAQ } from '../../lib/constants'

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-[#0B0B0B] py-16 sm:py-20 lg:py-28 relative border-t border-white/5">
      <Container className="flex flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="TIRA-DÚVIDAS OFICIAL"
          title="PERGUNTAS FREQUENTES"
          subtitle="Tire todas as suas dúvidas sobre o formato das aulas, acesso à plataforma e metodologia do curso."
        />

        <div className="w-full max-w-3xl divide-y divide-gold/15 rounded-3xl border border-gold/30 bg-[#121212] shadow-dark-card overflow-hidden">
          {FAQ.map((item, index) => {
            const isOpen = open === index
            return (
              <Reveal key={item.question} delay={index * 0.04}>
                <div className="transition-colors duration-200 hover:bg-[#161616]">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex min-h-14 w-full cursor-pointer items-center justify-between gap-3 px-5 py-5 text-left sm:gap-4 sm:px-7"
                  >
                    <span className="min-w-0 font-display text-sm font-bold uppercase tracking-wide leading-snug text-white sm:text-base">
                      {item.question}
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold border border-gold/30">
                      <i
                        className={`bi bi-chevron-down text-sm transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-white bg-gold' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-6 text-xs sm:text-sm leading-relaxed text-[#C8BEA7] sm:px-7">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
