/* =========================================================
   IM OS v2.6 · Compact Desktop Portfolio Engine (26 Projects)
   ========================================================= */

const ET5_REPO = 'https://github.com/monteroniian/proyectos-escuela-et5/tree/main';

const PROJECTS = [
  /* ===== PROYECTOS DESTACADOS (IA, FULL-STACK, 3D) ===== */
  {
    id: 'jarvis',
    name: 'J.A.R.V.I.S. AI Assistant',
    short: 'Asistente de voz IA + HUD',
    category: 'ai',
    categoryLabel: 'IA & VOZ',
    school: false,
    featured: true,
    status: 'Destacado · 2026',
    icon: 'fa-solid fa-robot',
    color: '#38bdf8',
    b1: '#0a2240',
    b2: '#1a1142',
    tagline: 'Asistente personal multimodal con Gemini, síntesis de voz Piper + RVC ONNX e interfaz HUD web en tiempo real.',
    description:
      'Sistema completo de asistencia por voz para Windows con arquitectura modular de herramientas. Procesa comandos hablados con Gemini, responde con voz clonada mediante Piper TTS + RVC ONNX y expone una interfaz HUD futurista servida desde backend Python.',
    features: [
      'Control de hardware, volumen, apps y bloqueo de Windows',
      'Integración con Spotify API (reproducción y playlists)',
      'Lectura/gestión de Gmail y control multimedia',
      'Interfaz HUD web en tiempo real (HTML/JS + server.py)'
    ],
    architecture: [
      'Core Python modular (jarvis_core, voice, persona)',
      'Motor TTS local Piper + conversión de voz RVC ONNX',
      'Function calling con Gemini API',
      'Scripts de inicio automático (.bat / .vbs)'
    ],
    tags: ['Python', 'Gemini API', 'Piper TTS', 'RVC ONNX', 'Spotify API', 'HUD Web'],
    repo: 'https://github.com/monteroniian/jarvis-ai-assistant',
    repoLabel: 'monteroniian/jarvis-ai-assistant'
  },
  {
    id: 'cursosmi',
    name: 'CursosMi · Plataforma Educativa',
    short: 'LMS Full-Stack + Mercado Pago',
    category: 'web',
    categoryLabel: 'FULL-STACK',
    school: false,
    featured: true,
    status: 'Producción · Docker',
    icon: 'fa-solid fa-graduation-cap',
    color: '#22c55e',
    b1: '#082c26',
    b2: '#112142',
    tagline: 'Plataforma integral de cursos online con autenticación segura, pasarela Mercado Pago y despliegue Docker.',
    description:
      'Aplicación web full-stack construida con Vanilla JS ES Modules en frontend y Node.js + Express + SQLite3 en backend. Incluye seguridad de producción, envío de correos con Nodemailer y documentación técnica lista para deploy.',
    features: [
      'Autenticación de usuarios y roles con bcryptjs',
      'Integración de pagos con Mercado Pago',
      'Protección contra fuerza bruta (Rate Limit) y Helmet HTTP',
      'Notificaciones automáticas por email (Nodemailer)'
    ],
    architecture: [
      'Backend REST en Node.js + Express + SQLite3',
      'Contenerización completa con Dockerfile y docker-compose',
      'Variables de entorno seguras (.env) y guía de deploy',
      'Generación de documentación técnica automatizada'
    ],
    tags: ['Node.js', 'Express', 'SQLite3', 'Mercado Pago', 'Docker', 'Helmet'],
    repo: 'https://github.com/monteroniian/cursosmi-plataforma',
    repoLabel: 'monteroniian/cursosmi-plataforma'
  },
  {
    id: 'flow',
    name: 'Flow · Agente RAG de Psicología',
    short: 'RAG Local + ChromaDB + Voz',
    category: 'ai',
    categoryLabel: 'IA & RAG',
    school: false,
    featured: true,
    status: 'Local AI · 2026',
    icon: 'fa-solid fa-brain',
    color: '#a855f7',
    b1: '#241042',
    b2: '#0f2744',
    tagline: 'Asistente conversacional con recuperación aumentada (RAG), supervisor de seguridad y salida por voz.',
    description:
      'Pipeline de IA ejecutado 100% en local usando Ollama y ChromaDB sobre una base documental de psicología. Incorpora un agente supervisor con Phi-3 para detección de crisis antes de generar respuestas habladas con Kokoro TTS.',
    features: [
      'Búsqueda semántica vectorial con ChromaDB y nomic-embed-text',
      'Agente supervisor de seguridad clínica (phi3:3.8b)',
      'Respuestas de audio generadas con Kokoro TTS',
      'API FastAPI con CORS conectada a interfaz web'
    ],
    architecture: [
      'Ingesta de documentos PDF/texto (ingestar_documentos.py)',
      'LangChain + OllamaEmbeddings + VectorStore persistente',
      'FastAPI serving texto + audio WAV en tiempo real',
      'Arquitectura desacoplada frontend/backend'
    ],
    tags: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'Ollama', 'Kokoro TTS', 'RAG'],
    repo: 'https://github.com/monteroniian/flow-rag-assistant',
    repoLabel: 'monteroniian/flow-rag-assistant'
  },
  {
    id: 'gta3d',
    name: 'GTA San Andreas 3D · WebGL',
    short: 'Motor 3D interactivo Three.js',
    category: 'iot',
    categoryLabel: '3D / WEBGL',
    school: false,
    featured: true,
    status: 'Interactive 3D',
    icon: 'fa-solid fa-cubes',
    color: '#f59e0b',
    b1: '#3b1d08',
    b2: '#1b1136',
    tagline: 'Experiencia 3D en el navegador inspirada en Los Santos con filtro PS2, entidades, audio y misiones.',
    description:
      'Proyecto experimental 3D ejecutado directamente en el navegador con Three.js. Combina renderizado WebGL, pantalla de carga estilizada, filtro cálido estilo PS2, sistema modular de mundo, modelos, entidades, audio y misiones.',
    features: [
      'Viewport WebGL 3D en tiempo real con Three.js',
      'Filtro visual PS2 Orange Sunset & viñeta de daño',
      'Sistema modular: world, models, entities, missions y audio',
      'Pantalla de título y HUD arcade interactivo'
    ],
    architecture: [
      'JavaScript modular sin frameworks pesados',
      'Separación limpia: main.js, world.js, entities.js, models.js',
      'Audio procedural / efectos con audio.js',
      'CSS3 avanzado con tipografías temáticas y overlays'
    ],
    tags: ['Three.js', 'WebGL', 'JavaScript', 'HTML5', 'CSS3', 'Game Dev'],
    repo: 'https://github.com/monteroniian/gta-san-andreas-3d',
    repoLabel: 'monteroniian/gta-san-andreas-3d'
  },

  {
    id: 'portfolio-imos',
    name: '03 · Portfolio Personal · IM OS v2.6',
    short: 'Escritorio interactivo web (este sitio)',
    category: 'web',
    categoryLabel: 'EVAL 26/11 · 03 PORTFOLIO',
    school: true,
    year: 2026,
    evalOrder: 3,
    evalTag: '03 · Portfolio',
    featured: true,
    status: 'Eval 26/11 · Activo',
    icon: 'fa-solid fa-desktop',
    color: '#38bdf8',
    b1: '#0a2240',
    b2: '#1d1340',
    tagline: 'Portfolio interactivo con mecánica de sistema operativo de escritorio, ventanas arrastrables, terminal y 31 proyectos.',
    description:
      'Entorno web tipo escritorio (IM OS v2.6) diseñado de forma compacta y detallada para presentar todos mis trabajos de la Tecnicatura en Programación (EEST N°5), con gestor de ventanas, filtros por evaluación, buscador instantáneo y terminal bash simulada.',
    features: [
      'Gestor completo de ventanas (arrastrar, minimizar, maximizar, mosaico, cascada)',
      'Explorador de 31 proyectos con filtro Eval. 26/11, 2026 y buscador',
      'Terminal interactiva integrada y barra de estado en vivo',
      'Diseño glassmorphism oscuro compacto y responsivo'
    ],
    architecture: [
      'HTML5 semántico + CSS3 Grid/Flexbox + Vanilla JS',
      'Cero frameworks pesados, carga instantánea',
      'Datos centralizados y renderizado dinámico del DOM',
      'Versionado y publicado en GitHub'
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX', 'Desktop OS', '2026'],
    repo: 'https://github.com/monteroniian/portfolio-imos',
    repoLabel: 'monteroniian/portfolio-imos'
  },
  {
    id: 'mapas-qr',
    name: '09 · Mapas / QR · Generador & Integración',
    short: 'Módulo QR dinámico + integración web',
    category: 'web',
    categoryLabel: 'EVAL 26/11 · 09 MAPAS / QR',
    school: true,
    year: 2026,
    evalOrder: 9,
    evalTag: '09 · Mapas / QR',
    featured: true,
    status: 'Eval 26/11 · 2026',
    icon: 'fa-solid fa-qrcode',
    color: '#22d3ee',
    b1: '#082c38',
    b2: '#15183b',
    tagline: 'Generación dinámica de códigos QR y visualización interactiva integrada en proyectos web escolares.',
    description:
      'Implementación de utilidades de generación de códigos QR (qrGenerator.js en CursosMi) y recursos de ubicación/acceso rápido aplicados a plataformas web y presentaciones de 2026.',
    features: [
      'Generación dinámica de códigos QR desde JavaScript modular',
      'Integración directa en flujos de pago y acceso a cursos',
      'Overlays y recursos QR listos para escaneo en vivo',
      'Compatible con dispositivos móviles y escritorio'
    ],
    architecture: [
      'Módulo ES6 dedicado (assets/js/utils/qrGenerator.js)',
      'Integrado dentro de CursosMi (Node.js + Express)',
      'Renderizado cliente ligero y rápido',
      'Código abierto en GitHub'
    ],
    tags: ['JavaScript', 'QR Code', 'Mapas', 'ES Modules', '2026'],
    repo: 'https://github.com/monteroniian/cursosmi-plataforma/blob/main/assets/js/utils/qrGenerator.js',
    repoLabel: 'cursosmi-plataforma/qrGenerator.js'
  },
  {
    id: 'figma-turismo',
    name: 'Empresa de Paquetes Turísticos · Figma',
    short: 'Prototipo interactivo UI/UX en Figma Make',
    category: 'web',
    categoryLabel: '2026 · FIGMA UI/UX',
    school: true,
    year: 2026,
    featured: true,
    status: 'Figma Make · 2026',
    icon: 'fa-brands fa-figma',
    color: '#a855f7',
    b1: '#2b1047',
    b2: '#0e2845',
    tagline: 'Diseño y prototipo web interactivo en Figma Make para una empresa de paquetes turísticos.',
    description:
      'Prototipo interactivo desarrollado en Figma Make para una plataforma de venta de paquetes turísticos, enfocada en experiencia de usuario, jerarquía visual clara y navegación fluida entre destinos y reservas.',
    features: [
      'Prototipo web interactivo en pantalla completa (Figma Make)',
      'Diseño de interfaz moderna para catálogo de paquetes turísticos',
      'Flujo visual pensado para exploración de destinos y conversión',
      'Componentes reutilizables y estética cuidada de producto'
    ],
    architecture: [
      'Diseñado y prototipado en Figma Make',
      'Sistema visual consistente (tipografía, colores y espaciado)',
      'Preparado para handoff directo a desarrollo frontend',
      'Acceso en vivo mediante enlace compartido'
    ],
    tags: ['Figma', 'Figma Make', 'UI/UX', 'Prototipado', 'Turismo', '2026'],
    repo: 'https://www.figma.com/make/c8H3DVMeDtP9DfVZ3THq1g/Empresa-de-paquetes-turisticos?fullscreen=1&t=PfrisSky049ngLH6-1&code-node-id=0-9',
    repoLabel: 'figma.com/make · Prototipo en vivo',
    btnLabel: 'Abrir prototipo en Figma',
    btnIcon: 'fa-brands fa-figma'
  },
  {
    id: 'comercial-fym',
    name: 'Comercial 22 · F&M ElectroHogar',
    short: 'Spot web animado Samsung SpaceMax',
    category: 'web',
    categoryLabel: '2026 · COMERCIAL WEB',
    school: true,
    year: 2026,
    featured: true,
    status: 'Nov 2026',
    icon: 'fa-solid fa-clapperboard',
    color: '#38bdf8',
    b1: '#0b2242',
    b2: '#1f1538',
    tagline: 'Pieza comercial web animada para Samsung SpaceMax 716 L dentro del proyecto F&M ElectroHogar (Nov 2026).',
    description:
      'Comercial interactivo en HTML5/CSS3/JS diseñado en noviembre de 2026 para presentar la heladera Samsung SpaceMax 716 L como parte de la campaña de F&M ElectroHogar.',
    features: [
      'Animaciones fluidas estilo spot publicitario en navegador',
      'Enfoque en narrativa visual de producto y conversión',
      'Archivo HTML autocontenido listo para reproducir',
      'Integrado a la identidad visual de F&M ElectroHogar'
    ],
    architecture: [
      'HTML5 + CSS3 Animations + JavaScript',
      'Cero dependencias externas',
      'Optimizado para presentación y demo comercial',
      'Publicado en proyectos-escuela-et5'
    ],
    tags: ['HTML5', 'CSS3', 'Animación Web', '2026', 'Marketing'],
    repo: `${ET5_REPO}/comercial-fym-2026`,
    repoLabel: 'proyectos-escuela-et5/comercial-fym-2026'
  },
  {
    id: 'planet-gym',
    name: 'Planet GYM · Demo Web 2026',
    short: 'Landing comercial moderna para gimnasio',
    category: 'web',
    categoryLabel: '2026 · LANDING DEMO',
    school: false,
    year: 2026,
    featured: true,
    status: 'Nov 2026',
    icon: 'fa-solid fa-fire-flame-curved',
    color: '#f97316',
    b1: '#3b1808',
    b2: '#181433',
    tagline: 'Prototipo comercial de alto impacto creado en noviembre de 2026 para Planet GYM.',
    description:
      'Demo web moderna diseñada para presentar a clientes del rubro fitness, con diseño de alto contraste, secciones de membresías, actividades y contacto rápido.',
    features: [
      'Estética comercial de alto contraste y lectura rápida',
      'Secciones de planes, servicios y llamadas a la acción',
      'Diseño responsivo adaptable a celular y escritorio',
      'Archivo autocontenido listo para demo en vivo'
    ],
    architecture: [
      'HTML5 semántico + CSS3 moderno + JS',
      'Estructura modular en una sola página',
      'Optimizado para velocidad de carga',
      'Publicado en GitHub'
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', '2026', 'UI/UX'],
    repo: `${ET5_REPO}/planet-gym-demo-2026`,
    repoLabel: 'proyectos-escuela-et5/planet-gym-demo-2026'
  },

  /* ===== PROYECTOS ESCOLARES · EEST N°5 DE BERAZATEGUI ===== */
  {
    id: 'legajos',
    name: 'Legajos Secretaría · EEST N°5',
    short: 'Sistema de gestión escolar Node.js',
    category: 'web',
    categoryLabel: 'ESCUELA ET5 · FULL-STACK',
    school: true,
    featured: true,
    status: 'EEST N°5 · Real',
    icon: 'fa-solid fa-folder-tree',
    color: '#38bdf8',
    b1: '#0a2540',
    b2: '#0f172a',
    tagline: 'Sistema integral de gestión de legajos desarrollado para la Secretaría de la Escuela Técnica N°5.',
    description:
      'Aplicación cliente-servidor pensada para digitalizar y administrar legajos escolares en la secretaría de la EEST N°5, con inicio automatizado, documentación técnica y manual de usuario.',
    features: [
      'Gestión centralizada de legajos y registros de alumnos',
      'Backend propio en Node.js con capa de base de datos (db.js)',
      'Interfaz web clara para personal administrativo',
      'Script INICIAR.bat + manual de uso y documentación'
    ],
    architecture: [
      'Backend Node.js (server.js + db.js)',
      'Frontend desacoplado en HTML5, CSS3 y JS',
      'Preparado para despliegue local en entorno escolar',
      'Documentación funcional completa'
    ],
    tags: ['Node.js', 'JavaScript', 'HTML5', 'CSS3', 'EEST N°5'],
    repo: `${ET5_REPO}/legajos-secretaria-et5`,
    repoLabel: 'proyectos-escuela-et5/legajos-secretaria-et5'
  },
  {
    id: 'coronel',
    name: 'Sistema Escolar CORONEL',
    short: 'Gestión académica PHP + MySQL',
    category: 'web',
    categoryLabel: 'ESCUELA ET5 · PHP',
    school: true,
    featured: true,
    status: 'EEST N°5 · Público',
    icon: 'fa-solid fa-school',
    color: '#38bdf8',
    b1: '#0c2740',
    b2: '#101d35',
    tagline: 'Plataforma web de gestión escolar con roles diferenciados de administrador, profesor y alumno.',
    description:
      'Sistema académico desarrollado para administrar usuarios, cargar calificaciones y consultar boletines digitales desde un panel web organizado por permisos.',
    features: [
      'Control de acceso por roles (Admin, Profesor, Alumno)',
      'Carga y consulta de notas y boletines escolares',
      'ABM completo de alumnos, docentes y materias',
      'Base de datos relacional estructurada en MySQL'
    ],
    architecture: [
      'Backend server-side en PHP',
      'Persistencia relacional MySQL',
      'Vistas limpias y responsivas con CSS3',
      'Flujo de sesiones y autenticación'
    ],
    tags: ['PHP', 'MySQL', 'CSS3', 'RBAC', 'SQL'],
    repo: 'https://github.com/monteroniian/Sistema-escolar',
    repoLabel: 'monteroniian/Sistema-escolar'
  },
  {
    id: 'pyme',
    name: 'Automatización PyME Sustentable',
    short: 'IoT Arduino + MQTT + Redes',
    category: 'iot',
    categoryLabel: 'ESCUELA ET5 · IOT',
    school: true,
    featured: true,
    status: 'EEST N°5 · Público',
    icon: 'fa-solid fa-microchip',
    color: '#10b981',
    b1: '#082b22',
    b2: '#0f1f38',
    tagline: 'Diseño de red informática y automatización industrial sustentable con telemetría MQTT y simulación Wokwi.',
    description:
      'Trabajo final grupal para modernizar una PyME industrial combinando topología de red, sensores automatizados con Arduino, mensajería MQTT y estrategia ambiental.',
    features: [
      'Simulación electrónica funcional en Wokwi',
      'Comunicación IoT ligera vía protocolo MQTT',
      'Diagramas de infraestructura y segmentación de red',
      'Enfoque en eficiencia energética y sustentabilidad'
    ],
    architecture: [
      'Microcontroladores Arduino + sensores ambientales',
      'Broker MQTT para monitoreo de eventos',
      'Panel web de visualización en HTML/CSS',
      'Documentación de topología de red'
    ],
    tags: ['Arduino', 'MQTT', 'Redes', 'Wokwi', 'HTML', 'IoT'],
    repo: 'https://github.com/monteroniian/Automatizaci-n-PyME-Sustentable',
    repoLabel: 'monteroniian/Automatizaci-n-PyME-Sustentable'
  },
  {
    id: 'viajes',
    name: 'Agencia de Viajes Python',
    short: 'App de escritorio Tkinter',
    category: 'iot',
    categoryLabel: 'ESCUELA ET5 · PYTHON',
    school: true,
    featured: false,
    status: 'EEST N°5 · Público',
    icon: 'fa-solid fa-plane-departure',
    color: '#60a5fa',
    b1: '#0e2245',
    b2: '#1d1438',
    tagline: 'Aplicación de escritorio con interfaz gráfica Tkinter para reserva de vuelos, asientos y carrito.',
    description:
      'Software de escritorio escrito en Python que permite buscar vuelos nacionales e internacionales, seleccionar asientos visualmente, gestionar carrito de compras e historial.',
    features: [
      'Selector interactivo de asientos en cabina',
      'Carrito de compras con cálculo automático de tarifas',
      'Historial persistente de reservas del usuario',
      'Interfaz de escritorio nativa en Tkinter'
    ],
    architecture: [
      'Programación orientada a objetos en Python',
      'Gestión de estado de asientos y reservas',
      'Componentes gráficos personalizados en Tkinter',
      'Validaciones de flujo de compra'
    ],
    tags: ['Python', 'Tkinter', 'GUI', 'POO'],
    repo: 'https://github.com/monteroniian/Agencia-de-Viajes-Python',
    repoLabel: 'monteroniian/Agencia-de-Viajes-Python'
  },
  {
    id: 'plan-negocios',
    name: 'F&M ElectroHogar · Plan de Negocios',
    short: 'Tienda web + FODA + Gantt + Canvas',
    category: 'web',
    categoryLabel: 'ESCUELA ET5 · EMPRENDIMIENTO',
    school: true,
    featured: false,
    status: 'EEST N°5 · Público',
    icon: 'fa-solid fa-store',
    color: '#f59e0b',
    b1: '#2e1b08',
    b2: '#13203b',
    tagline: 'Proyecto integral de emprendimiento con sitio web, tienda de electrodomésticos, FODA, Canvas y Gantt.',
    description:
      'Desarrollo completo de plan de negocios para F&M ElectroHogar: portal institucional, catálogo de tienda, ficha Buyer Persona, análisis FODA, matriz de competencia y cronograma Gantt.',
    features: [
      'Portal web principal (index.html) y tienda (tienda.html)',
      'Análisis FODA, Canvas y planillas de competencia',
      'Diagrama de Gantt y ficha de Buyer Persona',
      'Identidad visual y material de presentación'
    ],
    architecture: [
      'Sitio estático en HTML5/CSS3 optimizado',
      'Documentación estratégica en PDF y CSV',
      'Estructura comercial orientada a conversión',
      'Publicado directamente en GitHub'
    ],
    tags: ['HTML5', 'CSS3', 'Plan de Negocios', 'FODA', 'Gantt'],
    repo: 'https://github.com/monteroniian/Plan-de-negocios',
    repoLabel: 'monteroniian/Plan-de-negocios'
  },
  {
    id: 'club-natacion',
    name: 'Club de Natación SMI',
    short: 'Web de alto rendimiento + Node.js',
    category: 'web',
    categoryLabel: 'ESCUELA ET5 · FULL-STACK',
    school: true,
    featured: false,
    status: 'EEST N°5',
    icon: 'fa-solid fa-person-swimming',
    color: '#06b6d4',
    b1: '#072a3b',
    b2: '#111a33',
    tagline: 'Plataforma web para club de natación de alto rendimiento con rankings, entrenamientos y servidor Node.js.',
    description:
      'Sitio web modular con componentes reutilizables (headers, footer, modales), sección de entrenamientos, tabla de rankings y servidor Node.js.',
    features: [
      'Secciones de inicio, entrenamiento y ranking de nadadores',
      'Componentes HTML modulares (headers, footer, modals)',
      'Backend ligero en Node.js (server.js)',
      'Interfaz deportiva limpia y adaptable'
    ],
    architecture: [
      'HTML5 modular + CSS3 + JS (app.js)',
      'Servidor local en Node.js',
      'Estructura separada en components/, css/, js/, img/',
      'Navegación fluida multipágina'
    ],
    tags: ['Node.js', 'HTML5', 'CSS3', 'JavaScript'],
    repo: `${ET5_REPO}/club-natacion-smi`,
    repoLabel: 'proyectos-escuela-et5/club-natacion-smi'
  },
  {
    id: 'cronometraje-esp32',
    name: 'Cronometraje Inteligente ESP32',
    short: 'Proyecto IoT de precisión olímpica',
    category: 'iot',
    categoryLabel: 'ESCUELA ET5 · ESP32',
    school: true,
    featured: false,
    status: 'EEST N°5 · IoT',
    icon: 'fa-solid fa-stopwatch',
    color: '#22d3ee',
    b1: '#092c38',
    b2: '#181838',
    tagline: 'Presentación técnica y arquitectura de un sistema de cronometraje de precisión basado en ESP32.',
    description:
      'Proyecto escolar enfocado en medición deportiva de alta precisión con microcontrolador ESP32, acompañado de banners y presentación web interactiva.',
    features: [
      'Arquitectura de cronometraje con microcontrolador ESP32',
      'Presentación visual y banner técnico en HTML',
      'Documentación gráfica del sistema y sensores',
      'Enfoque en precisión olímpica para competencias'
    ],
    architecture: [
      'Diseño de hardware con ESP32',
      'Interfaz web de presentación (index.html, canva.html)',
      'Recursos gráficos integrados',
      'Documentación técnica de exposición'
    ],
    tags: ['ESP32', 'IoT', 'Hardware', 'HTML5'],
    repo: `${ET5_REPO}/cronometraje-esp32`,
    repoLabel: 'proyectos-escuela-et5/cronometraje-esp32'
  },
  {
    id: 'el-tito',
    name: 'Impresoras 3D El Tito · Automatización',
    short: 'Sistema PHP/SQL + Wokwi industrial',
    category: 'iot',
    categoryLabel: 'ESCUELA ET5 · INDUSTRIAL',
    school: true,
    featured: false,
    status: 'EEST N°5',
    icon: 'fa-solid fa-industry',
    color: '#a855f7',
    b1: '#23103b',
    b2: '#0f233a',
    tagline: 'Integración de sitio web corporativo, backend PHP/SQL y simulación electrónica Wokwi para taller 3D.',
    description:
      'Trabajo integrador escolar que combina portal de automatización industrial para Impresoras 3D El Tito, módulos PHP/SQL y simulación Arduino en Wokwi.',
    features: [
      'Sitio web institucional de automatización industrial',
      'Simulación Arduino en Wokwi (wokwi_simulation.ino)',
      'Módulos web en PHP y base de datos SQL',
      'Documentación de arquitectura e instrucciones'
    ],
    architecture: [
      'Frontend HTML5/CSS3/JS + backend PHP',
      'Simulación embebida en C++/Arduino',
      'Estructura multiproyecto integrada',
      'Documentación técnica en Markdown'
    ],
    tags: ['PHP', 'SQL', 'Arduino', 'Wokwi', 'HTML5', 'CSS3'],
    repo: `${ET5_REPO}/impresoras-3d-el-tito`,
    repoLabel: 'proyectos-escuela-et5/impresoras-3d-el-tito'
  },
  {
    id: 'juego-filosofia',
    name: 'Juego: Real vs IA (Filosofía)',
    short: 'Juego web interactivo para muestra',
    category: 'ai',
    categoryLabel: 'ESCUELA ET5 · MUESTRA',
    school: true,
    featured: false,
    status: 'Muestra Anual',
    icon: 'fa-solid fa-gamepad',
    color: '#f43f5e',
    b1: '#380f24',
    b2: '#141738',
    tagline: 'Juego interactivo creado para la muestra escolar de Filosofía: ¿podés distinguir lo real de la IA?',
    description:
      'Experiencia lúdica desarrollada en JavaScript para poner a prueba el criterio del público en la muestra anual escolar diferenciando contenido humano y generado por IA.',
    features: [
      'Dinámica interactiva por rondas con puntaje',
      'Lógica de juego limpia en JavaScript puro (game.js)',
      'Interfaz visual atractiva lista para stand escolar',
      'Feedback inmediato y reflexión filosófica'
    ],
    architecture: [
      'HTML5 + CSS3 + Vanilla JS (game.js)',
      'Motor liviano sin dependencias externas',
      'Diseño centrado en interacción rápida',
      'Pensado para exhibición en pantalla'
    ],
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Game Dev', 'IA'],
    repo: `${ET5_REPO}/juego-real-vs-ia`,
    repoLabel: 'proyectos-escuela-et5/juego-real-vs-ia'
  },
  {
    id: 'dilema-redes',
    name: 'InstaDilema · Dilema de las Redes',
    short: 'Web interactiva con barra de nivel',
    category: 'web',
    categoryLabel: 'ESCUELA ET5 · WEB',
    school: true,
    featured: false,
    status: 'EEST N°5',
    icon: 'fa-solid fa-hashtag',
    color: '#ec4899',
    b1: '#360f2d',
    b2: '#131d3b',
    tagline: 'Sitio interactivo sobre el impacto de las redes sociales con estética tipo feed y sistema de progreso.',
    description:
      'Trabajo escolar interactivo que analiza el fenómeno de las redes sociales combinando navegación temática (index.html, tema1.html), memes/recursos gráficos y barra de nivel en JS.',
    features: [
      'Sistema interactivo de progreso / barra de nivel',
      'Diseño inspirado en plataformas sociales modernas',
      'Secciones temáticas y galería visual integrada',
      'Interacciones dinámicas con JavaScript'
    ],
    architecture: [
      'Multipágina HTML5 (index.html + tema1.html)',
      'Estilos dedicados en styles.css',
      'Lógica interactiva en app.js',
      'Assets gráficos locales'
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'UI Design'],
    repo: `${ET5_REPO}/dilema-de-redes`,
    repoLabel: 'proyectos-escuela-et5/dilema-de-redes'
  },
  {
    id: 'marketing-js',
    name: 'Marketing Digital: Juan vs Sofía',
    short: 'Caso práctico interactivo de marketing',
    category: 'web',
    categoryLabel: 'ESCUELA ET5 · MARKETING',
    school: true,
    featured: false,
    status: 'EEST N°5',
    icon: 'fa-solid fa-chart-line',
    color: '#22c55e',
    b1: '#0a2b20',
    b2: '#141e38',
    tagline: 'Aplicación web interactiva que compara estrategias de marketing digital junto a la actividad resuelta.',
    description:
      'Presentación web interactiva del caso de estudio Juan vs Sofía sobre marketing digital, métricas y estrategia de contenidos, incluyendo documentación de la actividad.',
    features: [
      'Comparativa interactiva de estrategias digitales',
      'Interfaz limpia con navegación fluida en JS',
      'Incluye consigna y resolución del caso práctico',
      'Diseño claro orientado a exposición escolar'
    ],
    architecture: [
      'HTML5 + CSS3 + app.js',
      'Documentación complementaria (.docx)',
      'Sin dependencias externas',
      'Estructura ligera y rápida'
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Marketing'],
    repo: `${ET5_REPO}/marketing-juan-vs-sofia`,
    repoLabel: 'proyectos-escuela-et5/marketing-juan-vs-sofia'
  },
  {
    id: 'mis-notas',
    name: 'Mis Notas · App Base de Datos',
    short: 'CRUD web de notas en JS',
    category: 'web',
    categoryLabel: 'ESCUELA ET5 · DATOS',
    school: true,
    featured: false,
    status: 'EEST N°5',
    icon: 'fa-solid fa-note-sticky',
    color: '#eab308',
    b1: '#302408',
    b2: '#141c33',
    tagline: 'Aplicación web minimalista de notas con operaciones CRUD y persistencia en el navegador.',
    description:
      'Práctica de la materia Base de Datos implementada como app web liviana para crear, editar, listar y eliminar notas de forma instantánea.',
    features: [
      'Alta, baja y modificación de notas (CRUD)',
      'Interfaz limpia y directa sin recargas',
      'Persistencia local de estado en el cliente',
      'Código claro y mantenible en Vanilla JS'
    ],
    architecture: [
      'HTML5 + style.css + app.js',
      'Manipulación directa del DOM',
      'Arquitectura minimalista de 3 archivos',
      'Carga instantánea'
    ],
    tags: ['JavaScript', 'HTML5', 'CSS3', 'CRUD'],
    repo: `${ET5_REPO}/mis-notas-bd`,
    repoLabel: 'proyectos-escuela-et5/mis-notas-bd'
  },
  {
    id: 'semaforo-arduino',
    name: 'Semáforo Inteligente Arduino',
    short: 'Firmware C++ (.ino) + configuración',
    category: 'iot',
    categoryLabel: 'ESCUELA ET5 · ARDUINO',
    school: true,
    featured: false,
    status: 'EEST N°5 · Hardware',
    icon: 'fa-solid fa-traffic-light',
    color: '#22c55e',
    b1: '#0a2b1c',
    b2: '#1a1c30',
    tagline: 'Control lógico de semáforo programado en Arduino (C++) para prácticas de electrónica y sistemas.',
    description:
      'Firmware en C++ para placa Arduino que implementa temporizaciones, transiciones seguras de luces y lógica de control para prácticas de taller.',
    features: [
      'Secuencia completa de estados rojo, amarillo y verde',
      'Temporizaciones configurables en firmware .ino',
      'Código limpio listo para placa física o simulador',
      'Práctica fundamental de salidas digitales'
    ],
    architecture: [
      'Sketch Arduino (Semaforo.ino)',
      'Configuración de entorno en launch.json',
      'Lógica determinística de pines digitales',
      'Listo para Wokwi / Arduino IDE'
    ],
    tags: ['Arduino', 'C++', 'Electrónica', 'IoT'],
    repo: `${ET5_REPO}/semaforo-arduino`,
    repoLabel: 'proyectos-escuela-et5/semaforo-arduino'
  },
  {
    id: 'monteroni-3d',
    name: 'Monteroni 3D · Juguetes Personalizados',
    short: 'Sitio web de emprendimiento 3D',
    category: 'iot',
    categoryLabel: 'ESCUELA ET5 · 3D WEB',
    school: true,
    featured: false,
    status: 'EEST N°5',
    icon: 'fa-solid fa-cube',
    color: '#8b5cf6',
    b1: '#231340',
    b2: '#10223b',
    tagline: 'Landing comercial para emprendimiento propio de impresión 3D y juguetes personalizados seguros.',
    description:
      'Sitio web desarrollado para presentar productos impresos en 3D, destacando personalización, seguridad de materiales y catálogo interactivo.',
    features: [
      'Identidad visual propia orientada a impresión 3D',
      'Catálogo y presentación de propuestas personalizadas',
      'Interacciones fluidas en app.js',
      'Diseño responsivo en HTML5 y CSS3'
    ],
    architecture: [
      'HTML5 + style.css + app.js',
      'Estructura liviana y rápida',
      'Enfoque comercial y visual',
      'Fácil de publicar en GitHub Pages'
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', '3D Printing'],
    repo: `${ET5_REPO}/monteroni-3d`,
    repoLabel: 'proyectos-escuela-et5/monteroni-3d'
  },
  {
    id: 'delta-gym',
    name: 'Delta Gym · Sitio Web Completo',
    short: 'Sitio fitness multipropósito con galería',
    category: 'web',
    categoryLabel: 'ESCUELA ET5 · WEB',
    school: true,
    featured: false,
    status: 'EEST N°5',
    icon: 'fa-solid fa-dumbbell',
    color: '#f43f5e',
    b1: '#380e1d',
    b2: '#161433',
    tagline: 'Sitio web completo para gimnasio con galería fotográfica, planes, horarios e interacción JS.',
    description:
      'Desarrollo web comercial para Delta Gym incluyendo galería de instalaciones, presentación de actividades, diseño de alto impacto y scripts interactivos.',
    features: [
      'Galería fotográfica integrada con assets optimizados',
      'Secciones de planes, servicios y contacto',
      'Interacciones dinámicas en script.js',
      'Estética moderna orientada a marca fitness'
    ],
    architecture: [
      'HTML5 + styles.css + script.js',
      'Assets locales de imágenes y branding',
      'Layout responsivo',
      'Código limpio sin frameworks'
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', '2026', 'UI/UX'],
    repo: `${ET5_REPO}/gimnasio-delta-demo-2026`,
    repoLabel: 'proyectos-escuela-et5/gimnasio-delta-demo-2026'
  },
  {
    id: 'fragancias-nvg',
    name: 'Fragancias NVG · E-Commerce',
    short: 'Catálogo web de perfumería (85 assets)',
    category: 'web',
    categoryLabel: 'ESCUELA ET5 · E-COMMERCE',
    school: true,
    featured: false,
    status: 'EEST N°5',
    icon: 'fa-solid fa-spray-can-sparkles',
    color: '#c084fc',
    b1: '#28113d',
    b2: '#151c38',
    tagline: 'Tienda y catálogo digital de perfumería con amplia galería de productos en formato WebP.',
    description:
      'Proyecto web de catálogo e-commerce para Fragancias NVG con decena de productos fotografiados, fichas visuales y navegación enfocada en experiencia de compra.',
    features: [
      'Catálogo extenso con imágenes optimizadas WebP/JPG',
      'Presentación elegante enfocada en productos de perfumería',
      'Estructura clara de fichas y navegación',
      'Diseño limpio adaptable a móviles'
    ],
    architecture: [
      'Frontend estático en HTML5/CSS3/JS',
      'Optimización de imágenes en WebP',
      'Organización ordenada de catálogo',
      'Despliegue simple sin servidor'
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'E-Commerce'],
    repo: `${ET5_REPO}/fragancias-nvg`,
    repoLabel: 'proyectos-escuela-et5/fragancias-nvg'
  },
  {
    id: 'no-limits-park',
    name: 'No Limits Park · Sala de Streaming',
    short: 'Landing temática gaming & streaming',
    category: 'web',
    categoryLabel: 'ESCUELA ET5 · LANDING',
    school: true,
    featured: false,
    status: 'EEST N°5',
    icon: 'fa-solid fa-headset',
    color: '#38bdf8',
    b1: '#0b2242',
    b2: '#23103b',
    tagline: 'Landing page temática para sala de streaming y gaming con estilo neón y scripts interactivos.',
    description:
      'Sitio promocional diseñado para una sala de streaming profesional, destacando equipamiento, reservas y estética moderna orientada al público gamer.',
    features: [
      'Estética gamer/streaming de alto contraste',
      'Secciones de equipamiento y propuesta de valor',
      'Interactividad ligera con script.js',
      'Código compacto en 3 archivos base'
    ],
    architecture: [
      'HTML5 + styles.css + script.js',
      'Diseño responsivo',
      'Sin dependencias externas pesadas',
      'Carga ultrarrápida'
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'UI Design'],
    repo: `${ET5_REPO}/no-limits-park`,
    repoLabel: 'proyectos-escuela-et5/no-limits-park'
  },
  {
    id: 'cookie-shop',
    name: 'Cookie Shop · App Web de Cookies',
    short: 'Práctica web de tienda + estado JS',
    category: 'web',
    categoryLabel: 'ESCUELA ET5 · PRÁCTICA',
    school: true,
    featured: false,
    status: 'EEST N°5',
    icon: 'fa-solid fa-cookie-bite',
    color: '#f59e0b',
    b1: '#362009',
    b2: '#1b162e',
    tagline: 'Aplicación web práctica sobre gestión de cookies y catálogo de tienda en JavaScript.',
    description:
      'Proyecto escolar que combina temática de tienda de galletas con práctica de manejo de estado y cookies del navegador mediante JavaScript.',
    features: [
      'Manejo de cookies / persistencia en navegador',
      'Interfaz lúdica de tienda en HTML5 y CSS3',
      'Lógica de interacción en app.js',
      'Código didáctico y limpio'
    ],
    architecture: [
      'HTML5 + styles.css + app.js',
      'API de cookies / DOM nativo',
      'Sin librerías externas',
      'Ideal para práctica de almacenamiento web'
    ],
    tags: ['JavaScript', 'Cookies', 'HTML5', 'CSS3'],
    repo: `${ET5_REPO}/cookie-shop`,
    repoLabel: 'proyectos-escuela-et5/cookie-shop'
  },
  {
    id: 'youtube-hits',
    name: 'Random YouTube Hits 200',
    short: 'Generador aleatorio de 200 canciones',
    category: 'web',
    categoryLabel: 'ESCUELA ET5 · JS APP',
    school: true,
    featured: false,
    status: 'EEST N°5',
    icon: 'fa-solid fa-music',
    color: '#ef4444',
    b1: '#380f14',
    b2: '#141733',
    tagline: 'Generador aleatorio musical con dataset propio de 200 canciones famosas integradas con YouTube.',
    description:
      'Aplicación web entretenida que selecciona hits musicales al azar a partir de una base de datos JS estructurada (tracks.js) y reproduce/enlaza al instante.',
    features: [
      'Dataset propio de 200 canciones famosas (tracks.js)',
      'Algoritmo de selección aleatoria sin fricción',
      'Interfaz musical limpia y responsiva',
      'Lógica desacoplada entre datos y vista'
    ],
    architecture: [
      'HTML5 + styles.css + js/tracks.js + js/app.js',
      'Separación de capa de datos y lógica',
      'Vanilla JavaScript rápido',
      'Integración directa con YouTube'
    ],
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Dataset'],
    repo: `${ET5_REPO}/random-youtube-hits`,
    repoLabel: 'proyectos-escuela-et5/random-youtube-hits'
  },
  {
    id: 'sucesor-waystar',
    name: 'Clarín Especial · Waystar Royco',
    short: 'Maquetación periodística temática',
    category: 'web',
    categoryLabel: 'ESCUELA ET5 · MAQUETACIÓN',
    school: true,
    featured: false,
    status: 'EEST N°5',
    icon: 'fa-solid fa-newspaper',
    color: '#94a3b8',
    b1: '#1e293b',
    b2: '#0f172a',
    tagline: 'Edición periodística web estilo diario digital inspirada en el universo de Succession.',
    description:
      'Ejercicio avanzado de maquetación editorial y tipografía periodística en HTML5 y CSS3 replicando la estructura de un especial dominical de diario.',
    features: [
      'Diseño editorial en columnas y jerarquía tipográfica',
      'Archivo único autocontenido y prolijo',
      'Fidelidad visual de portada periodística',
      'Adaptable a distintos tamaños de pantalla'
    ],
    architecture: [
      'HTML5 semántico + CSS3 embebido',
      'Maquetación CSS Grid / Flexbox',
      'Cero dependencias externas',
      'Enfoque en diseño editorial web'
    ],
    tags: ['HTML5', 'CSS3', 'Diseño Editorial', 'Maquetación'],
    repo: `${ET5_REPO}/sucesor-waystar-royco`,
    repoLabel: 'proyectos-escuela-et5/sucesor-waystar-royco'
  },
  {
    id: 'ciberseguridad',
    name: 'Ciberseguridad · Peligros WiFi Público',
    short: 'Sitio informativo de seguridad informática',
    category: 'web',
    categoryLabel: 'ESCUELA ET5 · SEGURIDAD',
    school: true,
    featured: false,
    status: 'EEST N°5',
    icon: 'fa-solid fa-shield-halved',
    color: '#22c55e',
    b1: '#09291e',
    b2: '#111a30',
    tagline: 'Proyecto escolar de concientización sobre riesgos en redes WiFi públicas y buenas prácticas.',
    description:
      'Material web educativo sobre ciberseguridad cotidiana, explicando vectores de ataque en redes abiertas y recomendaciones defensivas para usuarios.',
    features: [
      'Explicación clara de ataques en WiFi público',
      'Guía práctica de prevención y buenas prácticas',
      'Recursos visuales de apoyo',
      'Estructura informativa clara y directa'
    ],
    architecture: [
      'HTML5 + CSS3',
      'Contenido educativo estructurado',
      'Recursos gráficos locales',
      'Pensado para difusión escolar'
    ],
    tags: ['Ciberseguridad', 'Redes', 'HTML5', 'CSS3'],
    repo: `${ET5_REPO}/ciberseguridad-et5`,
    repoLabel: 'proyectos-escuela-et5/ciberseguridad-et5'
  },
  {
    id: 'impresion-3d-cat',
    name: 'Impresiones 3D · Catálogo JSON',
    short: 'Catálogo dinámico alimentado por JSON',
    category: 'iot',
    categoryLabel: 'ESCUELA ET5 · 3D / JSON',
    school: true,
    featured: false,
    status: 'EEST N°5',
    icon: 'fa-solid fa-cubes-stacked',
    color: '#06b6d4',
    b1: '#0a2936',
    b2: '#171836',
    tagline: 'Catálogo web de piezas impresas en 3D renderizado dinámicamente desde un archivo JSON.',
    description:
      'Aplicación frontend que carga piezas y especificaciones de impresión 3D desde JSON mediante JavaScript, separando datos y presentación.',
    features: [
      'Renderizado dinámico de tarjetas desde JSON',
      'Galería visual de piezas impresas en 3D',
      'Código limpio y extensible para nuevos modelos',
      'Interfaz rápida y responsiva'
    ],
    architecture: [
      'HTML5 + styles.css + script.js + JSON',
      'Consumo de datos estructurados en frontend',
      'Arquitectura desacoplada datos/UI',
      'Ligero y sin backend requerido'
    ],
    tags: ['JavaScript', 'JSON', 'HTML5', 'CSS3', '3D'],
    repo: `${ET5_REPO}/impresion-3d-catalogo`,
    repoLabel: 'proyectos-escuela-et5/impresion-3d-catalogo'
  }
];

/* =========================================================
   WINDOW MANAGER
   ========================================================= */
let zCounter = 30;
let activeFilter = 'eval26';
let searchQuery = '';
let selectedProjectId = 'delta-gym';

const windows = document.querySelectorAll('.window');
const activeAppName = document.getElementById('activeAppName');
const startMenu = document.getElementById('startMenu');

const WIN_LABELS = {
  'proyectos': 'Proyectos',
  'sobre-mi': 'Sobre mí',
  'skills': 'Skills',
  'terminal': 'Terminal',
  'contacto': 'Contacto'
};

function focusWindow(winId) {
  const el = document.getElementById(`win-${winId}`);
  if (!el) return;
  el.classList.remove('hidden');
  zCounter += 1;
  el.style.zIndex = zCounter;
  windows.forEach(w => w.classList.remove('active-win'));
  el.classList.add('active-win');
  activeAppName.textContent = WIN_LABELS[winId] || winId;
  syncDock();
}

function toggleWindow(winId) {
  const el = document.getElementById(`win-${winId}`);
  if (!el) return;
  if (el.classList.contains('hidden')) {
    focusWindow(winId);
  } else if (el.classList.contains('active-win')) {
    el.classList.add('hidden');
    el.classList.remove('active-win');
    syncDock();
  } else {
    focusWindow(winId);
  }
}

function syncDock() {
  document.querySelectorAll('.tb-app').forEach(btn => {
    const w = document.getElementById(`win-${btn.dataset.win}`);
    btn.classList.toggle('active', w && !w.classList.contains('hidden'));
  });
}

// Dragging windows
windows.forEach(win => {
  const bar = win.querySelector('.win-bar');
  const winId = win.id.replace('win-', '');

  win.addEventListener('mousedown', () => focusWindow(winId));

  let dragging = false, offsetX = 0, offsetY = 0;

  bar.addEventListener('mousedown', e => {
    if (e.target.closest('.win-btn') || win.classList.contains('maximized')) return;
    dragging = true;
    const rect = win.getBoundingClientRect();
    const deskRect = document.getElementById('desktop').getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    focusWindow(winId);

    function onMove(ev) {
      if (!dragging) return;
      let nx = ev.clientX - deskRect.left - offsetX;
      let ny = ev.clientY - deskRect.top - offsetY;
      nx = Math.max(0, Math.min(nx, deskRect.width - 120));
      ny = Math.max(0, Math.min(ny, deskRect.height - 40));
      win.style.left = `${nx}px`;
      win.style.top = `${ny}px`;
    }

    function onUp() {
      dragging = false;
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    }

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  });
});

// Window control buttons
document.querySelectorAll('.win-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const winId = btn.dataset.win;
    const win = document.getElementById(`win-${winId}`);
    if (btn.classList.contains('close') || btn.classList.contains('minimize')) {
      win.classList.add('hidden');
      win.classList.remove('active-win');
      syncDock();
    } else if (btn.classList.contains('maximize')) {
      win.classList.toggle('maximized');
      focusWindow(winId);
    }
  });
});

// Desktop icons
document.querySelectorAll('.desk-icon[data-win]').forEach(icon => {
  icon.addEventListener('click', () => focusWindow(icon.dataset.win));
  icon.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      focusWindow(icon.dataset.win);
    }
  });
});

