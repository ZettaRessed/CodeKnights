import { type Mission } from '..';

export const htmlMissions: Mission[] = [
  {
    slug: 'html-m1-1',
    title: 'La Contraseña Ancestral',
    description: 'Nivel 1: Las Puertas del Reino',
    summary: 'Demuestra tu conocimiento de los estándares ancestrales para entrar al Reino HTML.',
    kingdomId: 'html-css',
    level: 1,
    mission: 1,
    type: 'trivia',
    rewards: {
      gems: 5,
      xp: 10,
    },
    kingDialogue: {
      intro: "Bienvenido, aspirante. Todo documento en mi reino, para ser entendido en la era moderna, debe comenzar con una declaración, un pacto. ¿Sabes cuál es?",
      success: "Correcto. <!DOCTYPE html> es la llave que abre estas puertas. Has demostrado que entiendes el respeto por los estándares. Puedes pasar.",
      failure: "Esa no es la llave correcta. Sin el DOCTYPE, los navegadores entran en 'modo quirks', un estado de caos e inconsistencia. ¡Inténtalo de nuevo!",
    },
    challenge: {
        question: '¿Cuál es la primera línea de código obligatoria en un documento HTML5 moderno?',
        options: [
            '<html>',
            '<!DOCTYPE html>',
            '<head>',
        ],
        correctAnswer: '<!DOCTYPE html>',
        hint: 'Esta declaración no es una etiqueta HTML, sino una instrucción para el navegador sobre qué versión de HTML se está utilizando.',
    },
    achievement: 'Guardián de la Llave Maestra',
    objectives: [],
  },
  {
    slug: 'html-m1-2',
    title: 'El Abrazo del Reino',
    description: 'Nivel 1: Las Puertas del Reino',
    summary: 'Ordena las runas para formar la estructura más básica del reino.',
    kingdomId: 'html-css',
    level: 1,
    mission: 2,
    type: 'trivia',
    rewards: {
      gems: 5,
      xp: 10,
    },
    kingDialogue: {
      intro: "Ahora que estás dentro, debes entender que todo en este reino, desde la mota de polvo hasta la torre más alta, existe dentro de un gran contenedor. Es el abrazo del mundo.",
      success: "Bien hecho. El <html> lo envuelve todo. Has comprendido el primer principio de la contención.",
      failure: "No es el orden correcto. La estructura debe tener un inicio y un fin claros, como un pergamino bien enrollado.",
    },
    challenge: {
      question: '¿Cuál es el orden correcto para la estructura más básica del reino HTML?',
      options: [
        '<html><body></body></html>',
        '<body><html></html></body>',
        '<html></html><body></body>',
      ],
      correctAnswer: '<html><body></body></html>',
      hint: 'La etiqueta <html> debe envolver a todas las demás etiquetas, y el contenido visible siempre va dentro del <body>.',
    },
    achievement: 'El Abrazo del Titán',
    objectives: [],
  },
  {
    slug: 'html-m1-3',
    title: 'La Mente y el Cuerpo',
    description: 'Nivel 1: Las Puertas del Reino',
    summary: 'Distingue entre la mente (<head>) y el cuerpo (<body>) de un documento HTML.',
    kingdomId: 'html-css',
    level: 1,
    mission: 3,
    type: 'code',
    rewards: {
      gems: 5,
      xp: 15,
    },
    kingDialogue: {
      intro: "Mi reino tiene dos naturalezas: la mente, donde residen los pensamientos y secretos (<head>), y el cuerpo, donde se manifiesta todo lo visible (<body>). Un caballero debe saber distinguirlos. Muéstrame la estructura completa.",
      success: "Perfecto. Has creado un esqueleto, un recipiente listo para ser llenado con la vida del código. Tu potencial es evidente.",
      failure: 'Hmm, algo no está del todo bien. Revisa la estructura fundamental. Todo reino necesita una declaración, un contenedor, una mente y un cuerpo, en ese orden.'
    },
    challenge: {
      solution: `<!DOCTYPE html><html><head></head><body></body></html>`,
    },
    starterCode: `<!DOCTYPE html>\n`,
    objectives: [
      'Añade la etiqueta <html> para envolver todo el documento.',
      'Dentro de <html>, crea la sección <head>.',
      'Debajo de <head>, crea la sección <body>.'
    ],
    lore: 'El <head> contiene metadatos (datos sobre el documento) que no se muestran en la página, mientras que el <body> contiene todo el contenido visible.',
    achievement: 'Arquitecto de Esqueletos',
  },
  {
    slug: 'html-m1-4',
    title: 'El Nombre del Dominio',
    description: 'Nivel 1: Las Puertas del Reino',
    summary: 'Coloca el título del reino en el lugar correcto.',
    kingdomId: 'html-css',
    level: 1,
    mission: 4,
    type: 'code',
    rewards: {
      gems: 5,
      xp: 15,
    },
    kingDialogue: {
      intro: "Un reino sin nombre es un reino olvidado. El nombre se susurra en la mente del reino, no se grita en su cuerpo. El estandarte no ondea, encuentra el error.",
      success: "Has demostrado tu agudeza. El <title> pertenece al <head>. Ahora, el nombre de tu dominio resonará en toda la red. Excelente.",
      failure: 'Casi lo tienes, pero el estandarte sigue en el lugar incorrecto. Recuerda, el nombre de un dominio es un secreto que se guarda en la mente (<head>).'
    },
    challenge: {
      solution: `<!DOCTYPE html><html><head><title>Mi Fortaleza</title></head><body></body></html>`,
    },
    starterCode: `<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <title>Mi Fortaleza</title>\n</body>\n</html>`,
    objectives: [
      'Mueve la etiqueta <title> de la sección <body> a la sección <head>.',
    ],
    lore: 'La etiqueta <title> define el título del documento que se muestra en la pestaña o barra de título del navegador. Es un metadato y, por lo tanto, va en el <head>.',
    achievement: 'Heraldo Real',
  },
  {
    slug: 'html-m1-5',
    title: 'El Primer Edicto',
    description: 'Nivel 1: Las Puertas del Reino',
    summary: 'Usa la runa de encabezado más poderosa para anunciar tu llegada.',
    kingdomId: 'html-css',
    level: 1,
    mission: 5,
    type: 'trivia',
    rewards: {
      gems: 5,
      xp: 20,
    },
    kingDialogue: {
      intro: "Ahora, pronuncia tus primeras palabras en esta tierra. Usa la runa de encabezado más poderosa, la que proclama el edicto de un rey. ¿Qué hará el siguiente código?",
      success: "Has interpretado la runa correctamente. <h1> es la voz del liderazgo. Has anunciado tu llegada con honor.",
    },
    challenge: {
      question: 'Considerando el código <body><h1>¡He llegado!</h1></body>, ¿cuál será el resultado?',
      options: [
        'Mostrará un texto pequeño.',
        'Mostrará un título principal y de gran importancia.',
        'Creará un párrafo de texto.',
      ],
      correctAnswer: 'Mostrará un título principal y de gran importancia.',
      hint: 'La etiqueta <h1> se reserva para el título más importante de una página. Los motores de búsqueda le dan especial relevancia.',
    },
    objectives: [],
    achievement: 'La Voz del Rey',
  },
  // Nivel 2
  {
    slug: 'html-m2-1',
    title: 'La Jerarquía del Poder',
    description: 'Nivel 2: El Sendero de los Escribas',
    summary: 'Aprende a usar la jerarquía de encabezados de <h1> a <h6>.',
    kingdomId: 'html-css',
    level: 2,
    mission: 1,
    type: 'trivia',
    rewards: {
      gems: 10,
      xp: 20,
    },
    kingDialogue: {
      intro: "No todas las proclamaciones tienen el mismo peso. Un buen líder sabe usar una jerarquía, desde <h1> hasta <h6>. Cuanto mayor el número, menor la importancia.",
      success: "Exacto. <h6> es para las notas más finas, los detalles. Comprender la jerarquía es fundamental para la claridad.",
      failure: "No es correcto. Recuerda, a mayor número, menor es la importancia en la jerarquía de los escribas.",
    },
    challenge: {
        question: '¿Qué etiqueta representa el encabezado de menor importancia?',
        options: ['<h2>', '<h4>', '<h6>'],
        correctAnswer: '<h6>',
        hint: 'La jerarquía de encabezados va del más importante (1) al menos importante (6).',
    },
    achievement: 'Maestro de la Jerarquía',
    objectives: [],
  },
  {
    slug: 'html-m2-2',
    title: 'Las Crónicas del Pueblo',
    description: 'Nivel 2: El Sendero de los Escribas',
    summary: 'Utiliza la etiqueta de párrafo para añadir texto.',
    kingdomId: 'html-css',
    level: 2,
    mission: 2,
    type: 'code',
    rewards: {
      gems: 10,
      xp: 20,
    },
    kingDialogue: {
      intro: "Los encabezados son los huesos, pero las crónicas son la carne. Para escribir las historias, los detalles y las descripciones, usamos la runa del párrafo.",
      success: "Tus palabras fluyen con la estructura correcta. Has dado vida a la crónica. Sigue así.",
      failure: "El pergamino aún espera la crónica. Asegúrate de usar la runa <p> correctamente.",
    },
    challenge: {
      solution: `<h1>La Leyenda de CodeKnights</h1><p>Un caballero debe forjar su destino con líneas de código.</p>`,
    },
    starterCode: `<h1>La Leyenda de CodeKnights</h1>`,
    objectives: [
      'Debajo del <h1>, añade una etiqueta <p>.',
      'Dentro del <p>, escribe el texto: "Un caballero debe forjar su destino con líneas de código."',
    ],
    lore: 'La etiqueta <p> se utiliza para definir párrafos de texto, la unidad básica para escribir contenido en la web.',
    achievement: 'Cronista del Reino',
  },
  {
    slug: 'html-m2-3',
    title: 'La Fuerza de la Palabra',
    description: 'Nivel 2: El Sendero de los Escribas',
    summary: 'Aprende a dar importancia semántica con <strong>.',
    kingdomId: 'html-css',
    level: 2,
    mission: 3,
    type: 'code',
    rewards: {
      gems: 15,
      xp: 25,
    },
    kingDialogue: {
      intro: "A veces, una palabra debe golpear con la fuerza de un martillo. Para eso, la envolvemos en la runa de la importancia <strong>. El siguiente código intenta enfatizar la palabra \"nunca\", pero usa una runa obsoleta de los tiempos oscuros. Reemplázala con la correcta.",
      success: "Bien visto. La runa <b> es del pasado; solo afecta la apariencia. <strong> le da un significado semántico de importancia. Tu código ahora no solo se ve fuerte, es fuerte.",
      failure: "La runa incorrecta sigue presente. Busca la runa de los tiempos oscuros y reemplázala por la de la verdadera fuerza.",
    },
    challenge: {
      solution: `<p>Un caballero <strong>nunca</strong> se rinde.</p>`,
    },
    starterCode: `<p>Un caballero <b>nunca</b> se rinde.</p>`,
    objectives: [
        'Reemplaza la etiqueta de apertura <b> por <strong>.',
        'Reemplaza la etiqueta de cierre </b> por </strong>.'
    ],
    lore: 'Mientras que <b> y <strong> hacen que el texto se vea en negrita por defecto, <strong> indica a los navegadores y lectores de pantalla que el texto es importante.',
    achievement: 'Forjador de Palabras',
  },
  {
    slug: 'html-m2-4',
    title: 'El Susurro del Énfasis',
    description: 'Nivel 2: El Sendero de los Escribas',
    summary: 'Aprende a enfatizar texto con <em>.',
    kingdomId: 'html-css',
    level: 2,
    mission: 4,
    type: 'trivia',
    rewards: {
      gems: 15,
      xp: 25,
    },
    kingDialogue: {
      intro: "Así como hay gritos de guerra, hay susurros de estrategia. La runa <em> da un énfasis sutil, cambiando el tono de la frase.",
      success: "Has captado la esencia. <em> es para el énfasis, no para la decoración. Es la diferencia entre un herrero y un artista del código.",
      failure: "No has interpretado el susurro correctamente. El énfasis no es solo apariencia, es intención.",
    },
    challenge: {
        question: '¿Cuál es el propósito del código <p>El código es <em>arte</em>.</p>?',
        options: [
            'Hacer que la palabra "arte" sea más grande.',
            'Indicar que la palabra "arte" debe ser leída con un énfasis especial.',
            'Poner la palabra "arte" en cursiva por razones puramente decorativas.'
        ],
        correctAnswer: 'Indicar que la palabra "arte" debe ser leída con un énfasis especial.',
        hint: 'La etiqueta <em> (emphasis) es semántica, al igual que <strong>. Le dice a las tecnologías de asistencia que esa parte del texto tiene un énfasis diferente.',
    },
    achievement: 'El Susurro del Sabio',
    objectives: [],
  },
  {
    slug: 'html-m2-5',
    title: 'El Inventario del Armero',
    description: 'Nivel 2: El Sendero de los Escribas',
    summary: 'Crea una lista no ordenada con <ul> y <li>.',
    kingdomId: 'html-css',
    level: 2,
    mission: 5,
    type: 'trivia',
    rewards: {
      gems: 20,
      xp: 30,
    },
    kingDialogue: {
      intro: "Un caballero debe mantener su equipo en orden. Para listar objetos donde la secuencia no importa, usamos una lista no ordenada. Ordena las siguientes runas para crear una lista de inventario con los objetos \"Espada\" y \"Escudo\".",
      success: "Una lista impecable. <ul> agrupa y <li> define cada objeto. La organización es el primer paso hacia la victoria en cualquier batalla de código.",
      failure: "El inventario está en desorden. Recuerda, cada objeto debe tener su propia runa y estar contenido dentro del saco de la lista.",
    },
    challenge: {
        question: 'Ordena las siguientes runas para crear una lista con "Espada" y "Escudo":',
        options: [
            '<ul><li>Espada</li><li>Escudo</li></ul>',
            '<li><ul>Espada</ul><ul>Escudo</ul></li>',
            '<ul><p>Espada</p><p>Escudo</p></ul>'
        ],
        correctAnswer: '<ul><li>Espada</li><li>Escudo</li></ul>',
        hint: 'La etiqueta <ul> (Unordered List) es el contenedor, y cada <li> (List Item) es un elemento dentro de ella.',
    },
    achievement: 'Maestro de Inventarios',
    objectives: [],
  }
];
