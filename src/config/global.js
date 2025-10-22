export default {
  global: {
    componenteFormativo:
      'Técnicas de limpieza en modelos de aprendizaje automático',
    descripcionCurso:
      'La inteligencia artificial (IA) está permeando en muchas áreas y sectores, esto ha impulsado nuevas ideas de negocio en las organizaciones y empresas. De ahí que la calidad de los datos sea crucial para el entrenamiento de modelos y así obtener predicciones precisas. Si los datos son desordenados o incorrectos, el modelo también lo será.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
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
        titulo: 'Limpieza de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de errores',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Técnicas',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Reducción de dimensionalidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Técnicas',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Aprendizaje automático',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Objetivos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Técnicas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Selección del algoritmo',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Evaluación del modelo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Métricas de clasificación',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Métricas de regresión',
            hash: 't_4_2',
          },
        ],
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_02_21710120_DU.pdf',
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
      tema: '1. Limpieza de datos',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2022, 26 de diciembre). Proceso de normalización de datos [Video]. YouTube. https://www.youtube.com/watch?v=hKwuc-JJisI',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hKwuc-JJisI',
    },
    {
      tema: '2. Reducción de dimensionalidad',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2023, 25 de marzo). Etapas del procesamiento de datos y métodos estadísticos Introducción [Video]. YouTube. https://www.youtube.com/watch?v=ndzj15PQEVw',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ndzj15PQEVw',
    },
    {
      tema: '3. Aprendizaje automático',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2025, 23 de mayo). Preparación y modelado de datos para algoritmos de machine learnig [Video]. YouTube. https://www.youtube.com/watch?v=cDIla4TZWoU',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=cDIla4TZWoU',
    },
  ],
  glosario: [
    {
      termino: '<em>Bias-variance tradeoff</em> (compensación sesgo-varianza)',
      significado:
        'describe la relación entre sesgo (errores por suposiciones simplificadoras) y varianza (sensibilidad a fluctuaciones en datos de entrenamiento).',
    },
    {
      termino: '<em>Cross-validation</em> (validación cruzada)',
      significado:
        'técnica de evaluación que divide los datos en múltiples subconjuntos para entrenar y evaluar el modelo repetidamente, proporcionando una estimación más robusta del rendimiento y ayudando a detectar sobreajuste.',
    },
    {
      termino: '<em>Ensemble methods</em> (métodos de ensamble)',
      significado:
        'técnicas que combinan múltiples modelos de aprendizaje automático para crear un predictor más fuerte que cualquiera de los modelos individuales. Incluyen métodos como <em>bagging, boosting y stacking.</em>',
    },
    {
      termino: 'Ingeniería de características',
      significado:
        'conjunto de técnicas para transformar y seleccionar variables derivadas de datos brutos con el fin de mejorar el rendimiento de los modelos de IA. Incluye creación de nuevas características, codificación de categorías y escalado de valores.',
    },
    {
      termino: '<em>Overfitting</em> (sobreajuste)',
      significado:
        'fenómeno donde un modelo aprende demasiado específicamente de los datos de entrenamiento, incluyendo ruido, resultando en excelente rendimiento en entrenamiento, pero pobre generalización a datos nuevos.',
    },
    {
      termino: 'Regularización',
      significado:
        'conjunto de técnicas para prevenir sobreajuste añadiendo un término de penalización a la función de pérdida del modelo. Incluye regularización L1 <em>(Lasso)</em>, L2 <em>(Ridge)</em> y elástica, controlando la complejidad del modelo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aggarwal, C. C. (2017). An introduction to outlier analysis (pp. 1-34). Springer International Publishing.',
    },
    {
      referencia:
        'Agrawal, R., Imieliński, T. & Swami, A. (1993, June). Mining association rules between sets of items in large databases. In Proceedings of the 1993 ACM SIGMOD international conference on Management of data, 1, 207-216.',
    },
    {
      referencia:
        'Chawla, N. V., Bowyer, K. W., Hall, L. O. & Kegelmeyer, W. P. (2002). SMOTE: synthetic minority over-sampling technique. Journal of artificial intelligence research, 16, 321-357',
    },
    {
      referencia:
        'Han, J., Pei, J. & Tong, H. (2022). Data mining: concepts and techniques. Morgan kaufmann.',
    },
    {
      referencia:
        'Dasu, T. & Johnson, T. (2003). Exploratory data mining and data cleaning. John Wiley & Sons.',
    },
    {
      referencia:
        'Fawcett, T. (2006). An introduction to ROC analysis. Pattern recognition letters, 27(8), 861-874.',
    },
    {
      referencia:
        'Guyon, I. & Elisseeff, A. (2003). An introduction to variable and feature selection. Journal of machine learning research, 3, 1157-1182.',
    },
    {
      referencia:
        'Jolliffe, I. T. (2002). Principal component analysis for special types of data. En A. Editor (Ed.). Principal Component Analysis (pp. 338-372). Springer New York.',
    },
    {
      referencia:
        'Little, R. J., & Rubin, D. B. (2019). Statistical analysis with missing data. John Wiley & Sons.',
    },
    {
      referencia:
        'Mitchell, T. M. (1997). Machine learning (Vol. 1, No. 9). New York: McGraw-hill.',
    },
    {
      referencia:
        'Rahm, E. & Do, H. H. (2000). Data cleaning: Problems and current approaches. IEEE Data Eng. Bull., 23(4), 3-13.',
    },
    {
      referencia:
        'Schafer, J. L. & Graham, J. W. (2002). Missing data: our view of the state of the art. Psychological methods, 7(2), 147.',
    },
    {
      referencia:
        'Tibshirani, R. (1996). Regression shrinkage and selection via the lasso. Journal of the Royal Statistical Society Series B: Statistical Methodology, 58(1), 267-288.',
    },
    {
      referencia:
        'Van Buuren, S. (2018). Flexible Imputation of Missing Data. CRC Press.',
    },
    {
      referencia:
        'Wolpert, D. H. (1996). The lack of a priori distinctions between learning algorithms. Neural computation, 8(7), 1341-1390.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Deivis Eduard Ramírez Martínez',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
}
