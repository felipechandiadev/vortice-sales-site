export type SuiteModule = {
  name: string;
  role: string;
  users: string;
};

export type Benefit = {
  title: string;
  body: string;
};

export type CompareRow = {
  before: string;
  after: string;
};

export const NAV_SECTIONS = [
  { id: 'intro', label: 'Inicio' },
  { id: 'concepto-clave', label: 'Concepto' },
  { id: 'que-es', label: 'Qué es' },
  { id: 'problema', label: 'Problema' },
  { id: 'idea-central', label: 'Idea central' },
  { id: 'flujo', label: 'Flujo' },
  { id: 'modulos', label: 'Módulos' },
  { id: 'gemelo', label: 'Gemelo' },
  { id: 'lira', label: 'LIRA' },
  { id: 'eficiencia', label: 'Eficiencia' },
  { id: 'ventajas', label: 'Ventajas' },
  { id: 'comparar', label: 'Cambios' },
  { id: 'cierre', label: 'Cierre' },
] as const;

export const HERO = {
  eyebrow: 'Centro de inteligencia para comunidades más seguras',
  title: 'VÓRTICE',
  subtitle:
    'Suite integral para la gestión de seguridad pública, percepción ciudadana y eficiencia operativa municipal.',
  tagline: 'Datos conectados. Territorio visible. Decisiones con impacto.',
};

export const DOC = {
  conceptKey:
    'Vórtice permite a los municipios reducir la percepción de inseguridad con máxima eficiencia: identifica los focos de mayor temor, valida qué intervenciones son realmente efectivas y optimiza el presupuesto municipal basándose en la rentabilidad de cada punto de mejora.',
};

export const QUE_ES = {
  eyebrow: '1. Qué es Vórtice',
  paragraphs: [
    'Vórtice es una suite de software para la gestión integral de seguridad pública municipal. Conecta lo que ocurre en la calle, lo que reporta la ciudadanía y lo que la comunidad siente, en un mismo ecosistema territorial.',
    'No es una sola aplicación: es un conjunto de herramientas especializadas — ciudadana, operativa, analítica y ejecutiva — que comparten datos, territorio y trazabilidad a través de Vórtice Core (backend central).',
  ],
  proposito:
    'Pasar de un modelo reactivo y fragmentado (planillas, WhatsApp, informes sueltos) a uno proactivo y medible, donde las decisiones se apoyan en evidencia territorial, en la percepción de inseguridad (PI) de la comunidad y en la relación costo–impacto de cada intervención.',
  paraQuien:
    'Alcaldías, direcciones de seguridad, central operativa, equipos de comunicación y autoridades que necesitan bajar la PI del territorio sin desperdiciar recursos y demostrarlo con datos.',
};

export const PROBLEMA = {
  eyebrow: '2. El problema que resuelve',
  intro:
    'Los municipios ya producen información: patrullajes, solicitudes vecinales, emergencias, fiscalizaciones, cámaras, reclamos e informes. El problema no suele ser la falta de datos, sino que están dispersos, desconectados y llegan tarde a quien debe decidir.',
  consequences: [
    'Patrullajes, iluminación, recuperación de espacios y asignación de recursos se definen con información incompleta.',
    'La seguridad no es solo delito: también es percepción, confianza y presencia territorial. Si la comunidad siente abandono, la responsabilidad política recae en la autoridad local aunque el dato policial no lo refleje igual.',
    'Las acciones se ejecutan, pero cuesta demostrar impacto ante el concejo, los medios o la misma ciudadanía.',
    'Se invierte en operación — patrullas, fiscalización, comunicación — sin saber qué tanto baja la PI ni a qué costo llegó cada mejora.',
  ],
  closing:
    'Vórtice ordena ese caos en un flujo municipal continuo: capturar → coordinar → actuar → medir PI y costo → priorizar de nuevo con menor gasto por punto de mejora.',
};

export const IDEA_CENTRAL = {
  eyebrow: '3.1 Idea central',
  paragraphs: [
    'Vórtice modela el territorio como un sistema vivo: incidentes, operaciones, solicitudes, costos y percepción ciudadana conviven sobre las mismas geometrías (sectores, barrios, comuna). Eso permite saber dónde actuar, por qué y si la intervención movió la aguja.',
    'El indicador guía es la Percepción de Inseguridad (PI): un índice territorial de 0 a 100 donde 100 significa máxima inseguridad percibida. Se calcula con encuestas Pulse, campañas de Pulse Manager y retroalimentación post-atención, en ventana móvil de 30 días.',
    'El objetivo operativo de Vórtice no es solo medir la PI: es reducirla. Para eso cruza cada intervención con su costo operativo (personal, combustible, operaciones, egresos) y estima qué acciones entregaron más baja de PI por peso invertido en cada sector.',
  ],
};

