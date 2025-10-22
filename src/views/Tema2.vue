<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 2
      h1 Reducción de dimensionalidad
    
    .row.justify-content-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Una vez que se han depurado los datos, asegurando su calidad y consistencia, se enfrenta a un nuevo desafío, sutil, pero de gran impacto: la complejidad. En la era del #[em Big Data], es común trabajar con conjuntos de datos que no solo contienen millones de registros (filas), sino también cientos o miles de características (columnas o dimensiones). Aunque podría parecer que "más datos es siempre mejor", un exceso de dimensiones puede ser perjudicial. Este fenómeno, conocido como la "maldición de la dimensionalidad", puede degradar el rendimiento del modelo, aumentar la complejidad computacional y oscurecer los patrones verdaderamente significativos.
        .tarjeta.BG00.p-4.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema2/icono-01.svg', alt='Imagen decorativa')
            .col-lg-10
              p.mb-0 La reducción de dimensionalidad constituye un conjunto de técnicas de ingeniería de características empleadas para disminuir el número de variables de entrada en un conjunto de datos, transformándolo en un espacio de menor dimensionalidad, sin perder una cantidad significativa de información relevante. El objetivo no es simplemente eliminar columnas de manera aleatoria, sino hacerlo de una forma inteligente y estructurada que simplifique el problema para los algoritmos de aprendizaje automático. 
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img-01.png', alt='Imagen decorativa')

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10
        p.mb-0 Este proceso no solo mejora la eficiencia computacional, sino que también puede revelar estructuras latentes en los datos que no eran evidentes en su forma original de alta dimensionalidad. 

    .row.justify-content-center.bg-1.mb-4.m-20
      .col-10
        .px-5.py-4
          .row.justify-content-center.align-items-center.tarjeta.tarjeta--C01.p-3(style="background-color:#FFEBF1")
            .col-lg-8.order-lg-1.order-2.px-4(data-aos="fade-right")
              .row.justify-content-center
                p Algunas técnicas populares de reducción de dimensionalidad incluyen:
                ul.lista-ul--color.lista-ul.mb-0
                  li.mb-0
                    i.fas.fa-robot(style="color:#523DBF")
                    p.mb-0 Análisis de Componentes Principales (PCA).
                  li.mb-0
                    i.fas.fa-robot(style="color:#523DBF")
                    p.mb-0 Análisis de Componentes Independientes (ICA).
                  li.mb-0
                    i.fas.fa-robot(style="color:#523DBF")
                    p.mb-0 Métodos de selección de características.
            .col-lg-4.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4.px-0
              img(src='@/assets/curso/temas/tema2/img-02.svg', alt='Imagen decorativa')
          .p-4.bg-c1(data-aos="fade-left")
            .row.align-items-center
              .col-lg-auto.col-3.mb-lg-0.mb-4
                img(src='@/assets/curso/temas/tema1/icono-01.svg', alt='Imagen decorativa', style='width: 60px').m-auto
              .col-lg
                p.mb-0 #[b La elección de la técnica adecuada, dependerá de la naturaleza específica de los datos y los objetivos del análisis, requiriendo una comprensión profunda, tanto del dominio del problema como de las matemáticas subyacentes.]

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Concepto

    .row.justify-content-center.mb-5
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        p La reducción de dimensionalidad se refiere al proceso de transformar un conjunto de datos con un elevado número de variables originales en otro de menor dimensión, preservando al máximo la información relevante. Esta práctica mejora la eficiencia computacional, mitiga la "maldición de la dimensionalidad" y facilita la visualización de datos. (Jolliffe, 2002).
        .row.justify-content-center.align-items-center
          .col-lg-1.col-2.px-0.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema3/icono-17.svg' alt="Imagen decorativa")
          .col-lg-11
            p.mb-0 El concepto central de la reducción de dimensionalidad se fundamenta en la mitigación de la "maldición de la dimensionalidad", un término acuñado por el matemático Richard Bellman (1961). Este fenómeno describe cómo, al incrementarse el número de dimensiones, el volumen del espacio de características crece de manera exponencial, generando varios efectos adversos: 
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img-03.svg' alt="Imagen decorativa")

    .tarjeta.tarjeta--BG01.p-md-5.p-4.mb-5(data-aos="fade-right")
      SlyderA(tipo="b")
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Dispersión de datos
            p.mb-0 En un espacio de alta dimensión, los puntos de datos se tornan extremadamente dispersos. La distancia entre cualquier par de puntos tiende a ser similar, lo que dificulta que los algoritmos basados en la distancia, como K-NN, puedan agrupar o diferenciar observaciones de manera eficaz. 
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema2/img-04.png', alt='Imagen decorativa')
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Aumento del costo computacional
            p.mb-4 Un mayor número de dimensiones implica más parámetros que un modelo debe aprender, lo cual se traduce directamente en tiempos de entrenamiento más prolongados, mayor consumo de memoria y una infraestructura más costosa. 
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema2/img-05.png', alt='Imagen decorativa')
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Riesgo de sobreajuste #[em (overfitting)]
            p.mb-4 Con una gran cantidad de características, es más probable que un modelo aprenda del "ruido" y de las peculiaridades específicas del conjunto de entrenamiento, en lugar de generalizar los patrones subyacentes. El modelo se vuelve excesivamente complejo y funciona muy bien con los datos que ya ha visto, pero falla al predecir sobre datos nuevos. 
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema2/img-06.png', alt='Imagen decorativa')
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Multicolinealidad
            p.mb-4 En muchos conjuntos de datos, algunas características están altamente correlacionadas entre sí (por ejemplo, las variables "altura en metros" y "altura en centímetros"). Esta redundancia no aporta nueva información y puede desestabilizar algunos modelos de aprendizaje automático, como la regresión lineal. 
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema2/img-07.png', alt='Imagen decorativa')

    .row.justify-content-center.mb-4
      .col-lg-4.col-md-6.col-8.mb-lg-0.mb-4
        img(src='@/assets/curso/temas/tema2/img-08.png', alt='Imagen decorativa')
      .col-lg-8.mb-lg-0.mb-4(data-aos="fade-right")
        p.mb-0 La reducción de dimensionalidad aborda estos desafíos al identificar y retener solo las características más relevantes y significativas del conjunto de datos original. Este proceso no solo mitiga los problemas mencionados, sino que también puede revelar estructuras latentes en los datos que no eran evidentes en su forma de alta dimensión. Además, la visualización de datos se vuelve más factible y comprensible cuando se reduce a dos o tres dimensiones, permitiendo a los analistas y científicos de datos obtener #[em insights] valiosos que de otra manera podrían pasar desapercibidos.
      
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Técnicas

    p.mb-5(data-aos="fade-left") Las técnicas para reducir la dimensionalidad se dividen en dos grandes familias, cada una con su propia filosofía y aplicabilidad.

    .row.mb-5.ms-0
      .col-auto.bg-c2(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            img(src='@/assets/curso/ico.svg', alt='Imagen decorativa', style='width: 40px')
          .col
            h3.mb-0 A. Selección de características #[em (feature selection)]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-4.px-0.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema2/icono-03.svg' alt="Imagen decorativa")
      .col-lg-10(data-aos="fade-left")
        p.mb-0 Este enfoque se centra en la identificación y selección de un subconjunto de las características originales, descartando las restantes. La principal ventaja de este método radica en que preserva la interpretabilidad de las variables originales, ya que se retienen únicamente las columnas más informativas. Estas técnicas pueden clasificarse en tres categorías, (Guyon & Elisseeff, 2003):

    .row.mb-5.ms-0
      .col-auto.bg-c2(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            img(src='@/assets/curso/ico2.svg', alt='Imagen decorativa', style='width: 5.7px')
          .col
            h3.mb-0 I. Métodos de filtro

    p.mb-5(data-aos="fade-left") Evalúan la relevancia de las características, mediante el uso de métricas estadísticas, independientemente del modelo de aprendizaje automático que se empleará posteriormente. Estos métodos son rápidos y eficientes desde el punto de vista computacional y hacen parte de ello:

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-xl-4.col-lg-8.mb-lg-0.mb-4
        .crd.crd--grayGrad(data-aos="fade-right")
          .bottomCircle.mb-4
            figure
              img(src="@/assets/curso/temas/tema2/icono-04.svg", alt="Imagen decorativa").img90.m-auto
          h4.titulo-1.text-center Prueba de chi-cuadrado (X2)
          p.mb-0 Se emplea para determinar si existe una dependencia significativa entre dos variables categóricas. Se utiliza comúnmente para seleccionar las características categóricas más relevantes para una variable objetiva también categórica. 
      .col-xl-4.col-lg-8.mb-lg-0.mb-4
        .crd.crd--grayGrad(data-aos="flip-up")
          .bottomCircle.mb-4
            figure
              img(src="@/assets/curso/temas/tema2/icono-05.svg", alt="Imagen decorativa").img90.m-auto
          h4.titulo-1 ANOVA (análisis de varianza)
          p.mb-0 La prueba F de ANOVA permite comparar las medias de una variable continua entre dos o más grupos categóricos. Es útil para seleccionar características numéricas que tienen una relación fuerte con una variable objetiva categórica.
      .col-xl-4.col-lg-8.mb-lg-0.mb-4
        .crd.crd--grayGrad(data-aos="fade-left")
          .bottomCircle.mb-4
            figure
              img(src="@/assets/curso/temas/tema2/icono-06.svg", alt="Imagen decorativa").img90.m-auto
          h4.titulo-1 Coeficiente de correlación de Pearson
          p.mb-0 Mide la relación lineal entre dos variables numéricas. Se utiliza para identificar características que están altamente correlacionadas con la variable objetivo (en problemas de regresión) y también para identificar y eliminar características redundantes (multicolinealidad).

    .row.mb-5.ms-0
      .col-auto.bg-c2(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            img(src='@/assets/curso/ico2.svg', alt='Imagen decorativa', style='width: 5.7px')
          .col
            h3.mb-0 II. Métodos de envoltura #[em (wrapper methods)]

    p.mb-5(data-aos="fade-left") Estos métodos emplean un algoritmo de aprendizaje automático específico, para evaluar la utilidad de diferentes subconjuntos de características. Consideran la selección de características como un problema de búsqueda, donde cada estado representa un conjunto de variables. Aunque son más precisos que los métodos de filtro, su costo computacional es significativamente mayor e incluyen:

    .row.justify-content-center.mb-5
      .col-lg-10
        TabsC.color-acento-botones.mb-5(data-aos="fade-right")
          .BGIMG01.py-lg-5.p-4(titulo="Eliminación recursiva de características (RFE)")
            .row.justify-content-center
              .col-lg-6.col-8.order-lg-1.order-1.mb-lg-0.mb-4
                img(src='@/assets/curso/temas/tema2/img-09.png', alt='Imagen decorativa')
              .col-lg-6.order-lg-2.order-2
                p.mb-0 Este es un método iterativo que comienza entrenando un modelo con todas las características disponibles. Posteriormente, se evalúa la importancia de cada característica, por ejemplo, mediante los coeficientes en una regresión o la impureza en un árbol de decisión. La característica menos importante se elimina y el proceso se repite hasta alcanzar el número deseado de características. 
          .BGIMG01.py-lg-5.p-4(titulo="Selección hacia adelante <em>(forward selection)</em>")
            .row.justify-content-center
              .col-lg-6.col-8.order-lg-1.order-1.mb-lg-0.mb-4
                figure
                  img(src='@/assets/curso/temas/tema2/img-10.png', alt='Imagen decorativa')
              .col-lg-6.order-lg-2.order-2
                p.mb-0 Este método inicia sin características y procede a añadirlas una a una, seleccionando aquella que más mejora el rendimiento del modelo, hasta que no se observe una mejora significativa.

    .row.mb-5.ms-0
      .col-auto.bg-c2(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            img(src='@/assets/curso/ico2.svg', alt='Imagen decorativa', style='width: 5.7px')
          .col
            h3.mb-0 III. Métodos integrados #[em (embedded methods)]

    p.mb-5(data-aos="fade-left") Realizan la selección de características, como parte integral del proceso de entrenamiento del modelo. Estos métodos ofrecen un equilibrio entre la precisión de los métodos de envoltura y la eficiencia de los métodos de filtro; además, incluyen:

    .row.justify-content-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        LineaTiempoD.color-acento-botones.especial
          p.mb-0(numero="1" titulo="Regularización L1 (Lasso)") Los modelos como la regresión Lasso, incorporan una penalización basada en la suma del valor absoluto de los coeficientes del modelo. Esta penalización induce a que los coeficientes de las características menos informativas se reduzcan a exactamente cero, eliminándolas efectivamente del modelo (Tibshirani, 1996). 
          p.mb-0(numero="2" titulo="Modelos basados en árboles") Algoritmos como Random Forest o Gradient Boosting, calculan de manera inherente la "importancia de las características" durante su construcción. Esta métrica puede emplearse para clasificar las características y seleccionar las más relevantes. Estos métodos pueden utilizarse para seleccionar las características más relevantes y mejorar el rendimiento del modelo. La importancia de las características en los modelos basados en árboles, se calcula generalmente, mediante la reducción en la impureza (como el índice Gini o la entropía) que proporciona cada característica. Además, estos métodos son robustos frente a características no lineales y pueden capturar interacciones complejas entre variables.
      .col-lg-3.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img-11.svg' alt="Imagen decorativa")

    .row.mb-5.ms-0
      .col-auto.bg-c2(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            img(src='@/assets/curso/ico.svg', alt='Imagen decorativa', style='width: 40px')
          .col
            h3.mb-0 B. Extracción de características
  
    .row.align-items-center.mb-5
      .col-xl
        p La segunda técnica que se utiliza es la extracción de características, conocida también como proyección de características; la cual convierte los datos originales en un espacio de menor dimensión al crear nuevas variables que son combinaciones de las originales. Este método es particularmente beneficioso, cuando las características originales presentan alta correlación o son redundantes. Entre las técnicas más destacadas se encuentran:
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C02")
          div(titulo="El análisis de componentes principales (PCA)")
            p.mb-0 Es una de las más empleadas que proyecta los datos en las direcciones de máxima varianza. PCA genera nuevas variables denominadas componentes principales, las cuales son combinaciones lineales de las variables originales. Estos componentes se ordenan, de acuerdo con la cantidad de varianza que explican, lo que permite reducir la dimensionalidad al seleccionar únicamente los componentes más significativos. Con PCA se busca la proyección que mejor representa los datos en términos de mínimos cuadrados. Es particularmente eficaz para la visualización y exploración de conjuntos de datos de alta dimensión, ya que permite identificar fácilmente tendencias, patrones o valores atípicos. Además, reduce la complejidad del modelo y minimiza problemas como la multicolinealidad y el sobreajuste.
          div(titulo="El análisis discriminante lineal (LDA)")
            p.mb-0 A diferencia de PCA se centra en maximizar la separabilidad entre clases. Este es un método de clasificación supervisado en el que se conocen de antemano dos o más grupos, y las nuevas observaciones se clasifican en uno de ellos en función de sus características. LDA estima la probabilidad de que una observación, dado un valor específico de predictores, pertenezca a cada una de las clases de la variable cualitativa.
          div(titulo="Métodos no lineales")
            p.mb-0 Para datos que residen en una variedad no lineal, se emplean técnicas como t-SNE (t-Distributed Stochastic Neighbor Embedding), UMAP (Uniform Manifold Approximation and Projection) y autocodificadores. Estas técnicas son capaces de capturar relaciones más complejas entre las variables en comparación con los métodos lineales como PCA y LDA.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/tema2/img-12.png', alt='Imagen decorativa').m-auto

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
        .p-4.bg-c1
          .row.align-items-center
            .col-lg-auto.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema1/icono-01.svg', alt='Imagen decorativa', style='width: 60px').m-auto
            .col-lg.col-3
              p.mb-0 #[b La decisión entre la selección y la extracción de características, así como la técnica específica a emplear, dependerá del objetivo final: si la interpretabilidad es fundamental, se prefiere la selección. En cambio, si el objetivo es la máxima compactación de la información, la extracción puede resultar más eficaz.]

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
