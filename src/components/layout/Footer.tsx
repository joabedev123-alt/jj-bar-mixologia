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
    <footer className="border-t border-border bg-background pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-12 text-muted-foreground sm:pb-16 sm:pt-20">
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary bg-primary/10 font-display text-sm font-bold text-primary">
                JJ
              </span>
              <div className="flex flex-col">
                <span className="font-display text-base font-bold text-foreground">
                  JJ Bar &amp; Barista
                </span>
                <span className="text-[10px] uppercase tracking-widest text-primary font-semibold">
                  Store &amp; Academy
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Escola de formação e especialização em Mixologia Molecular, Coquetelaria Autoral e Empreendedorismo de Alto Padrão.
            </p>
            <a
              href={`https://${SITE.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 cursor-pointer text-sm font-semibold text-primary transition-colors duration-200 hover:text-foreground"
            >
              <i className="bi bi-globe" aria-hidden="true" />
              {SITE.domain}
            </a>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href="#drinks" className="inline-flex cursor-pointer items-center transition-colors duration-200 hover:text-primary">
                  Drinks Moleculares
                </a>
              </li>
              <li>
                <a href="#aprender" className="inline-flex cursor-pointer items-center transition-colors duration-200 hover:text-primary">
                  Grade de Módulos
                </a>
              </li>
              <li>
                <a href="#quem-somos" className="inline-flex cursor-pointer items-center transition-colors duration-200 hover:text-primary">
                  Quem Somos Nós
                </a>
              </li>
              <li>
                <a href="#instrutor" className="inline-flex cursor-pointer items-center transition-colors duration-200 hover:text-primary">
                  Seu Instrutor
                </a>
              </li>
              <li>
                <a href="#faq" className="inline-flex cursor-pointer items-center transition-colors duration-200 hover:text-primary">
                  Dúvidas Frequentes
                </a>
              </li>
              <li>
                <a href="#contato" className="inline-flex cursor-pointer items-center transition-colors duration-200 hover:text-primary">
                  Fale Conosco
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Redes Oficiais Instagram
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {socialLinks.map((social) => (
                <li key={social.handle + social.label}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 transition-colors duration-200 hover:text-primary group"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                      <i className={`bi ${social.icon || 'bi-instagram'} text-xs`} aria-hidden="true" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground font-medium">{social.title}</span>
                      <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{social.label}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Plataforma 100% Online
            </h3>
            <div className="rounded-xl border border-border bg-card p-4 text-xs text-muted-foreground space-y-2">
              <p className="text-foreground font-semibold">
                Segurança &amp; Praticidade
              </p>
              <p>
                Pagamentos processados e garantidos com tecnologia Hotmart. Acesso imediato no seu e-mail após a aprovação.
              </p>
              <div className="pt-2 flex items-center gap-2 text-primary">
                <i className="bi bi-shield-lock-fill text-base" aria-hidden="true" />
                <span className="font-bold text-foreground text-[11px]">Compra 100% Segura &amp; Criptografada</span>
              </div>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              © {new Date().getFullYear()} JJ Bar &amp; Barista Store &amp; Academy. Todos os direitos reservados.
            </p>
          </div>
        </div>

        <div className="divider-gold my-10" />

        <p className="text-xs leading-relaxed text-muted-foreground text-center max-w-4xl mx-auto">
          Resultados profissionais e financeiros variam de acordo com a dedicação individual, aplicação prática das técnicas e contexto de atuação. O treinamento possui finalidade educacional e profissionalizante com foco em excelência e alta coquetelaria.
        </p>
      </Container>
    </footer>
  )
}