// Dock buttons
document.querySelectorAll('.tb-app').forEach(btn => {
  btn.addEventListener('click', () => toggleWindow(btn.dataset.win));
});

// Start menu
document.getElementById('startBtn').addEventListener('click', e => {
  e.stopPropagation();
  startMenu.classList.toggle('hidden');
});
document.addEventListener('click', e => {
  if (!e.target.closest('#startMenu') && !e.target.closest('#startBtn')) {
    startMenu.classList.add('hidden');
  }
});
document.querySelectorAll('.sm-item').forEach(item => {
  item.addEventListener('click', () => {
    focusWindow(item.dataset.win);
    startMenu.classList.add('hidden');
  });
});

// Layout presets (compact tile & cascade)
function applyTileLayout() {
  const desk = document.getElementById('desktop');
  const w = desk.clientWidth;
  const h = desk.clientHeight;
  if (w < 860) return;

  const leftColX = 94;
  const gap = 10;
  const availW = w - leftColX - 14;
  const leftW = Math.round(availW * 0.62);
  const rightW = availW - leftW - gap;
  const rightX = leftColX + leftW + gap;
  const contactH = 98;
  const projH = Math.max(360, h - contactH - 34);
  const aboutH = Math.round((h - 34) * 0.52);
  const skillsH = h - aboutH - 34;

  const setBox = (id, l, t, width, height, show = true) => {
    const el = document.getElementById(`win-${id}`);
    el.classList.remove('maximized');
    el.style.left = `${l}px`;
    el.style.top = `${t}px`;
    el.style.width = `${width}px`;
    el.style.height = `${height}px`;
    el.classList.toggle('hidden', !show);
  };

  setBox('proyectos', leftColX, 12, leftW, projH, true);
  setBox('contacto', leftColX, 12 + projH + gap, leftW, contactH, true);
  setBox('sobre-mi', rightX, 12, rightW, aboutH, true);
  setBox('skills', rightX, 12 + aboutH + gap, rightW, skillsH, true);
  setBox('terminal', leftColX + 40, 60, 480, 240, false);
  focusWindow('proyectos');
}

