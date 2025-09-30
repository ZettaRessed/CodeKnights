import { Shield, Wand, Crosshair, HeartPulse, Axe, Cloud, Ghost, type LucideIcon } from 'lucide-react';

export type CharacterClass = {
    id: 'paladin' | 'wizard' | 'archer' | 'healer' | 'barbarian' | 'summoner' | 'necromancer';
    name: string;
    description: string;
    icon: LucideIcon;
};

export const characterClasses: {
    id: 'paladin' | 'wizard' | 'archer' | 'healer' | 'barbarian' | 'summoner' | 'necromancer';
    name: string;
    description: string;
    icon: LucideIcon;
}[] = [
    {
        id: 'paladin',
        name: 'Paladín del Código',
        description: 'Constructores de sistemas robustos y seguros.',
        icon: Shield,
    },
    {
        id: 'wizard',
        name: 'Hechicero del Bucle',
        description: 'Maestros de los datos y la automatización.',
        icon: Wand,
    },
    {
        id: 'archer',
        name: 'Arquero del Front-End',
        description: 'Artistas que dan vida a las interfaces de usuario.',
        icon: Crosshair,
    },
    {
        id: 'healer',
        name: 'Curandero de Sistemas',
        description: 'Sanadores de código y optimizadores de procesos.',
        icon: HeartPulse,
    },
    {
        id: 'barbarian',
        name: 'Bárbaro del Código',
        description: 'Expertos en explotar vulnerabilidades y seguridad.',
        icon: Axe,
    },
    {
        id: 'summoner',
        name: 'Invocador de la Nube',
        description: 'Orquestadores de infraestructuras escalables.',
        icon: Cloud,
    },
    {
        id: 'necromancer',
        name: 'Necromancer de Videojuegos',
        description: 'Creadores de mundos y experiencias interactivas.',
        icon: Ghost,
    },
];
