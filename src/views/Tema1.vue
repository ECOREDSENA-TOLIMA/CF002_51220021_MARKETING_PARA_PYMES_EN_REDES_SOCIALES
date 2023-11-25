<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Medición y analítica

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img( 
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los medios de comunicación convencionales y digitales deben garantizar que los productos tengan efectos positivos con su implementación, por ello, se hace necesario que la información publicada sea analizada y medida, por medio de indicadores que faciliten la efectividad de los medios utilizados. 
          br
          br
          | A partir del #[em marketing] digital se realizan una serie de mediciones derivadas de indicadores especiales y de los datos suministrados por las diferentes plataformas web para esta tarea. Dichos datos son un insumo muy importante para el futuro desarrollo de estrategias y para realizar correcciones casi en tiempo real de las acciones que se están ejecutando, con la opción de redireccionarlas para el logro de los objetivos planteados, minimizando los riesgos al final de la campaña y optimizando la inversión que se haya realizado. 

    p.mb-3(data-aos="fade-down") Lo anterior se hace importante en las PYMES, el realizar acciones muy acertadas que garanticen que las publicaciones sean efectivas, porque en muchos casos para las pequeñas y medianas empresas los presupuestos para esta labor son muy limitados. 
    p.mb-5(data-aos="fade-down") “Lo que no se mide no se puede controlar ni mejorar” y esta ideología ha sido plenamente adaptada en el contexto empresarial, es por ello la importancia de los indicadores, que, en el contexto digital, se denominan métricas, las cuales se definen como una medida cuantitativa que permite la medición y comparación.

    .row.align-items-center.mb-4(data-aos="fade-down-right")
      .d-flex.titulo-h3
        img(src='@/assets/curso/temas/icono.svg', style="width: 25px", alt='')
        h3.mb-0.ms-3 ¿Qué es la analítica web?

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-right")
      .col-10.col-md-5.col-lg-4
        img(src='@/assets/curso/temas/tema1/tema1-2.png' alt='')
      .col-10.col-md-7.col-lg-6
        p  La analítica web es la medición, análisis y presentación de datos de monitorización a las actividades que una empresa realiza en medios #[em online], con el fin de realizar acciones de mejoramiento de las estrategias y con ello, generar mayor efectividad de los planes de #[em marketing] y comunicación digital llevados a cabo por la empresa para dar cumplimiento a los objetivos.
        p La analítica web es una disciplina derivada de otras que han sido y siguen siendo importantes en el desarrollo de nuevas técnicas de mercadeo para el análisis del comportamiento de los clientes reales y potenciales. Desde el inicio de las actividades comerciales y la posibilidad de ingreso de cualquier competidor al mercado, las empresas han destinado grandes esfuerzos económicos y humanos para conocer en detalle el comportamiento de los compradores para el desarrollo de estrategias más efectivas que permitan un incremento significativo en las ventas. Los Sistemas de Información de Mercados (SIM), han ocupado un lugar de privilegio en el análisis de compra en puntos de venta de todo tipo. Posteriormente, los CRM, por su parte, fueron un primer intento por generar estrategias que utilizan la información de los clientes a través de herramientas sistematizadas para generar comunicación hacia clientes potenciales y reales. 

    p.mb-5(data-aos="fade-down") La analítica parece acercarse de forma importante a ese objetivo de conocer el comportamiento del mercado en relación con un producto o servicio y, en particular, con los medios digitales de una marca o empresa permitiendo llegar con comunicación y estrategias de promoción y ventas más contundentes.

    .row.align-items-center.mb-4(data-aos="fade-down-right")
      .d-flex.titulo-h3
        img(src='@/assets/curso/temas/icono.svg', style="width: 25px", alt='')
        h3.mb-0.ms-3 Tendencias de la analítica web

    p.mb-5(data-aos="fade-down") Derivado de los análisis que puede realizar una empresa en pro del mejoramiento de sus estrategias de mercadeo y comunicación, surgen tres corrientes principales en las que se puede centrar el proceso:

    .row.justify-content-center.mb-5(data-aos="zoom-in-down")
      .col-lg-10.col-12.position-relative
        .avatar
          figure
            img(src="@/assets/curso/temas/tema1/tema1-3.png", alt="alt").img250
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/tema1-4.svg", alt="alt").img100
            .col
              h5 #[em Social analytics]
              p La llegada de las redes sociales ha obligado a que tanto sus usuarios desde el ámbito comercial, como sus administradores; implementen técnicas de análisis de la información que en ese tipo de plataformas es masiva y muy relevante para el proceso comercial.
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/tema1-5.svg", alt="alt").img100
            .col
              h5 #[em Mobile analytics]
              p La innovación de los teléfonos inteligentes trajo consigo un nuevo sistema de navegación, gestión, trabajo, entrenamiento y organización. Las aplicaciones (App), al igual que los sitios web y las plataformas #[em online], generan una gran cantidad de información y datos que, al ser organizados y analizados, permiten la toma de decisiones de forma oportuna y adecuada.
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/tema1-6.svg", alt="alt").img100
            .col
              h5 #[em Big data]
              p Nunca en el mundo se había tenido tanta información circulando y a disposición de casi cualquier persona que tenga acceso a internet. Los datos que generan las redes sociales, los sistemas de información, los sitios web y las entidades gubernamentales y privadas permiten conocer a un nivel superior cómo desarrollar el proceso comercial y de #[em marketing] en cualquier empresa.

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Herramientas 

    p.mb-5(data-aos="fade-down") Existen varios #[em software], aplicaciones y programas que permiten obtener datos para la toma de decisiones, no obstante, dos de los más utilizados por las empresas por sus características y por su posicionamiento son: Google Analytics y Hootsuite Analyze. Se debe revisar a continuación una breve descripción, dejando claro que para aprender realmente a manipularlas lo ideal es realizar un curso práctico de cada una de ellas:

    .row.align-items-center.mb-4(data-aos="fade-down-right")
      .d-flex.titulo-h3
        img(src='@/assets/curso/temas/icono.svg', style="width: 25px", alt='')
        h3.mb-0.ms-3 Google #[em Analytics]

    p.mb-5(data-aos="fade-down") Es una herramienta gratuita que permite la optimización de los sitios web para mejorar el ROI de los negocios #[em online]. Mediante esta herramienta es posible mejorar la experiencia del usuario, incrementar conversiones, medir el rendimiento de palabras claves y de campañas, y acceder a métricas relacionadas con el negocio.  Además, permite a un empresario saber la forma cómo los usuarios llegan a la web de la empresa, dónde viven los visitantes, cómo hacer campañas más efectivas, cómo es la interacción de los usuarios con la web y validar si el contenido ofrecido es eficiente o deben hacerse mejoras en ese sentido.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img( 
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-7.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para el funcionamiento de Google Analytics es necesario crear una cuenta que permite acceder al menú para realizar todos los análisis y métricas que permite la plataforma. En cada cuenta creada se enlaza, al menos, una página web de la empresa, puede ser administrada por varios usuarios y para la que se pueden generar diversas visitas. Si una empresa tiene varios sitios web se puede hacer seguimientos a estos desde una misma cuenta, específicamente Google Analytics permite: 

    .row.align-items-center.mb-4(data-aos="fade-down-right")
      .d-flex.titulo-h3
        img(src='@/assets/curso/temas/icono.svg', style="width: 25px", alt='')
        h3.mb-0.ms-3 Informes de audiencia en Google #[em Analytics]

    p.mb-5(data-aos="fade-down") Las mediciones de audiencia son una información con mucho valor para la empresa. Estas permiten conocer el perfil en detalle de los visitantes de una página para la toma de decisiones. Algunas de estos indicadores son: 

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down")
      .col-lg-10.col-12
        PasosA.color-primario.mb-5(tipo="l" data-aos="fade-right")
          div
            h4 Sesión
            p La sesión inicia cuando un usuario “aterriza” en el sitio web y se finaliza cuando pasan más de 30 minutos sin que ese usuario interactúe con este. También finaliza la sesión si pasa de las 12 de la noche, en ese caso se iniciará otra sesión. Google #[em Analytics] realiza una medición de cantidad de sesiones que se realizan en el sitio web.
          div
            h4 Usuarios
            p Es todo aquel que ha visitado la página indiferente del número de sesiones que haya iniciado. Son las #[em cookies], las que permiten identificar los usuarios que hayan iniciado sesión en el sitio web.
          div
            h4 Duración media de la sesión
            p Google calcula esta métrica con base en el total de duración de las diferentes sesiones dividiendo entre el número de sesiones.
          div
            h4 Porcentaje de rebote
            p Es el porcentaje de sesiones en las que los usuarios ingresan a una página del sitio web y sin realizar ninguna interacción se retiran de ella.
          div
            h4 Porcentaje de nuevas sesiones
            p Esta métrica consiste en determinar el número de nuevos usuarios, analizando las #[em cookies] para definir si es un usuario que llega por primera vez al sitio web.

    .row.align-items-center.mb-4(data-aos="fade-down-right")
      .d-flex.titulo-h3
        img(src='@/assets/curso/temas/icono.svg', style="width: 25px", alt='')
        h3.mb-0.ms-3 Dimensiones

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-12.col-lg-10
        .tarjeta.color-primario.p-4
          ul.lista-ul.ms-3
            li
              span.icon ✔ 
              | #[b Tipo de usuario:] esta métrica discrimina entre usuarios nuevos y recurrentes y está ligada a las sesiones, pero no a los usuarios. Por lo tanto, debe considerarse como una sesión en la que el usuario se comporta como nuevo o recurrente.
            li
              span.icon ✔ 
              | #[b Edad y género:] esta información requiere una codificación especial en Google Analytics para que genere los datos a partir de páginas de terceros, así como otros datos demográficos. Una vez configurado, se muestran las cantidades de personas de cada género que han visitado el sitio web.
            li
              span.icon ✔ 
              | #[b Idioma:] determina el idioma que tiene configurado cada visitante de la página en su dispositivo o navegador.
            li
              span.icon ✔ 
              | #[b Ubicación geográfica:] determina la ubicación de cada visitante a partir de la IP de conexión a internet.
            li
              span.icon ✔ 
              | #[b Otras dimensiones:] están ligadas a visitantes que se conectan desde un dispositivo móvil: navegador que utilizan, sistema operativo, resolución de la pantalla, colores de pantalla, versión de #[em Flash], compatibilidad Java y proveedor de servicio.
            li
              span.icon ✔ 
              | #[b Tipo de dispositivo:] determina el tipo de dispositivo desde el cual el usuario visita el sitio web: computador, #[em móvil] o #[em tablet].
            li
              span.icon ✔ 
              | #[b Dispositivo:] está ligada a las visitas desde móviles. Presenta una información variada en relación con los dispositivos desde los cuales se accede: marca, modelo y tipo de escritura (táctil, #[em joystick] o lápiz).

    .row.align-items-center.mb-4(data-aos="fade-down-right")
      .d-flex.titulo-h3
        img(src='@/assets/curso/temas/icono.svg', style="width: 25px", alt='')
        h3.mb-0.ms-3 Informes básicos de audiencia

    p.mb-5(data-aos="fade-down") Los datos de audiencia suelen ser los más relevantes para los usuarios, pues es allí donde se pondrán los contenidos y se generará el #[em feedback]; estos informes incluyen:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-12.col-lg-10
        ul.lista-ul.ms-3
          li
            span.icon ✔ 
            | #[b Usuarios activos:] muestra los usuarios que han iniciado una sesión en los últimos 1, 7, 14 o 30 días.
          li
            span.icon ✔ 
            | #[b Análisis de grupo:] un grupo está conformado por varios usuarios que tienen características comunes. Este informe permite analizar el comportamiento de estos grupos.
          li
            span.icon ✔ 
            | #[b Valor del ciclo de vida del cliente:] se puede determinar la rentabilidad de cada usuario en función del rendimiento de su ciclo de vida como usuario.
          li
            span.icon ✔ 
            | #[b Versión de las aplicaciones:] esta métrica determina la versión de la App del usuario para determinar el nivel de actualización que realizan de la misma.
          li
            span.icon ✔ 
            | #[b Datos demográficos:] permite conocer la edad y sexo de los visitantes. Sin embargo, no se puede obtener el 100 % de la información, puesto que no todos los usuarios suministran esta información.
          li
            span.icon ✔ 
            | #[b Intereses:] esta información se obtiene de la misma forma que la edad y el sexo. Esta métrica permite conocer los gustos e intereses que tienen los visitantes al sitio web.
          li
            span.icon ✔ 
            | #[b Comparativas:] este ítem permite comparar los resultados de la web analizada con otras similares, lo que permite mejorar las estrategias y trazar metas de alcance de la empresa.
          li
            span.icon ✔ 
            | #[b ID de usuario:] es una dificultad en el análisis, pues en realidad se registra un navegador y no un usuario, así si alguien abre el sitio en tres navegadores diferentes está generando tres sesiones y no una.
        
    .row.align-items-center.mb-4(data-aos="fade-down-right")
      .d-flex.titulo-h3
        img(src='@/assets/curso/temas/icono.svg', style="width: 25px", alt='')
        h3.mb-0.ms-3 Métricas de adquisición

    p.mb-5(data-aos="fade-down") Estas métricas están relacionadas con la audiencia del sitio web y la conversión. Encontrando:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-12.col-lg-10
        .tarjeta.color-secundario.p-4
          ul.lista-ul.ms-3
            li
              span.icon ✔ 
              | #[b Impresiones:] consiste en medir el número de veces que un anuncio ha sido visto por un usuario en cualquiera de las plataformas.
            li
              span.icon ✔ 
              | #[b Clics:] mide la cantidad de veces que los usuarios hicieron clic en los anuncios de la empresa.
            li
              span.icon ✔ 
              | #[b Costo:] determina el pago realizado por los clics que han conseguido los anuncios. Esto determina, en consecuencia, el costo de la campaña.
            li
              span.icon ✔ 
              | #[b CTR:] #[em Cick Through Rate], porcentaje de usuarios que hacen clic en los anuncios de la empresa en relación con las impresiones de estos.
            li
              span.icon ✔ 
              | #[b CPC:] Costo Por Clic, determina el precio que se paga por cada clic que realizan los usuarios en un anuncio.
            li
              span.icon ✔ 
              | #[b ROI:] Retorno Sobre la Inversión, mide el retorno que obtiene la empresa sobre la inversión generada. Se calcula restando a los ingresos el gasto y dividiendo por los ingresos obtenidos.
            li
              span.icon ✔ 
              | #[b Agrupación de canales:] informa sobre la procedencia del tráfico; directo, búsqueda orgánica, referencia, correo electrónico, publicidad en buscadores, publicidad en otros medios y redes sociales.
            
    .row.align-items-center.mb-4(data-aos="fade-down-right")
      .d-flex.titulo-h3
        img(src='@/assets/curso/temas/icono.svg', style="width: 25px", alt='')
        h3.mb-0.ms-3 Informes básicos

    p.mb-5(data-aos="fade-down") #[em Google Analytics] genera informes de audiencia con datos generales relevantes a:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-12.col-lg-10
        ol.lista-ol.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            | #[b Visión general:] muestra de forma general las principales métricas de adquisición, comportamiento y conversión.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | #[b Todo el tráfico:] en estas métricas se puede ver la procedencia de los visitantes: canales, mapas de árbol, fuente o medio y referencia.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | #[b #[em Adwords:]] con estos informes se puede analizar el rendimiento de las campañas, anuncios y palabras clave.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | #[b Social:] con esta métrica se analiza el comportamiento de los botones sociales que se hayan instalado en la web.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | #[b Campañas:] permite medir la efectividad y el comportamiento de las campañas #[em online].

    .row.align-items-center.mb-4(data-aos="fade-down-right")
      .d-flex.titulo-h3
        img(src='@/assets/curso/temas/icono.svg', style="width: 25px", alt='')
        h3.mb-0.ms-3 #[em Hootsuite Analyze]

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img( 
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-8.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Hootsuite es una plataforma que permite la administración de las redes sociales de una empresa de forma centralizada, es ideal para planificar publicaciones, sobre todo si tiene varias cuentas de redes para un negocio. (Hootsuite, 2022).
          br
          br 
          | Hootsuite se caracteriza por funcionalidades básicas como:

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-12.col-lg-10.mb-2.mb-md-0
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 1. </b> <i>Funcionalidades básicas de Hootsuite</i>
        figure 
          img.d-none.d-md-block(src='@/assets/curso/temas/tema1/fig-1a.svg', alt='En la figura 1 se muestran las funciones básicas que tiene el Hootsuite dentro del desarrollo de las mediciones.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/fig-1b.svg', alt='En la figura 1 se muestran las funciones básicas que tiene el Hootsuite dentro del desarrollo de las mediciones.')
          
    p.mb-4(data-aos="fade-down") Con #[em Analyze] se cuenta con estas acciones importantes:

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-12.col-lg-10
        ul.lista-ul.ms-3
          li
            span.icon ✔ 
            | No solo permite analizar el desempeño de la empresa en cada red social, también accede a la proyección de informes personalizados, para así revisar los impactos de marca y efectividad de las acciones de audiencia como tácticas y actividades de social media.
          li
            span.icon ✔ 
            | Cuenta con un componente de analítica predictiva que posibilita obtener información sobre cuál es la franja o el momento adecuado para realizar publicaciones.
          li
            span.icon ✔ 
            | Calcula el ROI (Retorno Sobre la Inversión) e incluso es una herramienta para administrar de una forma simple las campañas publicitarias digitales.

    p.mb-5(data-aos="fade-down") Las métricas en Hootsuite son las mismas sin importar la plataforma que se utilice, por ello se abordarán en detalle, teniendo en cuenta que diferente a la plataforma utilizada, las métricas deberían ser como mínimo las que se deberían poder visualizar.

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Indicadores

    p.mb-5(data-aos="fade-down") Los indicadores denominados en #[em marketing] digital métricas representan el mejor proveedor de información y el principal criterio para la toma de decisiones en lo que respecta al mundo digital. Existen varios tipos de métricas que facilitan la implementación de indicadores como se muestra en la siguiente figura:

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-12.col-lg-10.mb-2.mb-md-0
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 2. </b> <i>Tipos de métricas digitales</i>
        figure 
          img.d-none.d-md-block(src='@/assets/curso/temas/tema1/fig-2a.svg', alt='En la figura 2 se muestran los tipos de métricas digitales que se pueden encontrar: de percepción, de cliente, de interacción y de conversión.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/fig-2b.svg', alt='En la figura 2 se muestran los tipos de métricas digitales que se pueden encontrar: de percepción, de cliente, de interacción y de conversión.')
          
    p.mb-3(data-aos="fade-down") A continuación, se explican con detalle, cada una de las métricas:
    p.mb-5(data-aos="fade-down") #[b •	Métricas de percepción:] es una métrica asociada a la atención que está generando la marca y sus publicaciones.  

    .row.mb-5(data-aos="zoom-in-down")
      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex.align-items-stretch
        .tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2 1
          p.text-center 
            b Crecimiento de la audiencia
          p.text-center Mide la variación porcentual en la que crece la audiencia, entendida como el número de seguidores en cada red social. 
      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex.align-items-stretch
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 2
          p.text-center 
            b Alcance de la publicación
          p.text-center Muestra cuántas personas han visto la publicación desde el momento en que fue publicada.
      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex.align-items-stretch
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            .h2 3
          p.text-center 
            b #[em Social Share of Voice (SSoV)]
          p.text-center Es el porcentaje de menciones que está teniendo la marca en redes sociales comparados con las de los competidores.

    p.mb-5(data-aos="fade-down") #[b • Métricas de interacción:] es un indicador que permite mostrar la relación que existe entre los usuarios con el contenido publicado. 

    .row.mb-5(data-aos="zoom-in-down")
      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex.align-items-stretch
        .tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2 1
          p.text-center 
            b #[em Engagement]
          p.text-center Hace relación a la medición del vínculo emocional entre un usuario y la marca, por lo que se suele decir que es una medida de involucramiento.
      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex.align-items-stretch
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 2
          p.text-center 
            b Tasa de viralidad
          p.text-center Es el porcentaje del número de personas que compartieron la publicación sobre el número único de impresiones.
      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex.align-items-stretch
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            .h2 3
          p.text-center 
            b Tasa de amplificación
          p.text-center Tiene cierta similitud con la tasa de viralidad, pero acá se contempla como la relación entre el número total de personas que compartieron la publicación de análisis sobre el número total de seguidores.

    p.mb-5(data-aos="fade-down") #[b • Métricas de conversión:] estos indicadores permiten mostrar la efectividad real que se logra a partir de las tácticas y actividades implementadas en redes sociales.

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos="fade-down-right")
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema1/carrucel-2a.svg' alt='')
        h4 Tasa de conversión 
        p Es el porcentaje de usuarios que realizan la acción objetivo en comparación con el número total de visitantes.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema1/carrucel-2b.svg' alt='')
        h4 Tasa de clics
        p Conocida también como CTR (#[em Click-Through Rate]), es el porcentaje de usuarios que hicieron clics sobre el total de impresiones.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema1/carrucel-2c.svg' alt='')
        h4 Tasa de rebote
        p Es el porcentaje del total de visitantes a una red social y sale sin interactuar con el contenido. La meta es que la tasa de rebote sea lo más baja.
      .tarjeta.color-primario.p-4 
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema1/carrucel-2d.svg' alt='')
        h4 Costo Por Clic (CPC)
        p Es el dinero que se paga a la plataforma o al proveedor por cada clic que realizan los usuarios en las publicaciones que son patrocinadas en redes sociales.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema1/carrucel-2e.svg' alt='')
        h4 Costo Por Mil impresiones (CPM)
        p Tiene similitud con el CPC sin embargo, representa la cantidad de dinero que se paga a la plataforma por cada mil personas expuestas por el anuncio.

    p.mb-3(data-aos="fade-down") #[b •	Métricas de cliente:] este tipo de métrica puede variar teniendo en cuenta la información que se quiere obtener como interactividad, satisfacción, eficiencia, entre otras. Lo más usual para métricas con el cliente es realizar evaluaciones de satisfacción del cliente o aplicar el #[em Net Promoter Score] (NPS) la cual es una métrica estandarizada para medir qué tanto recomendarían los clientes a una marca/ empresa.
    p.mb-5(data-aos="fade-down") Un ejemplo para medir el nivel de recomendación es #[em Net Promoter Score] es un indicador de recomendación ampliamente utilizado en las empresas y de gran aceptación a nivel mundial, el #[em Net Promoter Score] (o NPS) por sus siglas, el cual es una métrica creada en 1993 por Fred Reichheld, donde solo con un interrogante, evaluado con una escala de 1 a 10, se les pregunta a los clientes, ¿cuál es la probabilidad de que recomiende a la empresa XXX?, donde XXX es la empresa que está siendo evaluada. 

    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Métricas aplicadas a redes sociales

    p.mb-5(data-aos="fade-down") Teniendo clara la clasificación general de los Indicadores y teniendo presente que las redes sociales más utilizadas por las empresas son Facebook e Instagram, se mostrará a continuación la aplicación de estos indicadores en estas dos redes sociales:

    .row.align-items-center.mb-4(data-aos="fade-down-right")
      .d-flex.titulo-h3
        img(src='@/assets/curso/temas/icono.svg', style="width: 25px", alt='')
        h3.mb-0.ms-3 Métricas en Facebook

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-9.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Siendo la red social con el mayor número de usuarios a nivel mundial, Facebook es una plataforma por excelencia para el desarrollo de estrategias de marketing viral. Los diferentes servicios de pago y gratuitos que ofrece permiten que las empresas realicen diferentes tipos de actividades comerciales y promocionales que se pueden medir con datos estadísticos puntuales, los cuales se pueden monitorizar semanalmente. Facebook en la actualidad permite realizar mediciones muy completas de la actividad de las fan Page. Para el ingreso a estas estadísticas es necesario acceder a la página y en el menú en la parte izquierda, ingresar a estadísticas, allí se verá la información en forma detallada.

    p.mb-3(data-aos="fade-down") A continuación, se resaltan algunas de las estadísticas más importantes que ofrece Facebook:
    p.mb-3(data-aos="fade-down") #[b ✔	Resumen:] muestra datos generales de la actividad de la página, en un periodo de 7 o 28 días o de los últimos dos días.
    p.mb-5(data-aos="fade-down") Entre ellos se encuentran:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-12.col-lg-10
        .cajon.color-primario.p-4
          ul.lista-ul.ms-3
            li
              span.icon ✔ 
              | #[b Acciones en la página:] muestra el número de clics en el contacto de la página y en el botón de #[em Call to Action] que esta tenga.
            li
              span.icon ✔ 
              | #[b Visitas a la página:] muestra el número de veces que las personas vieron el perfil de la página.
            li
              span.icon ✔ 
              | #[b Vistas previas a la página:] muestra el número de veces que las personas pasaron el #[em mouse] sobre la foto de perfil para obtener una vista previa.
            li
              span.icon ✔ 
              | #[b Me gusta de la página:] indica el número de personas nuevas que dieron “me gusta” a la página, discriminados entre orgánicos y pagados.
            li
              span.icon ✔ 
              | #[b Alcance de la publicación:] indica el número de personas que vieron algunas de las publicaciones al menos una vez.
            li
              span.icon ✔ 
              | #[b Alcance de la historia:] indica el número de personas que se les mostró en pantalla alguna historia de la página, diferenciando entre orgánicas, promocionales y totales.
            li
              span.icon ✔ 
              | #[b Recomendaciones:] indica el número de veces que otras personas recomendaron la página.
            li
              span.icon ✔ 
              | #[b Interacción con la publicación:] indica el número de veces que las personas interactuaron con una de las publicaciones a través de reacciones, comentarios, contenido compartido y clics.
            li
              span.icon ✔ 
              | #[b Nivel de respuesta:] indica el porcentaje de los mensajes que se respondieron a través de Messenger.
            li
              span.icon ✔ 
              | #[b Videos:] muestra el número de veces que los videos de la página fueron reproducidos por al menos 3 segundos, discriminado por pagados, totales y no pagados.
            li
              span.icon ✔ 
              | #[b Seguidores de la página:] número de personas nuevas que comenzaron a seguir la página, distinguiendo por pagado y no pagado.
            li
              span.icon ✔ 
              | #[b Tus 5 publicaciones más recientes:] Facebook muestra un resumen de las 5 últimas publicaciones mostrando la cantidad de personas que interactuaron con ellas a través de reacciones, compartidas o comentadas.
            li
              span.icon ✔ 
              | #[b Páginas en observación:] este componente permite comparar el rendimiento de la página y las publicaciones que se hagan en ella con otras páginas similares.

    p.mb-5(data-aos="fade-down") Además del resumen, Facebook permite analizar estadísticas detalladas de muchos de los datos que son más relevantes para la empresa y que permiten tomar decisiones en el desarrollo de estrategias promocionales y comerciales. Ahora, se detallarán algunas de ellas:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down") 
      .col-lg-10.col-12
        .tarjeta.color-secundario.p-4
          .row.justify-content-center.align-items-center
            .col-12.col-lg-2
              img(src='@/assets/curso/temas/tema1/tema1-10.svg' alt='')
            .col-12.col-lg-8
              h4 Seguidores
              p Muestra de forma más detallada y para un periodo seleccionado, el total de seguidores de la página, los seguidores pagos y orgánicos y el origen de seguimiento de la página: computador, la página misma, por búsqueda o por aplicación. Dando clic en cada ítem, se muestran las estadísticas detalladas y datos promediados.

    p.mb-4(data-aos="fade-down") Para las estadísticas de seguidores se muestran tres gráficas fundamentales:

    p.mb-2(data-aos="fade-down") #[b • Total de seguidores:] muestra el acumulado de seguidores por día a través de una gráfica lineal. 
    p.mb-2(data-aos="fade-down") #[b • Seguidores de la página:] muestra la cantidad de personas que siguen la página, se clasifican en orgánicos, pagados y anulaciones de seguimientos.
    p.mb-5(data-aos="fade-down") #[b • Origen de seguimientos de la página:] muestra el número de veces que se comenzó a seguir la página diferenciando el origen de seguimiento; si fue desde un computador, desde la propia página, a través de una búsqueda, desde una aplicación u otro.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-12.col-lg-10
        .cajon.color-primario.p-4
          h4 Centro de anuncios
          p.mb-0 Este es un componente muy importante para las empresas. Permite obtener información de los últimos 7, 30, 60 o 90 días de la actividad de los anuncios que se publiquen en la página y relacionando, además, el presupuesto invertido en dicha actividad.

    p.mb-4(data-aos="fade-down") El informe muestra tres variables fundamentales:

    p.mb-2(data-aos="fade-down") #[b • Alcance:] se refiere al número de personas que vieron los anuncios de la página; el alcance debe diferenciarse de las impresiones que incluyen varias visualizaciones de una misma persona. 
    p.mb-2(data-aos="fade-down") #[b • Interacciones:] indica el número de acciones que las personas realizan en relación con los anuncios de la página.
    p.mb-5(data-aos="fade-down") #[b • Clics en el enlace:] esta métrica indica el número de clics en los enlaces del anuncio que direccionan a destinos específicos dentro y fuera de Facebook.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down") 
      .col-lg-10.col-12
        .tarjeta.color-secundario.p-4
          .row.justify-content-center.align-items-center
            .col-12.col-lg-2
              img(src='@/assets/curso/temas/tema1/tema1-11.svg' alt='')
            .col-12.col-lg-8
              h4 Me gusta (#[em Likes])
              p Esta sección de las estadísticas de Facebook muestra una de las variables más importantes para las empresas. Se puede calcular desde los últimos tres meses y ver la información día a día, permitiendo observar el progreso diario de la página en cuanto al total de Me gusta que esta obtiene.

    p.mb-4(data-aos="fade-down") Las siguientes son tres tipos de estas métricas:
    p.mb-2(data-aos="fade-down") #[b • Total de “Me gusta” de la página:] indica el número total de las personas que han dado “Me gusta” y el rendimiento promedio a lo largo del tiempo, muestra el total acumulado de cada día.
    p.mb-2(data-aos="fade-down") #[b • “Me gusta” de la página:] este punto muestra el número de “Me gusta” de la página tanto orgánicos, pagos y “Ya no me gusta”. A través de una gráfica lineal se muestran los picos de estas variables y el detalle de cada uno de ellos en los que se puede verificar el origen de los “Me gusta” y el porcentaje de cada uno de ellos.
    p.mb-5(data-aos="fade-down") #[b • Dónde se produjeron los “Me gusta”:] este indicador muestra el número de veces que las personas hicieron clic en el “Me gusta” de la página e indica el lugar donde se produjo: sección de noticias, en la propia página, a través de una búsqueda, por sugerencias o de personas que restauraron una cuenta inactiva.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-12.col-lg-10
        .cajon.color-primario.p-4
          h4 Alcance
          p.mb-0 Es una de las métricas más relevantes en un plan de medios y hace parte de los objetivos KPI que desde las estrategias de medios se plantean.

    p.mb-4(data-aos="fade-down") Esta sección incluye varias estadísticas importantes:
    p.mb-2(data-aos="fade-down") #[b • Alcance de la publicación:] indica el número de personas que vieron algunas de las publicaciones de la página por lo menos una vez. Discrimina entre orgánico y de pago. A través de una gráfica lineal muestra los picos por fechas, permitiendo verificar qué publicación logró dicho alcance.
    p.mb-2(data-aos="fade-down") #[b • Alcance de la historia:] muestra el número de personas a las que se mostró una de las historias de la página. Equipara entre orgánico y de pago.
    p.mb-2(data-aos="fade-down") #[b • Recomendaciones:] indica cuántas veces las personas recomendaron la página en publicaciones y comentarios.
    p.mb-2(data-aos="fade-down") #[b • “Me gusta”, comentarios y veces que se compartió:] muestra con una gráfica lineal los picos de las reacciones, comentarios y veces que se compartió una publicación.
    p.mb-2(data-aos="fade-down") #[b • Ocultar, reportar como spam y Ya no me gusta:] permite identificar si las publicaciones han tenido algún tipo de queja o se marcan como spam.
    p.mb-5(data-aos="fade-down") #[b • Alcance total:] consiste en el número de personas que vieron contenido de la página o relacionado con esta. Discrimina entre orgánico y de pago.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down") 
      .col-lg-10.col-12
        .tarjeta.color-secundario.p-4
          .row.justify-content-center.align-items-center
            .col-12.col-lg-2
              img(src='@/assets/curso/temas/tema1/tema1-12.svg' alt='')
            .col-12.col-lg-8
              h4 Visitas a la página
              p Otra métrica con alto nivel de relevancia para la empresa es la cantidad de visitas que recibe la página. En este punto se pueden verificar las estadísticas por trimestres y periodos más cortos, incluso desde el mismo periodo del año anterior.

    p.mb-4(data-aos="fade-down") En esta sección es posible ver una serie de datos de forma muy detallada:
    p.mb-2(data-aos="fade-down") #[b • Visitas totales:] muestra el total de visitas que tuvo el perfil de la página en determinado día o periodo.
    p.mb-2(data-aos="fade-down") #[b • Visitas por sección:] indica el total de visitas que tuvo cada pestaña del perfil de la página: inicio, publicaciones, fotos, videos, comunidad.
    p.mb-5(data-aos="fade-down") #[b • Total visitantes:] este indicador muestra el número de personas que, con las sesiones iniciadas, vieron el perfil de la página. Esta sección muestra, además, otros datos importantes:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down") 
      .col-lg-10.col-12
        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.align-items-center
            .col-12.col-lg-3
              img(src='@/assets/curso/temas/tema1/tema1-13.svg' alt='')
            .col-12.col-lg-7
              p.mb-2(data-aos="fade-down") #[b o Por sección:] personas que iniciaron sesión y vieron las diferentes pestañas del perfil de la página.
              p.mb-2(data-aos="fade-down") #[b o Por edad y sexo:] personas que iniciaron sesión que vieron el perfil de la página diferenciados por edad y sexo.
              p.mb-2(data-aos="fade-down") #[b o Por país:] personas que iniciaron sesión que vieron el perfil de la página discriminados por país de origen.
              p.mb-2(data-aos="fade-down") #[b o Por ciudad:] personas que iniciaron sesión y que vieron el perfil de la página mostrando la ciudad de origen.
              p.mb-2(data-aos="fade-down") #[b o Por dispositivo:] personas que iniciaron sesión y que vieron el perfil de la página, permitiendo diferenciar el tipo de dispositivo desde el cual accedieron: computador o móvil.
 
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down") 
      .col-lg-5.col-12
        .cajon.color-primario.p-4.mb-2
          h4 Orígenes principales
          p.mb-0 Muestra el total de los usuarios conectados por origen de referencia: Facebook, Google.com, Google.com.co, Google.es o Yahoo!
        .cajon.color-secundario.p-4
          h4 Publicaciones
          p.mb-0 Es una métrica que resulta muy relevante para la empresa, tanto si la estrategia consiste en el desarrollo de una campaña o un anuncio individual.
      .col-lg-5.col-12
        img(src='@/assets/curso/temas/tema1/tema1-14.png' alt='')

    p.mb-4(data-aos="fade-down") En esta sección se muestran dos tipos de datos en relación con las publicaciones; el primero es la información del momento en que están conectados los fans de la página y el segundo es el rendimiento de los tipos de publicaciones. En este mismo apartado, Facebook permite ver datos y estadísticas relacionadas con cada anuncio y que son de alta relevancia para la toma de decisiones: fecha de publicación, tipo de publicación y otros datos más detallados:
    p.mb-2(data-aos="fade-down") #[b • Segmentación:] muestra el segmento de mercado al que se dirigió la publicación.
    p.mb-2(data-aos="fade-down") #[b • Alcance:] muestra a cuántas personas llegó la publicación y separa entre fans y no fans.
    p.mb-5(data-aos="fade-down") #[b • Interacción:] en este punto muestra el total de clics que recibe cada publicación y las reacciones, comentarios y las veces que se compartió el mismo.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down") 
      .col-lg-5.col-12
        img(src='@/assets/curso/temas/tema1/tema1-15.png' alt='')
      .col-lg-5.col-12
        .cajon.color-primario.p-4.mb-2
          h4 Historias
          p.mb-0 Este apartado muestra de forma detallada las cifras de historias publicadas en la página. La información está desglosada en: veces únicas abiertas, interacciones y número de historias publicadas.
        .cajon.color-secundario.p-4
          h4 Personas
          p.mb-0 Esta sección de las estadísticas de Facebook es también muy importante. Muestra el número de personas que vieron alguna de las publicaciones realizadas en la página con variables como sexo y edad; datos que han sido suministrados por los mismos usuarios.

    p.mb-4(data-aos="fade-down") Esta sección muestra otras variables de alta utilidad para la toma de decisiones:
    p.mb-2(data-aos="fade-down") #[b • Tus fans:] muestra el total por rango de edad y sexo de las personas que vieron alguna publicación de la página.
    p.mb-2(data-aos="fade-down") #[b • Tus seguidores:] muestra el total de las personas que siguen la página con rangos de edad y sexo.
    p.mb-2(data-aos="fade-down") #[b • Personas alcanzadas:] indica el número de personas a las que se les mostró contenido de la página y clasificadas por edad y sexo.
    p.mb-5(data-aos="fade-down") #[b • Personas que interactúan:] hace referencia al número de personas que hablan de la página, catalogadas por rango de edad y sexo.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down") 
      .col-lg-10.col-12
        .tarjeta.color-primario.p-4
          .row.justify-content-center.align-items-center
            .col-12.col-lg-3
              img(src='@/assets/curso/temas/tema1/tema1-16.png' alt='')
            .col-12.col-lg-7
              h4 Métricas en Instagram
              p Instagram es hoy la red social con mayor popularidad en el mundo y se ha convertido en una plataforma esencial para procesos de comercialización. Hoy en día IG, como también se le conoce, tiene más de 1.000 millones de usuarios en el mundo y 25 millones de perfiles comerciales; además, alrededor de 2 millones de anunciantes utilizan las historias y los anuncios de esta red social.
              p Para acceder a las métricas de IG es necesario crear una cuenta comercial. Desde allí se puede acceder a Instagram #[em Insights], que es una plataforma gratuita que genera información acerca de seguidores, publicaciones e historias.

    p.mb-4(data-aos="fade-down") En IG se tienen en cuenta:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-12.col-lg-10
        .tarjeta.color-secundario-c.p-4
          h4 Métricas de las publicaciones
          p En este punto es posible ver todas las publicaciones ordenadas de la más a menos vista. También es posible filtrarlas con los siguientes criterios:
          ul.lista-ul.ms-3
            li
              span.icon ✔ 
              | #[b Tipo de contenido:] fotos, videos, secuencias o publicaciones pagadas.
            li
              span.icon ✔ 
              | #[b Métricas:] alcance, clics “cómo llegar”, clics en el sitio web, comentarios, correos electrónicos, impresiones, interacciones, llamadas, Me gusta, mensajes de texto, seguimientos, veces compartido, veces guardado, vista al perfil.
            li
              span.icon ✔ 
              | #[b Tiempo:] desde los últimos 7 días hasta los últimos 2 años.
          p Con este tipo de filtros es posible hacer un análisis de los mensajes en función con el rendimiento, así se pueden identificar, por ejemplo, aquellos anuncios que son preferidos por los usuarios y desarrollar más contenidos similares que atraigan nuevos usuarios o aumenten el flujo de lectores.
          p Cada una de las publicaciones tiene su información específica, dando clic sobre ellas se puede acceder a “Ver estadísticas”, donde es posible observar:
          ul.lista-ul.ms-3
            li
              span.icon ✔ 
              | Cantidad de “Me gusta”.
            li
              span.icon ✔ 
              | Comentarios.
            li
              span.icon ✔ 
              | Veces compartida.
            li
              span.icon ✔ 
              | Veces guardada.
          .row 
            .col-10.col-lg-3
              img(src='@/assets/curso/temas/tema1/tema1-17.png' alt='')
            .col-12.col-lg-9
              p También se pueden ver las interacciones y las acciones realizadas por los seguidores:
              ul.lista-ul.ms-3
                li
                  span.icon ✔ 
                  | Vistas al perfil.
                li
                  span.icon ✔ 
                  | Clics en el sitio.
              p Finalmente, se pueden detallar cifras relacionadas con el descubrimiento.
              ul.lista-ul.ms-3
                li
                  span.icon ✔ 
                  | Seguimientos.
                li
                  span.icon ✔ 
                  | Alcance.
                li
                  span.icon ✔ 
                  | Impresiones:
                  ul.lista-ul.ms-3.mt-2
                    li.mb-1
                      span.icon o
                      | Del inicio.
                    li.mb-1
                      span.icon o
                      | Del perfil.
                    li.mb-1
                      span.icon o
                      | De Hashtags.
                    li.mb-1
                      span.icon o
                      | De otro origen.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-12.col-lg-10
        .cajon.color-primario.p-4
          h4 Métricas de historias
          p.mb-0 Para acceder a las estadísticas de las historias, es necesario ir a “Estadísticas” de la cuenta a analizar, luego a “Contenido”, en la parte inferior aparecen las historias, allí se debe hacer clic en “Ver todo” para acceder a la información detallada. Se puede seleccionar ver las historias de los últimos 14 o 7 días, así como las de las últimas 24 horas. Se debe seleccionar la historia a la que se desea ver las estadísticas.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-12.col-lg-5 
        img(src='@/assets/curso/temas/tema1/tema1-18.png' alt='')
      .col-12.col-lg-7
        p En este punto se puede ver la siguiente información:
        p.mb-2(data-aos="fade-down") #[b • Interacciones:] muestra el número de personas que interactuaron con la historia de la publicación.
        ul.lista-ul.ms-3
          li.mb-1
            span.icon o
            | Respuestas.
          li.mb-1
            span.icon o
            | Visitas al perfil.
          li.mb-1
            span.icon o
            | Descubrimiento.
          li.mb-1
            span.icon o
            | Cuentas alcanzadas.
          li.mb-1
            span.icon o
            | Seguimientos.
          li.mb-1
            span.icon o
            | #[b Navegación:] retrocesos, avances, siguiente historia, abandonos.
        p Con esta información es posible conocer y analizar las historias con las que más ha interactuado el público y, de esta forma, realizar nuevas historias con los contenidos que más atraen y les gustan a los usuarios.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-12.col-lg-10
        .cajon.color-secundario.p-4
          h4 Métricas de publicaciones promocionadas
          p.mb-0 Estas estadísticas están disponibles únicamente para cuentas que han realizado promoción de alguna publicación.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-12.col-lg-7
        p En el botón “Ver todo” aparecerán las publicaciones promocionadas y al hacer clic sobre uno de ellos es posible ver la siguiente información:
        ul.lista-ul.ms-3
          li.mb-1
            span.icon ✔
            | Vistas de perfil.
          li.mb-1
            span.icon ✔
            | Número de personas que vieron la publicación promocionada.
          li.mb-1
            span.icon ✔
            | Número de impresiones.
          li.mb-1
            span.icon ✔
            | Número de #[em engagement.]
          li.mb-1
            span.icon ✔
            | Segmento demográfico (género, rango de edad, ubicación).
          li.mb-1
            span.icon ✔
            | Valor invertido.
        p Adicionalmente, es posible realizar una comparación de estos resultados con la misma publicación realizada de forma orgánica.
      .col-12.col-lg-5 
        img(src='@/assets/curso/temas/tema1/tema1-19.png' alt='')

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-12.col-lg-10
        .cajon.color-primario.p-4
          h4 Métrica de los seguidores
          p.mb-0 Esta información es muy importante para conocer el arquetipo de los usuarios que siguen una cuenta. Es vital para la toma de decisiones del negocio en cuanto a promoción y comercialización. Para tener acceso a esta información es necesario acceder a “Estadísticas” y luego hacer clic en “Público”. Encontrando:

    p.mb-2(data-aos="fade-down") #[b • Sexo:] muestra el porcentaje de hombres y mujeres que hacen parte de los seguidores de la cuenta.
    p.mb-2(data-aos="fade-down") #[b • Lugares principales ciudades o países:] muestra el origen de las cuentas que siguen el perfil.
    p.mb-2(data-aos="fade-down") #[b • Rangos de edad:] muestra los rangos de edad que más siguen la cuenta y los discrimina entre hombres y mujeres.
    p.mb-4(data-aos="fade-down") #[b • Crecimiento:] muestra la actividad de la cuenta en relación con los nuevos seguidores, las publicaciones y los que dejaron de seguir la cuenta.

    p.mb-4(data-aos="fade-down") Es importante, hacer énfasis que la implementación de las diferentes plataformas especializadas, los informes de las métricas se visualizan a través de tableros de resultados, pero sin olvidar, que este tipo de información debe ser tratada por el Administrador de comunidad virtual, el cual tiene las siguientes responsabilidades:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-12
        ul.lista-ul.ms-3
          li.mb-1
            span.icon ✔
            | Moderación de los contenidos.
          li.mb-1
            span.icon ✔
            | Incentivar a la participación.
          li.mb-1
            span.icon ✔
            | Gestión y resolución de conflictos.
          li.mb-1
            span.icon ✔
            | Apoyo constante a usuarios.
          li.mb-1
            span.icon ✔
            | Desarrollo de contenido.
          li.mb-1
            span.icon ✔
            | Análisis de datos.
          li.mb-1
            span.icon ✔
            | Estrategias de mejora.



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
