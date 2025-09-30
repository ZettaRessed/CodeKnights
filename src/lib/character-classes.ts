import { Shield, Wand, Bow, HeartPulse, Axe, Cloud, Ghost, type LucideIcon } from 'lucide-react';

export type CharacterClass = {
    id: 'paladin' | 'wizard' | 'archer' | 'healer' | 'barbarian' | 'summoner' | 'necromancer';
    name: string;
    description: string;
    icon: LucideIcon;
    stats: string;
    weapon: string;
    secondaryWeapon: string;
    realmAdvantage: string;
};

export const characterClasses: CharacterClass[] = [
    {
        id: 'paladin',
        name: 'Paladín del Código',
        description: 'Constructores de sistemas robustos y seguros.',
        icon: Shield,
        stats: 'Vitalidad y Fuerza',
        weapon: 'La Gran Espada del Back-End (Java, C#)',
        secondaryWeapon: 'El Escudo de las Librerías (Spring, .NET)',
        realmAdvantage: 'Reino de las Estructuras Metálicas (C#) y Dominio de la Lógica Impecable (Java)',
    },
    {
        id: 'wizard',
        name: 'Hechicero del Bucle',
        description: 'Maestros de los datos y la automatización.',
        icon: Wand,
        stats: 'Inteligencia y Agilidad',
        weapon: 'El Orbe de la Manipulación de Datos (Python)',
        secondaryWeapon: 'El Grimorio de Algoritmos (Librerías de Data Science)',
        realmAdvantage: 'Reino de la Gran Serpiente (Python) y el Valle del Aprendizaje Profundo (IA)',
    },
    {
        id: 'archer',
        name: 'Arquero del Front-End',
        description: 'Artistas que dan vida a las interfaces de usuario.',
        icon: Bow,
        stats: 'Agilidad e Inteligencia',
        weapon: 'El Arco de la Interfaz Fluida (JavaScript)',
        secondaryWeapon: 'Los Dardos de Componentes (React, Vue)',
        realmAdvantage: 'Reino de las Ilusiones Fluctuantes (JavaScript)',
    },
    {
        id: 'healer',
        name: 'Curandero de Sistemas',
        description: 'Sanadores de código y optimizadores de procesos.',
        icon: HeartPulse,
        stats: 'Inteligencia y Vitalidad',
        weapon: 'El Báculo de la Depuración (Herramientas de debugging)',
        secondaryWeapon: 'Las Pociones de la Documentación',
        realmAdvantage: 'Esencial en cualquier reino con sistemas complejos que necesiten ser sanados.',
    },
    {
        id: 'barbarian',
        name: 'Bárbaro del Código',
        description: 'Expertos en explotar vulnerabilidades y seguridad.',
        icon: Axe,
        stats: 'Fuerza y Vitalidad',
        weapon: 'El Hacha del Hacking (Kali, Shell scripts)',
        secondaryWeapon: 'Las Granadas de Acceso Remoto',
        realmAdvantage: 'Caminos Sombríos de la Ciberseguridad',
    },
    {
        id: 'summoner',
        name: 'Invocador de la Nube',
        description: 'Orquestadores de infraestructuras escalables.',
        icon: Cloud,
        stats: 'Inteligencia y Agilidad',
        weapon: 'El Sello de la Invocación (Docker, Kubernetes)',
        secondaryWeapon: 'Las Lágrimas de la Automatización',
        realmAdvantage: 'Reino de las Nubes Eternas',
    },
    {
        id: 'necromancer',
        name: 'Necromancer de Videojuegos',
        description: 'Creadores de mundos y experiencias interactivas.',
        icon: Ghost,
        stats: 'Inteligencia y Fuerza',
        weapon: 'El Cráneo de la Entidad de Juego (Unity, Unreal)',
        secondaryWeapon: 'Las Gemas del Renderizado',
        realmAdvantage: 'Páramo del Videojuego',
    },
];