function applyCascadeLayout() {
  const ids = ['proyectos', 'sobre-mi', 'skills', 'terminal', 'contacto'];
  ids.forEach((id, idx) => {
    const el = document.getElementById(`win-${id}`);
    el.classList.remove('maximized', 'hidden');
    el.style.left = `${104 + idx * 34}px`;
    el.style.top = `${16 + idx * 28}px`;
    if (id === 'contacto') { el.style.width = '680px'; el.style.height = '104px'; }
    zCounter += 1;
    el.style.zIndex = zCounter;
  });
  focusWindow('proyectos');
}

document.getElementById('btnTile').addEventListener('click', applyTileLayout);
document.getElementById('btnCascade').addEventListener('click', applyCascadeLayout);
document.getElementById('btnShowAll').addEventListener('click', () => {
  ['proyectos', 'sobre-mi', 'skills', 'contacto', 'terminal'].forEach(focusWindow);
});
document.getElementById('smReset').addEventListener('click', () => {
  applyTileLayout();
  startMenu.classList.add('hidden');
});

/* =========================================================
   PROJECTS EXPLORER RENDERING + SEARCH + ET5 FILTER
   ========================================================= */
const projListEl = document.getElementById('projList');
const projDetailEl = document.getElementById('projDetail');
const projCountBadge = document.getElementById('projCountBadge');
const projSearchEl = document.getElementById('projSearch');

