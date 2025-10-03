'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Progress } from '@/components/ui/progress';
import {
  BookMarked,
  Code,
  Briefcase,
  Pyramid,
  Hammer,
  Database,
  BarChart2,
  Mountain,
  Gem,
  Shield,
  FileText,
  Atom,
  Layers,
  Users,
  LayoutGrid,
  Settings,
  Crown,
  Map,
  Swords,
  Scroll,
  ShoppingCart,
  Star,
  Zap,
  BookOpen,
  Sparkles,
  ChevronRight,
  Lock,
  CheckCircle,
} from 'lucide-react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { app } from '@/lib/firebase';
import { characterClasses, CharacterClass } from '@/lib/character-classes';
import { Skeleton } from '@/components/ui/skeleton';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import './map.css';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { missions, missionKingdoms } from '@/lib/missions';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

const CustomIcon = ({ src, alt }: { src: string, alt: string }) => (
  <Image src={src} alt={alt} width={32} height={32} className="h-8 w-8" />
);

const kingdoms = [
  { id: 'html-css', name: 'Reino del Conocimiento Ancestral', description: 'Reino de HTML/CSS', icon: () => <CustomIcon src="https://firebasestorage.googleapis.com/v0/b/codeknights-313d5.firebasestorage.app/o/public%2Freinos%2FIconos%2FHTML.png?alt=media&token=95d20d9e-d246-47b2-aa7d-67173509d8a3" alt="HTML/CSS Icon" />, position: { top: '20%', left: '15%' } },
  { id: 'javascript', name: 'Reino de las Ilusiones Fluctuantes', description: 'Reino de JavaScript', icon: () => <CustomIcon src="https://firebasestorage.googleapis.com/v0/b/codeknights-313d5.firebasestorage.app/o/public%2Freinos%2FIconos%2FJS.png?alt=media&token=edb54c36-c8f1-49ce-b8eb-d81263d98a03" alt="JavaScript Icon" />, position: { top: '35%', left: '30%' } },
  { id: 'python', name: 'Reino de la Gran Serpiente', description: 'Reino de Python', icon: () => <CustomIcon src="https://firebasestorage.googleapis.com/v0/b/codeknights-313d5.firebasestorage.app/o/public%2Freinos%2FIconos%2FPython.png?alt=media&token=7c71e84e-aac5-49bf-9d0d-b600a1e76ab4" alt="Python Icon" />, position: { top: '55%', left: '15%' } },
  { id: 'java', name: 'Dominio de la Lógica Impecable', description: 'Reino de Java', icon: Briefcase, position: { top: '75%', left: '25%' } },
  { id: 'csharp', name: 'Reino de las Estructuras Metálicas', description: 'Reino de C#', icon: Pyramid, position: { top: '25%', left: '45%' } },
  { id: 'c-cpp', name: 'Reinos de la Forja Antigua', description: 'Reino de C/C++', icon: () => <CustomIcon src="https://firebasestorage.googleapis.com/v0/b/codeknights-313d5.firebasestorage.app/o/public%2Freinos%2FIconos%2FC_C%2B%2B.png?alt=media&token=3fecb1f5-0b60-4fa2-af58-4c6e112e72b5" alt="C/C++ Icon" />, position: { top: '45%', left: '55%' } },
  { id: 'sql', name: 'Reino de la Bóveda de Datos', description: 'Reino de SQL', icon: () => <CustomIcon src="https://firebasestorage.googleapis.com/v0/b/codeknights-313d5.firebasestorage.app/o/public%2Freinos%2FIconos%2FSQL.png?alt=media&token=3bbd5eac-69b4-4b4f-814d-4aadd596bacc" alt="SQL Icon" />, position: { top: '65%', left: '40%' } },
  { id: 'r', name: 'El Bosque de los Estadísticos', description: 'Reino de R', icon: BarChart2, position: { top: '85%', left: '50%' } },
  { id: 'go', name: 'El Páramo de los Golems', description: 'Reino de Go', icon: Code, position: { top: '15%', left: '65%' } },
  { id: 'swift', name: 'Las Cimas de la Montaña de Cristal', description: 'Reino de Swift', icon: Mountain, position: { top: '35%', left: '75%' } },
  { id: 'kotlin', name: 'El Valle del Hierro Nórdico', description: 'Reino de Kotlin', icon: Hammer, position: { top: '55%', left: '85%' } },
  { id: 'rust', name: 'El Sendero de la Coraza Inmune', description: 'Reino de Rust', icon: Shield, position: { top: '75%', left: '70%' } },
  { id: 'solidity', name: 'Reino de los Contratos', description: 'Reino de Solidity', icon: Gem, position: { top: '90%', left: '85%' } },
  { id: 'qsharp', name: 'La Biblioteca del Futuro', description: 'Reino de Q#', icon: Atom, position: { top: '50%', left: '5%' } },
  { id: 'cpp-shadows', name: 'Dominio de las Sombras', description: 'Reino de C++', icon: Code, position: { top: '5%', left: '35%' } },
  { id: 'dart-flutter', name: 'Reino de la Dualidad', description: 'Reino de Dart con Flutter', icon: Layers, position: { top: '5%', left: '85%' } },
];


