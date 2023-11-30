<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Propiedad intelectual en Colombia
      
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La Propiedad Intelectual (PI) en nuestro país, hace referencia a toda aquella producción propia de obras tangibles e intangibles de tipo escrito, artístico o científico, así como logosímbolos, marcas, imágenes, frases (#[em slogan]), canciones, invenciones, entre otras producciones propias de una persona natural, organización o empresa. La propiedad en Colombia no solo es un tema de recomendación, sino de cumplimiento, debido a que se debe respetar esta propiedad para evitar que sea plagiada y/o usada para otros fines.

    p.mb-3(data-aos="fade-down") Por ello, existe normatividad especial, que contribuya con la protección de la información y el incumplimiento de esta aplica sanciones y multas a nivel personal y empresarial. Es mejor estar bien informado sobre las buenas prácticas en el uso y producción de la información, porque el desconocimiento de la ley no lo exime de la culpa y evita estar expuesto a detrimento económico y reputacional.
    p.mb-3(data-aos="fade-down") La protección de la PI es un tema jurídico, que le aborda desde dos perspectivas: la propiedad industrial y el derecho de autor, A nivel nacional, existen dos entidades que están relacionadas con la protección de la propiedad intelectual, estas son: la Superintendencia de Industria y Comercio (SIC) quien es responsable de la propiedad industrial y la Dirección Nacional de Derecho de Autor (DNDA) que está a cargo de los derechos de autor y los derechos conexos, sin embargo, las leyes que se promulgan en Colombia asociadas a estos temas, están realizadas con base en los tratados y acuerdos de la Organización Mundial de la Propiedad Industrial (OMPI), con el fin de tener estándares internacionales.
    p.mb-5(data-aos="fade-down") Teniendo en cuenta el significado de propiedad intelectual, se puede apreciar la perspectiva que esta ofrece para el país.

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-12.col-lg-10.mb-2.mb-md-0
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 3. </b> <i>Propiedad intelectual</i>
        figure 
          img.d-none.d-md-block(src='@/assets/curso/temas/tema2/fig-3a.svg', alt='En la figura 3, se hace una descripción de la propiedad intelectual a nivel industrial y de derechos de autor, teniendo en cuenta cada una de las características que estas abarcan.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema2/fig-3b.svg', alt='En la figura 3, se hace una descripción de la propiedad intelectual a nivel industrial y de derechos de autor, teniendo en cuenta cada una de las características que estas abarcan.')
          
    p.mb-5(data-aos="fade-down") A continuación, se presenta el concepto y las principales características:

    .row.align-items-center.mb-4(data-aos="fade-down-right")
      .d-flex.titulo-h3
        img(src='@/assets/curso/temas/icono.svg', style="width: 25px", alt='')
        h3.mb-0.ms-3 Propiedad Industrial

    p.mb-5(data-aos="fade-down") La propiedad industrial tiene por alcance el sector productivo. En Colombia para formalizar la protección de la propiedad industrial, se requiere de un registro ante la SIC (Superintendencia de Industria y Comercio) y dependiendo del tipo de elemento tiene ciertos años de protección. Asociada a la propiedad industrial, se tienen diferentes tipos de solicitudes: 
    
    .tarjeta--container.row.mb-5(data-aos="zoom-in-down")
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema2/tema2-2.svg', alt='')
          
        h4.text-center Las nuevas creaciones
        p Estas incluyen patentes, invenciones, modelos de utilidad (mejoras o modificaciones a invenciones ya existentes), diseño industrial (rangos, dimensiones o aspectos estéticos de un producto) o esquemas de trazado (disposición tridimensional en circuitos).
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema2/tema2-3.svg', alt='')
        h4.text-center Las marcas y los signos distintivos
        p Identifica bienes y servicios en el mercado y que pueden verse representados a través de: marcas (palabras, símbolos, dibujos, sonidos, fragancias o colores utilizados para diferenciar bienes o servicios); el nombre o lema comercial (frase o leyenda).

    p.mb-5(data-aos="fade-down") Así mismo, la protección de las marcas se concede por 10 años, llegando incluso a prorrogarse por otros 10 años de manera indefinida; también es importante tener presente que el registro posibilita el uso exclusivo de la marca y su explotación comercial con relación a los productos y/o servicios para los cuales fue concedida.  

    .row.align-items-center.mb-4(data-aos="fade-down-right")
      .d-flex.titulo-h3
        img(src='@/assets/curso/temas/icono.svg', style="width: 25px", alt='')
        h3.mb-0.ms-3 Derechos de Autor

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el área de la propiedad intelectual en el que las personas o empresas tienen derecho sobre sus obras o productos creados (originales) y que pueden ser divulgadas o reproducidas por cualquier medio. Por lo anterior, se hace importante que las personas deben registrar sus obras, con el fin de tener respaldo sobre la titularidad de sus derechos. Estos, tienen como vigencia toda la vida del autor más ochenta (80) años adicionales después de fallecido, posteriormente pasa a ser de dominio público.

    p.mb-4(data-aos="fade-down") Actualmente, en Colombia el #[em software] está protegido por los derechos de autor. Las tipologías de derechos de autor son un poco más amplias que las de propiedad intelectual y están contempladas en:
    
    ul.lista-ul.ms-3.mb-5(data-aos="fade-down")
      li.mb-0
        span.icon ✔ 
        | Los #[b fonogramas] (los sonidos).
      li.mb-0
        span.icon ✔ 
        | Las #[b obras] (artísticas, audiovisual, literaria editada, literaria inédita, musical).
      li.mb-0
        span.icon ✔ 
        | De #[b soporte lógico] (programas).
      li.mb-0
        span.icon ✔ 
        | De #[b contratos y demás actos] (aquellos que confieran, modifiquen, transmitan o eliminen los derechos patrimoniales).

    p.mb-4(data-aos="fade-down") En lo referente a derechos de autor, en Colombia, el procedimiento para registrar obras, fonogramas, #[em software] o actos/ contratos, es efectuado exclusivamente por la Dirección Nacional de Derechos de Autor (DNDA), es un trámite que no tiene costo (es gratuito) y sencillo. Según lo estipulado en el Decreto 491 de 2020, el procedimiento tiene una duración máxima de 30 días hábiles, contados desde el día que la solicitud se realiza formalmente y en Colombia.

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Marco normativo de la propiedad industrial a nivel nacional
  
    p.mb-4(data-aos="fade-down") Una vez visto los conceptos y relación entre propiedad industrial, propiedad intelectual y derechos de autor, se presenta en la siguiente tabla el marco normativo que rige en Colombia.

    //- .row.justify-content-center.mb-5(data-aos="fade-left") 
    //-   .col-lg-2.col-12.d-none.d-lg-block
    //-     img(src='@/assets/curso/temas/tema2/tema2-5.png', alt='')
    //-   .col-lg-10.col-12
    //-     .tarjeta.color-primario.p-4.mb-5(data-aos="zoom-in-down")
    //-       LineaTiempoC.color-acento-contenido
    //-         .row.align-items-center.justify-content-center(titulo="1982")
    //-           .col-12.col-lg-10.mb-4.mb-md-0
    //-             h4 Ley 23 de 1982
    //-             p Es considerada la ley “madre” de los derechos de autor en Colombia. Define quiénes son los titulares de los derechos, los tipos de obras susceptibles de ser protegidas, mecanismos para la publicación, la duración de los derechos patrimoniales, los derechos morales de los autores, las limitaciones y excepciones al derecho de autor, las limitaciones al derecho de reproducción, asimismo, hace referencia a los contratos y derechos conexos.
    //-         .row.align-items-center.justify-content-center(titulo="1989")
    //-           .col-12.col-lg-10.mb-4.mb-md-0
    //-             h4 Decreto 1360 de 1989
    //-             p Tiene por fin reglamentar la inscripción del soporte lógico, es decir, del software en el Registro Nacional de Derechos de Autor. Allí, además de aclarar desde el punto de vista legal algunos conceptos, se establece que el procedimiento de inscripción debe realizarse por escrito y se indica la información requerida para registrar un software. 
    //-         .row.align-items-center.justify-content-center(titulo="1991")
    //-           .col-12.col-lg-10.mb-4.mb-md-0
    //-             h4 Constitución Política de 1991
    //-             p En la Carta Magna se contemplan cuatro artículos alusivos al tema. 
    //-             ul.lista-ul.ms-3
    //-               li.mb-0
    //-                 span.icon ✔ 
    //-                 | Artículo 68, hace mención a la definición de propiedad como función social y el rol del Estado para proteger y promover las formas asociativas y solidarias de propiedad.
    //-               li.mb-0
    //-                 span.icon ✔ 
    //-                 | Artículo 61, indica que el Estado protegerá la propiedad intelectual por tiempo y mediante las formalidades que establezca la ley. 
    //-               li.mb-0
    //-                 span.icon ✔ 
    //-                 | Artículo 150, indica que es responsabilidad del Estado regular el régimen de marcas, patentes y propiedad industrial 
    //-               li.mb-0
    //-                 span.icon ✔ 
    //-                 | Artículo 189, indica que le corresponde al presidente conceder patente de privilegio temporal a los autores de invenciones o perfeccionamientos útiles, con arreglo a la ley.
    //-         .row.align-items-center.justify-content-center(titulo="1994")
    //-           .col-12.col-lg-10.mb-4.mb-md-0
    //-             h4 Ley 178 de 1994
    //-             p Esta ley, aprueba la adopción del Convenio de París para la protección de la propiedad industrial, trata principalmente tres aspectos: 
    //-             ul.lista-ul.ms-3
    //-               li.mb-0
    //-                 span.icon 1.  
    //-                 | El trato nacional, entendido como lo que se refiere a la protección de la propiedad industrial.
    //-               li.mb-0
    //-                 span.icon 2.  
    //-                 | Los Estados Contratantes deberán conceder a los nacionales de los demás Estados Contratantes la misma protección que concede a sus propios nacionales.
    //-               li.mb-0
    //-                 span.icon 3.  
    //-                 | El derecho de prioridad, implicando que con arreglo a una primera solicitud de patente de invención o de registro de la marca que sea presentada en uno de los Estados Contratantes, el solicitante podrá, durante determinado período de tiempo (12 meses para las patentes y los modelos de utilidad y seis meses para los dibujos y modelos industriales y las marcas), solicitar la protección en cualquiera de los demás Estados Contratantes.
    //-         .row.align-items-center.justify-content-center(titulo="2006")
    //-           .col-12.col-lg-10.mb-4.mb-md-0
    //-             h4 Decreto 4540 de 2006
    //-             p Por medio de este decreto, se adoptan controles de aduana para proteger la propiedad intelectual, propendiendo porque en Colombia no entren mercancías “piratas” o de “marca falsa”.
    //-             p De esta manera se estipulan procedimientos y disposiciones comunes para cumplir con dicho propósito. 
    //-         .row.align-items-center.justify-content-center(titulo="2010")
    //-           .col-12.col-lg-10.mb-4.mb-md-0
    //-             h4 Decreto 1162 de 2010
    //-             p Organiza el Sistema Administrativo Nacional de la Propiedad Intelectual- SANPI el cual tiene por fin coordinar las actividades institucionales y de los privados para lograr un buen nivel de protección, uso y promoción de la propiedad intelectual, aportando de esta manera a la productividad nacional. Paralelamente, se crea la Comisión Intersectorial de Propiedad Intelectual- CIPI, para la coordinación y orientación de las políticas en materia de propiedad intelectual.
    //-         .row.align-items-center.justify-content-center(titulo="2012")
    //-           .col-12.col-lg-10.mb-4.mb-md-0
    //-             h4 Ley 1581 de 2012
    //-             p Es considerada la ley de leyes para el tratamiento de datos en el país, tanto para entidades públicas como para empresas privadas y comúnmente se denomina “Ley de Habeas Data General”. Reconoce y protege el derecho constitucional que tienen todas las personas a conocer, actualizar y rectificar las informaciones que se hayan recogido sobre ellas en bases de datos o archivos que sean susceptibles de tratamiento; dicha ley es indispensable cuando se está tratando datos a través de canales digitales (incluido las redes sociales).
    //-         .row.align-items-center.justify-content-center(titulo="2017")
    //-           .col-12.col-lg-10.mb-4.mb-md-0
    //-             h4 Ley 1834 de 2017
    //-             p En esta Ley se fomenta la Economía Naranja en Colombia. Dicha Ley es importante porque tiene por finalidad desarrollar, fomentar y proteger las industrias creativas, las cuales son entendidas como las industrias que generan valor en razón de sus bienes y servicios, los cuales se fundamentan principalmente en la propiedad intelectual.
    //-         .row.align-items-center.justify-content-center(titulo="2018")
    //-           .col-12.col-lg-10.mb-4.mb-md-0
    //-             h4 Ley 1915 de 2018
    //-             p A través de esta Ley se modifica en algunos puntos la Ley 23 de 1982, así como se establecen condiciones nuevas asociadas a los derechos de autor y conexos. Se tratan especialmente, las disposiciones relativas a obras huérfanas, entendidas como aquellas obras o fonogramas reproducidas en Colombia y en donde no se tiene ninguna información de su autor a pesar de haber realizado un proceso formal de búsqueda.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 1.] #[i Leyes sobre propiedad industrial] 
        .tabla-a.color-acento-contenido
          table(style="min-width:auto")
            thead
              tr.cabecera-a.text-center
                th Ley
                th Descripción
            tbody
              tr
                th Ley 23 de 1982 
                td.text-start 
                  p Se definen las características de los derechos de autor. 
              tr
                th Decreto 1360 de 1989 
                td.text-start 
                  p Tiene por fin reglamentar la inscripción del soporte lógico, es decir, del #[em software] en el Registro Nacional de Derechos de Autor. 
              tr
                th Ley 178 de 1994 
                td.text-start 
                  p Esta ley, aprueba la adopción del Convenio de París para la protección de la propiedad industrial.
              tr
                th Decreto 4540 de 2006 
                td.text-start 
                  p Por medio de este decreto, se adoptan controles de aduana para proteger la propiedad intelectual. 
              tr
                th Decreto 1162 de 2010 
                td.text-start 
                  p Organiza el Sistema Administrativo Nacional de la Propiedad Intelectual- SANPI. 
              tr
                th Ley 1581 de 2012 
                td.text-start 
                  p Es considerada la ley de leyes para el tratamiento de datos en el país, tanto para entidades públicas como para empresas privadas y comúnmente se denomina “Ley de Habeas Data General”. 
              tr
                th Ley 1834 de 2017 
                td.text-start 
                  p En esta Ley se fomenta la Economía Naranja en Colombia. Dicha Ley es importante porque tiene por finalidad desarrollar, fomentar y proteger las industrias creativas.
              tr
                th Ley 1915 de 2018 
                td.text-start 
                  p A través de esta Ley se modifica en algunos puntos la Ley 23 de 1982, así como se establecen condiciones nuevas asociadas a los derechos de autor y conexos. 

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Propiedad intelectual en redes sociales

    p.mb-5(data-aos="fade-down") Como se expuso anteriormente, la propiedad intelectual es un tema que debe ser conocido por las personas que interactúan constantemente con información; específicamente en redes sociales, es un tema que los administradores de comunidades virtuales, deben tener presentes para no cometer errores y terminar en enredos jurídicos, ya que usualmente las obras están protegidas por derechos de autor o derechos conexos y en el caso de las marcas por propiedad industrial . 
    
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos="fade-down-right")
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema2/carrucel-1a.svg' alt='')
        h4 Primera acción
        p Utilizar piezas gráficas propias, es decir, realizadas #[em in house] (dentro de la empresa) o acudir a bancos de imágenes en sitios que incluyan licencias de uso gratuito, es decir, que permitan el uso del material.
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema2/carrucel-1b.svg' alt='')
        h4 Segunda acción
        p Referenciar claramente si el contenido es propio o si es tomado de algún autor o sitio #[em web]. Se debe tener presente que cuando no hay notas aclaratorias se asumirá que la información es 100 % autoría propia.
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema2/carrucel-1c.svg' alt='')
        h4 Tercera acción
        p Solicitar autorización para el uso al titular de los derechos, cuando se utilice obras, grabaciones o elementos similares para una campaña de mercadeo digital o cualquier publicación independiente.  
      .tarjeta.color-primario.p-4.col-ipad 
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema2/carrucel-1d.svg' alt='')
        h4 Cuarta acción
        p Realizar permanentemente gestión electrónica de derechos, entendido como la protección que dan los titulares en medios virtuales al uso de sus recursos, por ejemplo, el número de descargas, el tipo de dispositivos, entre otros. 
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema2/carrucel-1e.svg' alt='')
        h4 Quinta acción
        p Asegurarse de tener un #[em #[b backup]] #[b (soporte)] con la fecha y la pieza o recurso utilizado, de modo que en un caso dado pueda probarse que usted fue la primera persona que realizó dicha publicación.

    p.mb-4(data-aos="fade-down") Dedicar el tiempo a leer los Términos y Condiciones (TyC) que rigen cada red social, ya que ellos mismos también establecen unas condiciones de uso sobre sus servicios, las cuales, en caso de no ser cumplidas, llevarán a sanciones, que pueden ir desde inactivar la cuenta hasta realizar pagos económicos. Sin embargo, dichas plataformas también tienen diversos mecanismos internos para la protección de los derechos, brindando la oportunidad de denunciar cuando un contenido está violando los derechos de autor o de imagen de una persona o empresa.



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
