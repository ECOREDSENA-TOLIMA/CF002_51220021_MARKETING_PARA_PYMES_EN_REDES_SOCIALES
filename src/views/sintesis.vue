<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 A continuación, se describe el tema principal del componente formativo métricas y plan de acción en redes sociales, que se centra en la medición y evaluación de estrategias de #[em marketing] en plataformas digitales. Su objetivo es proporcionar las herramientas necesarias para analizar métricas relevantes en las redes más usadas y de mayor difusión, lo que permite a las empresas comprender el impacto de sus publicaciones y campañas en línea. Estos datos son fundamentales para tomar decisiones informadas y ajustar estrategias. Además, se enfatiza en la importancia de mantener un enfoque ético y legal en el entorno digital, particularmente en lo que respecta a derechos de autor y propiedad industrial. 

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis del componente formativo se hace referencia a los temas principales que se desarrollan en el mismo, entre ellos: la medición y analítica, la propiedad intelectual, las acciones de seguridad y salud para evitar enfermedades asociadas a la gestión de medios y el desarrollo de un plan de mejora digital.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
