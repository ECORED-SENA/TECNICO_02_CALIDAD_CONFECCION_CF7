export default {
  global: {
    componenteFormativo: 'Planes de mantenimiento de maquinaria y equipos',
    descripcionCurso:
      'El presente componente ilustra sobre la manera de diseñar e implementar un programa de mantenimiento de maquinaria y equipos de confección industrial, a través del conocimiento de los sistemas de funcionamiento de dichos equipos. También se evidencia la importancia de una gestión apropiada que permita el mejor aprovechamiento de las máquinas.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Componentes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Terminología técnica',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Máquinas de confección',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Herramientas o equipos de mantenimiento de máquinas de coser',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Mantenimiento de las máquinas de confección',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos de mantenimiento',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Seguimiento a las máquinas y acciones de mantenimiento',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'istemas de lubricación en máquinas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos de lubricación',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Tipos de lubricantes',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Proceso de lubricación de máquinas de coser ',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Gestión del mantenimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Plan de mantenimiento',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo:
          'Herramienta Total Productive Maintenance (TPM) - Mantenimiento Productivo Total',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Guías y accesorios para la confección',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Mantenimiento y atención a problemas menores',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Buenas prácticas para el mantenimiento de máquinas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Puesta a punto de la máquina y el puesto de trabajo',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Amazon.com.mx. (2021). Piezas y accesorios para máquinas de coser.',
      link:
        'https://www.amazon.com.mx/143169LGB-1conjunto-m%C3%A1quina-M%C3%A1quina-TRABAJO/dp/B078G7MRN6',
    },

    {
      referencia:
        'AMERICAN SEWING MACHINE OIL Aceite American Para Máquinas de Coser. Recuperado en',
    },

    {
      referencia:
        'Ananas Labores y Manualidades. (2016). Conociendo la máquina de coser VI: Mantenimiento de la máquina. [Artículo de blog]',
      link:
        'https://ananaslaboresymanualidades.wordpress.com/2016/07/07/mantenimiento-la-máquina-de-coser-limpieza-y-engrasado/',
    },

    {
      referencia:
        'Armando SK. (2015). Consejos de mantenimiento para que tu máquina de coser dure para siempre jamás. [Blog]',
      link: 'https://skarlett.es/mantenimiento-para-tu-máquina-de-coser/',
    },

    {
      referencia:
        'BSG Instituto. (2020). Los 8 pilares del TPM. [Artículo de blog].',
      link:
        'https://bsginstitute.com/bs-campus/blog/los-8-pilares-del-tpm-1134',
    },

    {
      referencia:
        'Cabanillas, R. (2018). Mantenimiento de las máquinas de coser industrial de clase 500. [Tesis de grado]. Universidad Nacional de Educación Enrique Guzmán y Valle.',
      link:
        'https://repositorio.une.edu.pe/bitstream/handle/UNE/4037/MONOGRAF%C3%8DA%20-%20CABANILLAS%20POMIANO.pdf?sequence=1&isAllowed=y',
    },

    {
      referencia: 'Coats Group. (s.f.) Todo sobre agujas. Coats.',
      link:
        'https://coats.com/en/information-hub/All-About-Needles#Needle_Identification',
    },

    {
      referencia:
        'Confecciones Badaam Ltda. (2020). Ficha técnica máquina plana CF-MP-002.',
      link: 'https://es.calameo.com/books/006407866f35c2a55d005',
    },

    {
      referencia:
        'Durán, P., D. (2013). Preparación de máquinas de corte, ensamblado y acabado. IC Editorial.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/43646',
    },

    {
      referencia: 'Lubricantes Raloy. (s.f.) Manual técnico de lubricantes.',
      link: 'http://www.raloy.com.mx/descargas/files/Manual_Tecnico_2013.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Asertiva',
      significado: 'expresión caracterizada por afirmar de manera categórica.',
    },
    {
      termino: 'Costura',
      significado:
        'resultado de unir dos o más hilos, con el fin de unir piezas o dobladillarlas.',
    },
    {
      termino: 'Diagrama de flujo',
      significado:
        'grafica que muestra la secuencia de actividades de un proceso, de manera organizada y por medio de símbolos.',
    },
    {
      termino: 'Eficiencia',
      significado:
        'relación entre los resultados y logros, y los recursos utilizados.',
    },
    {
      termino: 'Embonar',
      significado: 'unir dos piezas doblándolas y ocultando sus extremos.',
    },
    {
      termino: 'Ensamble',
      significado:
        'unir de manera correcta las piezas que componen un producto',
    },
    {
      termino: 'Gestión',
      significado:
        'acciones u operaciones que se realizan para dirigir y administrar un negocio o empresa, con el fin de lograr los objetivos propuestos.',
    },
    {
      termino: 'Flujo',
      significado:
        'manera como una serie de actividades se dirigen a un propósito planeado.',
    },
    {
      termino: 'Intempestiva',
      significado: 'que sucede de manera sorpresiva, cuando no se espera.',
    },
    {
      termino: 'Maquila',
      significado:
        'es un sistema de producción que consiste en vender servicio de ensamble de productos de empresas que fungen como clientes; servicio de mano de obra.',
    },
  ],
  complementario: [
    {
      texto:
        'Escuela Europea de Formación Empresarial, S. A. (2012). Preparación de herramientas, máquinas y equipos para la confección de productos textiles: cortinaje y complementos de decoración. IC Editorial.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/54265',
    },
    {
      texto:
        'Coser fácil y más. (2019). Tipos de agujas para máquinas de coser doméstica.',
      tipo: 'video',
      link: 'https://youtu.be/kVNt52lzehQ',
    },
    {
      texto:
        'Mecánica confección. (s.f.). Cómo funciona una máquina de coser y forma la pintada I.',
      tipo: 'video',
      link: 'https://youtu.be/SKTaW5NOjqw',
    },
    {
      texto: 'Lubricantes Raloy. (s.f.). Manual técnico de lubricantes. ',
      tipo: 'PDF',
      descarga: '/downloads/Manual_Tecnico_2013.pdf',
    },
    {
      texto:
        'Dr. Buchelli UNT. (2014). La gestión de mantenimiento de las empresas.',
      tipo: 'video',
      link: 'https://youtu.be/-5nxVsKSNaI',
    },
    {
      texto:
        'Valbor Soluciones. (2018). Plan de mantenimiento: 5 elementos indispensables.',
      tipo: 'Video',
      link: 'https://youtu.be/av7JwCDox3A',
    },
    {
      texto: 'Top Solución. (s.f.). Plan de mantenimiento.',
      tipo: 'Video',
      link: 'https://youtu.be/ufdL4VmHt4I',
    },
    {
      texto:
        'Gemba Academy Español. (2018). TPM Mantenimiento productivo total.',
      tipo: 'Video',
      link: 'https://youtu.be/QdDPyNolNhk',
    },
    {
      texto:
        'Mecánica de confección. (2018). Puesta a punto de las máquinas de coser.',
      tipo: 'Video',
      link: 'https://youtu.be/YNf0salcrlc',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Paola Angélica Castro Salazar',
        cargo: 'Experta temática',
        centro:
          'Centro de Formación en Diseño, Confección y Moda - Regional Antioquia',
      },
      {
        nombre: 'Ledy Johana Velásquez Hernández',
        cargo: 'Experta temática',
        centro:
          'Centro de Formación en Diseño, Confección y Moda - Regional Antioquia',
      },
      {
        nombre: 'Liliana Victoria Morales Gualdrón',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro de la Industria para la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Revisión de estilo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],

    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Eulises Orduz Amezquita'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ricardo Alonso González Vargas',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
