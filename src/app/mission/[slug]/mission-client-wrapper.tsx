'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { type Mission, type TriviaQuestion, missions } from '@/lib/missions';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import './mission.css';
import { Check, CheckCircle, Gem, Sparkles, Trophy, Flag, BookOpen, FileCode, Eye, ChevronLeft, X, Play } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { useRouter } from 'next/navigation';

type KingExpression = 'presenting' | 'default' | 'surprised' | 'confused' | 'angry' | 'clapping';

const kingExpressions: Record<KingExpression, string> = {
    presenting: PlaceHolderImages.find(i => i.id === 'king-tim-presenting')?.imageUrl || '',
    default: PlaceHolderImages.find(i => i.id === 'king-tim-default')?.imageUrl || '',
    surprised: PlaceHolderImages.find(i => i.id === 'king-tim-surprised')?.imageUrl || '',
    confused: PlaceHolderImages.find(i => i.id === 'king-tim-confused')?.imageUrl || '',
    angry: PlaceHolderImages.find(i => i.id === 'king-tim-angry')?.imageUrl || '',
    clapping: PlaceHolderImages.find(i => i.id === 'king-tim-clapping')?.imageUrl || '',
}


export default function MissionClientWrapper({ mission }: { mission: Mission }) {
  const [code, setCode] = useState(mission.starterCode || '');
  const [executedCode, setExecutedCode] = useState('');
  const [srcDoc, setSrcDoc] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [kingExpression, setKingExpression] = useState<KingExpression>('presenting');
  const [kingDialogue, setKingDialogue] = useState(mission.kingDialogue?.intro || '');
  const router = useRouter();

  useEffect(() => {
    // Reset state when mission changes
    setCode(mission.starterCode || '');
    setExecutedCode('');
    setSrcDoc('');
    setSelectedAnswer(null);
    setIsCorrect(null);
    setKingExpression('presenting');
    setKingDialogue(mission.kingDialogue?.intro || '');
  }, [mission]);
  
  useEffect(() => {
    if (isCorrect === true) {
      setKingExpression('clapping');
      setKingDialogue(mission.kingDialogue?.success || '¡Excelente!');
    } else if (isCorrect === false) {
      if (mission.type === 'trivia') {
        setKingExpression('angry');
        setKingDialogue(mission.kingDialogue?.failure || 'Inténtalo de nuevo.');
      } else { // For code missions
        setKingExpression('confused');
        setKingDialogue(mission.kingDialogue?.failure || 'Hmm, algo no está del todo bien.');
      }
    }
  }, [isCorrect, mission.type, mission.kingDialogue]);


  useEffect(() => {
    if (mission.type === 'code') {
      const timeout = setTimeout(() => {
        setSrcDoc(`
          <html>
            <body>${executedCode}</body>
            <style>
              body { 
                color: #333;
                font-family: sans-serif;
                padding: 1rem;
              }
            </style>
          </html>
        `);
      }, 250);
      return () => clearTimeout(timeout);
    }
  }, [executedCode, mission.type]);

  const normalizeHtml = (html: string) => {
    return html.replace(/\s+/g, ' ').replace(/> </g, '><').trim();
  }

  const handleExecuteCode = () => {
    setExecutedCode(code);
    if (mission.type === 'code' && mission.challenge.solution) {
        const solution = normalizeHtml(mission.challenge.solution);
        const userCode = normalizeHtml(code);
        setIsCorrect(userCode === solution);
    }
  };


  const handleCompleteMission = () => {
    // Logic to verify mission completion
    alert('¡Misión Completada! (Simulación)');
  };
  
  const handleTriviaSubmit = (option: string) => {
    if (isCorrect !== null) return;
    const question = mission.challenge as TriviaQuestion;
    setSelectedAnswer(option);
    setIsCorrect(option === question.correctAnswer);
  };

  const handleNextMission = () => {
    const currentIndex = missions.findIndex(m => m.slug === mission.slug);
    const nextMission = missions[currentIndex + 1];
    
    if (nextMission) {
      router.push(`/mission/${nextMission.slug}`);
    } else {
      // If there's no next mission, maybe go back to dashboard
      router.push('/dashboard');
    }
  };

  const MissionHeader = () => (
     <header className="flex items-center justify-between flex-shrink-0 bg-card/60 border border-primary/20 p-2 px-4 rounded-lg">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <Link href="/dashboard">
              <ChevronLeft className="h-4 w-4 mr-2"/>
              Volver al Mapa
            </Link>
          </Button>
          <div>
            <h1 className="text-xl font-bold text-primary-foreground">{mission.title}</h1>
            <p className="text-sm text-muted-foreground">{mission.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-accent">
                <Gem className="h-5 w-5" />
                <span className="font-bold">{mission.rewards.gems} Gemas</span>
            </div>
             <div className="flex items-center gap-2 text-primary">
                <Sparkles className="h-5 w-5" />
                <span className="font-bold">{mission.rewards.xp} XP</span>
            </div>
          <Button onClick={handleCompleteMission} disabled={isCorrect !== true}>
            <Trophy className="mr-2 h-4 w-4" /> Reclamar Recompensa
          </Button>
        </div>
      </header>
  );
  
  const KingPanel = () => (
    <div className="mission-panel king-panel">
        <div className="relative w-full h-64 mb-4">
             <Image src={kingExpressions[kingExpression]} alt={`Rey Tim Berners-Lee - ${kingExpression}`} layout="fill" objectFit="contain" />
        </div>
        <Card className="bg-background/70 border-primary/20">
            <CardContent className="p-4">
                 <p className="text-primary-foreground text-center italic">"{kingDialogue}"</p>
            </CardContent>
        </Card>
    </div>
  );

  const ChallengePanel = () => {
    if (mission.type === 'trivia') {
        const question = mission.challenge as TriviaQuestion;
        return (
             <div className="mission-panel challenge-panel">
                 <h2 className="text-2xl font-bold text-primary-foreground mb-4">{question.question}</h2>
                 <div className="flex flex-col gap-3">
                     {question.options.map(option => {
                        const isSelected = selectedAnswer === option;
                        const buttonVariant = isSelected ? (isCorrect ? 'default' : 'destructive') : 'outline';
                        const showIcon = isSelected && isCorrect !== null;
                        
                        return (
                            <Button 
                                key={option} 
                                variant={buttonVariant}
                                className="h-auto justify-start p-4 text-left whitespace-normal"
                                onClick={() => handleTriviaSubmit(option)}
                                disabled={isCorrect !== null}
                            >
                                {showIcon && (isCorrect ? <Check className="mr-3"/> : <X className="mr-3"/>)}
                                <span className="font-code text-sm">{option}</span>
                            </Button>
                        )
                    })}
                 </div>
                 {isCorrect !== null && (
                    <div className="mt-6 text-center">
                        <h3 className={cn("text-2xl font-bold", isCorrect ? "text-accent" : "text-destructive-foreground")}>
                            {isCorrect ? "¡Respuesta Correcta!" : "Respuesta Incorrecta"}
                        </h3>
                        <p className="text-muted-foreground mt-2">{isCorrect ? `Has ganado el logro: "${mission.achievement}"` : "El Rey no está complacido. Pero no te rindas."}</p>
                        {isCorrect && (
                            <Button onClick={handleNextMission} className="mt-4">
                                Continuar
                            </Button>
                        )}
                    </div>
                 )}
            </div>
        );
    }
      
    // This is the fallback, which should not happen if mission type is handled correctly.
    return (
        <div className="mission-panel challenge-panel">
             <h2 className="text-2xl font-bold text-primary-foreground">Desafío Desconocido</h2>
             <p className="text-muted-foreground mt-2">El tipo de misión no es reconocido.</p>
        </div>
    );
  }

  return (
    <div className="flex h-screen w-full flex-col font-headline bg-background dark:bg-black/40 p-4 gap-4">
      <MissionHeader />

      <main className="flex-1 overflow-hidden">
        
        {mission.type === 'code' ? (
             <div className="mission-panel-grid">
                {/* Top Row */}
                <div className="mission-panel">
                    <KingPanel />
                </div>
                <div className="mission-panel flex flex-col gap-4">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-bold text-primary-foreground"><Flag /> Objetivos</h2>
                        <p className="text-muted-foreground mt-2">{mission.summary}</p>
                    </div>
                    
                    <div className="space-y-4">
                        {mission.objectives.map((obj, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                                <p className="text-sm text-primary-foreground">{obj}</p>
                            </div>
                        ))}
                    </div>

                    {mission.lore && (
                        <div>
                        <h3 className="flex items-center gap-2 text-xl font-bold text-primary"><BookOpen /> El Pergamino dice...</h3>
                        <p className="text-sm text-muted-foreground mt-2 italic">{mission.lore}</p>
                        </div>
                    )}
                </div>
                
                {/* Bottom Row */}
                <div className="mission-panel-bottom-row">
                    <div className="mission-panel flex flex-col">
                        <h2 className="flex items-center gap-2 text-lg font-bold text-primary-foreground mb-2"><FileCode/> Editor de Código</h2>
                        <Textarea
                            id="code-editor"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            className="flex-grow font-code"
                            placeholder="Escribe tu código aquí..."
                        />
                        <Button onClick={handleExecuteCode} className="mt-2">
                            <Play className="mr-2 h-4 w-4" />
                            Ejecutar Código
                        </Button>
                    </div>

                    <div className="mission-panel flex flex-col">
                        <h2 className="flex items-center gap-2 text-lg font-bold text-primary-foreground mb-2"><Eye/> Visualizador</h2>
                        <div className='flex-grow bg-white rounded-md'>
                            <iframe
                                srcDoc={srcDoc}
                                title="output"
                                sandbox="allow-scripts"
                                className="preview-frame"
                            />
                        </div>
                    </div>
                </div>

                {isCorrect !== null && (
                    <div className="col-span-2 mt-4 text-center bg-card/80 p-4 rounded-lg border border-primary/20">
                        <h3 className={cn("text-2xl font-bold", isCorrect ? "text-accent" : "text-destructive-foreground")}>
                            {isCorrect ? "¡Código Correcto!" : "Código Incorrecto"}
                        </h3>
                        <p className="text-muted-foreground mt-2">{isCorrect ? `Has ganado el logro: "${mission.achievement}"` : "El Rey no está complacido. Pero no te rindas."}</p>
                        {isCorrect && (
                            <Button onClick={handleNextMission} className="mt-4">
                                Continuar
                            </Button>
                        )}
                    </div>
                 )}
            </div>
        ) : (
             <div className="mission-grid-narrative">
                <KingPanel />
                <ChallengePanel />
            </div>
        )}

      </main>
    </div>
  );
}
