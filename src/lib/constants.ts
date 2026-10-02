// ============================================================================
// CONFIGURAÇÃO PRINCIPAL — CURSO DE MIXOLOGIA
// JJ BAR E BARISTA ACADEMY
// ============================================================================

// Link oficial de checkout da Hotmart para o curso de Mixologia
export const CHECKOUT_URL = 'https://pay.hotmart.com/LINK_HOTMART_MIXOLOGIA'

// Variáveis de preço da oferta oficial
export const PRECO_MIXOLOGIA = 'R$ 147,00'
export const PRECO_ANTERIOR_MIXOLOGIA = 'R$ 497,00'
export const PRECO_PARCELADO = '12x de R$ 14,76'

export const SITE = {
  name: 'JJ Bar e Barista Academy',
  courseName: 'Curso de Mixologia',
  domain: 'www.jjbarebaristaacademy.com',
  price: PRECO_MIXOLOGIA,
  pricePrevious: PRECO_ANTERIOR_MIXOLOGIA,
  installments: PRECO_PARCELADO,
  ctaText: 'Seja um mixologista',
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
    title: 'JJ Store & Academy',
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
  { label: 'Grade', href: '#conteudo' },
  { label: 'Bônus', href: '#bonus' },
  { label: 'A Academy', href: '#galeria' },
  { label: 'Como Acessar', href: '#como-acessar' },
  { label: 'Professor', href: '#professor' },
  { label: 'FAQ', href: '#faq' },
]

export const PILLARS = [
  {
    title: 'TÉCNICA PURA',
    description: 'Aprenda os fundamentos profissionais utilizados na construção, preparo e manipulação de cocktails de alto padrão.',
    icon: 'bi-gear-wide-connected',
  },
  {
    title: 'EQUILÍBRIO SENSORIAL',
    description: 'Domine a precisão entre acidez, doçura, amargor, teor alcoólico e densidade para criar coquetéis harmoniosos.',
    icon: 'bi-sliders',
  },
  {
    title: 'CRIATIVIDADE AUTORAL',
    description: 'Desenvolva sua própria metodologia de criação, combinando insumos, botânicos e aromas com intenção artística.',
    icon: 'bi-stars',
  },
  {
    title: 'EXPERIÊNCIA COMPLETA',
    description: 'Entenda como estética, textura, temperatura, aromatização e garnish transformam um drink em uma experiência inesquecível.',
    icon: 'bi-gem',
  },
]

export const PAIN_QUESTIONS = [
  'Você consegue identificar por que um drink está muito doce, ácido ou desequilibrado?',
  'Sabe como substituir ingredientes sem destruir a proposta original da receita?',
  'Consegue criar um cocktail inédito partindo de um conceito ou memória gustativa?',
  'Entende como aroma, textura, temperatura e diluição influenciam a experiência do cliente?',
  'Você tem segurança técnica para desenvolver uma carta autoral de bebidas lucrativa?',
]

export const BEFORE_AFTER = {
  before: [
    'Ficar preso a receitas prontas da internet sem entender a lógica.',
    'Combinar bebidas e xaropes apenas por tentativa e erro.',
    'Ter dificuldade em corrigir ou balancear um drink que deu errado.',
    'Sentir insegurança na hora de criar coquetéis autorais.',
    'Não saber precificar nem calcular o custo de cada dose.',
  ],
  after: [
    'Dominar os fundamentos matemáticos e sensoriais do equilíbrio de sabores.',
    'Analisar a química e a função de cada ingrediente no coquetel.',
    'Compreender técnicas avançadas de preparo, texturização e infusão.',
    'Criar receitas autorais sofisticadas com identidade e intenção.',
    'Ganhar autoridade no mercado de bar, coquetelaria e eventos.',
    'Saber precificar, divulgar e monetizar suas criações.',
  ],
}

