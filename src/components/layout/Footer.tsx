import Container from '../ui/Container'
import { SITE, SOCIAL } from '../../lib/constants'

const socialLinks = [
  { ...SOCIAL.felipe, label: '@felipejjbarebarista' },
  { ...SOCIAL.academy, label: '@jjbarebaristastore_academy' },
  { ...SOCIAL.eventosBarista, label: '@jjbarebarista' },
  { ...SOCIAL.eventosBar, label: '@jjbar_eventos' },
]

export default function Footer() {
  return (
    <footer className="border-t border-gold/25 bg-[#070707] pb-28 pt-16 text-[#C8BEA7] sm:pt-20 lg:pb-16">
      <Container>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold bg-gold/10 font-display text-sm font-bold text-gold">
                JJ
              </span>
              <div className="flex flex-col">
                <span className="font-display text-base font-bold text-white">
                  {SITE.name}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gold font-semibold">
                  Mixologia &amp; Bar
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-[#999999]">
              Escola de formação e especialização em Mixologia, Coquetelaria Autoral e Mercado de Alto Padrão.
            </p>
            <a
              href={`https://${SITE.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 cursor-pointer text-sm font-semibold text-gold transition-colors duration-200 hover:text-white"
            >
              <i className="bi bi-globe" aria-hidden="true" />
              {SITE.domain}
            </a>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-sm text-[#AAAAAA]">
              <li>
                <a href="#o-curso" className="inline-flex cursor-pointer items-center transition-colors duration-200 hover:text-gold">
                  O Curso de Mixologia
                </a>
              </li>
              <li>
                <a href="#conteudo" className="inline-flex cursor-pointer items-center transition-colors duration-200 hover:text-gold">
                  Grade de Módulos
                </a>
              </li>
              <li>
                <a href="#bonus" className="inline-flex cursor-pointer items-center transition-colors duration-200 hover:text-gold">
                  3 Bônus Exclusivos
                </a>
              </li>
              <li>
                <a href="#galeria" className="inline-flex cursor-pointer items-center transition-colors duration-200 hover:text-gold">
                  Conheça a JJ Academy
                </a>
              </li>
              <li>
                <a href="#como-acessar" className="inline-flex cursor-pointer items-center transition-colors duration-200 hover:text-gold">
                  Como Funciona o Acesso
                </a>
              </li>
              <li>
                <a href="#faq" className="inline-flex cursor-pointer items-center transition-colors duration-200 hover:text-gold">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Redes Oficiais Instagram
            </h3>
            <ul className="space-y-3 text-sm text-[#AAAAAA]">
              {socialLinks.map((social) => (
                <li key={social.handle + social.label}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 transition-colors duration-200 hover:text-gold group"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/10 text-gold group-hover:bg-gold group-hover:text-black transition-colors duration-200">
                      <i className={`bi ${social.icon || 'bi-instagram'} text-xs`} aria-hidden="true" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs text-[#777777] font-medium">{social.title}</span>
                      <span className="text-sm font-semibold text-white group-hover:text-gold transition-colors">{social.label}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Plataforma 100% Online
            </h3>
            <div className="rounded-xl border border-white/10 bg-[#121212] p-4 text-xs text-[#888888] space-y-2">
              <p className="text-white font-semibold">
                Segurança &amp; Praticidade
              </p>
              <p>
                Pagamentos processados e garantidos com tecnologia Hotmart. Acesso imediato no seu e-mail após a aprovação.
              </p>
              <div className="pt-2 flex items-center gap-2 text-gold">
                <i className="bi bi-shield-lock-fill text-base" aria-hidden="true" />
                <span className="font-bold text-white text-[11px]">Compra 100% Segura &amp; Criptografada</span>
              </div>
            </div>
            <p className="mt-4 text-xs text-[#666666]">
              © {new Date().getFullYear()} JJ Bar e Barista Academy. Todos os direitos reservados.
            </p>
          </div>
        </div>

        <div className="divider-gold my-10" />

        <p className="text-xs leading-relaxed text-[#666666] text-center max-w-4xl mx-auto">
          Resultados profissionais e financeiros variam de acordo com a dedicação individual, aplicação prática das técnicas e contexto de atuação. O treinamento possui finalidade educacional e profissionalizante com foco em excelência e alta coquetelaria.
        </p>
      </Container>
    </footer>
  )
}
