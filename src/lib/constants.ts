// ============================================================================
// CONFIGURAÃ‡ÃƒO PRINCIPAL â€” CURSO DE MIXOLOGIA
// JJ BAR E BARISTA ACADEMY
// ============================================================================

// Link oficial de checkout da Hotmart para o curso de Mixologia
export const CHECKOUT_URL = 'https://pay.hotmart.com/LINK_HOTMART_MIXOLOGIA'

// VariÃ¡veis de preÃ§o da oferta oficial
export const PRECO_MIXOLOGIA = 'R$ 147,00'
export const PRECO_ANTERIOR_MIXOLOGIA = 'R$ 2.123,00'
export const PRECO_PARCELADO = '12x de R$ 14,76'

export const SITE = {
  name: 'JJ Bar e Barista Academy',
  courseName: 'Curso de Mixologia Molecular',
  domain: 'www.jjbarebaristaacademy.com',
  price: PRECO_MIXOLOGIA,
  pricePrevious: PRECO_ANTERIOR_MIXOLOGIA,
  installments: PRECO_PARCELADO,
  ctaText: 'Seja um mixologista',
}

export const SOCIAL = {
  felipe: {
    handle: '@felipemartins.barebarista',
    url: 'https://instagram.com/felipemartins.barebarista',
    icon: 'bi-instagram',
    title: 'Felipe Martins',
  },
  academy: {
    handle: '@jjbarebaristastore_academy',
    url: 'https://instagram.com/jjbarebaristastore_academy',
    icon: 'bi-instagram',
    title: 'Store e Academy',
  },
  eventosBarista: {
    handle: '@jjbarebarista',
    url: 'https://instagram.com/jjbarebarista',
    icon: 'bi-instagram',
    title: 'Eventos Barista',
  },
  eventosBar: {
    handle: '@jjbar_eventos',
    url: 'https://instagram.com/jjbar_eventos',
    icon: 'bi-instagram',
    title: 'Eventos de Bar',
  },
  youtube: {
    handle: '@jjbarebarista',
    url: 'https://www.youtube.com/@jjbarebarista',
    icon: 'bi-youtube',
    title: 'Canal no YouTube',
  },
}

// Lista oficial de redes sociais exibida no Contato e no Footer
export const SOCIAL_LINKS = [
  SOCIAL.felipe,
  SOCIAL.academy,
  SOCIAL.eventosBarista,
  SOCIAL.eventosBar,
  SOCIAL.youtube,
].filter((social) => social.url)

export const NAV_LINKS = [
  { label: 'O Curso', href: '#o-curso' },
  { label: 'Grade', href: '#conteudo' },
  { label: 'BÃ´nus', href: '#bonus' },
  { label: 'A Academy', href: '#galeria' },
  { label: 'Como Acessar', href: '#como-acessar' },
  { label: 'Professor', href: '#professor' },
  { label: 'FAQ', href: '#faq' },
]

export const PILLARS = [
  {
    title: 'TÃ‰CNICA PURA',
    description: 'Aprenda os fundamentos profissionais utilizados na construÃ§Ã£o, preparo e manipulaÃ§Ã£o de cocktails de alto padrÃ£o.',
    icon: 'bi-gear-wide-connected',
  },
  {
    title: 'EQUILÃBRIO SENSORIAL',
    description: 'Domine a precisÃ£o entre acidez, doÃ§ura, amargor, teor alcoÃ³lico e densidade para criar coquetÃ©is harmoniosos.',
    icon: 'bi-sliders',
  },
  {
    title: 'CRIATIVIDADE AUTORAL',
    description: 'Desenvolva sua prÃ³pria metodologia de criaÃ§Ã£o, combinando insumos, botÃ¢nicos e aromas com intenÃ§Ã£o artÃ­stica.',
    icon: 'bi-stars',
  },
  {
    title: 'EXPERIÃŠNCIA COMPLETA',
    description: 'Entenda como estÃ©tica, textura, temperatura, aromatizaÃ§Ã£o e garnish transformam um drink em uma experiÃªncia inesquecÃ­vel.',
    icon: 'bi-gem',
  },
]

