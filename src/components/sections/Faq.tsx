import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { FAQ } from '../../lib/constants'

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-[#FAF8F3] py-16 sm:py-20 lg:py-28">
      <Container className="flex flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="TIRA-DÚVIDAS"
          title="DÚVIDAS FREQUENTES"
          subtitle="Encontre respostas para as principais dúvidas sobre o curso e seu formato de acesso."
        />

        <div className="w-full max-w-2xl divide-y divide-[#C6A15B]/15 rounded-2xl border border-[#C6A15B]/30 bg-white shadow-soft">
          {FAQ.map((item, index) => {
            const isOpen = open === index
            return (
              <Reveal key={item.question} delay={index * 0.04}>
                <div>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex min-h-14 w-full cursor-pointer items-center justify-between gap-3 px-5 py-5 text-left transition-colors duration-200 hover:bg-[#FAF8F3]/50 sm:gap-4 sm:px-7"
                  >
                    <span className="min-w-0 text-sm font-semibold uppercase tracking-wide leading-snug text-[#111111] sm:text-base">
                      {item.question}
                    </span>
                    <i
                      className={`bi bi-chevron-down shrink-0 text-[#9C7B3C] transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
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
                        <p className="px-5 pb-5 text-sm leading-relaxed text-[#444444] sm:px-7 sm:text-base">
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
