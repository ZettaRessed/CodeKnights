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

export const levels = {
  'html-css': [
    {
      level: 1,
      title: 'Las Puertas del Reino',
      rank: 'Aspirante',
      missions: ['html-m1-1', 'html-m1-2', 'html-m1-3', 'html-m1-4', 'html-m1-5']
    }
  ]
}

    