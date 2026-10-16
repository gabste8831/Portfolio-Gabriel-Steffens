import {
  CursoOuCertificacao,
  ExperienciaProfissional,
  FatoRapido,
  GrupoDeHabilidades,
  ItemFormacao,
  PerfilPessoal,
  ProjetoPortfolio,
} from '../models/portfolio-data.model';

export const PERFIL: PerfilPessoal = {
  nome: 'Gabriel Steffens',
  cargoObjetivo: 'Desenvolvedor Full Stack',
  localizacao: 'Rio do Sul, SC',
  idade: 23,
  email: 'gabrielsteffens2003@gmail.com',
  telefone: '(47) 9 8831-3652',
  telefoneHref: 'tel:+5547988313652',
  whatsapp: 'https://wa.me/5547988313652',
  linkedin: 'https://www.linkedin.com/in/gabriel-steffens-/',
  github: 'https://github.com/gabste8831',
  instagram: 'https://www.instagram.com/gabss.dev',
  foto: '/gabriel.jpg',
  logoUrl: '/logo_gabdev_2.svg',
  curriculoUrl: '/Gabriel Steffens Currículo 2026.pdf',
  curriculoNomeArquivo: 'Curriculo_Gabriel_Steffens.pdf',
  resumo: [
    `Prazer, Gabriel Steffens!`,
    `Sou dev full stack com foco no ecossistema Node.js e TypeScript: APIs com NestJS, interfaces com Next.js e React, apps com React Native e infraestrutura com Docker e AWS.`,
    `Estou na 8ª fase da graduação em Sistemas de Informação. Já passei por front-end, migração de dados e e-commerce, o que me dá uma visão de produto e de negócio além do código.`
  ]
};

export const OBJETIVO_PROFISSIONAL =
  'Evoluir na área da tecnologia, atualmente no âmbito de desenvolvimento. Meu foco de ' +
  'estudos, além da construção de sistemas e soluções, está em arquitetura de software, ' +
  'infraestrutura em nuvem e IA aplicada, dentro do contexto de escalabilidade e resolução ' +
  'real de problemas de negócio.';

export const FATOS_RAPIDOS: FatoRapido[] = [
  { rotulo: 'localização', valor: PERFIL.localizacao },
  { rotulo: 'idade', valor: `${PERFIL.idade} anos` },
  { rotulo: 'atuação', valor: 'Full Stack · TypeScript · AWS' },
  { rotulo: 'foco de estudos', valor: 'Arquitetura · Infra · IA' },
];

export const EXPERIENCIAS: ExperienciaProfissional[] = [
  {
    cargo: 'Desenvolvedor Full Stack',
    empresa: 'Ale Tech',
    periodo: 'Nov 2026 - Hoje',
    stack: ['TypeScript', 'Node.js', 'NestJS', 'Next.js', 'React Native', 'Docker', 'AWS'],
    destaques: [
      'Desenvolvimento de APIs e serviços back-end em Node.js com NestJS e TypeScript.',
      'Construção de interfaces web com Next.js e integração com aplicativos em React Native.',
      'Conteinerização com Docker e atuação na infraestrutura em nuvem na AWS.',
    ],
    atual: true,
  },
  {
    cargo: 'Desenvolvedor Back-End - Migração de Dados',
    empresa: 'Apresenta.me - Sistema para Gestão Imobiliária',
    periodo: 'Jan 2026 - Out 2026',
    stack: ['JavaScript', 'Node.js', 'PHP', 'MongoDB', 'PostgreSQL', 'IA aplicada ao dev'],
    destaques: [
      'Execução de scripts de migração de grandes volumes de dados (CRMs e sistemas financeiros), recebidos em XML, JSON, CSV e backups SQL/PostgreSQL.',
      'Rotinas de ETL em Node.js para extração, transformação e carga de bases de dados',
      'Mapeamento e análise de campos para validação, testes e deploy em produção.',
      'Uso de IA como apoio à refatoração de código e aceleração de entregas.',
    ],
    atual: false,
  },
  {
    cargo: 'Desenvolvedor Front-End Pleno III',
    empresa: 'Apresenta.me - Sistema para Gestão Imobiliária',
    periodo: 'Abr 2025 - Jan 2026',
    stack: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Figma', 'UI/UX'],
    destaques: [
      'Conversão de layouts em interfaces responsivas integradas ao CRM da empresa. + de 80 sites desenvolvidos',
      'Mentoria de desenvolvedores juniores em boas práticas de CSS moderno, arquitetura Front-End e regras de negócio do CRM.',
      'Liderança interina das equipes de Web e Design, conduzindo code reviews e garantindo fidelidade entre protótipos no Figma e a implementação final.',
    ],
    atual: false,
  },
  {
    cargo: 'Analista de E-commerce / Editor de Mídia Audiovisual',
    empresa: 'Super Sonora - Instrumentos Musicais',
    periodo: '2022 - 2025',
    stack: ['ERP (Bling)', 'SEO', 'Google Merchant', 'Marketplaces', 'Marketing Digital'],
    destaques: [
      'Gestão de estoque, marketplaces e marketing digital, com otimização para mecanismos de busca (SEO, Google Search, blogs).',
      'Participação em duas migrações de plataforma do site próprio.',
      'Experiência prática em múltiplas áreas relacionadas ao fluxo de trabalho de um e-commerce.',
    ],
    atual: false,
  },
];

