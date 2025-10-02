export type Mission = {
    slug: string;
    title: string;
    description: string;
    summary: string;
    kingdomId: 'html-css' | 'javascript' | 'python'; // etc
    level: number;
    rewards: {
      gems: number;
      xp: number;
    };
    objectives: string[];
    starterCode: string;
    lore?: string;
  };
  
  export const missions: Mission[] = [
    {
      slug: 'html-fundamentos-1',
      title: 'El Pergamino Fundacional',
      description: 'Tu primera misión en HTML',
      summary: 'Crea la estructura básica de una página HTML para presentar tu juramento como CodeKnight.',
      kingdomId: 'html-css',
      level: 1,
      rewards: {
        gems: 5,
        xp: 10,
      },
      objectives: [
        'Crea un título principal (<h1>) que diga "Mi Juramento de Caballero".',
        'Añade un párrafo (<p>) debajo del título con tu nombre de caballero.',
        'Incluye un segundo párrafo con la fecha en que tomaste el juramento.',
      ],
      starterCode: `<!-- ¡Escribe tu código aquí! -->
<h1></h1>
<p></p>
`,
      lore: 'El Anciano Escriba del Reino del Conocimiento Ancestral te ha convocado. Debes demostrar tu valía creando una simple estructura HTML, el papiro sobre el que se escriben todas las leyendas del código.'
    },
    // Future missions will be added here
  ];
  