const EVAL26_MAP = {
  'delta-gym': { order: 1, tag: '01 · Locales c/u' },
  'planet-gym': { order: 1.1, tag: '01 · Locales c/u' },
  'fragancias-nvg': { order: 1.2, tag: '01 · Locales c/u' },
  'monteroni-3d': { order: 1.3, tag: '01 · Locales c/u' },
  'plan-negocios': { order: 1.4, tag: '01 · Locales c/u' },
  'mis-notas': { order: 2, tag: '02 · Firebase (Notas)' },
  'portfolio-imos': { order: 3, tag: '03 · Portfolio' },
  'legajos': { order: 4, tag: '04 · Sistema Escuela' },
  'coronel': { order: 4.1, tag: '04 · Sistema Escuela' },
  'cursosmi': { order: 5, tag: '05 · Cursos / Videos' },
  'ciberseguridad': { order: 7, tag: '07 · Charla Chicos' },
  'juego-filosofia': { order: 7.1, tag: '07 · Charla Chicos' },
  'dilema-redes': { order: 7.2, tag: '07 · Charla Chicos' },
  'flow': { order: 8, tag: '08 · Proyecto Anual' },
  'mapas-qr': { order: 9, tag: '09 · Mapas / QR' },
  'club-natacion': { order: 10, tag: '10 · Prácticas' },
  'marketing-js': { order: 10.1, tag: '10 · Prácticas' },
  'comercial-fym': { order: 10.2, tag: '10 · Prácticas' },
  'figma-turismo': { order: 11, tag: '11 · Olimpiadas' },
  'cronometraje-esp32': { order: 11.1, tag: '11 · Olimpiadas' },
  'viajes': { order: 11.2, tag: '11 · Olimpiadas' },
  'jarvis': { order: 12, tag: '12 · Proy. Anual Práctico' },
  'pyme': { order: 12.1, tag: '12 · Proy. Anual Práctico' },
  'el-tito': { order: 12.2, tag: '12 · Proy. Anual Práctico' }
};