export const ECO_DIAGRAM = {
  title: 'Un flujo simple para decidir mejor.',
  intro:
    'La arquitectura debe entenderse en segundos: la ciudadanía y el terreno alimentan la operación; Nexo coordina; Focus transforma la información en análisis; Visión entrega lectura ejecutiva para la autoridad.',
};

export const FLUJO = {
  eyebrow: '3.2 Flujo municipal',
  closing:
    'La operación sube información estructurada; el análisis devuelve prioridades ordenadas por impacto esperado en PI y costo observado. No es un circuito cerrado: cada acción puede medirse contra la percepción, el gasto y los hechos del territorio.',
};

export const MODULOS = {
  eyebrow: '3.3 Módulos de la suite',
  coreNote:
    'Vórtice Core concentra identidad, datos transaccionales (PostgreSQL/PostGIS), APIs, índices de percepción y proyección del gemelo digital territorial (grafo de relaciones espacio-temporales).',
};

export const SUITE_MODULES: SuiteModule[] = [
  {
    name: 'Pulse',
    role: 'App ciudadana: reportes, chat con la central, feed informativo y encuestas de percepción',
    users: 'Comunidad',
  },
  {
    name: 'Pulse Manager',
    role: 'Comunicaciones y campañas territoriales; analytics y mapa de PI',
    users: 'Gestor de comunicaciones',
  },
  {
    name: 'Nexo',
    role: 'Central operativa: bandeja de casos, despacho, mapa vivo, chat con ciudadanía y terreno',
    users: 'Operadores, televigilancia',
  },
  {
    name: 'Sentinel',
    role: 'Ejecución en terreno: operaciones asignadas, evidencias, checklists, infracciones',
    users: 'Inspectores, agentes, técnicos',
  },
  {
    name: 'Focus',
    role: 'Backoffice operativo: personal, turnos, inventario, costos, metas SLA',
    users: 'Jefatura, analistas, administración',
  },
  {
    name: 'Visión',
    role: 'Vista ejecutiva: PI por sector, impacto de operaciones, patrones, economía e inteligencia operativa (PI al menor costo)',
    users: 'Alcaldía, dirección de seguridad',
  },
  {
    name: 'LIRA',
    role: 'Asistente de IA (Lectura Inteligente de Registros y Alertas): resume, explora y recomienda con datos del sistema',
    users: 'Todos los roles anteriores (según permisos)',
  },
  {
    name: 'Intelligence',
    role: 'Motor analítico: predicción de PI, eficiencia operativa (ΔPI por costo) y priorización de tareas',
    users: 'Servicio backend; resultados visibles en Visión',
  },
];

export const GEMELO = {
  eyebrow: '3.4 Gemelo digital',
  paragraphs: [
    'El gemelo digital integra sobre una misma capa territorial: incidentes, patrullajes, solicitudes, operaciones y señales de percepción. No es un mapa decorativo: es la base para ubicar intervenciones, cruzar hechos con PI y seguir la evolución sector a sector.',
    'Se consulta desde la operación (Nexo) y desde analítica (Pulse Manager, Visión).',
  ],
};

export const LIRA = {
  eyebrow: '3.5 LIRA e inteligencia operativa',
  lira:
    'LIRA no reemplaza la decisión humana: la ordena. Revisa registros dispersos, responde preguntas en lenguaje natural y sugiere acciones apoyadas en datos del Core (percepción, operaciones, costos, eficiencia). Cada respuesta debe poder rastrearse a la fuente; sin trazabilidad, la IA no aporta confianza institucional.',
  inteligencia:
    'Inteligencia operativa (panel en Visión) prioriza tareas por sector combinando PI actual, tendencia y relación costo–impacto observada en operaciones pasadas. Es el corazón del concepto clave: ayuda a responder ¿qué conviene hacer primero en este barrio para bajar la PI con los recursos que tenemos?',
};