export const PAIN_QUESTIONS = [
  'VocÃª consegue identificar por que um drink estÃ¡ muito doce, Ã¡cido ou desequilibrado?',
  'Sabe como substituir ingredientes sem destruir a proposta original da receita?',
  'Consegue criar um cocktail inÃ©dito partindo de um conceito ou memÃ³ria gustativa?',
  'Entende como aroma, textura, temperatura e diluiÃ§Ã£o influenciam a experiÃªncia do cliente?',
  'VocÃª tem seguranÃ§a tÃ©cnica para desenvolver uma carta autoral de bebidas lucrativa?',
]

export const BEFORE_AFTER = {
  before: [
    'Ficar preso a receitas prontas da internet sem entender a lÃ³gica.',
    'Combinar bebidas e xaropes apenas por tentativa e erro.',
    'Ter dificuldade em corrigir ou balancear um drink que deu errado.',
    'Sentir inseguranÃ§a na hora de criar coquetÃ©is autorais.',
    'NÃ£o saber precificar nem calcular o custo de cada dose.',
  ],
  after: [
    'Dominar os fundamentos matemÃ¡ticos e sensoriais do equilÃ­brio de sabores.',
    'Analisar a quÃ­mica e a funÃ§Ã£o de cada ingrediente no coquetel.',
    'Compreender tÃ©cnicas avanÃ§adas de preparo, texturizaÃ§Ã£o e infusÃ£o.',
    'Criar receitas autorais sofisticadas com identidade e intenÃ§Ã£o.',
    'Ganhar autoridade no mercado de bar, coquetelaria e eventos.',
    'Saber precificar, divulgar e monetizar suas criaÃ§Ãµes.',
  ],
}

export const COCKTAIL_ELEMENTS = [
  {
    name: 'BASE ALCOÃ“LICA',
    role: 'A espinha dorsal do drink',
    description: 'Destilados e fermentados que determinam o carÃ¡ter, teor alcoÃ³lico e estrutura primÃ¡ria.',
    icon: 'bi-cup-straw',
  },
  {
    name: 'MODIFICADORES',
    role: 'Complexidade e profundidade',
    description: 'Licores, vermutes, bitters, amaros e infusÃµes que conferem camadas sensoriais Ãºnicas.',
    icon: 'bi-flower1',
  },
  {
    name: 'AGENTE DE DOÃ‡URA',
    role: 'Corpo e maciez',
    description: 'Xaropes clÃ¡ssicos e artesanais, mÃ©is, licores doces e reduÃ§Ãµes que equilibram as forÃ§as do drink.',
    icon: 'bi-droplet-half',
  },
  {
    name: 'AGENTE DE ACIDEZ',
    role: 'Frescor e contraste',
    description: 'CÃ­tricos frescos, soluÃ§Ãµes Ã¡cidas e vinagres botÃ¢nicos que iluminam e dinamizam o paladar.',
    icon: 'bi-brightness-high',
  },
  {
    name: 'AROMAS E Ã“LEOS',
    role: 'O impacto olfativo imediato',
    description: 'Ã“leos essenciais de cÃ­tricos, defumaÃ§Ãµes, nÃ©voas e botÃ¢nicos volÃ¡teis que despertam a memÃ³ria.',
    icon: 'bi-wind',
  },
  {
    name: 'TEXTURA E CORPO',
    role: 'SensaÃ§Ã£o tÃ¡til aveludada',
    description: 'Espumas, clarificaÃ§Ãµes, densidades, albuminas e tÃ©cnicas que proporcionam cremosidade.',
    icon: 'bi-water',
  },
  {
    name: 'DILUIÃ‡ÃƒO E TEMPO TÃ‰RMICO',
    role: 'HarmonizaÃ§Ã£o hÃ­drica ideal',
    description: 'O papel essencial do gelo cristalino e do controle de Ã¡gua na liberaÃ§Ã£o gradual dos aromas.',
    icon: 'bi-snow',
  },
  {
    name: 'GARNISH E APRESENTAÃ‡ÃƒO',
    role: 'A finalizaÃ§Ã£o estÃ©tica e sensorial',
    description: 'DecoraÃ§Ãµes funcionais, taÃ§as exclusivas e guarniÃ§Ãµes que complementam a proposta criativa.',
    icon: 'bi-palette',
  },
]