export const COCKTAIL_ELEMENTS = [
  {
    name: 'BASE ALCOÓLICA',
    role: 'A espinha dorsal do drink',
    description: 'Destilados e fermentados que determinam o caráter, teor alcoólico e estrutura primária.',
    icon: 'bi-cup-straw',
  },
  {
    name: 'MODIFICADORES',
    role: 'Complexidade e profundidade',
    description: 'Licores, vermutes, bitters, amaros e infusões que conferem camadas sensoriais únicas.',
    icon: 'bi-flower1',
  },
  {
    name: 'AGENTE DE DOÇURA',
    role: 'Corpo e maciez',
    description: 'Xaropes clássicos e artesanais, méis, licores doces e reduções que equilibram as forças do drink.',
    icon: 'bi-droplet-half',
  },
  {
    name: 'AGENTE DE ACIDEZ',
    role: 'Frescor e contraste',
    description: 'Cítricos frescos, soluções ácidas e vinagres botânicos que iluminam e dinamizam o paladar.',
    icon: 'bi-brightness-high',
  },
  {
    name: 'AROMAS E ÓLEOS',
    role: 'O impacto olfativo imediato',
    description: 'Óleos essenciais de cítricos, defumações, névoas e botânicos voláteis que despertam a memória.',
    icon: 'bi-wind',
  },
  {
    name: 'TEXTURA E CORPO',
    role: 'Sensação tátil aveludada',
    description: 'Espumas, clarificações, densidades, albuminas e técnicas que proporcionam cremosidade.',
    icon: 'bi-water',
  },
  {
    name: 'DILUIÇÃO E TEMPO TÉRMICO',
    role: 'Harmonização hídrica ideal',
    description: 'O papel essencial do gelo cristalino e do controle de água na liberação gradual dos aromas.',
    icon: 'bi-snow',
  },
  {
    name: 'GARNISH E APRESENTAÇÃO',
    role: 'A finalização estética e sensorial',
    description: 'Decorações funcionais, taças exclusivas e guarnições que complementam a proposta criativa.',
    icon: 'bi-palette',
  },
]

export const MODULES = [
  {
    number: '01',
    title: 'FUNDAMENTOS DA MIXOLOGIA MODERNA',
    description: 'Compreenda a história, conceitos e os princípios químicos e sensoriais por trás da coquetelaria avançada.',
    icon: 'bi-journal-bookmark',
    highlights: ['História e evolução do bar', 'Diferença entre Bartender e Mixologista', 'Mise en place profissional'],
  },
  {
    number: '02',
    title: 'EQUILÍBRIO & HARMONIA SENSORIAL',
    description: 'Domine a proporção perfeita entre doçura, acidez, amargor, umami e potência alcoólica em qualquer cocktail.',
    icon: 'bi-sliders',
    highlights: ['A roda de sabores', 'Balanceamento de coquetéis clássicos', 'Como corrigir drinks desequilibrados'],
  },
  {
    number: '03',
    title: 'INGREDIENTES & ALQUIMIA DE INSUMOS',
    description: 'Aprenda a selecionar, infusionar e produzir seus próprios insumos artesanais (xaropes, cordiais e tinturas).',
    icon: 'bi-egg-fried',
    highlights: ['Xaropes simples e compostos', 'Infusões a frio e sous-vide', 'Bitters e aromatizadores'],
  },
  {
    number: '04',
    title: 'TÉCNICAS PROFISSIONAIS DE PREPARO',
    description: 'Domine mexido, batido, montado, thrown (jogada) e as diferenças no controle de aeração e resfriamento.',
    icon: 'bi-gear-wide-connected',
    highlights: ['Técnica de Throwing', 'Batimento com gelo seco vs gelo cubo', 'Filtragens e clarificações'],
  },
  {
    number: '05',
    title: 'AROMAS, VOLATILIDADE & MEMÓRIA OLFATIVA',
    description: 'Explore o universo dos óleos essenciais, defumações, névoas e como o olfato comanda 80% do sabor percebido.',
    icon: 'bi-wind',
    highlights: ['Uso de defumadores de bar', 'Extração de óleos cítricos', 'Experiências multissensoriais'],
  },
  {
    number: '06',
    title: 'TEXTURA, TEMPERATURA & CIÊNCIA DO GELO',
    description: 'Aprenda sobre a termodinâmica do gelo cristalino, diluição milimétrica, espumas e texturas aveludadas.',
    icon: 'bi-thermometer-half',
    highlights: ['Produção de gelo translúcido', 'Espumas com sifão culinário', 'Densidade e camadas de líquidos'],
  },
  {
    number: '07',
    title: 'GARNISH, CRISTALERIA & APRESENTAÇÃO DE LUXO',
    description: 'Apresentação visual que valoriza o produto e encanta clientes exigentes em bares e eventos de alto padrão.',
    icon: 'bi-gem',
    highlights: ['Escolha correta de taças', 'Garnish funcional e sustentável', 'Fotografia e estética de drinks'],
  },
  {
    number: '08',
    title: 'CRIAÇÃO DE DRINKS AUTORAIS & CARTAS',
    description: 'O método passo a passo para tirar ideias da mente e criar um cocktail autoral do zero até a comercialização.',
    icon: 'bi-stars',
    highlights: ['Metodologia criativa JJ Academy', 'Desenvolvimento de conceitos', 'Montagem de menu para bares e eventos'],
  },
]

