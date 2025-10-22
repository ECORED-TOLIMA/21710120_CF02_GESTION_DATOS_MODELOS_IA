<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 4
      h1 Evaluación del modelo

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-left")
        .row.justify-content-center.align-items-center.cajon.C01.p-4.mb-0(style="background-color:#DCD8F2; border-radius:15px")
          .col-lg-3.col-md-4.col-6.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema4/img-01.svg', alt='Imagen decorativa')
          .col-lg-9
            p.mb-0 En los numerales previos se han abordado conceptos como la limpieza de datos, se ha simplificado su complejidad, mediante la reducción de dimensionalidad y se han empleado poderosos algoritmos para que aprendan de ellos. El resultado es un "modelo entrenado". Pero, ¿cómo se sabe si este modelo es bueno? ¿Qué significa "bueno" en este contexto? ¿Es preciso? ¿Es fiable? ¿Comete errores costosos? La evaluación del modelo es el proceso sistemático, mediante el cual se pueden responder esas preguntas, cuantificando el rendimiento de un modelo de manera objetiva.

    p Antes de dar inicio al concepto de las métricas, se debe introducir el principio más importante para una evaluación honesta: la separación de los datos. Nunca se debe evaluar un modelo con los mismos datos que se usaron para entrenarlo. Hacerlo sería como darle a un estudiante las respuestas de un examen, antes de que lo tome; obtendría una puntuación perfecta, pero no habríamos medido su capacidad real de generalización.
    p.mb-5 Para evitar este sesgo, los datos se dividen típicamente en tres conjuntos:  

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-xl-10
        .row.align-items-center.m-0.style___box_14
          .col-xl
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-2"><span class="fa-li"><i class="fas fa-robot"></i></span>#[b Entrenamiento]</li>
            </ul>
            p.mb-2 Se utiliza para enseñar al modelo. 
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-2"><span class="fa-li"><i class="fas fa-robot"></i></span>#[b Validación]</li>
            </ul>
            p.mb-2 Útil para ajustar hiperparámetros y seleccionar el mejor modelo.
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-2"><span class="fa-li"><i class="fas fa-robot"></i></span>#[b Prueba]</li>
            </ul>
            p.mb-2 Se utiliza para la evaluación final.  
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/tema4/img-02.png', alt='' style="max-width: 500px").m-auto
    
    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10
        .p-4.bg-c1.mb-4
          .row.align-items-center
            .col-lg-auto.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/icono-01.svg', alt='', style='width: 60px').m-auto
            .col-lg
              p.mb-0 #[b Esta separación asegura que la evaluación sea justa y representativa del rendimiento real del modelo en datos nuevos y no vistos.]
        p.mb-0 Las métricas que se abordan a continuación, deben calcularse sobre el conjunto de prueba, para obtener una estimación real de cómo se comportará el modelo en el mundo real con datos nuevos.

    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Métricas de clasificación

    .row.justify-content-center.mb-5
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        p En los problemas de clasificación, el objetivo es predecir una etiqueta categórica. Las métricas de evaluación ayudan a entender la naturaleza de la predicciones correctas e incorrectas. La matriz de confusión es una herramienta fundamental para visualizar estas predicciones, mostrando la cantidad de aciertos y errores para cada clase. A partir de esta matriz, se pueden calcular métricas más específicas como la precisión, la sensibilidad y el F1-#[em score]. Estas métricas permiten evaluar el rendimiento del modelo desde diferentes perspectivas, considerando el equilibrio entre los falsos positivos y los falsos negativos.
        .row.justify-content-center.align-items-center
          .col-lg-1.col-2.px-0.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema3/icono-17.svg' alt="Imagen decorativa")
          .col-lg-11
            p.mb-0 Para comenzar se tiene la matriz de confusión. La cual es fundamental para la evaluación de la clasificación. Esta tabla desglosa el rendimiento de un modelo al comparar las clases predichas con las clases reales. En un problema de clasificación binaria, que incluye una clase "positiva" y una "negativa", la matriz consta de cuatro celdas:
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema4/img-03.png' alt="Imagen decorativa")

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-right")
        ImagenInfografica.color-acento-botones.desktop
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema4/img-04-v01.svg', alt='Imagen decorativa')
          .tarjeta.tarjeta--blanca.p-3(x="39.5%" y="35%" numero="+")(style="background-color:#EAE7FB")
            p.mb-0 El modelo predijo "positivo" y la clase real era "positivo". (Ej: El modelo detectó correctamente una transacción fraudulenta).
          .tarjeta.tarjeta--blanca.p-3(x="66.5%" y="35%" numero="+")(style="background-color:#EAE7FB")
            p.mb-0 El modelo predijo "positivo", pero la clase real era "negativo". (Ej: El modelo marcó una transacción legítima como fraude, causando una molestia al cliente).
          .tarjeta.tarjeta--blanca.p-3(x="39.5%" y="65%" numero="+")(style="background-color:#EAE7FB")
            p.mb-0 El modelo predijo "negativo", pero la clase real era "positivo". (Ej: El modelo no detectó una transacción fraudulenta, causando una pérdida financiera).
          .tarjeta.tarjeta--blanca.p-3(x="66.5%" y="65%" numero="+")(style="background-color:#EAE7FB")
            p.mb-0 El modelo predijo "negativo" y la clase real era "negativo". (Ej: El modelo identificó correctamente una transacción legítima).
        figure.movil
          img(src='@/assets/curso/temas/tema4/img-04-v02.svg', alt='Imagen decorativa')

    p.mb-5 A partir de esta matriz se derivan todas las demás métricas de clasificación:

    .row.justify-content-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        LineaTiempoD.color-acento-botones.especial
          p.mb-0(numero="1" titulo="Exactitud (accuracy)") La métrica más intuitiva. Representa la proporción de predicciones correctas. Aunque es fácil de entender, puede ser muy engañosa en conjuntos de datos desbalanceados. Por ejemplo, si el 99 % de las transacciones no son fraudulentas, un modelo que siempre predice "no fraude" tendrá un 99 % de exactitud, pero será completamente inútil para detectar el fraude.
          p.mb-0(numero="2" titulo="Precisión (precision)") De todas las veces que el modelo predijo "positivo", ¿cuántas acertó? Es crucial cuando el costo de un falso positivo es alto.
          p.mb-0(numero="3" titulo="Sensibilidad (recall o exhaustividad)") De todos los casos que eran realmente "positivos", ¿cuántos fue capaz de identificar el modelo? Es la métrica más importante cuando el costo de un Falso Negativo es alto (como en el diagnóstico médico).
          p.mb-0(numero="4" titulo="Puntuación F1 (F1-<em>Score</em>)") Es la media armónica de la precisión y la sensibilidad. Proporciona una única métrica que equilibra ambas, y es especialmente útil cuando se tienen clases desbalanceadas.
          p.mb-0(numero="5" titulo="Curva ROC y AUC") Es un gráfico que muestra el rendimiento de un clasificador, a través de todos los umbrales de clasificación. Grafica la tasa de verdaderos positivos #[em (Recall)] frente a la tasa de falsos positivos (FP/(FP+TN)). Un modelo perfecto se ubicaría en la esquina superior izquierda (100 % de sensibilidad, 0 % de falsos positivos). Se puede decir que es una métrica agregada que representa la capacidad general del modelo para discriminar entre las clases. Un AUC de 1.0 es un clasificador perfecto, mientras que un AUC de 0.5 representa un modelo que no es mejor que una elección al azar (Fawcett, 2006).
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema4/img-05.png' alt="Imagen decorativa")

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10
        .p-4.bg-c1
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/icono-01.svg', alt='', style='width: 60px').m-auto
            .col-md
              p.mb-0 #[b Ejemplo de interpretación:] en un modelo de detección de fraude, una precisión alta pero un #[em recall] bajo indicaría que, aunque la mayoría de las transacciones marcadas como fraude son realmente fraudulentas, el modelo está pasando por alto muchos casos de fraude reales (Chawla, Bowyer, Kegelmeyer, 2002).

    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Métricas de regresión

    p.mb-5 Para problemas de regresión, donde la variable objetivo es continua, se utilizan:

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-3.col-6.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema4/img-06.png', alt='Imagen decorativa')
      .col-lg-9
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C02")
          div(titulo="Error Absoluto Medio (MAE - <em>Mean Absolute Error</em>)")
            p(style="color:#000") Se define como el promedio de las diferencias absolutas entre las predicciones y los valores reales. Es fácil de interpretar se expresa en las mismas unidades que la variable objetivo.
          div(titulo="Error Cuadrático Medio (MSE - <em>Mean Squared Error</em>)")
            p.mb-0(style="color:#000") Se define como el promedio de los errores elevados al cuadrado. Al elevar el error al cuadrado, se penalizan de manera más significativa los errores grandes en comparación con los pequeños. Es de las más utilizadas; sin embargo, su resultado se expresa en unidades al cuadrado (por ejemplo, "dólares al cuadrado"), lo que complica su interpretación directa.
          div(titulo="Raíz del Error Cuadrático Medio (RMSE - <em>Root Mean Squared Error)</em>")
            p.mb-0(style="color:#000") Se define como la raíz cuadrada del MSE. Aborda el problema de interpretabilidad del MSE, dado que sus unidades coinciden con las de la variable objetivo, al tiempo que conserva la característica de penalizar de manera más severa los errores de mayor magnitud.
          div(titulo="Coeficiente de Determinación (R²)")
            p.mb-0(style="color:#000") A diferencia de las métricas de error, el coeficiente de determinación R² evalúa la adecuación del modelo a los datos. Indica la proporción de la varianza en la variable dependiente que puede ser explicada por las variables independientes. Un valor de R² = 0.75 implica que el modelo explica el 75 % de la variabilidad en los datos de respuesta. Aunque es una medida útil, puede resultar engañosa, ya que su valor tiende a incrementarse con la adición de cada variable al modelo, independientemente de su utilidad. Por esta razón, a menudo se prefiere el uso del R² ajustado, el cual penaliza la inclusión de predictores que no aportan valor.

    .row.mb-5
      .col-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema3/icono-17.svg', alt='Imagen decorativa')
      .col-10
        p.mb-0(style="color:#000") La elección de la métrica de evaluación adecuada es tan importante como la elección del algoritmo. Debe estar directamente alineada con los objetivos del proyecto. Un modelo no es "bueno" o "malo" en el vacío; es bueno o malo para la tarea específica para la que fue diseñado y estas métricas son el lenguaje que se usa para describir y defender esa conclusión.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(style="background-color:#DCD8F2")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img-07.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 La selección de la métrica también debe considerar las características específicas del conjunto de datos y el contexto del problema. Es crucial entender las implicaciones y limitaciones de cada métrica para interpretar correctamente los resultados del modelo. Además, en muchos casos, es beneficioso utilizar múltiples métricas complementarias para obtener una evaluación más completa y robusta del rendimiento del modelo. 


</template>

<script>
export default {
  name: 'Tema4',
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
