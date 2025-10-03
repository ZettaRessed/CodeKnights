import { htmlMissions } from './missions/html';

export type TriviaQuestion = {
  question: string;
  options: string[];
  correctAnswer: string;
};

export type Mission = {
  slug: string;
  title: string;
  description: string;
  summary: string;
  kingdomId: 'html-css' | 'javascript' | 'python'; // etc
  level: number;
  mission: number;
  type: 'code' | 'trivia';
  rewards: {
    gems: number;
    xp: number;
  };
  objectives: string[];
  starterCode?: string;
  lore?: string;
  kingDialogue?: {
    intro: string;
    success: string;
    failure?: string;
  },
  challenge: TriviaQuestion | any; // Can be trivia or code challenge definition
  achievement?: string;
};

export const missions: Mission[] = [
  ...htmlMissions
  // Future missions from other kingdoms will be added here
];

type MissionKingdom = {
  levels: {
    title: string;
    missions: string[];
  }[];
}

export const missionKingdoms: Record<string, MissionKingdom> = {
  'html-css': {
    levels: [
      {
        title: 'Nivel 1: Las Puertas del Reino',
        missions: ['html-m1-1', 'html-m1-2', 'html-m1-3', 'html-m1-4', 'html-m1-5'],
      },
      {
        title: 'Nivel 2: El Sendero de los Escribas',
        missions: ['html-m2-1', 'html-m2-2', 'html-m2-3', 'html-m2-4', 'html-m2-5'],
      }
    ]
  },
  'javascript': {
    levels: [],
  },
  'python': {
    levels: [],
  }
}
