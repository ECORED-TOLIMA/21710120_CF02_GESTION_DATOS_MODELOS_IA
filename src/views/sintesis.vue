<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este componente analiza los principios universales que sustentan las técnicas más usadas en la limpieza y preparación de datos para modelos de inteligencia artificial. La gestión eficaz de datos en modelos de inteligencia artificial, exige un enfoque sistemático y exhaustivo que abarque desde la limpieza inicial de datos hasta la evaluación rigurosa de los modelos. Cada etapa del proceso contribuye de manera significativa al éxito final del proyecto y la negligencia en cualquier fase puede comprometer la efectividad y confiabilidad del sistema en su totalidad.
    p La limpieza de datos constituye la base sobre la cual se desarrollan modelos robustos, mientras que la reducción de dimensionalidad optimiza la eficiencia computacional sin comprometer información esencial. La selección adecuada de técnicas de aprendizaje automático y algoritmos específicos determina la capacidad del modelo para identificar patrones significativos y generar predicciones precisas.
    p.mb-5 La evaluación sistemática del modelo mediante métricas adecuadas garantiza que los sistemas desarrollados, no solo funcionen correctamente con los datos de entrenamiento, sino que también mantengan su rendimiento en aplicaciones del mundo real. La integración efectiva de todos estos componentes resulta en sistemas de inteligencia artificial que pueden proporcionar un valor tangible y confiable en una amplia gama de aplicaciones y dominios.

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis del componente formativo Técnicas de limpieza en modelos de aprendizaje automático, se detallan los errores y las técnicas existentes para una adecuada limpieza; además, se relacionan las características que están presentes en la dimensionalidad, así como los tipos de aprendizaje que hay y cómo se llega a una selección adecuada del algoritmo y se finaliza, con la relación de las métricas que están presentes en el proceso de evaluación del modelo.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