export const MODULES = [
  {
    number: '01',
    title: 'FUNDAMENTOS DA MIXOLOGIA MODERNA',
    description: 'Compreenda a histÃ³ria, conceitos e os princÃ­pios quÃ­micos e sensoriais por trÃ¡s da coquetelaria avanÃ§ada.',
    icon: 'bi-journal-bookmark',
    highlights: ['HistÃ³ria e evoluÃ§Ã£o do bar', 'DiferenÃ§a entre Bartender e Mixologista', 'Mise en place profissional'],
  },
  {
    number: '02',
    title: 'EQUILÃBRIO & HARMONIA SENSORIAL',
    description: 'Domine a proporÃ§Ã£o perfeita entre doÃ§ura, acidez, amargor, umami e potÃªncia alcoÃ³lica em qualquer cocktail.',
    icon: 'bi-sliders',
    highlights: ['A roda de sabores', 'Balanceamento de coquetÃ©is clÃ¡ssicos', 'Como corrigir drinks desequilibrados'],
  },
  {
    number: '03',
    title: 'INGREDIENTES & ALQUIMIA DE INSUMOS',
    description: 'Aprenda a selecionar, infusionar e produzir seus prÃ³prios insumos artesanais (xaropes, cordiais e tinturas).',
    icon: 'bi-egg-fried',
    highlights: ['Xaropes simples e compostos', 'InfusÃµes a frio e sous-vide', 'Bitters e aromatizadores'],
  },
  {
    number: '04',
    title: 'TÃ‰CNICAS PROFISSIONAIS DE PREPARO',
    description: 'Domine mexido, batido, montado, thrown (jogada) e as diferenÃ§as no controle de aeraÃ§Ã£o e resfriamento.',
    icon: 'bi-gear-wide-connected',
    highlights: ['TÃ©cnica de Throwing', 'Batimento com gelo seco vs gelo cubo', 'Filtragens e clarificaÃ§Ãµes'],
  },
  {
    number: '05',
    title: 'AROMAS, VOLATILIDADE & MEMÃ“RIA OLFATIVA',
    description: 'Explore o universo dos Ã³leos essenciais, defumaÃ§Ãµes, nÃ©voas e como o olfato comanda 80% do sabor percebido.',
    icon: 'bi-wind',
    highlights: ['Uso de defumadores de bar', 'ExtraÃ§Ã£o de Ã³leos cÃ­tricos', 'ExperiÃªncias multissensoriais'],
  },
  {
    number: '06',
    title: 'TEXTURA, TEMPERATURA & CIÃŠNCIA DO GELO',
    description: 'Aprenda sobre a termodinÃ¢mica do gelo cristalino, diluiÃ§Ã£o milimÃ©trica, espumas e texturas aveludadas.',
    icon: 'bi-thermometer-half',
    highlights: ['ProduÃ§Ã£o de gelo translÃºcido', 'Espumas com sifÃ£o culinÃ¡rio', 'Densidade e camadas de lÃ­quidos'],
  },
  {
    number: '07',
    title: 'GARNISH, CRISTALERIA & APRESENTAÃ‡ÃƒO DE LUXO',
    description: 'ApresentaÃ§Ã£o visual que valoriza o produto e encanta clientes exigentes em bares e eventos de alto padrÃ£o.',
    icon: 'bi-gem',
    highlights: ['Escolha correta de taÃ§as', 'Garnish funcional e sustentÃ¡vel', 'Fotografia e estÃ©tica de drinks'],
  },
  {
    number: '08',
    title: 'CRIAÃ‡ÃƒO DE DRINKS AUTORAIS & CARTAS',
    description: 'O mÃ©todo passo a passo para tirar ideias da mente e criar um cocktail autoral do zero atÃ© a comercializaÃ§Ã£o.',
    icon: 'bi-stars',
    highlights: ['Metodologia criativa JJ Academy', 'Desenvolvimento de conceitos', 'Montagem de menu para bares e eventos'],
  },
]