export const BONUSES = [
  {
    number: 'BÔNUS 01',
    title: 'Como Transformar Mixologia em Negócio',
    subtitle: 'Venda Consultorias, Crie Cartas Autorais e Estruture Eventos Lucrativos',
    description: 'Um guia prático e direto para você monetizar suas habilidades no mercado, conquistar clientes corporativos, prestar consultoria para bares e restaurantes e aumentar seu faturamento.',
    value: 'R$ 197,00',
    icon: 'bi-briefcase-fill',
    tag: 'EXCLUSIVO',
  },
  {
    number: 'BÔNUS 02',
    title: 'Planilha de Precificação Inteligente de Drinks',
    subtitle: 'Calcule CMV, Custo por Dose e Margem de Lucro com Precisão',
    description: 'Ferramenta pronta em Excel/Google Sheets para calcular o custo exato de cada ingrediente, dose, perda, guarnição e definir o preço final de venda para lucrar sem prejuízos.',
    value: 'R$ 147,00',
    icon: 'bi-calculator-fill',
    tag: 'FERRAMENTA PRÁTICA',
  },
  {
    number: 'BÔNUS 03',
    title: 'E-book Exclusivo: 10 Drinks Moleculares Autorais',
    subtitle: 'Esferificações, Espumas Estáveis e Técnicas Avançadas Passo a Passo',
    description: 'Apostila ilustrada com 10 receitas autorais completas utilizando técnicas de coquetelaria molecular explicadas em detalhes para impressionar qualquer cliente.',
    value: 'R$ 153,00',
    icon: 'bi-book-half',
    tag: 'RECEITUÁRIO AUTORAL',
  },
]

export const ACCESS_STEPS = [
  {
    number: '01',
    title: 'Inscrição Segura & Imediata',
    description: 'Ao clicar no botão, você é direcionado para a plataforma de pagamento criptografada com total segurança.',
    icon: 'bi-shield-check',
  },
  {
    number: '02',
    title: 'Recebimento Instantâneo no E-mail',
    description: 'Assim que o pagamento for aprovado, seu login e senha exclusivos chegam diretamente na sua caixa de entrada.',
    icon: 'bi-envelope-paper-heart',
  },
  {
    number: '03',
    title: 'Aulas 100% Online em Alta Definição',
    description: 'Acesse de qualquer dispositivo (celular, tablet, computador ou Smart TV) e assista quantas vezes quiser, no seu ritmo.',
    icon: 'bi-camera-reels',
  },
  {
    number: '04',
    title: 'Certificado JJ Academy & Suporte',
    description: 'Conclua os módulos no seu tempo e emita o certificado oficial assinado pela JJ Bar e Barista Academy.',
    icon: 'bi-patch-check',
  },
]