function renderProjects() {
  const q = searchQuery.trim().toLowerCase();
  let filtered = PROJECTS.filter(p => {
    const is2026 = p.year === 2026 || (p.status && p.status.includes('2026')) ||
      ['jarvis', 'cursosmi', 'flow', 'gta3d', 'legajos', 'plan-negocios', 'club-natacion', 'dilema-redes', 'marketing-js', 'mis-notas', 'monteroni-3d', 'delta-gym', 'sucesor-waystar'].includes(p.id);
    const matchFilter =
      activeFilter === 'all' ||
      (activeFilter === 'eval26' && Boolean(EVAL26_MAP[p.id])) ||
      (activeFilter === '2026' && is2026) ||
      (activeFilter === 'school' && p.school) ||
      p.category === activeFilter;
    if (!matchFilter) return false;
    if (!q) return true;
    const ev = EVAL26_MAP[p.id]?.tag?.toLowerCase() || '';
    return (
      p.name.toLowerCase().includes(q) ||
      p.short.toLowerCase().includes(q) ||
      ev.includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q)) ||
      p.categoryLabel.toLowerCase().includes(q)
    );
  });

  if (activeFilter === 'eval26') {
    filtered = filtered.slice().sort((a, b) => (EVAL26_MAP[a.id]?.order || 99) - (EVAL26_MAP[b.id]?.order || 99));
  }

  projCountBadge.textContent = `${filtered.length} ${filtered.length === 1 ? 'item' : 'items'}`;

  if (!filtered.length) {
    projListEl.innerHTML = `<div style="padding:14px;color:var(--muted);font-size:11.5px;text-align:center;">Sin resultados para "${searchQuery}"</div>`;
    return;
  }

  if (!filtered.some(p => p.id === selectedProjectId)) {
    selectedProjectId = filtered[0].id;
  }

  projListEl.innerHTML = filtered.map(p => {
    const evTag = EVAL26_MAP[p.id]?.tag;
    return `
    <button class="proj-item ${p.id === selectedProjectId ? 'active' : ''}" data-id="${p.id}">
      <div class="pi-icon" style="--c:${p.color}"><i class="${p.icon}"></i></div>
      <div class="pi-info">
        <div class="pi-title">
          <span>${activeFilter === 'eval26' && evTag ? evTag.split(' · ')[0] + ' · ' : ''}${p.name.replace(/^\d+\s*·\s*/, '')}</span>
          ${p.featured ? '<i class="fa-solid fa-star pi-star" title="Destacado"></i>' : (p.school ? '<i class="fa-solid fa-graduation-cap pi-star" style="color:var(--cyan)" title="Proyecto EEST N°5"></i>' : '')}
        </div>
        <div class="pi-sub">${activeFilter === 'eval26' && evTag ? evTag + ' — ' + p.short : p.short}</div>
      </div>
    </button>
  `;
  }).join('');

  projListEl.querySelectorAll('.proj-item').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedProjectId = btn.dataset.id;
      renderProjects();
    });
  });

  const current = filtered.find(p => p.id === selectedProjectId) || filtered[0];
  renderProjectDetail(current);
}