export const BONUSES = [
  {
    number: 'BÃ”NUS 01',
    title: 'Como Transformar Mixologia em NegÃ³cio',
    subtitle: 'Venda Consultorias, Crie Cartas Autorais e Estruture Eventos Lucrativos',
    description: 'Um guia prÃ¡tico e direto para vocÃª monetizar suas habilidades no mercado, conquistar clientes corporativos, prestar consultoria para bares e restaurantes e aumentar seu faturamento.',
    value: 'R$ 197,00',
    icon: 'bi-briefcase-fill',
    tag: 'EXCLUSIVO',
  },
  {
    number: 'BÃ”NUS 02',
    title: 'Planilha de PrecificaÃ§Ã£o Inteligente de Drinks',
    subtitle: 'Calcule CMV, Custo por Dose e Margem de Lucro com PrecisÃ£o',
    description: 'Ferramenta pronta em Excel/Google Sheets para calcular o custo exato de cada ingrediente, dose, perda, guarniÃ§Ã£o e definir o preÃ§o final de venda para lucrar sem prejuÃ­zos.',
    value: 'R$ 147,00',
    icon: 'bi-calculator-fill',
    tag: 'FERRAMENTA PRÃTICA',
  },
  {
    number: 'BÃ”NUS 03',
    title: 'E-book Exclusivo: 10 Drinks Moleculares Autorais',
    subtitle: 'EsferificaÃ§Ãµes, Espumas EstÃ¡veis e TÃ©cnicas AvanÃ§adas Passo a Passo',
    description: 'Apostila ilustrada com 10 receitas autorais completas utilizando tÃ©cnicas de coquetelaria molecular explicadas em detalhes para impressionar qualquer cliente.',
    value: 'R$ 153,00',
    icon: 'bi-book-half',
    tag: 'RECEITUÃRIO AUTORAL',
  },
]

export const ACCESS_STEPS = [
  {
    number: '01',
    title: 'InscriÃ§Ã£o Segura & Imediata',
    description: 'Ao clicar no botÃ£o, vocÃª Ã© direcionado para a plataforma de pagamento criptografada com total seguranÃ§a.',
    icon: 'bi-shield-check',
  },
  {
    number: '02',
    title: 'Recebimento InstantÃ¢neo no E-mail',
    description: 'Assim que o pagamento for aprovado, seu login e senha exclusivos chegam diretamente na sua caixa de entrada.',
    icon: 'bi-envelope-paper-heart',
  },
  {
    number: '03',
    title: 'Aulas 100% Online em Alta DefiniÃ§Ã£o',
    description: 'Acesse de qualquer dispositivo (celular, tablet, computador ou Smart TV) e assista quantas vezes quiser, no seu ritmo.',
    icon: 'bi-camera-reels',
  },
  {
    number: '04',
    title: 'Certificado JJ Academy & Suporte',
    description: 'Conclua os mÃ³dulos no seu tempo e emita o certificado oficial assinado pela JJ Bar e Barista Academy.',
    icon: 'bi-patch-check',
  },
]

