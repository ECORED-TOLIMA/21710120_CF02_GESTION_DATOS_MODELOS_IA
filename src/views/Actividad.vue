<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Gestión de datos',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar y reforzar el conocimiento adquirido sobre las técnicas para corrección de errores de los conjuntos de datos, antes de ser utilizados para el entrenamiento de modelos de aprendizaje automático.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'La limpieza de datos es un proceso opcional en el desarrollo de modelos de IA, ya que los algoritmos modernos pueden manejar datos sucios automáticamente.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. La limpieza de datos es fundamental y obligatoria en cualquier proyecto de IA, ya que la calidad de los datos determina directamente el rendimiento del modelo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'Los valores atípicos <em>(outliers)</em> siempre deben ser eliminados de los conjuntos de datos, porque representan errores de medición.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Los <em>outliers</em> pueden representar tanto errores como observaciones válidas pero extremas, por lo que requieren análisis cuidadoso antes de decidir su tratamiento.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'El Análisis de Componentes Principales (PCA), es una técnica de reducción de dimensionalidad que preserva la máxima varianza en los datos.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. PCA transforma los datos originales en componentes principales ordenados por la cantidad de varianza que explican, manteniendo la información más relevante.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'La maldición de la dimensionalidad, se refiere a que tener más características siempre mejora el rendimiento de los modelos de <em>machine learning.</em>',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. La maldición de la dimensionalidad describe cómo el rendimiento se degrada cuando aumenta excesivamente el número de dimensiones, requiriendo técnicas de reducción.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'El aprendizaje supervisado, utiliza datos etiquetados para entrenar modelos que puedan realizar predicciones sobre nuevos datos.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. El aprendizaje supervisado requiere datos con etiquetas conocidas durante el entrenamiento para aprender patrones y hacer predicciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'El algoritmo <em>Random Forest</em>, es menos efectivo que un árbol de decisión individual, porque combina múltiples modelos débiles.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. <em>Random Forest</em> utiliza ensemble <em>methods</em> para combinar múltiples árboles, generalmente obteniendo mejor rendimiento y menor sobreajuste que árboles individuales',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'La matriz de confusión, solo puede utilizarse para problemas de clasificación binaria (dos clases).',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. La matriz de confusión, puede utilizarse para problemas de clasificación con cualquier número de clases, no solo binarias',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'El Error Cuadrático Medio (MSE), es más sensible a valores atípicos que el Error Absoluto Medio (MAE).',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. MSE penaliza fuertemente los errores grandes debido al cuadrado, mientras que MAE es más robusto a <em>outliers.</em>',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo..',
        },
        {
          id: 9,
          texto:
            'La imputación de datos faltantes, siempre debe realizarse usando la media aritmética de los valores disponibles.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Existen múltiples técnicas de imputación como mediana, moda, k-NN o modelos predictivos, cada una apropiada según el contexto.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo..',
        },
        {
          id: 10,
          texto:
            'El coeficiente de determinación (R²), puede tener valores negativos cuando el modelo es peor que predecir simplemente la media.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. R² puede ser negativo cuando el modelo tiene un rendimiento peor que el modelo base de predecir la media de los datos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            'La validación cruzada k-fold, divide los datos en k partes y utiliza todas las partes simultáneamente para entrenamiento y validación.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. En k-fold se usan k-1 partes para entrenamiento y 1 para validación, repitiendo el proceso k veces, no simultáneamente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            'El <em>overfitting</em> ocurre cuando un modelo tiene buen rendimiento, tanto en datos de entrenamiento como en datos de prueba.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. El <em>overfitting</em> se caracteriza por excelente rendimiento en entrenamiento, pero pobre rendimiento en datos de prueba.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'La normalización min-max, transforma los datos para que tengan media cero y desviación estándar uno.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. La normalización min-max, escala los datos a un rango específico (generalmente 0-1), mientras que la estandarización Z-score da media cero y desviación uno.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            'El aprendizaje no supervisado requiere datos etiquetados para descubrir patrones ocultos en la estructura de los datos.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. El aprendizaje no supervisado trabaja con datos sin etiquetas, buscando patrones naturales como <em>clustering</em> o reducción de dimensionalidad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo..',
        },
        {
          id: 15,
          texto:
            'La precisión <em>(precision)</em> mide la proporción de predicciones positivas que fueron correctas.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. La precisión se calcula como TP/(TP+FP), midiendo qué proporción de las predicciones positivas fueron realmente correctas..',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'La regularización L1 <em>(Lasso)</em> tiende a producir modelos más dispersos que la regularización L2 <em>(Ridge).</em>',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. L1 tiende a producir modelos más escasos <em>(sparse)</em> poniendo coeficientes exactamente en cero, mientras L2 los reduce, pero raramente los elimina completamente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'El área bajo la curva ROC (AUC-ROC) es especialmente útil para evaluar modelos con conjuntos de datos balanceados.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. AUC-ROC puede ser engañosa con datos desbalanceados; AUC-PR (precisión-<em>recall</em>) es más apropiada para esos casos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'Los métodos de ensemble como <em>bagging</em>, reducen principalmente el sesgo del modelo.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. <em>Bagging</em> reduce principalmente la varianza, mientras que <em>boosting</em> puede reducir tanto sesgo como varianza.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            'La ingeniería de características <em>(feature engineering)</em>, puede ser más importante que la selección del algoritmo para el éxito del proyecto.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Una buena ingeniería de características puede mejorar significativamente el rendimiento, a menudo más que cambiar algoritmos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'El <em>clustering</em> jerárquico requiere especificar el número de clusters, antes de ejecutar el algoritmo.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. El <em>clustering</em> jerárquico no requiere especificar el número de <em>clusters</em> previamente, a diferencia de k-means.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Felicitaciones, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