function renderProjectDetail(p) {
  projDetailEl.innerHTML = `
    <div class="pd-banner" style="--b1:${p.b1};--b2:${p.b2}">
      <div class="pd-banner-top">
        <span class="pd-cat"><i class="${p.icon}"></i> ${p.categoryLabel}</span>
        <span class="pd-status">● ${p.status}</span>
      </div>
      <h3>${p.name}</h3>
      <p>${p.tagline}</p>
    </div>

    <p class="pd-desc">${p.description}</p>

    <div class="pd-grid">
      <div class="pd-card">
        <h5><i class="fa-solid fa-bolt"></i> Funcionalidades clave</h5>
        <ul class="pd-list">${p.features.map(f => `<li>${f}</li>`).join('')}</ul>
      </div>
      <div class="pd-card">
        <h5><i class="fa-solid fa-diagram-project"></i> Arquitectura técnica</h5>
        <ul class="pd-list">${p.architecture.map(a => `<li>${a}</li>`).join('')}</ul>
      </div>
    </div>

    <div class="pd-tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>

    <div class="pd-actions">
      <a href="${p.repo}" target="_blank" class="btn-primary">
        <i class="${p.btnIcon || 'fa-brands fa-github'}"></i> ${p.btnLabel || 'Ver código en GitHub'}
      </a>
      <span class="btn-ghost">${p.repoLabel}</span>
    </div>
  `;
}

