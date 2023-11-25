<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down")
      .col-12
        p La gestión eficaz de las redes sociales se ha convertido en un pilar fundamental del marketing en la era digital. Para aprovechar al máximo su potencial, es esencial comprender cómo medir y evaluar el impacto de nuestras estrategias en línea. El componente formativo Métricas y plan de acción en redes sociales ofrece una guía esencial para adentrarse en este emocionante mundo. A través de este programa, aprenderemos a emplear herramientas especializadas que nos permiten analizar métricas y evaluar el desempeño de nuestras publicaciones en las redes sociales. Estas habilidades son cruciales para ajustar estrategias, mejorar la interacción con los seguidores y lograr un impacto más significativo en un entorno digital en constante evolución.
  
    figure(data-aos="zoom-in-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/uyimsb45gu8" title="Métricas y plan de acción en redes sociales" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Métricas y plan de acción en redes sociales
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
