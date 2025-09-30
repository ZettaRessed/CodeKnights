"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Swords } from 'lucide-react';

const ComicPanel = ({
  imageUrl,
  imageHint,
  caption,
  alt,
}: {
  imageUrl: string;
  imageHint: string;
  caption: string;
  alt: string;
}) => (
  <div className="flex flex-col gap-2">
    <div className="relative aspect-video w-full rounded-lg overflow-hidden border-2 border-primary/50 shadow-lg shadow-primary/20">
      <Image
        src={imageUrl}
        alt={alt}
        fill
        objectFit="cover"
        data-ai-hint={imageHint}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
    </div>
    <p className="text-center text-sm text-muted-foreground p-2 bg-black/20 rounded-md">
      {caption}
    </p>
  </div>
);

export default function StoryPage() {
  const router = useRouter();
  const binaryVoidImage = PlaceHolderImages.find((img) => img.id === 'binary-void');
  const firstCommandImage = PlaceHolderImages.find((img) => img.id === 'first-command');
  const bugMonsterImage = PlaceHolderImages.find((img) => img.id === 'bug-monster');
  const codeKnightImage = PlaceHolderImages.find((img) => img.id === 'code-knight-hero');

  return (
    <div className="relative min-h-screen w-full bg-background font-headline text-foreground flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-black/50 to-background z-10"></div>

      <Card className="z-20 max-w-4xl w-full bg-card/80 backdrop-blur-sm border-primary/30 shadow-2xl shadow-primary/20">
        <CardContent className="p-6">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-primary-foreground">
              La Saga de los CodeKnights
            </h1>
            <p className="text-primary">Una crónica de código y caos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {binaryVoidImage && (
              <ComicPanel
                imageUrl={binaryVoidImage.imageUrl}
                imageHint={binaryVoidImage.imageHint}
                alt="El Vacío Binario"
                caption="En el principio, solo existía el Vacío Binario. Un mar de caos..."
              />
            )}
            {firstCommandImage && (
              <ComicPanel
                imageUrl={firstCommandImage.imageUrl}
                imageHint={firstCommandImage.imageHint}
                alt="La Primera Chispa"
                caption="...hasta que una chispa, el Primer Comando, trajo la lógica a la oscuridad."
              />
            )}
            {bugMonsterImage && (
              <ComicPanel
                imageUrl={bugMonsterImage.imageUrl}
                imageHint={bugMonsterImage.imageHint}
                alt="El Monstruo Bug"
                caption="Pero donde hay código, las sombras acechan. Nacieron los BUGS, bestias que devoran la realidad."
              />
            )}
            {codeKnightImage && (
              <ComicPanel
                imageUrl={codeKnightImage.imageUrl}
                imageHint={codeKnightImage.imageHint}
                alt="El Héroe CodeKnight"
                caption="Para combatirlos, surgen los CodeKnights. Héroes armados con lógica y valor, destinados a proteger los reinos."
              />
            )}
          </div>
          
          <div className="text-center">
             <p className="text-lg text-primary-foreground mb-6">
                Tu leyenda está a punto de comenzar. ¿Estás listo para forjar tu destino?
            </p>
            <div className="flex justify-center">
                <Button
                onClick={() => router.push('/dashboard')}
                size="lg"
                className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-lg hover:shadow-accent text-lg font-bold transition-all duration-300 transform hover:scale-105 active:scale-100"
                >
                <Swords className="mr-2" />
                ¡Comenzar mi Aventura!
                </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

    