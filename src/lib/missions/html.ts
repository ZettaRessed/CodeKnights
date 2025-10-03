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
  // Future HTML missions will be added here
];
