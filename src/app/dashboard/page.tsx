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
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import {
  BookMarked,
  Bot,
  ChevronRight,
  Code2,
  Crown,
  Gem,
  LayoutGrid,
  Shield,
  Settings,
  Swords,
  Users,
} from 'lucide-react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { app } from '@/lib/firebase';
import { characterClasses, CharacterClass } from '@/lib/character-classes';
import { Skeleton } from '@/components/ui/skeleton';

export default function DashboardPage() {
  const [code, setCode] = useState("let espada = 'Excalibur';\nlet escudo = 'Escudo del Dragón';\n\nconsole.log('Espada:', espada);\nconsole.log('Escudo:', escudo);");
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [characterClass, setCharacterClass] = useState<CharacterClass | null>(null);
  
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // NOTE: Character class is not saved during registration in the current implementation.
        // We'll assign a default or random one for display purposes.
        // In a real scenario, this would be fetched from Firestore.
        const storedClassId = localStorage.getItem('characterClass') as CharacterClass['id'] | null;
        const selectedClass = characterClasses.find(c => c.id === storedClassId) || characterClasses[0];
        setCharacterClass(selectedClass);
      }
    });
    return () => unsubscribe();
  }, [auth]);

  const characterAvatar = PlaceHolderImages.find(
    (img) => img.id === 'character-avatar'
  );
  const emptyStateArt = PlaceHolderImages.find(
    (img) => img.id === 'empty-state-art'
  );

  const handleRunCode = () => {
    const newOutput: string[] = [];
    const originalConsoleLog = console.log;
    
    console.log = (...args: any[]) => {
      newOutput.push(args.map(arg => {
        if (typeof arg === 'object' && arg !== null) {
          return JSON.stringify(arg);
        }
        return String(arg);
      }).join(' '));
    };

    try {
      new Function(code)();
      setConsoleOutput(newOutput);
    } catch (error: any) {
      setConsoleOutput([`Error: ${error.message}`]);
    } finally {
      console.log = originalConsoleLog;
    }
  };
  
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
            <p className="text-sm text-primary">{characterClass?.name || <Skeleton className="h-4 w-24 mt-1" />}</p>
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
            <LayoutGrid className="h-5 w-5 text-accent" /> Misiones
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
      <main className="flex-1 flex flex-col p-6 overflow-y-auto">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <span>Reino del Código</span>
          <ChevronRight className="h-4 w-4" />
          <span>Capítulo I</span>
          <ChevronRight className="h-4 w-4" />
          <span className="text-primary-foreground font-medium">El Despertar</span>
        </div>
        
        <div className="grid grid-cols-3 gap-6 flex-1">
            {/* Mission Details Column */}
            <div className="col-span-1 flex flex-col gap-6">
                <Card className="border-primary/20 flex-grow">
                    <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                        <Swords className="h-5 w-5"/>
                        El Despertar
                    </CardTitle>
                    <CardDescription>Tu primera misión te espera, noble Escudero. Aprende los comandos básicos para iniciar tu aventura.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                        <Separator className="bg-primary/20"/>
                        <h3 className="font-bold text-primary-foreground">Objetivos</h3>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li>Declara una variable para tu espada.</li>
                            <li>Asigna un nombre a tu escudo.</li>
                            <li>Muestra tus items en la consola.</li>
                        </ul>
                         <Separator className="bg-primary/20"/>
                        <h3 className="font-bold text-primary-foreground">Recompensas</h3>
                         <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col items-center gap-2 p-2 rounded-lg bg-primary/10">
                                <Gem className="h-8 w-8 text-accent"/>
                                <span className="text-xs font-bold text-center">+100 XP</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 p-2 rounded-lg bg-primary/10">
                                <Shield className="h-8 w-8 text-accent"/>
                                <span className="text-xs font-bold text-center">Escudo Leal</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            {/* Code Editor and Output Column */}
            <div className="col-span-2 flex flex-col gap-6">
                <Card className="border-primary/20 flex-[3]">
                     <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-primary">
                            <Code2 className="h-5 w-5" />
                           Forja de Código
                        </CardTitle>
                        <CardDescription>Escribe tu código aquí para completar la misión.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="h-96 bg-black/50 rounded-lg p-4 border border-primary/10 flex font-code text-base">
                           <Textarea 
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                placeholder="// El editor de código aparecerá aquí..."
                                className="w-full h-full bg-transparent border-0 resize-none focus:outline-none focus-visible:ring-0 text-green-400"
                           />
                        </div>
                    </CardContent>
                </Card>
                 <Card className="border-primary/20 flex-[1]">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-primary">
                        <ChevronRight className="h-5 w-5" />
                        Consola de Ejecución
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-24 bg-black/50 rounded-lg p-4 font-mono text-sm text-gray-300 overflow-y-auto">
                            {consoleOutput.length > 0 ? (
                                consoleOutput.map((line, index) => (
                                <div key={index}>&gt; {line}</div>
                                ))
                            ) : (
                                <p className="text-muted-foreground">La salida de tu código se mostrará aquí.</p>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
      </main>

      {/* Right Panel */}
      <aside className="w-[300px] flex-shrink-0 bg-card/60 dark:bg-card/30 border-l border-primary/10 p-4 flex flex-col gap-6">
        {emptyStateArt && (
            <div className="relative h-48 w-full rounded-lg overflow-hidden">
            <Image
                src={emptyStateArt.imageUrl}
                alt="Kingdom Art"
                fill
                objectFit="cover"
                data-ai-hint={emptyStateArt.imageHint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent"></div>
            </div>
        )}
        
        <Card className="border-accent/30 bg-gradient-to-br from-accent/10 to-transparent flex-grow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent">
                <Bot className="h-5 w-5" />
                Mago Consejero
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col h-[calc(100%-76px)]">
              <p className="text-sm text-muted-foreground mb-4">
                ¿Atascado? El mago puede ofrecerte una pista para superar los desafíos del código.
              </p>
              <div className="mt-auto space-y-4">
                <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    Pedir Pista
                </Button>
                <Button onClick={handleRunCode} size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-lg hover:shadow-accent text-lg font-bold transition-all duration-300 transform hover:scale-105 active:scale-100">
                    Ejecutar Código
                 </Button>
              </div>
            </CardContent>
        </Card>
      </aside>
    </div>
  );
}
