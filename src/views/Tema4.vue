<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Plan de mejora en digital

    p.mb-3(data-aos="fade-down") Los planes de mejora se entienden como las acciones a implementar con base en los resultados observados, para de esta forma: continuar haciendo lo que está funcionando, ajustar lo que sea necesario y no incluir las acciones que definitivamente no están teniendo los resultados esperados.
    p.mb-5(data-aos="fade-down") Para los planes de mejora no existen formatos únicos, de hecho, cada organización basada en su Sistema de Gestión de la Calidad (SGC), en su planeación estratégica o de mercadeo, puede tener sus propias fichas. No obstante, hay algunos puntos que se aconsejan estén presentes a la hora de formular un plan de este tipo:

    .tarjeta.color-primario.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-7.col-12.mb-4.mb-md-0
            h4 Visualizar el objetivo
            p En el plan de mercadeo, comunicación o en el social media, se establecieron unos objetivos medibles y alcanzables, por tanto, en el plan de acción se debe retomar el objetivo en el cual se van a enfocar las acciones.
          .col-md-5.col-11
            figure
              img(src='@/assets/curso/temas/tema4/tema4-1.png', alt='')
        .row
          .col-md-7.col-12.mb-4.mb-md-0
            h4 Plantear las acciones a realizar
            p Ello implica definir cuáles son las actividades que se esperan realizar en el plan de mejora, se sugiere listar para mayor visibilidad y tener así una mirada integral de cómo dichas acciones contribuyen al cumplimiento del objetivo.
          .col-md-5.col-11
            figure
              img(src='@/assets/curso/temas/tema4/tema4-2.png', alt='')
        .row
          .col-md-7.col-12.mb-4.mb-md-0
            h4 Identificar la audiencia
            p La audiencia es el público objetivo al cual se está dirigiendo la comunicación digital, es por ello, que siempre en un plan de acción se debe dejar claro a quién se le quiere “hablar”.
          .col-md-5.col-11
            figure
              img(src='@/assets/curso/temas/tema4/tema4-3.png', alt='')
        .row
          .col-md-7.col-12.mb-4.mb-md-0
            h4 Definir la plataforma digital
            p Cada plataforma digital tiene un objetivo comunicacional diferente, por tanto, la elección de la plataforma es un factor clave de éxito en el momento de definir el plan de acción.
          .col-md-5.col-11
            figure
              img(src='@/assets/curso/temas/tema4/tema4-4.png', alt='')
        .row
          .col-md-7.col-12.mb-4.mb-md-0
            h4 Seleccionar el tipo de publicación
            p El plan de acción debe derivarse de una revisión exhaustiva de aquello que funcionó bien y lo que definitivamente no tuvo el impacto esperado, es decir, definir el tipo de publicación (contenido, #[em feed] de noticias, fotografías, #[em reels, video clip]).
          .col-md-5.col-11
            figure
              img(src='@/assets/curso/temas/tema4/tema4-5.png', alt='')
        .row
          .col-md-7.col-12.mb-4.mb-md-0
            h4 Establecer el horizonte de tiempo
            p Cada red social y cada tipo de audiencia, tiene unos días y horarios de mayor efectividad, información que debe ser conocida por los administradores de comunidades virtuales, es por ello, que en el plan de acción debe quedar explícito cuándo se realizarán las acciones diseñadas.
          .col-md-5.col-11
            figure
              img(src='@/assets/curso/temas/tema4/tema4-6.png', alt='')
        .row
          .col-md-7.col-12.mb-4.mb-md-0
            h4 Definir los recursos necesarios
            p Si bien es cierto que las tácticas de mercadeo digital pueden tener en muchos casos costos más bajos que la realización de actividades de mercado tradicional (#[em off line]), siempre será importante mapear qué recursos se requieren para activar cada una de las acciones estipuladas en el plan de mejora. 
          .col-md-5.col-11
            figure
              img(src='@/assets/curso/temas/tema4/tema4-7.png', alt='')
        .row
          .col-md-7.col-12.mb-4.mb-md-0
            h4 Asociar responsables
            p Asociar a cada acción un responsable, es tan importante como los demás elementos mencionados previamente, si bien el trabajo en equipo es relevante dentro de un proceso, siempre debe tenerse claro quién es responsable de la implementación.
          .col-md-5.col-11
            figure
              img(src='@/assets/curso/temas/tema4/tema4-8.png', alt='')
        .row
          .col-md-7.col-12.mb-4.mb-md-0
            h4 Listar las métricas de impacto
            p Como se mencionó previamente medir es la clave para saber a ciencia cierta que funciona y que no, es por ello, que se debe definir cuáles son los indicadores que se espera mejoren con el plan.
          .col-md-5.col-11
            figure
              img(src='@/assets/curso/temas/tema4/tema4-9.png', alt='')

    p.mb-5(data-aos="fade-down")  Como se indicó anteriormente, toda esta información del plan de mejora en redes sociales debe llevarse a un formato o matriz que cumpla doble función: ser herramienta de #[b planeación] y ser un instrumento de #[b seguimiento].

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