export const FOR_WHO_CARDS = [
  {
    title: 'BARTENDERS & BARTENDERS DE EVENTOS',
    description: 'Que querem subir de nível, parar de apenas reproduzir receitas e começar a criar cartas autorais requisitadas.',
    icon: 'bi-cup-straw',
  },
  {
    title: 'INICIANTES & APAIXONADOS',
    description: 'Que desejam aprender do zero com o método correto e seguro, sem vícios e com base técnica sólida.',
    icon: 'bi-compass',
  },
  {
    title: 'DONOS DE BARES & GESTORES',
    description: 'Que precisam treinar suas equipes, padronizar receitas, calcular custos e aumentar a lucratividade do bar.',
    icon: 'bi-shop',
  },
  {
    title: 'BARISTAS & MIXOLOGISTAS DE CAFÉ',
    description: 'Que buscam integrar a coquetelaria de ponta com coquetéis à base de café (Coffee Cocktails) e hospitalidade.',
    icon: 'bi-cup-hot',
  },
  {
    title: 'CONSULTORES & EMPREENDEDORES',
    description: 'Que querem estruturar projetos de coquetelaria, workshops corporativos e serviços de alto ticket.',
    icon: 'bi-briefcase',
  },
]

export const APPLICATIONS = [
  { title: 'BARES & COCKTAIL BARS', icon: 'bi-shop' },
  { title: 'EVENTOS SOCIAIS & CASAMENTOS', icon: 'bi-calendar-event' },
  { title: 'RESTAURANTES DE ALTA GASTRONOMIA', icon: 'bi-building' },
  { title: 'HOTELARIA DE LUXO', icon: 'bi-house-heart' },
  { title: 'EXPERIÊNCIAS PRIVADAS & GUEST BAR', icon: 'bi-people' },
  { title: 'CONSULTORIAS DE MENUS', icon: 'bi-rocket-takeoff' },
  { title: 'DRINKS AUTORAIS EXCLUSIVOS', icon: 'bi-stars' },
  { title: 'EVENTOS CORPORATIVOS VIP', icon: 'bi-briefcase' },
]

export const HOW_IT_WORKS = [
  {
    number: '01',
    title: 'FAÇA SUA INSCRIÇÃO',
    description: 'Aproveite o valor promocional de R$ 147,00 pelo checkout oficial e seguro da Hotmart.',
    icon: 'bi-credit-card',
  },
  {
    number: '02',
    title: 'ACESSO IMEDIATO',
    description: 'Você recebe seus dados de login no e-mail instantaneamente após a confirmação da compra.',
    icon: 'bi-envelope-check',
  },
  {
    number: '03',
    title: 'ESTUDE NO SEU TEMPO',
    description: 'Assista às aulas práticas e teóricas 100% online quando e onde quiser, com suporte a dúvidas.',
    icon: 'bi-play-circle',
  },
]

export const SOCIAL_PROOF_STATS = [
  { value: '+5.000', label: 'Alunos Formados no Brasil e Exterior' },
  { value: '15+ Anos', label: 'História e Vivência Real no Universo de Bar' },
  { value: '100% Online', label: 'Aulas Práticas Detalhadas e Passo a Passo' },
  { value: '4.9 / 5.0', label: 'Índice de Satisfação e Avaliação dos Alunos' },
]