document.querySelectorAll('.f-pill').forEach(pill => {
  pill.addEventListener('click', () => {
    document.querySelectorAll('.f-pill').forEach(x => x.classList.remove('active'));
    pill.classList.add('active');
    activeFilter = pill.dataset.filter;
    renderProjects();
  });
});

if (projSearchEl) {
  projSearchEl.addEventListener('input', e => {
    searchQuery = e.target.value;
    renderProjects();
  });
}

/* =========================================================
   INTERACTIVE TERMINAL
   ========================================================= */
const termForm = document.getElementById('termForm');
const termInput = document.getElementById('termInput');
const termOutput = document.getElementById('termOutput');

function termPrint(html) {
  const div = document.createElement('div');
  div.innerHTML = html;
  termOutput.appendChild(div);
  termOutput.scrollTop = termOutput.scrollHeight;
}

termForm.addEventListener('submit', e => {
  e.preventDefault();
  const raw = termInput.value.trim();
  if (!raw) return;
  termInput.value = '';
  termPrint(`<span class="t-green">ian@imos:~$</span> ${raw}`);

  const cmd = raw.toLowerCase();
  if (cmd === 'help') {
    termPrint(`<span class="t-cyan">Comandos:</span> projects · school · skills · about · contact · open &lt;app&gt; · tile · clear`);
  } else if (cmd === 'projects' || cmd === 'ls') {
    termPrint(`Total: <span class="t-cyan">${PROJECTS.length} proyectos</span> (22 de EEST N°5 + 4 personales destacados).`);
  } else if (cmd === 'school') {
    const et5 = PROJECTS.filter(p => p.school);
    termPrint(et5.map(p => `• <span class="t-cyan">${p.name}</span>`).join('<br>'));
  } else if (cmd === 'skills') {
    termPrint(`Python/FastAPI · Gemini/Ollama/RAG · Node.js/Express · PHP/MySQL/SQLite · Three.js · Docker · Arduino/ESP32/MQTT`);
  } else if (cmd === 'about') {
    termPrint(`Ian Monteroni — Tecnicatura en Programación (ET N°5 Berazategui). Full-Stack, IA &amp; 3D.`);
  } else if (cmd === 'contact') {
    termPrint(`GitHub: @monteroniian · LinkedIn: ian-monteroni · Discord: elcorqui3000`);
  } else if (cmd === 'tile') {
    applyTileLayout();
    termPrint(`<span class="t-green">✓</span> Ventanas organizadas en mosaico.`);
  } else if (cmd === 'clear') {
    termOutput.innerHTML = '';
  } else if (cmd.startsWith('open ')) {
    const target = cmd.replace('open ', '').trim();
    if (WIN_LABELS[target]) {
      focusWindow(target);
      termPrint(`<span class="t-green">✓</span> Abriendo ${WIN_LABELS[target]}...`);
    } else {
      termPrint(`<span class="t-amber">App no encontrada.</span> Usá: proyectos, sobre-mi, skills, contacto.`);
    }
  } else {
    termPrint(`<span class="t-amber">Comando desconocido:</span> ${raw} (escribí <span class="t-green">help</span>)`);
  }
});

