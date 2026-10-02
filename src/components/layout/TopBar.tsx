export default function TopBar() {
  return (
    <div className="w-full border-b border-gold/30 bg-gradient-to-r from-[#18150D] via-[#2A2111] to-[#18150D] py-2 text-[#F3E8CF]">
      <div className="mx-auto flex max-w-container items-center justify-center gap-2.5 px-4 text-center">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
        </span>
        <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-white sm:text-xs sm:tracking-[0.18em]">
          OFERTA EXCLUSIVA JJ ACADEMY • DE <span className="line-through text-red-400">R$ 497,00</span> POR APENAS <span className="text-gold font-extrabold">R$ 147,00</span> (100% ONLINE)
        </span>
      </div>
    </div>
  )
}
