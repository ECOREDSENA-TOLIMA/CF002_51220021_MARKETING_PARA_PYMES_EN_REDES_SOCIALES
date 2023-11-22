export default {
  global: {
    componenteFormativo: 'Métricas y plan de acción en redes sociales',
    descripcionCurso:
      'A diferencia del <em>marketing</em> tradicional con el cual, usualmente es complejo medir el éxito de las acciones implementadas, en el <em>marketing</em> digital, esta es una de las mayores ventajas, porque con la utilización de software y aplicaciones es posible conocer indicadores de las tácticas y actividades realizadas; resultados con los cuales se deberían desarrollar posteriormente planes de mejora.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Medición y analítica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Herramientas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Indicadores',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Métricas aplicadas a redes sociales',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Propiedad intelectual en Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Marco normativo de la propiedad industrial a nivel nacional',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Propiedad intelectual en redes sociales',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Seguridad y salud en el trabajo aplicable a gestión en medios digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Posibles impactos en los administradores de redes sociales',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Pausas activas',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Plan de mejora en digital',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_02_51220021.zip',
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
  complementario: [
    {
      tema: '1. Medición y analítica',
      referencia:
        'Shleyner, E. (2021). <em>19 métricas de redes sociales que realmente importan y cómo darles seguimiento.</em> ',
      tipo: 'Artículo',
      link:
        'https://blog.hootsuite.com/es/metricas-de-redes-sociales/#Metricas_de_interaccion',
    },
    {
      tema: '3. Propiedad Industrial en Colombia',
      referencia:
        'Ley 178 de 1994. Por medio de la cual se aprueba el "Convenio de París para la Protección de la Propiedad Industrial". 28 de diciembre de 1994.  ',
      tipo: 'Artículo',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=37817#:~:text=Todo%20producto%20que%20lleve%20il%C3%ADcitamente,derecho%20a%20la%20protecci%C3%B3n%20legal',
    },
  ],
  glosario: [
    {
      termino: 'Alcance orgánico',
      significado:
        'Porcentaje o dato numérico que evalúa el impacto y el número de personas que han visto una publicación de manera natural, sin ningún tipo de promoción o publicidad de pago (Cronuts digital, s.f.).',
    },
    {
      termino: 'Alcance viral',
      significado:
        'Es la unidad de medida que calcula el número de personas que han visto una publicación a través de otros contactos.',
    },
    {
      termino: 'Analítica web',
      significado:
        'Es la forma de medir y analizar los datos de tráfico de un sitio web, a través del cual se permiten tomar las mejores decisiones y optimizar los objetivos de la empresa.',
    },
    {
      termino: 'Contenidos digitales',
      significado:
        'Piezas de información fundamentales en el <em>Inbound Marketing</em>, se pueden construir a través de videos, <em>reels</em>, imágenes, texto, <em>Gif</em>, mapas conceptuales, entre otros; el éxito del impacto en su creación dependerá de la creatividad, y se transformará en clientes, ventas y visitantes al negocio.',
    },
    {
      termino: '<em>Cookies</em>',
      significado:
        'Son pequeños fragmentos de información que quedan registrados en el navegador cuando se visita un sitio web y que permiten a este sitio seguir el rastro de la actividad de los usuarios.',
    },
    {
      termino: '<em>Marketing</em> de contenidos',
      significado:
        'Es una estrategia de <em>marketing</em> enfocada en ofrecer contenidos útiles y de ayuda a los usuarios principalmente a través del <em>blog</em> y del <em>social media marketing</em>.',
    },
    {
      termino: 'Métricas',
      significado:
        'Son los indicadores que se extraen con la aplicación de técnicas y actividades de <em>marketing</em> digital',
    },
    {
      termino: '<em>Retargeting</em>',
      significado:
        'Es una técnica de publicidad que consiste en mostrar al usuario productos afines, una especie de filtro personalizado de productos y servicios en los que se está más receptivo recibir información. El producto te sigue por la red (Boada, 2021).',
    },
    {
      termino: '<em>Social media</em>',
      significado:
        'Plataformas donde comunidades y personas pueden interactuar y socializar diversos temas, con la finalidad de compartir noticias, gustos, intereses, ideas, tendencias, etc.; donde el contenido digital es generado por todos los participantes y no por un único creador como en los medios tradicionales.',
    },
  ],
  referencias: [
    {
      referencia:
        'Boada N. (2021). <em>¿Qué es el retargeting?</em> Ciberclick ',
      link: 'https://www.cyberclick.es/numerical-blog/que-es-el-retargeting',
    },
    {
      referencia: 'Cronuts digital. (s.f.). Glosario de términos digitales. ',
      link:
        'https://cronuts.digital/es/glosario-de-terminos-digitales/#:~:text=Alcance%20Orgánico%20Es%20un%20porcentaje,promoción%20o%20publicidad%20de%20pago',
    },
    {
      referencia:
        'Dirección Nacional de Derechos de Autor. (2022). <em>Trámites y Servicios: Registro de Obras.</em> ',
      link: 'http://derechodeautor.gov.co:8080/registro-de-obras3',
    },
    {
      referencia:
        'Qualtrics. (2023). ¿Qué es Net Promoter Score (NPS)®? Definición y ejemplos. ',
      link:
        'https://www.qualtrics.com/es-la/gestion-de-la-experiencia/cliente/net-promoter-score/',
    },
    {
      referencia:
        'SENA. (2021). <em>Derechos de autor</em>. [Video] Youtube.  ',
      link: 'https://www.youtube.com/watch?v=uKZZxlT4F5M',
    },
    {
      referencia:
        'Shleyner, E. (2021). <em>19 métricas de redes sociales que realmente importan y cómo darles seguimiento.</em> ',
      link:
        'https://blog.hootsuite.com/es/metricas-de-redes-sociales/#Metricas_de_interaccion',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador web',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre validador',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: 'Nombre validador',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
