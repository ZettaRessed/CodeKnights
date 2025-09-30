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
import { FileLock, ChevronLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
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
            <FileLock className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold text-primary-foreground">
              Política de Privacidad
            </h1>
          </div>
          <CardDescription>
            Tu juramento de caballero también protege tus datos.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-96 w-full rounded-md border border-input p-4 bg-background/50">
            <div className="space-y-6 text-sm text-muted-foreground">
              <h2 className="text-xl font-bold text-primary">1. Responsable del tratamiento</h2>
              <p>
                Codeknights, representado legalmente por su equipo de gestión, es responsable del tratamiento de los datos personales recogidos en la plataforma. Los datos de contacto para atender consultas y solicitudes están disponibles en el portal oficial.
              </p>

              <h2 className="text-xl font-bold text-primary">2. Datos personales recabados</h2>
              <p>
                Se recopilan los datos necesarios para brindar el servicio educativo gamificado, incluyendo pero no limitado a:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Datos de identificación (nombre, correo electrónico, fecha de nacimiento)</li>
                <li>Datos técnicos (dirección IP, dispositivo, logs de acceso)</li>
                <li>Datos de interacción con la plataforma (progreso, actividades, preferencias)</li>
                <li>Datos de pago en caso de usar servicios premium</li>
              </ul>
              <p>
                El tratamiento se limita a datos adecuados, pertinentes y no excesivos para las finalidades declaradas.
              </p>

              <h2 className="text-xl font-bold text-primary">3. Finalidades del tratamiento</h2>
              <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Gestionar la cuenta y acceso</li>
                  <li>Prestar y mejorar el servicio educativo</li>
                  <li>Personalizar la experiencia y la ruta de aprendizaje</li>
                  <li>Gestionar compras y pagos seguros</li>
                  <li>Cumplir obligaciones legales y preventivas de fraude</li>
                  <li>Comunicación informativa y promocional con consentimiento previo</li>
              </ul>

              <h2 className="text-xl font-bold text-primary">4. Base legal para el tratamiento</h2>
              <p>Se sustenta en:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Consentimiento informado del usuario, especialmente para datos sensibles</li>
                  <li>Ejecución del contrato de servicios digitales</li>
                  <li>Cumplimiento de obligaciones legales</li>
                  <li>Intereses legítimos limitados y equilibrados</li>
              </ul>

              <h2 className="text-xl font-bold text-primary">5. Conservación de datos</h2>
              <p>
                Los datos se conservarán solo mientras sea necesario para cumplir las finalidades y disposiciones legales. Se establecen políticas internas para su eliminación segura y permanente.
              </p>

              <h2 className="text-xl font-bold text-primary">6. Derechos de los titulares</h2>
              <p>
                Los usuarios tienen derecho a acceder, rectificar, cancelar y oponerse al tratamiento de sus datos, así como a portarlos, limitarlos o revocar el consentimiento mediante canales habilitados.
              </p>

              <h2 className="text-xl font-bold text-primary">7. Medidas de seguridad</h2>
              <p>
                Se aplican medidas técnicas y organizativas alineadas a la norma ISO/IEC 27001 para proteger los datos contra accesos no autorizados, pérdida o alteración.
              </p>

              <h2 className="text-xl font-bold text-primary">8. Transferencia internacional de datos</h2>
              <p>
                Cuando sea necesario, la transferencia de datos fuera del Perú se hará respetando los estándares del Convenio 108, RGPD u otros marcos de privacidad con niveles adecuados de protección.
              </p>

              <h2 className="text-xl font-bold text-primary">9. Uso de cookies y tecnologías similares</h2>
              <p>
                Se emplean cookies para funcionalidad, análisis y personalización, con opciones claras para su gestión y rechazo, conforme a la normativa vigente.
              </p>

              <h2 className="text-xl font-bold text-primary">10. Tratamiento de datos de menores</h2>
              <p>
                Para usuarios menores de edad, se requiere consentimiento verificable de sus representantes legales, limitando el uso a lo estrictamente necesario para la prestación del servicio.
              </p>

              <h2 className="text-xl font-bold text-primary">11. Modificaciones a la política</h2>
              <p>
                Codeknights podrá actualizar esta política comunicado con anticipación razonable, siendo efectiva su aceptación tácita tras aviso.
              </p>

              <h2 className="text-xl font-bold text-primary">12. Contacto</h2>
              <p>
                Para ejercer derechos o plantear consultas, se puede contactar al Delegado de Protección de Datos o al servicio de atención al usuario disponibles en el sitio web oficial.
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