export const TESTIMONIALS = [
  {
    name: 'Lucas Mendonça',
    role: 'Bartender & Chefe de Bar',
    city: 'São Paulo - SP',
    text: 'O curso de Mixologia da JJ Academy mudou totalmente a forma como penso um drink. Deixei de ser aquele cara que só decora receita e passei a criar os coquetéis da carta do bar onde trabalho. O retorno financeiro e reconhecimento vieram rápido!',
    stars: 5,
  },
  {
    name: 'Camila Albuquerque',
    role: 'Empreendedora de Bar para Eventos',
    city: 'Curitiba - PR',
    text: 'A metodologia do Felipe e da equipe JJ é impecável. As aulas práticas online mostram cada detalhe de ângulos que facilitam muito a reprodução. E os bônus de precificação e drinks moleculares valem mais que o próprio curso!',
    stars: 5,
  },
  {
    name: 'Rodrigo Fontes',
    role: 'Bartender Autônomo',
    city: 'Rio de Janeiro - RJ',
    text: 'Eu tinha muita dúvida de como balancear acidez e doçura em criações autorais. O módulo de equilíbrio sensorial abriu minha mente. Curso direto ao ponto, elegante e extremamente profissional.',
    stars: 5,
  },
]

export const FAQ = [
  {
    question: 'AS AULAS PRÁTICAS SERÃO PRESENCIAIS OU ONLINE?',
    answer:
      'As aulas práticas serão todas online! Todas as técnicas, preparos de insumos, métodos de mistura, manipulação de gelo, espumas e montagem de drinks foram gravadas em alta definição com múltiplos ângulos de câmera para você ver exatamente cada movimento e reproduzir perfeitamente da sua casa ou bar, no seu próprio tempo.',
  },
  {
    question: 'O QUE É MIXOLOGIA?',
    answer:
      'Mixologia é a ciência e a arte de estudar, criar e harmonizar cocktails. Diferente de apenas executar receitas prontas, o mixologista domina o equilíbrio de sabores, a química dos insumos, as técnicas de texturização, a aromatização e a apresentação sensorial para criar experiências únicas.',
  },
  {
    question: 'PRECISO SER BARTENDER OU TER EXPERIÊNCIA PRÉVIA?',
    answer:
      'Não! O curso foi desenhado tanto para iniciantes absolutos que desejam começar da maneira certa e profissional, quanto para bartenders atuantes que querem se especializar na criação autoral e elevar seu ticket de trabalho.',
  },
  {
    question: 'COMO RECEBO MEU ACESSO APÓS A COMPRA?',
    answer:
      'Assim que seu pagamento for confirmado pela Hotmart, você receberá automaticamente um e-mail com seus dados de acesso (login e senha) para entrar na plataforma exclusiva da JJ Bar e Barista Academy e começar imediatamente.',
  },
  {
    question: 'POR QUANTO TEMPO TEREI ACESSO AO CURSO?',
    answer:
      'Você terá acesso completo e ilimitado a todas as aulas gravadas e materiais complementares, podendo assistir quantas vezes quiser, no horário que for mais conveniente para você.',
  },
  {
    question: 'O CURSO OFERECE CERTIFICADO DE CONCLUSÃO?',
    answer:
      'Sim! Ao concluir todos os módulos do treinamento, você receberá o Certificado Oficial de Conclusão emitido pela JJ Bar e Barista Academy, reconhecido no mercado de coquetelaria.',
  },
  {
    question: 'E SE EU NÃO GOSTAR? EXISTE GARANTIA?',
    answer:
      'Sim! Você conta com uma Garantia Incondicional de 7 Dias. Se por qualquer motivo você achar que o curso não é para você, basta solicitar o reembolso na plataforma da Hotmart com apenas um clique e devolveremos 100% do seu dinheiro.',
  },
  {
    question: 'COMO POSSO PAGAR MINHA INSCRIÇÃO?',
    answer:
      'Você pode pagar por Cartão de Crédito (em até 12x), PIX (com liberação imediata), boleto bancário ou outros métodos seguros disponibilizados na página de checkout da Hotmart.',
  },
]