export const FOR_WHO_CARDS = [
  {
    title: 'BARTENDERS & BARTENDERS DE EVENTOS',
    description: 'Que querem subir de nÃ­vel, parar de apenas reproduzir receitas e comeÃ§ar a criar cartas autorais requisitadas.',
    icon: 'bi-cup-straw',
  },
  {
    title: 'INICIANTES & APAIXONADOS',
    description: 'Que desejam aprender do zero com o mÃ©todo correto e seguro, sem vÃ­cios e com base tÃ©cnica sÃ³lida.',
    icon: 'bi-compass',
  },
  {
    title: 'DONOS DE BARES & GESTORES',
    description: 'Que precisam treinar suas equipes, padronizar receitas, calcular custos e aumentar a lucratividade do bar.',
    icon: 'bi-shop',
  },
  {
    title: 'BARISTAS & MIXOLOGISTAS DE CAFÃ‰',
    description: 'Que buscam integrar a coquetelaria de ponta com coquetÃ©is Ã  base de cafÃ© (Coffee Cocktails) e hospitalidade.',
    icon: 'bi-cup-hot',
  },
  {
    title: 'CONSULTORES & EMPREENDEDORES',
    description: 'Que querem estruturar projetos de coquetelaria, workshops corporativos e serviÃ§os de alto ticket.',
    icon: 'bi-briefcase',
  },
]

export const APPLICATIONS = [
  { title: 'BARES & COCKTAIL BARS', icon: 'bi-shop' },
  { title: 'EVENTOS SOCIAIS & CASAMENTOS', icon: 'bi-calendar-event' },
  { title: 'RESTAURANTES DE ALTA GASTRONOMIA', icon: 'bi-building' },
  { title: 'HOTELARIA DE LUXO', icon: 'bi-house-heart' },
  { title: 'EXPERIÃŠNCIAS PRIVADAS & GUEST BAR', icon: 'bi-people' },
  { title: 'CONSULTORIAS DE MENUS', icon: 'bi-rocket-takeoff' },
  { title: 'DRINKS AUTORAIS EXCLUSIVOS', icon: 'bi-stars' },
  { title: 'EVENTOS CORPORATIVOS VIP', icon: 'bi-briefcase' },
]

export const HOW_IT_WORKS = [
  {
    number: '01',
    title: 'FAÃ‡A SUA INSCRIÃ‡ÃƒO',
    description: 'Aproveite o valor promocional de R$ 147,00 pelo checkout oficial e seguro da Hotmart.',
    icon: 'bi-credit-card',
  },
  {
    number: '02',
    title: 'ACESSO IMEDIATO',
    description: 'VocÃª recebe seus dados de login no e-mail instantaneamente apÃ³s a confirmaÃ§Ã£o da compra.',
    icon: 'bi-envelope-check',
  },
  {
    number: '03',
    title: 'ESTUDE NO SEU TEMPO',
    description: 'Assista Ã s aulas prÃ¡ticas e teÃ³ricas 100% online quando e onde quiser, com suporte a dÃºvidas.',
    icon: 'bi-play-circle',
  },
]

export const SOCIAL_PROOF_STATS = [
  { value: '+5.000', label: 'Alunos Formados no Brasil e Exterior' },
  { value: '15+ Anos', label: 'HistÃ³ria e VivÃªncia Real no Universo de Bar' },
  { value: '100% Online', label: 'Aulas PrÃ¡ticas Detalhadas e Passo a Passo' },
  { value: '4.9 / 5.0', label: 'Ãndice de SatisfaÃ§Ã£o e AvaliaÃ§Ã£o dos Alunos' },
]

export const TESTIMONIALS = [
  {
    name: 'Lucas MendonÃ§a',
    role: 'Bartender & Chefe de Bar',
    city: 'SÃ£o Paulo - SP',
    text: 'O curso de Mixologia da JJ Academy mudou totalmente a forma como penso um drink. Deixei de ser aquele cara que sÃ³ decora receita e passei a criar os coquetÃ©is da carta do bar onde trabalho. O retorno financeiro e reconhecimento vieram rÃ¡pido!',
    stars: 5,
  },
  {
    name: 'Camila Albuquerque',
    role: 'Empreendedora de Bar para Eventos',
    city: 'Curitiba - PR',
    text: 'A metodologia do Felipe e da equipe JJ Ã© impecÃ¡vel. As aulas prÃ¡ticas online mostram cada detalhe de Ã¢ngulos que facilitam muito a reproduÃ§Ã£o. E os bÃ´nus de precificaÃ§Ã£o e drinks moleculares valem mais que o prÃ³prio curso!',
    stars: 5,
  },
  {
    name: 'Rodrigo Fontes',
    role: 'Bartender AutÃ´nomo',
    city: 'Rio de Janeiro - RJ',
    text: 'Eu tinha muita dÃºvida de como balancear acidez e doÃ§ura em criaÃ§Ãµes autorais. O mÃ³dulo de equilÃ­brio sensorial abriu minha mente. Curso direto ao ponto, elegante e extremamente profissional.',
    stars: 5,
  },
]