/* =========================================================
   COPY DISCORD + CLOCK + TYPING + PARTICLES
   ========================================================= */
document.getElementById('copyDiscordBtn').addEventListener('click', () => {
  navigator.clipboard?.writeText('elcorqui3000');
  const label = document.getElementById('discordHandle');
  label.textContent = '¡Copiado!';
  setTimeout(() => (label.textContent = 'elcorqui3000'), 1400);
});

function updateClock() {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const day = now.toLocaleDateString('es-AR', { day: '2-digit', month: 'short' });
  document.getElementById('topClock').textContent = `${day} · ${hh}:${mm}`;
}
updateClock();
setInterval(updateClock, 15000);

const phrases = [
  'Full-Stack & AI Developer',
  '26 Proyectos · 22 de Escuela Técnica N°5',
  'Asistentes de Voz · RAG · WebGL 3D · IoT',
  'Node.js · Python · PHP · Arduino/ESP32'
];
let pIdx = 0, cIdx = 0, deleting = false;
const typedEl = document.getElementById('typed');
function typeTick() {
  const word = phrases[pIdx];
  typedEl.textContent = word.slice(0, cIdx);
  if (!deleting && cIdx < word.length) {
    cIdx++;
    setTimeout(typeTick, 55);
  } else if (!deleting && cIdx === word.length) {
    deleting = true;
    setTimeout(typeTick, 1700);
  } else if (deleting && cIdx > 0) {
    cIdx--;
    setTimeout(typeTick, 28);
  } else {
    deleting = false;
    pIdx = (pIdx + 1) % phrases.length;
    setTimeout(typeTick, 350);
  }
}
typeTick();

(function initParticles() {
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  let pts = [];
  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    pts = Array.from({ length: 34 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.5 + 0.6
    }));
  }
  resize();
  window.addEventListener('resize', () => {
    resize();
    applyTileLayout();
  });
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i];
      a.x += a.vx; a.y += a.vy;
      if (a.x < 0 || a.x > canvas.width) a.vx *= -1;
      if (a.y < 0 || a.y > canvas.height) a.vy *= -1;
      ctx.fillStyle = 'rgba(56, 189, 248, 0.55)';
      ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
      for (let j = i + 1; j < pts.length; j++) {
        const b = pts[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 110) {
          ctx.strokeStyle = `rgba(56, 189, 248, ${(1 - d / 110) * 0.16})`;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

// Boot
renderProjects();
applyTileLayout();
