import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { SOCIAL } from '../../lib/constants'

const accounts = [
  { ...SOCIAL.felipe, title: 'Felipe Martins' },
  { ...SOCIAL.academy, title: 'Store & Academy' },
  { ...SOCIAL.eventosBarista, title: 'JJ Bar & Barista' },
  { ...SOCIAL.eventosBar, title: 'JJ Bar Eventos' },
]

export default function SocialProof() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container className="flex flex-col items-center gap-8 sm:gap-10">
        <SectionHeading
          eyebrow="COMUNIDADE &amp; BASTIDORES"
          title="Acompanhe Nosso Trabalho nas Redes"
          subtitle="Veja nossos drinks, bastidores de eventos, aulas e a rotina da nossa escola."
        />

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {accounts.map((account, index) => (
            <Reveal key={account.handle + account.title} delay={index * 0.06}>
              <a
                href={account.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-11 cursor-pointer flex-col items-center gap-3 rounded-2xl border border-[#C6A15B]/30 bg-[#FAF8F3] p-5 text-center shadow-soft transition-all duration-300 hover:border-[#C6A15B] hover:shadow-md sm:p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-gradient text-[#111111] shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <i className={`bi ${account.icon || 'bi-instagram'} text-xl`} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#777777]">
                    {account.title}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#9C7B3C]">
                    {account.handle}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
