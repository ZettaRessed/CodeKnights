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
    },
    challenge: {
      solution: '<!DOCTYPE html><html><head></head><body></body></html>',
    },
    starterCode: '<!DOCTYPE html>\n',
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
    },
    challenge: {
      solution: '<!DOCTYPE html><html><head><title>Mi Fortaleza</title></head><body></body></html>',
    },
    starterCode: '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <title>Mi Fortaleza</title>\n</body>\n</html>',
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
    },
    objectives: [],
    achievement: 'La Voz del Rey',
  },
];
