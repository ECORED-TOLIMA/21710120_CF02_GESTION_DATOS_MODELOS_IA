<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p La sociedad actual está caracterizada por el predominio de los datos. Desde la optimización de las cadenas de suministro hasta el diagnóstico médico personalizado y la creación de arte generativo, la inteligencia artificial (IA) se ha establecido como el motor de la innovación más disruptiva de nuestro tiempo. No obstante, detrás de cada algoritmo "inteligente", de cada predicción sorprendentemente precisa y de cada sistema autónomo, subyace un pilar fundamental que a menudo se subestima: la calidad de los datos.
        .tarjeta.BG00.p-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/introduccion/icono.svg', alt='Imagen decorativa')
            .col-lg-10
              p.mb-0 El adagio "basura entra, basura sale" nunca ha sido más pertinente. Un modelo de inteligencia artificial, por más sofisticado que sea, es inherentemente un reflejo del universo de datos con el que ha sido entrenado. Si dicho universo es caótico, incompleto o impreciso, el modelo resultante será, en el mejor de los casos, mediocre y, en el peor, peligrosamente erróneo.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/introduccion/img-01.png', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-6.px-0.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/introduccion/img-02.svg' alt="Imagen decorativa")
      .col-lg-9(data-aos="fade-left")
        p.mb-0 En este componente, se busca darle al aprendiz el conocimiento necesario para que el éxito de la aplicación de la inteligencia artificial que desarrolle, no dependa únicamente de la elección del algoritmo más avanzado, sino de la maestría en el arte y la ciencia de preparar los datos. El preprocesamiento de datos no es un mero trámite preliminar; es el conjunto de etapas estratégicas que transforman datos crudos y ruidosos en un activo de alto valor, listo para ser explotado por el aprendizaje automático.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/sDiDrUYzeQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