export const FAQ = [
  {
    question: 'AS AULAS PRÃTICAS SERÃƒO PRESENCIAIS OU ONLINE?',
    answer:
      'As aulas prÃ¡ticas serÃ£o todas online! Todas as tÃ©cnicas, preparos de insumos, mÃ©todos de mistura, manipulaÃ§Ã£o de gelo, espumas e montagem de drinks foram gravadas em alta definiÃ§Ã£o com mÃºltiplos Ã¢ngulos de cÃ¢mera para vocÃª ver exatamente cada movimento e reproduzir perfeitamente da sua casa ou bar, no seu prÃ³prio tempo.',
  },
  {
    question: 'O QUE Ã‰ MIXOLOGIA?',
    answer:
      'Mixologia Ã© a ciÃªncia e a arte de estudar, criar e harmonizar cocktails. Diferente de apenas executar receitas prontas, o mixologista domina o equilÃ­brio de sabores, a quÃ­mica dos insumos, as tÃ©cnicas de texturizaÃ§Ã£o, a aromatizaÃ§Ã£o e a apresentaÃ§Ã£o sensorial para criar experiÃªncias Ãºnicas.',
  },
  {
    question: 'PRECISO SER BARTENDER OU TER EXPERIÃŠNCIA PRÃ‰VIA?',
    answer:
      'NÃ£o! O curso foi desenhado tanto para iniciantes absolutos que desejam comeÃ§ar da maneira certa e profissional, quanto para bartenders atuantes que querem se especializar na criaÃ§Ã£o autoral e elevar seu ticket de trabalho.',
  },
  {
    question: 'COMO RECEBO MEU ACESSO APÃ“S A COMPRA?',
    answer:
      'Assim que seu pagamento for confirmado pela Hotmart, vocÃª receberÃ¡ automaticamente um e-mail com seus dados de acesso (login e senha) para entrar na plataforma exclusiva da JJ Bar e Barista Academy e comeÃ§ar imediatamente.',
  },
  {
    question: 'POR QUANTO TEMPO TEREI ACESSO AO CURSO?',
    answer:
      'VocÃª terÃ¡ acesso completo e ilimitado a todas as aulas gravadas e materiais complementares, podendo assistir quantas vezes quiser, no horÃ¡rio que for mais conveniente para vocÃª.',
  },
  {
    question: 'O CURSO OFERECE CERTIFICADO DE CONCLUSÃƒO?',
    answer:
      'Sim! Ao concluir todos os mÃ³dulos do treinamento, vocÃª receberÃ¡ o Certificado Oficial de ConclusÃ£o emitido pela JJ Bar e Barista Academy, reconhecido no mercado de coquetelaria.',
  },
  {
    question: 'E SE EU NÃƒO GOSTAR? EXISTE GARANTIA?',
    answer:
      'Sim! VocÃª conta com uma Garantia Incondicional de 7 Dias. Se por qualquer motivo vocÃª achar que o curso nÃ£o Ã© para vocÃª, basta solicitar o reembolso na plataforma da Hotmart com apenas um clique e devolveremos 100% do seu dinheiro.',
  },
  {
    question: 'COMO POSSO PAGAR MINHA INSCRIÃ‡ÃƒO?',
    answer:
      'VocÃª pode pagar por CartÃ£o de CrÃ©dito (em atÃ© 12x), PIX (com liberaÃ§Ã£o imediata), boleto bancÃ¡rio ou outros mÃ©todos seguros disponibilizados na pÃ¡gina de checkout da Hotmart.',
  },
]
