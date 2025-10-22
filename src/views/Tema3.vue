<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 3
      h1 Aprendizaje automático

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4(style="background-color:#DCD8F2")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-01.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 El aprendizaje automático o #[em Machine Learning] (ML), constituye una subdisciplina de la inteligencia artificial y la informática, centrada en la utilización de datos y algoritmos para emular el proceso de aprendizaje humano, mejorando progresivamente su precisión. La definición canónica, propuesta por Tom M. Mitchell (1997), establece que un programa de computadora aprende de la experiencia E en relación con una clase de tareas T y una medida de rendimiento P, si su desempeño en las tareas T, evaluado por P, mejora con la experiencia E. 

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-left")
        p.mb-0 En términos más simples, en lugar de programar explícitamente un conjunto de reglas para resolver una tarea, se proporciona a un algoritmo una gran cantidad de datos, permitiéndole "aprender" las reglas y patrones de manera autónoma. Esto permite a los sistemas de ML adaptarse y mejorar continuamente a medida que se exponen a nuevos datos. Los algoritmos de ML pueden identificar patrones complejos y tomar decisiones con mínima intervención humana. Esta capacidad ha revolucionado diversos campos, desde la visión por computadora, hasta el procesamiento del lenguaje natural, abriendo nuevas posibilidades en la resolución de problemas y la automatización de tareas.
    
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Objetivos

    p.mb-5 Antes de elegir cualquier técnica, es crucial definir el objetivo del modelo. ¿Qué pregunta de negocio o problema científico se está tratando de resolver? Los objetivos del aprendizaje automático generalmente se dividen en dos categorías principales:

    .row.mb-5.ms-0
      .col-auto.bg-c2(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/ico.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 A. Predicción o inferencia predictiva

    p.mb-5(data-aos="fade-left") Es el objetivo más común en el ámbito de la modelización. Busca desarrollar un modelo que pueda realizar predicciones precisas sobre datos nuevos y no observados previamente. Este objetivo se subdivide según la naturaleza de lo que se desea predecir en:

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        ImagenInfografica.color-acento-botones.desktop
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/img-02-v01.svg', alt='Imagen decorativa')
          .tarjeta.tarjeta--blanca.p-3(x="44.5%" y="84%" numero="+")(style="background-color:#EAE7FB")
            p El objetivo es predecir una etiqueta o categoría discreta, abordando preguntas como "¿a qué clase pertenece?" o "¿es esto A o B?". Los problemas de clasificación pueden ser binarios (dos clases, como "es spam" o "no es spam") o multiclase (más de dos clases, como clasificar un animal en "perro", "gato" o "pájaro").
          .tarjeta.tarjeta--blanca.p-3(x="76.5%" y="84%" numero="+")(style="background-color:#EAE7FB")
            p El objetivo es predecir un valor continuo, respondiendo a preguntas del tipo "¿cuánto?" o "¿cuál será el valor?". Ejemplos incluyen la predicción del precio de una vivienda, la temperatura del día siguiente o la demanda de un producto. 
        figure.movil
          img(src='@/assets/curso/temas/tema3/img-02-v02.svg', alt='Imagen decorativa')

    .row.mb-5.ms-0
      .col-auto.bg-c2(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/ico.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 B. Descubrimiento de patrones (o inferencia descriptiva)

    p.mb-5(data-aos="fade-left") En este contexto, el objetivo no es prever un resultado o valor numérico, sino identificar patrones, estructuras y agrupaciones de interés que sean previamente desconocidas en los datos. Se suelen clasificar en:

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
        TabsC.color-acento-botones(data-aos="fade-right")
          .BGIMG01.py-lg-5.p-4(titulo="Agrupamiento <em>(clustering)</em>")
            .row.justify-content-center
              .col-lg-6.col-8.mb-lg-0.mb-4
                figure
                  img(src='@/assets/curso/temas/tema3/img-03.png', alt='Imagen decorativa')
              .col-lg-6
                p.mb-0 El propósito es organizar las observaciones en clústeres o segmentos, de manera que los integrantes de un mismo clúster presenten una alta similitud entre sí y una marcada diferencia respecto a los integrantes de otros clústeres. Un ejemplo de aplicación sería la segmentación de clientes basada en su comportamiento de compra para desarrollar campañas de #[em marketing] personalizadas.
          .BGIMG01.py-lg-5.p-4.py-3.py-md-4(titulo="Reglas de asociación")
            .row.justify-content-center
              .col-lg-6.col-8.mb-lg-0.mb-4
                figure
                  img(src='@/assets/curso/temas/tema3/img-04.png', alt='Imagen decorativa')
              .col-lg-6
                p.mb-0 Su objetivo es identificar relaciones significativas entre variables en grandes bases de datos. Un ejemplo clásico de su aplicación es el "análisis de la cesta de mercado", que puede revelar patrones como que los clientes que compran pañales también tienden a adquirir cerveza (Agrawal, Imieliński, Swami, 1993).
    
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Técnicas 

    p.mb-5(data-aos="fade-left") Las técnicas de aprendizaje automático se organizan tradicionalmente en tres paradigmas principales: 

    .row.mb-5.ms-0
      .col-auto.bg-c2(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/ico.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 A. Aprendizaje supervisado 

    p.mb-5(data-aos="fade-left") Utiliza datos etiquetados para entrenar modelos que pueden realizar predicciones sobre nuevos datos. Incluye algoritmos de clasificación como Support Vector Machines, Random Forest, Gradient Boosting y redes neuronales, así como algoritmos de regresión como regresión lineal, regresión polinomial y regresión logística.

    .row.justify-content-center.espacio___movil_1.mb-5(data-aos="zoom-in")
      .col-xl-10
        .row.align-items-center.m-0.style___box_3
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/tema3/img-05.png', alt='' style="max-width: 400px").m-auto
          .col-xl
            p.mb-0 Este tipo de técnica es quizás el paradigma más ampliamente difundido y estudiado. En este enfoque, el algoritmo aprende a partir de un conjunto de datos de entrenamiento que ha sido "etiquetado" por un experto humano. Cada punto de datos de entrada, conocido como vector de características (X), tiene una etiqueta o resultado de salida correspondiente (y). El objetivo del algoritmo es aprender una función de mapeo “f” tal que y = f(X). Durante el proceso de entrenamiento, el modelo realiza predicciones y las compara con la etiqueta correcta, ajustando sus parámetros internos para minimizar el error.

    p.mb-5(data-aos="fade-left") Los algoritmos que suelen utilizarse en esta técnica son de dos tipos:

    .row.mb-5.ms-0
      .col-auto.bg-c2(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/ico2.svg', alt='', style='width: 5.7px')
          .col
            h3.mb-0 I. Algoritmos de regresión

    p.mb-5(data-aos="fade-left") Entre los algoritmos de regresión se tiene: 

    .row.justify-content-center.mb-5
      .col-lg-5.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/icono-01.svg' alt="Imagen decorativa")
          .tarjeta.color-secundario.p-4.py-5.h-100(style="background-color:#B9B1E5")
            h4.text-center.mt-5.mb-0(style="color:#12263F") Regresión lineal
            p.text-center.mb-0(style="color:#12263F") El modelo más simple, que asume una relación lineal entre las características de entrada y la variable de salida.
      .col-lg-5.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/icono-02.svg' alt="Imagen decorativa")
          .tarjeta.color-secundario.p-4.py-5.h-100(style="background-color:#B9B1E5")
            h4.text-center.mt-5.mb-0 #[em Support Vector Regression (SVR)]
            p.text-center.mb-0 Adapta los #[em Support Vector Machines] para problemas de predicción de valores continuos.

    .bg-c3.mb-4.p-5
      .row.mb-5.ms-0
        .col-auto.bg-c2(data-aos="fade-left")
          .row.align-items-center
            .col-auto.px-0
              figure
                img(src='@/assets/curso/ico2.svg', alt='', style='width: 5.7px')
            .col
              h3.mb-0 II. Algoritmos de clasificación

      p.mb-5(data-aos="fade-left") Por otra parte, dentro de los algoritmos de clasificación se encuentran:
      .row.justify-content-center.align-items-center(data-aos="fade-right")
        SlyderF(columnas="col-lg-6 col-xl-4")
          .tarjeta.tarjeta--BG03.p-4
            .row.justify-content-center.mb-4
              .col-lg-5.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema3/icono-03.svg' alt='AvatarTop')
            h4.text-center Regresión logística
            p.mb-0 Es un método de clasificación que modela la probabilidad de que una entrada pertenezca a una clase particular.
          .tarjeta.tarjeta--BG03.p-4
            .row.justify-content-center.mb-4
              .col-lg-5.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema3/icono-04.svg' alt='AvatarTop')
            h4.text-center #[em k-Nearest Neighbors (k-NN)]
            p.mb-0 Clasifica un nuevo punto de datos basándose en la clase mayoritaria de sus 'k' vecinos más cercanos en el espacio de características.
          .tarjeta.tarjeta--BG03.p-4
            .row.justify-content-center.mb-4
              .col-lg-5.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema3/icono-05.svg' alt='AvatarTop')
            h4.text-center #[em Support Vector Machines (SVM)]
            p.mb-0 Encuentra el hiperplano que mejor separa las clases en el espacio de características.
          .tarjeta.tarjeta--BG03.p-4
            .row.justify-content-center.mb-4
              .col-lg-5.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema3/icono-07.svg' alt='AvatarTop')
            h4.text-center Árboles de decisión y #[em Random Forest]
            p.mb-0 Los árboles de decisión aprenden una serie de reglas de "si... entonces..." para dividir los datos. Random Forest es un método de ensamble que construye múltiples árboles de decisión y combina sus predicciones para obtener un resultado más robusto y preciso..
          .tarjeta.tarjeta--BG03.p-4
            .row.justify-content-center.mb-4
              .col-lg-5.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema3/icono-08.svg' alt='AvatarTop')
            h4.text-center #[em Naive Bayes]
            p.mb-0 Clasificador probabilístico basado en el teorema de #[em Bayes] con una suposición "ingenua" (#[em naive]) de independencia entre las características.

    .row.mb-4.ms-0
      .col-auto.bg-c2(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/ico.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 B. Aprendizaje no supervisado

    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left") Trabaja con datos sin etiquetas, buscando descubrir patrones ocultos en la estructura de los datos. En este paradigma, el algoritmo trabaja con datos que no han sido etiquetados. No hay una "respuesta correcta". El objetivo es explorar los datos y encontrar alguna estructura o patrón inherente por sí mismo. Dentro de esta técnica se pueden encontrar los siguientes algoritmos:
        .row.mb-4.ms-0
          .col-auto.bg-c2(data-aos="fade-left")
            .row.align-items-center
              .col-auto.px-0
                figure
                  img(src='@/assets/curso/ico2.svg', alt='', style='width: 5.7px')
              .col
                h3.mb-0 I. Algoritmos de agrupamiento (#[em clustering])
        p(data-aos="fade-left") Estos algoritmos tienen presente los siguientes tipos:
        .row
          .col-lg-6.px-4.mb-4(data-aos="fade-left")
            .row.justify-content-center.p-3.h-100(style="background-color:#D6CDD9; border-radius:20px")
              figure
                img.mb-2(src="@/assets/curso/temas/tema3/icono-09.svg", alt="", style="width: 60px")
              p.mb-0 #[b K-Means]
              p.mb-0 Este es un algoritmo iterativo que organiza los datos en un número predefinido 'k' de clústeres, asignando cada punto de datos al clúster cuyo centroide (media) se encuentra más próximo. 
          .col-lg-6.px-4.mb-4(data-aos="fade-left")
            .row.justify-content-center.p-3.h-100(style="background-color:#D6CDD9; border-radius:20px")
              figure
                img.mb-2(src="@/assets/curso/temas/tema3/icono-10.svg", alt="", style="width: 60px")
              p.mb-0 #[b DBSCAN]
              p.mb-0 Este método, basado en la densidad, es capaz de identificar clústeres de formas arbitrarias y detectar el ruido punto de datos al clúster cuyo centroide (media) se encuentra más próximo. 
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema3/img-06.png', alt='', style="width: 400px").m-auto

    .row.mb-5.ms-0
      .col-auto.bg-c2(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/ico2.svg', alt='', style='width: 5.7px')
          .col
            h3.mb-0 II. Algoritmos de reglas de asociación 

    p.mb-5(data-aos="fade-left") El tipo de algoritmo representativo dentro de este tipo es:

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .p-4.bg-c4
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema3/icono-11.svg', alt='', style='width: 60px').m-auto
            .col-md
              h4 Apriori
              p.mb-0 Es el más reconocido para extraer conjuntos de ítems frecuentes y derivar reglas de asociación.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(style="background-color:#DCD8F2")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-07.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Estos algoritmos de aprendizaje no supervisado son fundamentales en el análisis exploratorio de datos y la identificación de patrones ocultos. El #[em K-Means], por ejemplo, es ampliamente utilizado en segmentación de clientes y análisis de mercado, mientras que el DBSCAN es particularmente útil en la detección de anomalías y agrupamiento espacial. Por otro lado, el algoritmo Apriori encuentra aplicaciones en el análisis de canasta de mercado y sistemas de recomendación, ayudando a descubrir relaciones interesantes entre productos o elementos.

    .row.mb-4.ms-0
      .col-auto.bg-c2(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/ico.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 C. Aprendizaje por refuerzo

    .row.justify-content-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Este es un paradigma diferente, inspirado en la psicología conductista que involucra a un agente que aprende a comportarse en un entorno realizando acciones y observando los resultados. Se enfoca en entrenar agentes que aprenden a tomar decisiones óptimas, a través de la interacción con un entorno, recibiendo recompensas o penalizaciones por sus acciones. Las técnicas avanzadas incluyen:
        .tarjeta.tarjeta--BGC01.p-4.mb-0(style="background-color:#FFEBF1")
          .row.justify-content-center.align-items-center.mb-4
            .col-auto
              figure
                img(src='@/assets/curso/temas/tema3/icono-12.svg', alt='Imagen decorativa')
            .col-lg-10
              p.mb-0 #[b Ensemble #[em methods]]
              p.mb-0 Combinan múltiples modelos para mejorar el rendimiento. 
          .row.justify-content-center.align-items-center.mb-4
            .col-auto
              figure
                img(src='@/assets/curso/temas/tema3/icono-13.svg', alt='Imagen decorativa')
            .col-lg-10
              p.mb-0 #[b Técnicas de deep #[em learning]]
              p.mb-0 Utilizadas para problemas complejos con grandes volúmenes de datos. 
          .row.justify-content-center.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/temas/tema3/icono-14.svg', alt='Imagen decorativa')
            .col-lg-10
              p.mb-0 #[b Métodos de transfer #[em learning]]
              p.mb-0 Aprovechan conocimiento de dominios relacionados. 
      .col-lg-4.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/tema3/img-08.png', alt='Imagen decorativa')

    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Selección del algoritmo

    .row.mb-5
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema3/img-09.png')
      .col-lg-8(data-aos="fade-right")
        p Con una amplia variedad de algoritmos disponibles, la elección del más adecuado para un problema específico constituye una de las decisiones más críticas. No existe un algoritmo "mejor" de manera universal, un principio formalizado en el teorema "No Free Lunch" (Wolpert, 1996), que establece que ningún algoritmo puede superar a todos los demás en todos los problemas posibles. La elección implica un compromiso entre varios factores. Por ejemplo, la naturaleza del problema es el primer filtro a considerar. ¿Se trata de un problema de regresión, clasificación o agrupamiento? Esto limita significativamente las opciones disponibles. 
        .p-4(style="background-color:#FFEBF1; border-radius:15px")
          .row
            .col-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src='@/assets/curso/temas/tema3/icono-15.svg')
            .col(style="place-self:center;")
              p.mb-0 Asimismo, el tamaño y la dimensionalidad del conjunto de datos también son cruciales: un conjunto de datos con millones de muestras y características #[em (Big Data)] puede hacer que algunos algoritmos no sean viables debido a su falta de escalabilidad. 

    p.mb-5(data-aos="fade-left") Por otro lado, algoritmos complejos como las redes neuronales profundas #[em (Deep Learning)] a menudo necesitan grandes volúmenes de datos para evitar el sobreajuste. Existe un equilibrio entre interpretabilidad y precisión. 

    .row.justify-content-center.mb-5
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        p.mb-4 En el otro extremo, se encuentran modelos más sencillos como la regresión lineal o los árboles de decisión, los cuales son fácilmente interpretables, lo que significa que es sencillo entender por qué hacen una predicción específica. Sin embargo, modelos más complejos como las redes neuronales o los ensambles de Gradient Boosting suelen ser "cajas negras": ofrecen alta precisión, pero su lógica interna es difícil de entender. 
        .tarjeta.tarjeta--BGC02.p-3.mb-4(style="background-color:#DCD8F2")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-4 
              figure
                img(src='@/assets/curso/temas/tema3/icono-16.svg', alt='Imagen decorativa')
            .col-lg-10
              p.mb-0 La elección depende de si el "por qué" es tan importante como el "qué". Los supuestos del modelo también son necesarios: muchos algoritmos se basan en ciertas suposiciones sobre los datos (por ejemplo, la regresión lineal asume linealidad y baja multicolinealidad; #[em Naive Bayes] asume independencia de las características). Es esencial tener un conocimiento básico de estos supuestos para evitar aplicar un modelo de manera incorrecta. Las restricciones computacionales también juegan un papel: ¿cuánto tiempo se tiene para entrenar el modelo? ¿Qué tan rápidas deben ser las predicciones en producción? 
      .col-lg-3.col-md-4.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema3/img-10.svg', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-left") Como algunas ejemplificaciones, se pueden tener las siguientes:

    .row.justify-content-center.mb-5
      .col-lg-5.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta.tarjeta--BG05.h-100
          figure
            img(src='@/assets/curso/temas/tema3/img-11.svg', alt='Texto que describa la imagen')
          .p-4
            h5 k-NN
            p.mb-0 Algunos modelos son rápidos de entrenar, pero lentos para predecir.
      .col-lg-5.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta.tarjeta--BG05.h-100
          figure
            img(src='@/assets/curso/temas/tema3/img-12.svg', alt='Texto que describa la imagen')         
          .p-4
            h5 SVM 
            p.mb-0 Son lentos de entrenar, pero instantáneos para predecir. 

    .row.mb-5
      .col-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema3/icono-17.svg', alt='Imagen decorativa')
      .col-10.mb-4
        p.mb-0 En la práctica, el proceso de selección a menudo implica experimentar con varios algoritmos candidatos, ajustarlos y compararlos de manera rigurosa, un tema que exploraremos en el siguiente capítulo sobre la evaluación de modelos.

</template>

<script>
export default {
  name: 'Tema3',
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