export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [character, setCharacter] = useState<{class: CharacterClass, experience: string} | null>(null);
  const [selectedKingdom, setSelectedKingdom] = useState<(typeof kingdoms[0]) | null>(null);

  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const storedClassId = localStorage.getItem('characterClass') as CharacterClass['id'] | null;
        const storedExperience = localStorage.getItem('characterExperience') || 'new';
        const selectedClass = characterClasses.find(c => c.id === storedClassId) || characterClasses[0];
        setCharacter({class: selectedClass, experience: storedExperience});
      }
    });
    return () => unsubscribe();
  }, [auth]);

  const characterAvatar = PlaceHolderImages.find(
    (img) => img.id === 'character-avatar'
  );
  
  const CharacterProfile = () => (
     <Card className="bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
        <CardContent className="pt-6 flex flex-col items-center text-center">
            <Avatar className="h-24 w-24 border-4 border-primary/50 mb-4">
            {characterAvatar && (
                <AvatarImage
                src={characterAvatar.imageUrl}
                alt="Character Avatar"
                data-ai-hint={characterAvatar.imageHint}
                />
            )}
            <AvatarFallback>{user?.displayName?.charAt(0) || 'C'}</AvatarFallback>
            </Avatar>
            <h2 className="text-xl font-bold">{user?.displayName || <Skeleton className="h-6 w-32" />}</h2>
            <div className="text-sm text-primary h-5">{character?.class.name ? character.class.name : <Skeleton className="h-4 w-24 mt-1" />}</div>
            <div className="w-full mt-4">
            <div className="flex justify-between items-center text-xs text-muted-foreground mb-1">
                <span>Nivel 1</span>
                <span>50/100 XP</span>
            </div>
            <Progress
                value={50}
                className="h-3 bg-primary/20"
                indicatorClassName="bg-accent shadow-[0_0_8px_theme(colors.accent.DEFAULT)]"
            />
            </div>
        </CardContent>
    </Card>
  )

  const KingdomMissionsModal = ({ kingdom }: { kingdom: typeof kingdoms[0] }) => {
    const kingdomData = missionKingdoms[kingdom.id as keyof typeof missionKingdoms];
    if (!kingdomData) return null;
  
    const completedMissions = 2; // Simulation
    const totalMissions = kingdomData.levels.reduce((acc, level) => acc + level.missions.length, 0);
    const progress = totalMissions > 0 ? (completedMissions / totalMissions) * 100 : 0;
  
    return (
      <DialogContent className="max-w-3xl bg-card/90 backdrop-blur-sm border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-primary-foreground">{kingdom.name}</DialogTitle>
          <DialogDescription>{kingdom.description}</DialogDescription>
        </DialogHeader>
        <div className="my-4">
          <div className="flex justify-between text-sm text-muted-foreground mb-1">
            <span>Progreso del Reino</span>
            <span>{completedMissions} / {totalMissions} Misiones</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        <ScrollArea className="h-[60vh]">
          <Accordion type="single" collapsible defaultValue="level-1" className="w-full">
            {kingdomData.levels.map((level, levelIndex) => (
              <AccordionItem value={`level-${levelIndex + 1}`} key={levelIndex}>
                <AccordionTrigger className="text-xl font-bold text-accent">
                  {level.title}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pr-6">
                    {level.missions.map((missionSlug, missionIndex) => {
                      const mission = missions.find(m => m.slug === missionSlug);
                      if (!mission) return null;
                      const isCompleted = missionIndex < completedMissions; // Simulation
        
                      return (
                        <Card key={mission.slug} className="bg-background/70 border-primary/10">
                          <CardHeader className='pb-4'>
                            <div className="flex justify-between items-start">
                              <div>
                                <CardTitle className="text-lg text-primary-foreground">{mission.title}</CardTitle>
                                <CardDescription>{mission.description}</CardDescription>
                              </div>
                              {isCompleted ? (
                                <Badge variant="outline" className='border-green-500 text-green-500'>
                                  <CheckCircle className="h-3 w-3 mr-1" />
                                  Completado
                                </Badge>
                              ) : (
                                 <Badge variant="outline" className='border-amber-500 text-amber-500'>
                                  Pendiente
                                </Badge>
                              )}
                            </div>
                          </CardHeader>
                          <CardContent className="flex justify-between items-center pb-4">
                             <div className="flex gap-4">
                                <div className="flex items-center gap-2 text-accent">
                                    <Gem className="h-4 w-4" />
                                    <span className="font-bold text-sm">{mission.rewards.gems} Gemas</span>
                                </div>
                                 <div className="flex items-center gap-2 text-primary">
                                    <Sparkles className="h-4 w-4" />
                                    <span className="font-bold text-sm">{mission.rewards.xp} XP</span>
                                </div>
                            </div>
                            <Button asChild size="sm">
                              <Link href={`/mission/${mission.slug}`}>
                                {isCompleted ? "Repasar" : "Empezar"} <ChevronRight className="h-4 w-4 ml-2" />
                              </Link>
                            </Button>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollArea>
      </DialogContent>
    );
  };
  
  const MapView = () => (
    <div className="flex-1 w-full h-full rounded-lg border border-primary/20 overflow-hidden relative shadow-2xl shadow-primary/10">
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/codeknights-313d5.firebasestorage.app/o/public%2Freinos%2Fgenerated-image%20(28).png?alt=media&token=d98f956b-a637-4517-b3fb-0bf79c9c44e5"
        alt="Mapa de los Reinos del Código"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      
      <TooltipProvider>
        <Dialog open={!!selectedKingdom} onOpenChange={(isOpen) => !isOpen && setSelectedKingdom(null)}>
            {kingdoms.map(kingdom => (
              <Tooltip key={kingdom.id} delayDuration={100}>
                <TooltipTrigger asChild>
                  <DialogTrigger asChild>
                    <div 
                      className="absolute z-20 cursor-pointer"
                      style={{ top: kingdom.position.top, left: kingdom.position.left, transform: 'translate(-50%, -50%)' }}
                      onClick={() => setSelectedKingdom(kingdom)}
                    >
                      <div className="kingdom-node">
                        <kingdom.icon />
                      </div>
                    </div>
                  </DialogTrigger>
                </TooltipTrigger>
                <TooltipContent className="bg-card/80 backdrop-blur-sm border-primary/30 text-primary-foreground">
                  <p className="font-bold text-primary">{kingdom.name}</p>
                  <p className="text-sm text-muted-foreground">{kingdom.description}</p>
                </TooltipContent>
              </Tooltip>
            ))}
            {selectedKingdom && <KingdomMissionsModal kingdom={selectedKingdom} />}
        </Dialog>
      </TooltipProvider>
    </div>
  );

  const SubscriptionCard = ({ title, price, features, recommended }: { title: string, price: string, features: string[], recommended?: boolean }) => (
    <Card className={cn("border-primary/20 bg-gradient-to-br from-primary/5 to-transparent", recommended && "border-accent/50")}>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className={cn("text-primary-foreground", recommended && "text-accent")}>{title}</CardTitle>
          {recommended && <Badge variant="outline" className="border-accent text-accent">Recomendado</Badge>}
        </div>
        <p className="text-2xl font-bold">{price}<span className="text-sm font-normal text-muted-foreground">/mes</span></p>
      </CardHeader>
      <CardContent className="space-y-2">
        <ul className="space-y-2 text-sm text-muted-foreground">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <Star className="h-4 w-4 text-accent" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className={cn("w-full", recommended && "bg-accent text-accent-foreground hover:bg-accent/90")}>
          <Zap className="mr-2 h-4 w-4" /> Suscribirse
        </Button>
      </CardFooter>
    </Card>
  )


  return (
    <div className="flex h-screen w-full font-headline overflow-hidden bg-background dark:bg-black/40">
      {/* Left Sidebar */}
      <aside className="w-[280px] flex-shrink-0 bg-card/60 dark:bg-card/30 border-r border-primary/10 p-4 flex flex-col gap-6">
        <header className="flex items-center gap-3 px-2">
          <Crown className="text-primary h-8 w-8" />
          <h1 className="text-2xl font-bold text-primary-foreground">
            CodeKnights
          </h1>
        </header>

        <CharacterProfile />

        {/* Navigation */}
        <nav className="flex flex-col gap-2 flex-grow">
          <Button variant="ghost" className="justify-start gap-3 text-lg h-12 bg-primary/10 text-primary-foreground">
            <Map className="h-5 w-5 text-accent" /> Reinos
          </Button>
          <Button variant="ghost" className="justify-start gap-3 text-lg h-12 text-muted-foreground hover:text-primary-foreground">
            <Users className="h-5 w-5" /> Gremio
          </Button>
          <Button variant="ghost" className="justify-start gap-3 text-lg h-12 text-muted-foreground hover:text-primary-foreground">
            <BookMarked className="h-5 w-5" /> Biblioteca
          </Button>
          <Button variant="ghost" className="justify-start gap-3 text-lg h-12 text-muted-foreground hover:text-primary-foreground mt-auto">
            <Settings className="h-5 w-5" /> Ajustes
          </Button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col p-6 overflow-hidden">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <span className="text-primary-foreground font-medium">
            Reinos del Código
          </span>
        </div>
        
        <MapView />

      </main>

      {/* Right Panel */}
      <aside className="w-[350px] flex-shrink-0 bg-card/60 dark:bg-card/30 border-l border-primary/10 p-4 flex flex-col gap-4 overflow-y-auto">
        <Card className="border-accent/30 bg-gradient-to-br from-accent/10 to-transparent">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-accent">
                    <ShoppingCart className="h-5 w-5" />
                    Tienda del Gremio
                </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
                <p className="text-lg text-muted-foreground">Tu Saldo</p>
                <div className="flex items-center justify-center gap-2 mt-1">
                    <Gem className="h-6 w-6 text-primary" />
                    <span className="text-3xl font-bold text-primary-foreground">150</span>
                </div>
                 <Button className="w-full mt-4">Comprar Gemas</Button>
            </CardContent>
        </Card>

        <div className="space-y-4">
            <h3 className="text-lg font-bold text-center text-primary-foreground">Planes de Suscripción</h3>
            <SubscriptionCard 
                title="Plan Aprendiz"
                price="S/ 10"
                features={["Acceso a misiones básicas", "Soporte en el gremio"]}
            />
            <SubscriptionCard 
                title="Plan Caballero"
                price="S/ 18"
                features={["Acceso a todas las misiones", "Misiones de Gremio semanales", "Personalización de perfil"]}
                recommended
            />
            <SubscriptionCard 
                title="Plan Élite"
                price="S/ 25"
                features={["Todos los beneficios de Caballero", "Acceso anticipado a Reinos", "Recompensas de temporada exclusivas"]}
            />
        </div>
      </aside>
    </div>
  );
}

    