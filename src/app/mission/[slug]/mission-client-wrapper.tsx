'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { type Mission } from '@/lib/missions';
import './mission.css';
import { CheckCircle, Gem, Sparkles, Trophy, Flag, BookOpen, FileCode, Eye, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function MissionClientWrapper({ mission }: { mission: Mission }) {
  const [code, setCode] = useState(mission.starterCode);
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <head>
            <style>
              body { 
                color: #333;
                font-family: sans-serif;
                padding: 1rem;
              }
            </style>
          </head>
          <body>${code}</body>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [code]);

  const handleCompleteMission = () => {
    // Logic to verify mission completion
    alert('¡Misión Completada! (Simulación)');
  };

  return (
    <div className="flex h-screen w-full flex-col font-headline bg-background dark:bg-black/40 p-4 gap-4">
      {/* Header */}
      <header className="flex items-center justify-between flex-shrink-0 bg-card/60 border border-primary/20 p-2 px-4 rounded-lg">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <Link href="/dashboard">
              <ChevronLeft className="h-4 w-4 mr-2"/>
              Volver al Dashboard
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
          <Button onClick={handleCompleteMission}>
            <Trophy className="mr-2 h-4 w-4" /> Completar Misión
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 mission-grid overflow-hidden">
        {/* Objectives Panel */}
        <div className="mission-panel flex flex-col gap-6">
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
        
        {/* Code Editor Panel */}
        <div className="mission-panel flex flex-col">
            <h2 className="flex items-center gap-2 text-lg font-bold text-primary-foreground mb-2"><FileCode/> Editor de Código</h2>
            <Textarea
              id="code-editor"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="flex-grow font-code"
              placeholder="Escribe tu código aquí..."
            />
        </div>

        {/* Preview Panel */}
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
      </main>
    </div>
  );
}
