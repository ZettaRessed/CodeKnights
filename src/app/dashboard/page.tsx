import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
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

export default function DashboardPage() {
  const characterAvatar = PlaceHolderImages.find(
    (img) => img.id === 'character-avatar'
  );
  const emptyStateArt = PlaceHolderImages.find(
    (img) => img.id === 'empty-state-art'
  );

  return (
    <div className="flex h-screen w-full font-headline overflow-hidden">
      {/* Left Sidebar */}
      <aside className="w-[300px] flex-shrink-0 bg-card/40 border-r border-primary/10 p-4 flex flex-col gap-6">
        <header className="flex items-center gap-3 px-2">
          <Crown className="text-primary h-8 w-8" />
          <h1 className="text-2xl font-bold text-primary-foreground">
            CodeKnights
          </h1>
        </header>

        {/* Character Profile */}
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
              <AvatarFallback>CK</AvatarFallback>
            </Avatar>
            <h2 className="text-xl font-bold">Sir Codealot</h2>
            <p className="text-sm text-primary">Escudero</p>
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

        {/* Navigation */}
        <nav className="flex flex-col gap-2">
          <Button variant="ghost" className="justify-start gap-3 text-lg h-12" >
            <LayoutGrid className="h-5 w-5 text-accent" /> Misiones
          </Button>
          <Button variant="ghost" className="justify-start gap-3 text-lg h-12 text-muted-foreground hover:text-primary-foreground">
            <Users className="h-5 w-5" /> Gremio
          </Button>
          <Button variant="ghost" className="justify-start gap-3 text-lg h-12 text-muted-foreground hover:text-primary-foreground">
            <BookMarked className="h-5 w-5" /> Biblioteca
          </Button>
          <Button variant="ghost" className="justify-start gap-3 text-lg h-12 text-muted-foreground hover:text-primary-foreground">
            <Settings className="h-5 w-5" /> Ajustes
          </Button>
        </nav>

        <Separator className="my-2 bg-primary/20" />
        
        {/* Active Mission */}
        <div className="flex-grow flex flex-col gap-2">
          <h3 className="text-lg font-semibold px-2">Misión Activa</h3>
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Swords className="h-5 w-5"/>
                El Despertar
              </CardTitle>
              <CardDescription>Aprende los comandos básicos.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm flex justify-between">
                <span>Recompensa:</span>
                <span className="font-bold text-accent">+100 XP</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col p-6 overflow-y-auto bg-black/20">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <span>Reino del Código</span>
          <ChevronRight className="h-4 w-4" />
          <span>Capítulo I</span>
          <ChevronRight className="h-4 w-4" />
          <span className="text-primary-foreground">El Despertar</span>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <Card className="w-full max-w-4xl text-center bg-card/50 border-primary/20">
             {emptyStateArt && (
              <div className="relative h-64 w-full rounded-t-lg overflow-hidden">
                <Image
                  src={emptyStateArt.imageUrl}
                  alt="Kingdom Art"
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={emptyStateArt.imageHint}
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent"></div>
              </div>
            )}
            <CardHeader className="relative -mt-16">
              <CardTitle className="text-4xl font-black tracking-wider uppercase text-shadow-lg shadow-black">
                Tu Aventura Comienza
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground mt-2">
                Tu primera misión te espera, noble Escudero.
              </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="h-48 bg-black/30 rounded-lg p-4 border border-primary/10 flex items-center justify-center">
                    <p className="text-muted-foreground font-mono">
                        // El editor de código aparecerá aquí...
                    </p>
                </div>
                 <Button size="lg" className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-lg hover:shadow-accent text-lg font-bold transition-all duration-300 transform hover:scale-105 active:scale-100">
                    Comenzar Misión
                 </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Right Panel */}
      <aside className="w-[350px] flex-shrink-0 bg-card/40 border-l border-primary/10 p-4 flex flex-col gap-6">
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Code2 className="h-5 w-5" />
              Visualización de Ejecución
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-40 bg-black/30 rounded-lg flex items-center justify-center">
              <p className="text-sm text-muted-foreground">La salida del código se mostrará aquí.</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Gem className="h-5 w-5" />
              Recompensas de Misión
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-4">
             <div className="flex flex-col items-center gap-2 p-2 rounded-lg bg-primary/10">
                <Gem className="h-8 w-8 text-accent"/>
                <span className="text-xs font-bold">10 Gemas</span>
             </div>
             <div className="flex flex-col items-center gap-2 p-2 rounded-lg bg-primary/10">
                <Shield className="h-8 w-8 text-accent"/>
                <span className="text-xs font-bold">Escudo Leal</span>
             </div>
          </CardContent>
        </Card>

        <Card className="border-accent/30 bg-gradient-to-br from-accent/10 to-transparent mt-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent">
                <Bot className="h-5 w-5" />
                Mago Consejero
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                ¿Atascado? El mago puede ofrecerte una pista.
              </p>
              <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                Pedir Pista
              </Button>
            </CardContent>
        </Card>

      </aside>
    </div>
  );
}