export const PROJETOS: ProjetoPortfolio[] = [
  {
    titulo: 'Mapill - App de Adesão a Medicamentos',
    descricao: 'Aplicativo Android que lembra, registra e avisa antes do remédio acabar: alarmes com o celular bloqueado, leitura de código de barras pela base da Anvisa (CMED), controle de estoque, histórico de adesão e relatório em PDF. Offline-first, com backup opcional em nuvem.',
    tecnologias: ['React Native', 'Kotlin', 'SQLite', 'Supabase'],
    deployUrl: 'https://mapill-website.vercel.app',
    imagem: '/Mapill.png',
  },
  {
    titulo: 'Site TR Vicente',
    descricao: 'Landing page institucional para uma empresa de transporte de cargas, com informações sobre a empresa, serviços, contato e formulário de orçamento.',
    tecnologias: ['Next.js', 'TypeScript', 'CSS', 'React'],
    repoUrl: `${PERFIL.github}/Tr-Vicente-Landing-Page`,
    deployUrl: 'https://trvicente.com.br',
    imagem: '/Site_TR_Vicente.png',
  },
  {
    titulo: 'Site Rio Clube Handebol',
    descricao: 'Landing page institucional para o time oficial de handebol de Rio do Sul - SC, com histórico do projeto, treinos, galeria de fotos, apoiadores e feed do Instagram.',
    tecnologias: ['Next.js', 'TypeScript', 'CSS', 'React'],
    repoUrl: `${PERFIL.github}/Institucional-Rio-Clube-Handebol---Landing-Page`,
    deployUrl: 'https://rioclubehandebol.vercel.app',
    imagem: '/Site_Handebol.png',
  },
  {
    titulo: 'InsuGuia Mobile',
    descricao: 'Aplicativo como protótipo de um sistema de suporte à decisão clínica (CDSS) no manejo de pacientes internados não-críticos com diabetes - Projeto acadêmico.',
    tecnologias: ['Flutter', 'Dart', 'SQLite', 'Figma'],
    repoUrl: `${PERFIL.github}/InsuGuia-project`,
    imagem: '/Insuguia.png',
  },
];

export const HABILIDADES: GrupoDeHabilidades[] = [
  {
    categoria: 'Linguagens & Runtimes',
    itens: ['TypeScript', 'JavaScript (ES6+)', 'Node.js', 'PHP'],
  },
  {
    categoria: 'Back-End & Arquitetura',
    itens: ['NestJS', 'Express', 'APIs REST', 'Supabase (BaaS)', 'Laravel', 'ETL & Migração de Dados'],
  },
  {
    categoria: 'Front-End & Mobile',
    itens: ['React.js', 'Next.js', 'React Native', 'Vue.js', 'Angular', 'HTML5', 'CSS3'],
  },
  {
    categoria: 'Bancos de Dados',
    itens: ['MongoDB', 'PostgreSQL', 'MySQL', 'phpMyAdmin'],
  },
  {
    categoria: 'Cloud & DevOps',
    itens: ['AWS (EC2, S3, RDS, IAM)', 'Docker', 'Kubernetes', 'noções de CI/CD'],
  },
  {
    categoria: 'Ferramentas & Design',
    itens: ['Git/GitHub', 'npm', 'Figma', 'Adobe Photoshop', 'UI/UX'],
  },
];

export const SOFT_SKILLS: string[] = [
  'Levantamento de requisitos e modelagem de dados',
  'Metodologias ágeis e visão de fluxo de entrega (Delivery)',
  'Liderança técnica e mentoria de times',
  'Visão de negócio (e-commerce, SEO e conversão)',
  'Comunicação assertiva e adaptabilidade a novas stacks',
];

export const FORMACAO: ItemFormacao[] = [
  {
    titulo: 'Bacharelado em Sistemas de Informação',
    instituicao: 'Unidavi',
    periodo: '2023 - previsão de conclusão em 2026',
  },
  {
    titulo: 'Ensino Fundamental e Médio Completos',
    instituicao: 'Colégio Salesiano Dom Bosco Rio do Sul',
    periodo: '2008 - 2021',
  },
];

export const CURSOS: CursoOuCertificacao[] = [
  {
    titulo: 'AWS Cloud Quest: Cloud Practitioner',
    instituicao: 'AWS',
    periodo: 'Junho 2026',
    descricao: 'Amazon RDS, AWS IAM e fundamentos de nuvem.',
  },
  {
    titulo: 'AWS Academy Graduate - Cloud Foundations',
    instituicao: 'AWS',
    periodo: 'Maio 2026',
    descricao: 'Amazon EC2, AWS e infraestrutura em nuvem.',
  },
  {
    titulo: 'React - Começando seu Projeto Full Stack',
    instituicao: 'Alura',
    periodo: 'Abril 2026',
    descricao: 'React.js aplicado a projetos Full Stack.',
  },
  {
    titulo: 'Node.js: Buscas, Filtros, Paginação e Erros em uma API',
    instituicao: 'Alura',
    periodo: 'Março 2026',
    descricao: 'APIs REST e migração de dados.',
  },
  {
    titulo: 'Node.js: criando uma API REST com Express e MongoDB',
    instituicao: 'Alura',
    periodo: 'Março 2026',
    descricao: 'Foco em back-end, npm e bancos NoSQL.',
  },
];