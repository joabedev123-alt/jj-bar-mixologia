import { motion } from 'framer-motion'
import { CHECKOUT_URL, PRECO_MIXOLOGIA } from '../../lib/constants'

export default function StickyMobileCta() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.4 }}
      className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/40 bg-[#0B0B0B]/95 px-4 py-3 backdrop-blur-md shadow-2xl lg:hidden"
      style={{
        paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))',
        paddingLeft: 'max(1rem, env(safe-area-inset-left))',
        paddingRight: 'max(1rem, env(safe-area-inset-right))',
      }}
    >
      <a
        href={CHECKOUT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-13 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-gold-gradient text-sm font-extrabold uppercase tracking-wider text-[#0B0B0B] shadow-gold active:scale-[0.98] transition-all duration-150 border border-[#FFF1C5]/70"
      >
        <i className="bi bi-sparkles text-base" aria-hidden="true" />
        <span>SEJA UM MIXOLOGISTA • {PRECO_MIXOLOGIA}</span>
      </a>
    </motion.div>
  )
}
