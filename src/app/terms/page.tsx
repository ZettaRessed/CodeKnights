'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollText, ChevronLeft } from 'lucide-react';

export default function TermsPage() {
  const router = useRouter();
  const authBackground = PlaceHolderImages.find(
    (img) => img.id === 'auth-background'
  );

  return (
    <div className="relative min-h-screen w-full bg-background font-headline text-foreground flex items-center justify-center p-4 overflow-hidden">
      {authBackground && (
        <Image
          src={authBackground.imageUrl}
          alt="Fantasy landscape"
          fill
          objectFit="cover"
          className="absolute inset-0 z-0 opacity-20 animate-fade-in"
          data-ai-hint={authBackground.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10"></div>
      <Card className="z-20 w-full max-w-3xl bg-card/80 backdrop-blur-sm border-primary/30 shadow-2xl shadow-primary/20 animate-slide-in-from-bottom">
        <CardHeader className="text-center">
          <div className="flex justify-center items-center gap-4 mb-2">
            <ScrollText className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold text-primary-foreground">
              Los Antiguos Decretos
            </h1>
          </div>
          <CardDescription>
            Las leyes que rigen los Reinos del Código y a sus nobles caballeros.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-96 w-full rounded-md border border-input p-4 bg-background/50">
            <div className="space-y-6 text-sm text-muted-foreground">
              <h2 className="text-xl font-bold text-primary">Artículo I: El Juramento del Código</h2>
              <p>
                Al registrarte en CodeKnights, juras solemnemente usar tus habilidades de programación para el bien. Te comprometes a escribir código limpio, a documentar tus hazañas y a ayudar a otros caballeros en su búsqueda de conocimiento. Toda actividad maliciosa, como la creación de bugs intencionados o el plagio de código, será castigada con el exilio digital.
              </p>

              <h2 className="text-xl font-bold text-primary">Artículo II: La Propiedad de los Artefactos</h2>
              <p>
                Todo el código, los diseños y las ideas que forjes dentro de los Reinos del Código son de tu propiedad intelectual. Sin embargo, al compartirlos, otorgas al reino una licencia perpetua para usar, mostrar y adaptar tus creaciones con el fin de enriquecer la experiencia de todos los caballeros. Los artefactos legendarios (código fuente de la plataforma) siguen siendo propiedad de los Arquitectos del Reino.
              </p>

              <h2 className="text-xl font-bold text-primary">Artículo III: El Comportamiento en el Gremio</h2>
              <p>
                El respeto y la camaradería son la base de todo gremio. Se espera que trates a todos los caballeros, escuderos y magos consejeros con honor. El acoso, el lenguaje ofensivo o cualquier forma de comportamiento tóxico no será tolerado. El Gremio de Moderadores se reserva el derecho de silenciar, suspender o expulsar a quienes rompan este sagrado decreto.
              </p>

              <h2 className="text-xl font-bold text-primary">Artículo IV: El Uso de la Magia (IA)</h2>
              <p>
                El Mago Consejero y otras formas de magia (Inteligencia Artificial) están aquí para guiarte, no para hacer el trabajo por ti. El uso excesivo de la magia para resolver desafíos sin esfuerzo se considera una deshonra. Aprende de sus consejos, pero recuerda que el verdadero poder de un CodeKnight reside en su propia lógica y habilidad para resolver problemas.
              </p>

              <h2 className="text-xl font-bold text-primary">Artículo V: Las Enmiendas a los Decretos</h2>
              <p>
                Los Reinos del Código están en constante evolución. Los Arquitectos del Reino se reservan el derecho de modificar estos Antiguos Decretos en cualquier momento. Se notificará a todos los caballeros de cualquier cambio significativo. La continuación de tu aventura en CodeKnights después de una modificación implica la aceptación de los nuevos decretos.
              </p>
            </div>
          </ScrollArea>
           <div className="mt-6 flex justify-center">
             <Button
                variant="outline"
                onClick={() => router.back()}
              >
                <ChevronLeft className="mr-2 h-4 w-4" /> Volver al Juramento
              </Button>
           </div>
        </CardContent>
      </Card>
    </div>
  );
}