export const EFICIENCIA = {
  eyebrow: '3.6 Eficiencia PI / costo operativo',
  intro: 'Vórtice cierra el ciclo entre percepción y presupuesto:',
  steps: [
    'Mide PI por sector de forma continua.',
    'Registra costos de operaciones, combustible y egresos (Focus / Visión).',
    'Observa qué intervenciones se asociaron a mejoras de PI en el territorio.',
    'Prioriza la siguiente acción con el panel de inteligencia operativa: más reducción de PI esperada, menor costo operativo relativo.',
  ],
  closing:
    'Así la municipalidad deja de elegir entre “gastar más” o “hacer más”: elige mejor — intervenciones que demuestren capacidad de bajar la inseguridad percibida al menor costo posible.',
};

export const BENEFITS: Benefit[] = [
  {
    title: 'Decidir con el territorio completo, no con un recorte',
    body: 'Un solo ecosistema reúne lo ciudadano, lo operativo y lo estratégico. La autoridad deja de arbitrar entre Excel, WhatsApp e informes aislados y pasa a ver sectores, tendencias y alertas en un lenguaje común (PI + hechos + operaciones).',
  },
  {
    title: 'Medir lo que la política pública necesita medir',
    body: 'La percepción de inseguridad es tan relevante como el registro delictivo para la gestión local. Vórtice la mide de forma continua y territorial, no solo en encuestas anuales. Eso permite detectar deterioro antes de que explote en prensa o en reclamos masivos.',
  },
  {
    title: 'Priorizar recursos con criterio — y al menor costo',
    body: 'Con PI por sector, impacto de operaciones previas y recomendaciones de inteligencia operativa, la municipalidad puede orientar patrullajes, iluminación, fiscalización o campañas comunicacionales hacia donde más duele y donde hay evidencia de respuesta, evitando duplicar intervenciones caras con poco efecto en la percepción.',
  },
  {
    title: 'Trazabilidad y rendición de cuentas',
    body: 'Cada requerimiento, operación y comunicación puede seguir un hilo: quién atendió, qué se hizo, cuánto costó y cómo evolucionó la percepción después. Eso fortalece la defensa técnica de las decisiones ante concejo, contraloría interna o la comunidad.',
  },
  {
    title: 'Comunicación territorial alineada con la realidad',
    body: 'Pulse Manager permite publicar alertas y campañas segmentadas por territorio, vinculadas a mediciones de percepción. La comuna deja de comunicar en genérico y puede hablarle a cada sector con mensajes coherentes con lo que ocurre ahí.',
  },
  {
    title: 'Eficiencia operativa visible — PI por peso invertido',
    body: 'Focus y Visión exponen costos (combustible, egresos, operaciones) y su relación con la evolución de PI en cada sector. La dirección puede discutir cuánta percepción de inseguridad se reduce por peso invertido, no solo volumen de patrullajes o montos gastados.',
  },
  {
    title: 'IA aplicada con sobriedad institucional',
    body: 'LIRA acelera consultas y redacción de insights sin sustituir al operador ni al alcalde. Está diseñado para operar sobre los datos del municipio, con permisos y contexto territorial — no como un chat genérico desconectado de la realidad local.',
  },
];

export const COMPARE_ROWS: CompareRow[] = [
  { before: 'Datos en silos', after: 'Flujo conectado ciudadanía → operación → medición' },
  {
    before: 'Decisiones por intuición o presión mediática',
    after: 'Priorización por PI, hechos y costo operativo observado',
  },
  {
    before: 'Más operación sin saber si baja la PI',
    after: 'Intervenciones orientadas a reducir PI al menor costo',
  },
  { before: 'Acciones sin evidencia de impacto', after: 'Seguimiento territorial antes/después' },
  { before: 'Comunicación genérica', after: 'Campañas y alertas por sector' },
  { before: 'Informes tardíos', after: 'Tableros ejecutivos y asistente LIRA en tiempo real' },
  { before: 'Dificultad para explicar “por qué aquí”', after: 'Mapa, índices y trazabilidad por territorio' },
];

export const CIERRE = {
  headline: 'Menos intuición. Más inteligencia territorial.',
  body: 'Vórtice transforma datos dispersos en decisiones visibles, medibles y defendibles para municipios que necesitan bajar la percepción de inseguridad con el menor costo operativo posible — no solo ejecutar operaciones, sino demostrar que cada peso invertido escucha el territorio y mueve la PI.',
};
