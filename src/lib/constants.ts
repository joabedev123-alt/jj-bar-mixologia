// ============================================================================
// CONFIGURAÇÃO PRINCIPAL — CURSO DE MIXOLOGIA
// JJ BAR & BARISTA ACADEMY
// ============================================================================

// Link oficial de checkout da Hotmart para o curso de Mixologia
export const CHECKOUT_URL = 'LINK_CHECKOUT_HOTMART_MIXOLOGIA'

// Variáveis de preço (o cliente irá informar os valores posteriormente)
export const PRECO_MIXOLOGIA = 'R$ XXX'
export const PRECO_ANTERIOR_MIXOLOGIA = 'R$ XXX'

export const SITE = {
  name: 'JJ Bar & Barista Academy',
  courseName: 'Curso de Mixologia',
  domain: 'www.jjbarebaristaacademy.com',
  price: PRECO_MIXOLOGIA,
  pricePrevious: PRECO_ANTERIOR_MIXOLOGIA,
}

export const SOCIAL = {
  felipe: {
    handle: '@felipejjbarebarista',
    url: 'https://instagram.com/felipejjbarebarista',
    icon: 'bi-instagram',
    title: 'Felipe Martins',
  },
  academy: {
    handle: '@jjbarebaristastore_academy',
    url: 'https://instagram.com/jjbarebaristastore_academy',
    icon: 'bi-instagram',
    title: 'Store & Academy',
  },
  eventosBarista: {
    handle: '@jjbarebarista',
    url: 'https://instagram.com/jjbarebarista',
    icon: 'bi-instagram',
    title: 'JJ Bar & Barista',
  },
  eventosBar: {
    handle: '@jjbar_eventos',
    url: 'https://instagram.com/jjbar_eventos',
    icon: 'bi-instagram',
    title: 'JJ Bar Eventos',
  },
}

export const NAV_LINKS = [
  { label: 'O Curso', href: '#o-curso' },
  { label: 'O que você aprende', href: '#conteudo' },
  { label: 'Para quem é', href: '#para-quem' },
  { label: 'Professor', href: '#professor' },
  { label: 'FAQ', href: '#faq' },
]

export const PILLARS = [
  {
    title: 'TÉCNICA',
    description: 'Aprenda os fundamentos utilizados na construção de cocktails.',
    icon: 'bi-gear-wide-connected',
  },
  {
    title: 'EQUILÍBRIO',
    description: 'Entenda como diferentes elementos influenciam o resultado final de uma bebida.',
    icon: 'bi-sliders',
  },
  {
    title: 'CRIATIVIDADE',
    description: 'Desenvolva uma nova forma de pensar e criar drinks.',
    icon: 'bi-stars',
  },
  {
    title: 'EXPERIÊNCIA',
    description: 'Entenda como apresentação, aroma, sabor e contexto trabalham juntos.',
    icon: 'bi-gem',
  },
]

export const PAIN_QUESTIONS = [
  'Você consegue identificar por que um drink está muito doce, ácido ou desequilibrado?',
  'Sabe como substituir ingredientes sem destruir a proposta de uma receita?',
  'Consegue criar um cocktail partindo de uma ideia?',
  'Entende como aroma, textura, temperatura e apresentação influenciam a experiência?',
  'Você conseguiria desenvolver um drink autoral?',
]

export const BEFORE_AFTER = {
  before: [
    'Seguir receitas sem entender completamente a lógica.',
    'Combinar ingredientes por tentativa e erro.',
    'Ter dificuldade para corrigir um drink.',
    'Depender sempre de receitas prontas.',
    'Pouca segurança para criar.',
  ],
  after: [
    'Entender fundamentos de equilíbrio.',
    'Analisar ingredientes.',
    'Compreender diferentes técnicas.',
    'Pensar de forma mais criativa.',
    'Desenvolver novas combinações.',
    'Começar a criar cocktails com intenção.',
  ],
}

export const COCKTAIL_ELEMENTS = [
  {
    name: 'BASE',
    role: 'A espinha dorsal alcoólica',
    description: 'Destilados e bebidas que definem a identidade, graduação e estrutura.',
    icon: 'bi-cup-straw',
  },
  {
    name: 'MODIFICADORES',
    role: 'A complexidade e notas de fundo',
    description: 'Licores, vermutes, bitters e infusões que enriquecem o perfil sensorial.',
    icon: 'bi-flower1',
  },
  {
    name: 'DOÇURA',
    role: 'A textura e suavidade',
    description: 'Xaropes simples, complexos, mel e reduções que equilibram as sensações.',
    icon: 'bi-droplet-half',
  },
  {
    name: 'ACIDEZ',
    role: 'O frescor e contraste',
    description: 'Cítricos frescos e soluções ácidas que iluminam os sabores.',
    icon: 'bi-brightness-high',
  },
  {
    name: 'AROMAS',
    role: 'O impacto olfativo',
    description: 'Óleos essenciais, defumações, botânicos e névoas aromáticas.',
    icon: 'bi-wind',
  },
  {
    name: 'TEXTURA',
    role: 'A sensação em boca',
    description: 'Espumas, clarificações, densidades e aveludados na degustação.',
    icon: 'bi-water',
  },
  {
    name: 'DILUIÇÃO',
    role: 'O ponto térmico ideal',
    description: 'A influência da água e do gelo na liberação gradual das notas do drink.',
    icon: 'bi-snow',
  },
  {
    name: 'GARNISH',
    role: 'A finalização estética e sensorial',
    description: 'Elementos visuais e aromáticos que complementam a intenção criativa.',
    icon: 'bi-palette',
  },
]

