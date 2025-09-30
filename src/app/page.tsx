"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollText, LogIn } from 'lucide-react';

export default function RootPage() {
  const router = useRouter();
  const loreScrollImage = PlaceHolderImages.find(
    (img) => img.id === 'lore-scroll'
  );

  return (
    <div className="relative min-h-screen w-full bg-background font-headline text-foreground flex items-center justify-center p-4 overflow-hidden">
      {loreScrollImage && (
        <Image
          src={loreScrollImage.imageUrl}
          alt="Ancient Scroll"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 opacity-20"
          data-ai-hint={loreScrollImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10"></div>

      <Card className="z-20 max-w-3xl w-full bg-card/80 backdrop-blur-sm border-primary/30 shadow-2xl shadow-primary/20">
        <CardHeader className="text-center">
          <div className="flex justify-center items-center gap-4 mb-2">
            <ScrollText className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold text-primary-foreground">
              CodeKnights
            </h1>
          </div>
          <CardTitle className="text-2xl text-primary">La Gran Saga de los Reinos del Código</CardTitle>
        </CardHeader>
        <CardContent className="text-center flex flex-col items-center gap-6">
            <div className="max-h-64 overflow-y-auto p-4 rounded-lg bg-black/30 border border-primary/20 text-left">
                <h3 className="text-xl font-bold text-accent mb-4">Prólogo: El Vacío de Bits</h3>
                <p className="text-muted-foreground leading-relaxed">
                Antes de los reinos hubo un océano de oscuridad, el Mar del Caos Binario. Allí nació la Llama Binaria, chispa que dio vida al Primer Reino: la Torre de los Comandos Tejidos (1801), donde los hilos obedecían órdenes perforadas.
                Los sabios Charles Babbage y Ada Lovelace intentaron alzar la Fortaleza Analítica, pero la traición del tiempo la dejó incompleta. Ada, la Hechicera del Algoritmo, escribió las primeras runas del destino.
                </p>
            </div>
            <p className="text-lg text-primary-foreground">
                Tu leyenda está a punto de comenzar, caballero. ¿Estás listo para forjar tu destino?
            </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs">
            <Button
              onClick={() => router.push('/dashboard')}
              size="lg"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-lg hover:shadow-accent text-lg font-bold transition-all duration-300 transform hover:scale-105 active:scale-100"
            >
              ¡Comenzar Aventura!
            </Button>
             <Button
              onClick={() => router.push('/login')}
              size="lg"
              variant="outline"
              className="w-full text-lg font-bold"
            >
              <LogIn className="mr-2 h-5 w-5" />
              Iniciar Sesión
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
