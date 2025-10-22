<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Limpieza de datos

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-4(style="background-color:#DCD8F2")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-01.png')})`}" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 El campo del análisis de datos y el aprendizaje automático está experimentado un crecimiento exponencial, lo que les ha permitido consolidarse como elementos esenciales para la toma de decisiones, basadas en datos. La transformación de datos en bruto en información relevante, implica un proceso que incluye la limpieza de datos, la reducción de dimensionalidad, la implementación de algoritmos y la evaluación de los modelos generados.
    
    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-left")
        p.mb-0 En este tema se abordará la tarea esencial de la limpieza de datos, aprendiendo a identificar y corregir los errores que plagan casi todos los conjuntos de datos del mundo real.
    
    Separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Concepto

    p.mb-5(data-aos="fade-left") A continuación, se detalla lo expresado por algunos autores:

    .row.align-items-center.mb-4.style___box_8(data-aos="zoom-in")
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/tema1/img-02.png', alt='' style="max-width: 295px").m-auto
      .col-xl
        p.mb-0 #[b Dasu & Johnson (2003)] 
        p.mb-0 La limpieza de datos, conocida en inglés como #[em data cleaning], constituye un proceso fundamental en la ciencia de datos. Este proceso implica la identificación, corrección o eliminación de datos "sucios", es decir, registros incorrectos, corruptos, incompletos, irrelevantes o duplicados dentro de un conjunto de datos. Lejos de ser una tarea trivial, a menudo representa la fase más demandante en términos de tiempo en un proyecto de aprendizaje automático, llegando a ocupar entre el 60 % y el 80 % del tiempo total de un especialista.
      
    .row.align-items-center.mb-5.style___box_8(data-aos="zoom-in")
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/tema1/img-03.png', alt='' style="max-width: 295px").m-auto
      .col-xl
        p.mb-0 #[b Rahm & Do (2000)]
        p.mb-0 El concepto se define formalmente como un conjunto de operaciones destinadas a resolver anomalías de datos, que pueden originarse por diversas causas, como errores humanos durante la entrada de datos, fallos en los sensores de recolección, problemas durante la transmisión o el almacenamiento, o la integración de múltiples fuentes de datos con esquemas y formatos diferentes.

    p.mb-5(data-aos="fade-left") En esencia, la limpieza de datos es un proceso de aseguramiento de la calidad. Su objetivo es maximizar la consistencia, precisión, completitud y uniformidad de los datos para que representen fielmente la realidad que se pretende modelar. Se podría utilizar la siguiente analogía para explicar la limpieza de datos. 

    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-lg-10
        .p-4.bg-c1.mb-4
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/icono-01.svg', alt='', style='width: 60px').m-auto
            .col-md
              p.mb-0 #[b Se tienen invitados a cenar en el hogar y antes de cocinar el plato favorito de ellos, se deben alistar los ingredientes. Hay que pensar en la limpieza de datos como la preparación de ingredientes antes de cocinar. Por ello, un chef no usaría ingredientes vencidos, sucios o en mal estado para preparar un plato gourmet. De la misma manera, en la construcción de un modelo predictivo fiable, no se pueden utilizar datos contaminados.] 
        figure.mb-5
          img(src='@/assets/curso/temas/tema1/img-04.png', alt='')
        p(data-aos="fade-left") Asimismo, la limpieza de datos requiere una combinación de habilidades técnicas y conocimiento del dominio para identificar y corregir anomalías. Este proceso puede implicar la detección y eliminación de valores atípicos, el manejo de valores faltantes y la estandarización de formatos. Así como un chef experto, sabe cómo seleccionar y preparar los mejores ingredientes, un científico de datos competente debe ser capaz de refinar y optimizar los datos para obtener los mejores resultados en sus análisis y modelos.
        p(data-aos="fade-right") El no darle toda la importancia y atención necesaria en esta etapa, puede verse reflejado en un rendimiento poco óptimo del modelo, independientemente de lo avanzado que sea el algoritmo utilizado.

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Tipos de errores

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-4.col-md-6.col-8.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/img-05.png', alt='Imagen decorativa')
      .col-lg-8
        p Los conjuntos de datos a menudo contienen diversos tipos de errores que deben ser identificados y corregidos durante el proceso de limpieza. Estos errores pueden clasificarse en varias categorías:
        LineaTiempoD.color-acento-botones.especial
          p(numero="1" titulo="Datos faltantes") Valores ausentes en registros debido a problemas de captura o transmisión, que pueden introducir sesgos si no se manejan adecuadamente (Little & Rubin, 2019). Estos valores suelen representarse como #[em NULL, N/A, NaN (Not a Number)] o simplemente mediante una celda vacía. Las causas de estas representaciones son diversas: un usuario que se niega a proporcionar su edad, un sensor que experimenta un fallo temporal o un error en el proceso de extracción de datos.
          p(numero="2" titulo="Datos duplicados") Registros repetidos que distorsionan las estadísticas y pueden sesgar los resultados de modelos predictivos (Rahm & Do, 2000). Ocurren cuando un mismo registro o entidad aparece más de una vez en el conjunto de datos. Esto puede suceder al combinar datos de diferentes fuentes o por errores en la recolección. Pueden sesgar gravemente los análisis y el entrenamiento, dando un peso indebido a las observaciones repetidas.
          p(numero="3" titulo="Datos incorrectos o inválidos") Este término se refiere a valores que, aunque presentes, son evidentemente erróneos. Esto incluye errores tipográficos (por ejemplo, "Colobia" en lugar de "Colombia"), valores que se encuentran fuera de un rango plausible (como una edad de 350 años) o datos que no cumplen con un formato estándar (como un correo electrónico sin el símbolo "@").
          p(numero="4" titulo="Inconsistencias estructurales y de formato") Este tipo de error se relaciona con la falta de uniformidad. (Aggarwal, 2017). Por ejemplo, en una columna de "país", se podría encontrar "Colombia", "COL" y "Co.", refiriéndose todos a la misma nación. Del mismo modo, las fechas pueden estar en formatos dispares (DD/MM/AAAA, YYYY-MM-DD, #[em Mon, Day, Year]) o las unidades de medida pueden estar mezcladas (kilogramos y libras en la misma columna). 
          p(numero="5" titulo="Datos sesgados") Se caracterizan por una alta varianza o una distribución no representativa, lo que puede llevar al desarrollo de modelos que favorecen ciertos resultados sobre otros. El sesgo presente en los datos puede perpetuarse en los modelos y afectar la equidad de las decisiones.
          p(numero="6" titulo="Datos irrelevantes") Se refiere a la información que no contribuye de manera significativa al análisis o que puede desviar la atención del objetivo principal. La identificación y eliminación de estos datos, puede mejorar la eficiencia y precisión de los modelos.

    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Técnicas
    
    p Una vez se han identificado los tipos de errores, se aplican técnicas específicas para subsanarlos. La elección de la técnica adecuada es un acto de equilibrio que depende del contexto del problema, el tipo y la cantidad de datos sucios, así como el impacto potencial en el modelo final. Para abordar los diversos tipos de errores mencionados, existen varias técnicas de limpieza de datos que pueden implementarse de manera sistemática.
    p.mb-5 A continuación, se detallan cada uno de ellos:

    .row.mb-5.ms-0
      .col-auto.bg-c2(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/ico.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 A.Tratamiento de valores faltantes

    p.mb-5 En esta técnica se suelen aplicar tres formas:

    TabsC.color-acento-botones.mb-5(data-aos="fade-right")
      .BGIMG01.py-lg-5.p-4(titulo="Eliminación")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
              p.mb-0 La estrategia más básica, consiste en suprimir los registros (filas) que presentan valores faltantes, conocida como eliminación por lista completa. Sin embargo, esta técnica debe aplicarse con precaución, ya que puede conllevar una pérdida considerable de datos si los valores faltantes son numerosos, introduciendo un posible sesgo si los datos no faltan de manera completamente aleatoria (Schafer & Graham, 2002). Una alternativa es la eliminación de la variable (columna), si más de un cierto umbral (por ejemplo, 60 %) de sus valores están ausentes.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema1/img-06.png', alt='Imagen decorativa')
      .BGIMG01.py-lg-5.p-4(titulo="Imputación mediante medidas de tendencia central")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            p.mb-0 Una técnica común, consiste en sustituir el valor faltante con una medida estadística derivada del resto de la columna. Para variables numéricas, se emplea frecuentemente la media o la mediana, siendo esta última generalmente más robusta frente a valores atípicos. En el caso de variables categóricas, se utiliza la moda; es decir, el valor más frecuente.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img-07.png', alt='Imagen decorativa')
      .BGIMG01.py-lg-5.p-4(titulo="Imputación avanzada")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            p.mb-0 Existen métodos más avanzados para la imputación de datos. La imputación por regresión estima los valores faltantes basándose en otras variables del conjunto de datos. Por otro lado, la imputación mediante #[em K-NN (K-Nearest Neighbors)] utiliza la media o la moda de los 'k' registros más similares (vecinos) al registro con el valor faltante para realizar la imputación. Estos métodos suelen ofrecer una mayor precisión, aunque son computacionalmente más costosos (Van Buuren, 2018).
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img-08.png', alt='Imagen decorativa')

    .row.mb-5.ms-0
      .col-auto.bg-c2(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/ico.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 B.Tratamiento de datos duplicados

    .tarjeta.tarjeta--BG08.p-lg-0.p-4.mb-5(style="background-color:#DCD8F2")
      .row.justify-content-center.align-items-center
        .col-lg-3.col-6.px-0.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/img-09.png', alt='Imagen decorativa')
        .col-lg-9.px-4(data-aos="fade-left")
          .row.justify-content-center
            p.mb-0 En esta técnica lo que se busca es identificar y eliminar los registros duplicados. El primer paso consiste en definir qué se considera un duplicado. ¿Debe ser idéntica toda la fila o solo un subconjunto de columnas clave (por ejemplo, ID_cliente y fecha_compra)? Una vez establecidos estos criterios, se pueden emplear funciones de programación para identificar dichos registros y eliminar todas las ocurrencias, excepto una.
        
    .row.mb-5.ms-0
      .col-auto.bg-c2(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/ico.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 C. Tratamiento de datos incorrectos y de formato

    .row.justify-content-center.align-items-end.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Para esta técnica se utilizan dos maneras:
        .row.justify-content-center
          .col-lg-6.col-10.mb-lg-0.mb-4
            .BG00.h-100.p-4
              .row.justify-content-center.align-items-center
                .col-lg-2.col-sm-3.col-4.px-0.mb-lg-0.mb-4
                  img(src='@/assets/curso/temas/tema1/icono-07.svg' alt="Imagen decorativa")
                .col-lg-10 
                  h4.mb-0 Primera 
                  p.mb-0 Estandarización y normalización
          .col-lg-6.col-10.mb-lg-0.mb-4
            .BG00.h-100.p-4
              .row.justify-content-center.align-items-center
                .col-lg-2.col-sm-3.col-4.px-0.mb-lg-0.mb-4
                  img(src='@/assets/curso/temas/tema1/icono-08.svg' alt="Imagen decorativa")
                .col-lg-10
                  h4.mb-0 Segunda
                  p.mb-0 Aplicación de reglas de validación y expresiones regulares.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema1/img-10.png' alt="Imagen decorativa")

    p.mb-5 En el caso de la estandarización y normalización de datos, implica la transformación de estos a un formato común. Este proceso incluye la conversión de texto a minúsculas o mayúsculas para evitar duplicados, debido a la capitalización, la estandarización de categorías (por ejemplo, mapear "COL" y "Co." a "Colombia") y la unificación de formatos de fecha y unidades de medida.

    .row.mb-5.ms-0
      .col-auto.bg-c2(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/ico.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 D. Reglas de validación y expresiones regulares

    .row.mb-5
      .col-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema1/icono-09.svg', alt='Imagen decorativa')
      .col-10
        p.mb-0 Es posible establecer reglas para la validación de datos. Por ejemplo, una columna que contenga edades debe ser un número entero comprendido entre 0 y 120. Las expresiones regulares #[em (regex)] son herramientas sumamente eficaces para validar y corregir formatos de texto, tales como códigos postales, números de teléfono o direcciones de correo electrónico.

    .row.mb-5.ms-0
      .col-auto.bg-c2(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/ico.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 E. Tratamiento de valores atípicos

    .row.mb-5
      .col-lg-9
        p En esta técnica lo primero es detectar los datos que no se comportan como la gran mayoría de los datos, posteriormente se les da un manejo. Para la detección los métodos visuales como los diagramas de caja #[em (box plots)], son excelentes para una primera aproximación. Estadísticamente, se pueden usar el rango intercuartílico (IQR) o el Z-score. Un punto de dato se considera atípico si cae por debajo de Q1−1.5×IQR o por encima de Q3+1.5×IQR, o si su Z-score (número de desviaciones estándar desde la media) excede un umbral, típicamente 3. (Han, Pei & Tong, 2022).
        p Una vez detectado el dato, se procede a manejarlo; si se determina que el valor atípico es un error, puede ser tratado como un valor faltante. En caso de que se trate de un dato genuino, las opciones incluyen: 
        .row
          .col-lg-4.px-4.mb-lg-0.mb-4
            .row.justify-content-center.p-4.h-100(style="background-color:#D6CDD9; border-radius:20px")
              figure
                img.mb-2(src="@/assets/curso/temas/tema1/icono-03.svg", alt="", style="width: 60px")
              p.mb-0 #[b Transformación]
              p.mb-0 Aplicar una transformación matemática, como el logaritmo, a la variable para mitigar el efecto del valor atípico.
          .col-lg-4.px-4.mb-lg-0.mb-4
            .row.justify-content-center.p-4.h-100(style="background-color:#D6CDD9; border-radius:20px")
              figure
                img.mb-2(src="@/assets/curso/temas/tema1/icono-04.svg", alt="", style="width: 60px")
              p.mb-0 #[em #[b Winsorización (capping)]]
              p.mb-0 Limitar los valores extremos, por ejemplo, reemplazando cualquier valor por encima del percentil 99 con el valor del percentil 99. 
          .col-lg-4.px-4.mb-lg-0.mb-4
            .row.justify-content-center.p-4.h-100(style="background-color:#D6CDD9; border-radius:20px")
              figure
                img.mb-2(src="@/assets/curso/temas/tema1/icono-05.svg", alt="", style="width: 60px")
              p.mb-0 #[b Eliminación]
              p.mb-0 Si el #[em outlier] es tan extremo que podría desestabilizar el modelo y no se puede corregir, se puede optar por eliminarlo, documentando siempre la justificación.
      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema1/img-11.png', alt='', style="width: 400px").m-auto

    .tarjeta.tarjeta--C01.p-3.mb-4(style="background-color:#FFEBF1")
      .row.justify-content-center.align-items-center
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/icono-06.svg', alt='Imagen decorativa') 
        .col-lg-8.px-lg-0
          p.mb-2 En conclusión, se puede afirmar que el proceso de limpieza de datos debe seguir un enfoque estructurado que incluya los siguientes pasos: 
          ul.lista-ul--color.lista-ul.mb-0
            li.mb-0
              i.fas.fa-robot(style="color:#523DBF")
              p.mb-0 Eliminar observaciones duplicadas o irrelevantes.
            li.mb-0
              i.fas.fa-robot(style="color:#523DBF")
              p.mb-0 Corregir errores estructurales en los datos.
            li.mb-0
              i.fas.fa-robot(style="color:#523DBF")
              p.mb-0 Filtrar valores atípicos no deseados.
            li.mb-0
              i.fas.fa-robot(style="color:#523DBF")
              p.mb-0 Manejar adecuadamente los datos faltantes.
            li.mb-0
              i.fas.fa-robot(style="color:#523DBF")
              p.mb-0 Realizar validación y control de calidad

</template>

<script>
export default {
  name: 'Tema1',
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