export const MODULES = [
  {
    number: '01',
    title: 'FUNDAMENTOS DA MIXOLOGIA',
    description: 'Compreenda os princípios que estão por trás da construção de cocktails.',
    icon: 'bi-journal-bookmark',
  },
  {
    number: '02',
    title: 'EQUILÍBRIO DE SABORES',
    description: 'Entenda como doce, ácido, amargo e outros elementos podem trabalhar juntos.',
    icon: 'bi-sliders',
  },
  {
    number: '03',
    title: 'INGREDIENTES',
    description: 'Conheça melhor o papel de diferentes ingredientes na composição de uma bebida.',
    icon: 'bi-egg-fried',
  },
  {
    number: '04',
    title: 'TÉCNICAS DE PREPARO',
    description: 'Entenda diferentes formas de preparação e como cada técnica interfere no resultado.',
    icon: 'bi-gear-wide-connected',
  },
  {
    number: '05',
    title: 'AROMAS E EXPERIÊNCIA SENSORIAL',
    description: 'Observe como aroma, sabor e percepção trabalham em conjunto.',
    icon: 'bi-wind',
  },
  {
    number: '06',
    title: 'TEXTURA, TEMPERATURA E DILUIÇÃO',
    description: 'Entenda elementos que podem transformar completamente a experiência de um cocktail.',
    icon: 'bi-thermometer-half',
  },
  {
    number: '07',
    title: 'APRESENTAÇÃO E GARNISH',
    description: 'Aprenda a pensar na apresentação como parte da experiência.',
    icon: 'bi-gem',
  },
  {
    number: '08',
    title: 'CRIAÇÃO DE COCKTAILS',
    description: 'Comece a aplicar os fundamentos para desenvolver suas próprias combinações.',
    icon: 'bi-stars',
  },
]

export const FOR_WHO_CARDS = [
  {
    title: 'BARTENDERS',
    description: 'Que querem ampliar sua compreensão sobre cocktails.',
    icon: 'bi-cup-straw',
  },
  {
    title: 'INICIANTES',
    description: 'Que querem começar aprendendo fundamentos corretamente.',
    icon: 'bi-compass',
  },
  {
    title: 'PROFISSIONAIS DE EVENTOS',
    description: 'Que desejam ampliar seu repertório.',
    icon: 'bi-calendar-event',
  },
  {
    title: 'APAIXONADOS POR COQUETELARIA',
    description: 'Que querem compreender melhor o universo dos drinks.',
    icon: 'bi-heart',
  },
  {
    title: 'EMPREENDEDORES',
    description: 'Que trabalham ou pretendem trabalhar com experiências relacionadas a bebidas e eventos.',
    icon: 'bi-briefcase',
  },
]

export const APPLICATIONS = [
  { title: 'BARES', icon: 'bi-shop' },
  { title: 'EVENTOS', icon: 'bi-calendar-event' },
  { title: 'RESTAURANTES', icon: 'bi-building' },
  { title: 'HOTÉIS', icon: 'bi-house-heart' },
  { title: 'EXPERIÊNCIAS PRIVADAS', icon: 'bi-people' },
  { title: 'EMPREENDIMENTOS', icon: 'bi-rocket-takeoff' },
  { title: 'DRINKS AUTORAIS', icon: 'bi-stars' },
  { title: 'EVENTOS CORPORATIVOS', icon: 'bi-briefcase' },
]

export const HOW_IT_WORKS = [
  {
    number: '01',
    title: 'FAÇA SUA INSCRIÇÃO',
    description: 'Finalize sua inscrição pelo checkout oficial.',
    icon: 'bi-credit-card',
  },
  {
    number: '02',
    title: 'RECEBA SEU ACESSO',
    description: 'Após a confirmação do pagamento, siga as orientações de acesso à plataforma.',
    icon: 'bi-envelope-check',
  },
  {
    number: '03',
    title: 'COMECE A APRENDER',
    description: 'Acesse o conteúdo e avance pelos módulos do treinamento.',
    icon: 'bi-play-circle',
  },
]

export const FAQ = [
  {
    question: 'O QUE É MIXOLOGIA?',
    answer:
      'Mixologia envolve o estudo e a aplicação de técnicas e conhecimentos relacionados à criação e construção de cocktails.',
  },
  {
    question: 'PRECISO SER BARTENDER?',
    answer:
      'Não necessariamente. O curso pode servir tanto como introdução quanto como complemento para quem já possui contato com o universo do bar.',
  },
  {
    question: 'PRECISO TER EXPERIÊNCIA?',
    answer:
      'Não. O conteúdo deve apresentar os fundamentos necessários para acompanhar o treinamento.',
  },
  {
    question: 'O CURSO É ONLINE?',
    answer:
      'Sim. O conteúdo é disponibilizado através da plataforma definida pela JJ Bar & Barista Academy.',
  },
  {
    question: 'COMO FAÇO MINHA INSCRIÇÃO?',
    answer:
      'Clique em qualquer botão de inscrição e você será direcionado ao checkout oficial.',
  },
  {
    question: 'QUANDO RECEBO O ACESSO?',
    answer:
      'O acesso seguirá as condições da plataforma após a confirmação do pagamento.',
  },
]
