import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { SOCIAL, SOCIAL_PROOF_STATS, TESTIMONIALS } from '../../lib/constants'

const accounts = [
  { ...SOCIAL.felipe, title: 'Felipe Martins', desc: 'Bastidores & Dicas de Coquetelaria' },
  { ...SOCIAL.academy, title: 'Store & Academy', desc: 'Cursos, Equipamentos & Insumos' },
  { ...SOCIAL.eventosBarista, title: 'JJ Bar & Barista', desc: 'Eventos & Produções de Luxo' },
  { ...SOCIAL.eventosBar, title: 'JJ Bar Eventos', desc: 'Grandes Estruturas & Formações' },
]

export default function SocialProof() {
  return (
    <section className="bg-[#0B0B0B] py-16 sm:py-20 lg:py-28 border-t border-white/5 relative">
      <Container className="flex flex-col items-center gap-12 sm:gap-16">
        <SectionHeading
          eyebrow="RECONHECIMENTO &amp; RESULTADOS"
          title="O QUE DIZEM NOSSOS ALUNOS E O MERCADO."
          subtitle="Veja como a metodologia da JJ Bar e Barista Academy tem impactado a trajetória profissional de bartenders em todo o Brasil."
        />

        {/* Números da JJ Academy */}
        <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-4 sm:gap-6">
          {SOCIAL_PROOF_STATS.map((stat, idx) => (
            <Reveal key={stat.value} delay={idx * 0.08}>
              <div className="flex flex-col items-center justify-center rounded-3xl border border-gold/30 bg-gradient-to-b from-[#181818] to-[#111111] p-6 text-center shadow-dark-card hover:border-gold transition-colors">
                <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gold tracking-tight">
                  {stat.value}
                </span>
                <p className="mt-2 text-xs sm:text-sm font-semibold text-[#E7D5A7]">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Depoimentos dos Alunos */}
        <div className="w-full">
          <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-gold mb-6">
            Histórias de Transformação de Alunos
          </p>
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((dep, idx) => (
              <Reveal key={dep.name} delay={idx * 0.1}>
                <div className="flex h-full flex-col justify-between rounded-3xl border border-gold/30 bg-gradient-to-b from-[#1A1813] via-[#141414] to-[#0E0E0E] p-6 sm:p-7 shadow-dark-card hover:border-gold/60 transition-all duration-300">
                  <div>
                    {/* Estrelas douradas */}
                    <div className="flex items-center gap-1 text-gold text-sm mb-4">
                      {Array.from({ length: dep.stars }).map((_, i) => (
                        <i key={i} className="bi bi-star-fill" aria-hidden="true" />
                      ))}
                    </div>
                    
                    <p className="text-xs sm:text-sm leading-relaxed text-[#D8CFBC] italic">
                      "{dep.text}"
                    </p>
                  </div>

                  <div className="mt-6 border-t border-gold/20 pt-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/20 border border-gold/40 font-display text-sm font-bold text-gold">
                      {dep.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-display text-sm font-bold text-white leading-tight">
                        {dep.name}
                      </p>
                      <p className="text-[11px] text-gold font-medium">
                        {dep.role} • {dep.city}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Redes Sociais Oficiais */}
        <div className="w-full">
          <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-gold mb-6">
            Acompanhe a Rotina e Bastidores no Instagram
          </p>
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {accounts.map((account, index) => (
              <Reveal key={account.handle + account.title} delay={index * 0.06}>
                <a
                  href={account.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-12 cursor-pointer flex-col items-center gap-3 rounded-2xl border border-gold/25 bg-[#141414] p-5 text-center shadow-dark-card transition-all duration-300 hover:border-gold hover:bg-[#181818]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold border border-gold/30 shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <i className={`bi ${account.icon || 'bi-instagram'} text-xl`} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-gold">
                      {account.title}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-white group-hover:text-gold transition-colors">
                      {account.handle}
                    </p>
                    <p className="mt-1 text-[11px] text-[#888888]">
                      {account.desc}
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
