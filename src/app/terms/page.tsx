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
              <h2 className="text-xl font-bold text-primary">Carta de aceptación</h2>
              <p>
                Al crear una cuenta, acceder o usar CodeKnights, la persona usuaria acepta plenamente estos Términos de Servicio y la Política de Privacidad, que forman un contrato de consumo con el proveedor del servicio conforme al Código de Protección y Defensa del Consumidor del Perú. Si no se está de acuerdo con estos términos, no debe utilizarse el servicio, conforme a las reglas generales de contratación con consumidores en el Perú.
              </p>

              <h2 className="text-xl font-bold text-primary">Quiénes somos</h2>
              <p>
                CodeKnights es una plataforma educativa gamificada de aprendizaje de programación que presta servicios digitales a consumidores, por lo que le resultan aplicables las normas de protección al consumidor y de datos personales en el Perú. El tratamiento de datos personales se rige por la Ley N.° 29733 y su reglamento vigente, bajo supervisión de la Autoridad Nacional de Protección de Datos Personales (ANPD).
              </p>

              <h2 className="text-xl font-bold text-primary">Edad mínima y cuentas</h2>
              <p>
                El servicio está dirigido a mayores de edad o a menores con autorización verificable del padre, madre o tutor, conforme a deberes de información y trato justo del Código del Consumidor. La persona titular de la cuenta es responsable de la veracidad de sus datos, la confidencialidad de sus credenciales y de toda actividad realizada en su cuenta.
              </p>

              <h2 className="text-xl font-bold text-primary">Licencia de uso</h2>
              <p>
                CodeKnights otorga una licencia personal, limitada, no exclusiva, intransferible y revocable para acceder y utilizar la plataforma y sus contenidos conforme a estos términos y la ley aplicable. No se autoriza copiar, modificar, revender, descompilar, extraer o explotar comercialmente contenidos o software de CodeKnights salvo autorización expresa por escrito, en resguardo de la propiedad intelectual y el derecho de información veraz al consumidor.
              </p>

              <h2 className="text-xl font-bold text-primary">Contenido del usuario</h2>
              <p>
                Todo contenido aportado por la persona usuaria (por ejemplo, comentarios, proyectos o soluciones) seguirá siendo de su titularidad, otorgando a CodeKnights una licencia mundial, no exclusiva y gratuita para alojar, mostrar y operar técnicamente dicho contenido en la plataforma, conforme a prácticas leales y transparentes de consumo. La persona usuaria garantiza que tiene los derechos necesarios y que su contenido no infringe derechos de terceros ni la ley.
              </p>

              <h2 className="text-xl font-bold text-primary">Conducta prohibida</h2>
              <p>
                Se prohíben actos que afecten la seguridad o disponibilidad del servicio, el uso de bots no autorizados, scraping, ingeniería inversa, suplantación de identidad, ataques, spam, explotación de vulnerabilidades y conductas ilícitas o abusivas, en protección del interés económico del consumidor y la idoneidad del servicio. El incumplimiento puede conllevar suspensión o cierre de cuentas y medidas legales, respetando el trato justo y equitativo al consumidor.
              </p>

              <h2 className="text-xl font-bold text-primary">Planes y precios</h2>
              <p>
                Plan gratuito: acceso básico con funciones limitadas, anuncios y uso razonable, cumpliendo con el deber de información clara sobre restricciones.
              </p>
              <p>Plan Aprendiz: S/ 10 mensuales o su equivalente en dólares referenciado al tipo de cambio SBS del día de cobro, mostrado en el checkout de forma clara y previa.</p>
              <p>Plan Caballero: S/ 18 mensuales o su equivalente en dólares bajo el mismo criterio de conversión SBS, informado previamente al pago.</p>
              <p>Plan Élite: S/ 25 mensuales o su equivalente en dólares bajo el mismo criterio de conversión SBS, informado previamente al pago. Los precios se muestran en soles y, de corresponder, se informará el equivalente en dólares de manera referencial usando el tipo de cambio SBS del día de la transacción para transparencia al consumidor.</p>

              <h2 className="text-xl font-bold text-primary">Impuestos y facturación</h2>
              <p>
                Salvo indicación contraria, los precios para consumidores incluyen el Impuesto General a las Ventas, cuya tasa general es 18% en el Perú, y cualquier otro tributo aplicable que deba informarse al momento de la contratación. CodeKnights emite el comprobante tributario correspondiente y detalla el IGV conforme a la normativa de SUNAT para prestación de servicios.
              </p>
              
              <h2 className="text-xl font-bold text-primary">Compras de gemas</h2>
              <p>
                Las “gemas” son moneda virtual sin valor monetario fuera de la plataforma, no canjeables por dinero ni por bienes o servicios ajenos a CodeKnights, y no transferibles entre cuentas salvo funciones expresamente habilitadas. Las gemas pueden usarse para desbloquear contenidos, cosméticos y ventajas in‑app sin efectos fuera del entorno CodeKnights, con información veraz y no engañosa al consumidor.
              </p>
              
              <h2 className="text-xl font-bold text-primary">Pagos, renovación y cancelación</h2>
              <p>
                Las suscripciones son de período mensual con renovación automática hasta su cancelación por la persona usuaria desde la cuenta antes del siguiente ciclo, informando claramente periodicidad, precio y forma de cese. Los medios de pago aceptados se informan en el checkout y su procesamiento puede requerir validaciones antifraude externas conforme a buenas prácticas de ecommerce en el Perú.
              </p>

              <h2 className="text-xl font-bold text-primary">Reembolsos y cargos</h2>
              <p>
                Excepto cuando la ley exija lo contrario, todas las compras de suscripciones y gemas son definitivas y no reembolsables una vez consumadas, sin perjuicio de reembolsos por cobros duplicados, fallas atribuibles al proveedor o falta de idoneidad del servicio, de acuerdo con el Código del Consumidor. En casos de contracargos o fraude, CodeKnights puede suspender beneficios, retirar gemas no justificadas o cerrar cuentas, con trato justo y mecanismos de reclamo habilitados.
              </p>

              <h2 className="text-xl font-bold text-primary">Promociones y cupones</h2>
              <p>
                Las promociones, períodos de prueba, descuentos y cupones están sujetos a sus propias condiciones específicas que se comunicarán de forma previa, veraz y suficiente, y pueden modificarse o terminarse conforme a ley. Si hay conflicto entre condiciones de una promoción y estos Términos, prevalece la condición más favorable al consumidor según principios del sistema de protección.
              </p>

              <h2 className="text-xl font-bold text-primary">Propiedad intelectual</h2>
              <p>
                Todos los contenidos, marcas, diseños, assets estilo medieval 32‑bits y neón, y el software de CodeKnights son protegidos por las normas aplicables, y cualquier uso no autorizado está prohibido, conforme a la tutela de intereses económicos del consumidor y reglas sobre cláusulas abusivas. Los derechos no otorgados de forma expresa quedan reservados por CodeKnights.
              </p>

              <h2 className="text-xl font-bold text-primary">Privacidad y datos personales</h2>
              <p>
                El tratamiento de datos personales se realiza bajo los principios de legalidad, finalidad, proporcionalidad, seguridad y consentimiento informado de la Ley N.° 29733, su nuevo reglamento y la supervisión de la ANPD. Se tomarán en cuenta los Principios Actualizados sobre Privacidad y Protección de Datos de la OEA como estándar internacional de referencia en transferencias y gobernanza de datos.
              </p>

              <h2 className="text-xl font-bold text-primary">Transferencias internacionales</h2>
              <p>
                Cuando se transfieran datos fuera del Perú, se garantizarán salvaguardas adecuadas, cláusulas contractuales y consentimientos aplicables conforme a la Ley N.° 29733 y su reglamento, informando a las personas titulares sobre países de destino y finalidades. CodeKnights adoptará estándares internacionales pertinentes en materia de privacidad y seguridad consistentes con buenas prácticas regionales.
              </p>

              <h2 className="text-xl font-bold text-primary">Seguridad y brechas</h2>
              <p>
                Se implementan medidas técnicas y organizativas alineadas con buenas prácticas de gestión de seguridad de la información y se notificará a la ANPD y a las personas afectadas cuando así lo exija el nuevo reglamento de datos personales. La persona usuaria debe proteger sus credenciales y dispositivos, y notificar accesos no autorizados sin demora.
              </p>
              
              <h2 className="text-xl font-bold text-primary">Libro de Reclamaciones</h2>
              <p>
                CodeKnights dispone de Libro de Reclamaciones virtual accesible desde el sitio o app, conforme al Reglamento del Libro de Reclamaciones y sus modificatorias. Los reclamos se atenderán y responderán dentro del plazo legal aplicable, dejando constancia y seguimiento conforme a la normativa vigente.
              </p>

              <h2 className="text-xl font-bold text-primary">Soporte y atención</h2>
              <p>
                Se brinda canal de soporte para incidencias técnicas, facturación y consultas de cuenta, en línea con las obligaciones de idoneidad e información oportuna al consumidor. La información de contacto y horarios se publicará de forma visible y verificable en los medios de CodeKnights conforme a buenas prácticas de ecommerce.
              </p>

              <h2 className="text-xl font-bold text-primary">Limitación de responsabilidad</h2>
              <p>
                El servicio se ofrece “tal cual” y “según disponibilidad” para fines educativos y de entretenimiento, sin garantías implícitas de comerciabilidad o adecuación a un propósito particular, en aquello permitido por la ley de protección al consumidor. CodeKnights no es responsable por interrupciones causadas por terceros, fuerza mayor, fallas de internet o actos fuera de su control, sin perjuicio de los derechos irrenunciables del consumidor.
              </p>

              <h2 className="text-xl font-bold text-primary">Modificaciones del servicio y de los términos</h2>
              <p>
                CodeKnights puede actualizar funcionalidades, contenidos y precios para mejorar el servicio, informando previamente cambios materiales, en especial los que afecten las condiciones económicas o el alcance del servicio. Las versiones vigentes de los Términos se publicarán con fecha de actualización y, de ser necesario, se solicitará consentimiento renovado cuando la ley así lo requiera.
              </p>

              <h2 className="text-xl font-bold text-primary">Ley aplicable y jurisdicción</h2>
              <p>
                Estos Términos se rigen por las leyes de la República del Perú, incluyendo el Código del Consumidor y la Ley de Protección de Datos Personales. Cualquier controversia se someterá a los tribunales del distrito judicial de Lima, Perú, sin perjuicio de los mecanismos administrativos ante Indecopi u otras autoridades competentes.
              </p>

              <h2 className="text-xl font-bold text-primary">Resolución de disputas de consumo</h2>
              <p>
                Antes de cualquier acción judicial, se fomentará una fase de atención y conciliación directa mediante el canal de soporte y el Libro de Reclamaciones, conforme al marco de protección al consumidor. Esto no limita el derecho a acudir a Indecopi o a la autoridad de datos personales cuando corresponda según la materia del conflicto.
              </p>
              
              <h2 className="text-xl font-bold text-primary">Precios, tipo de cambio y transparencia</h2>
              <p>
                Los precios se exhibirán en soles y, cuando corresponda, se mostrará el equivalente en dólares de forma referencial utilizando el tipo de cambio SBS del día del cobro, informando todas las condiciones relevantes antes de la compra. Toda publicidad y oferta respetará los estándares de veracidad y claridad para evitar asimetrías de información en el comercio electrónico.
              </p>
              
              <h2 className="text-xl font-bold text-primary">Impuestos aplicables</h2>
              <p>
                Toda suscripción o compra in‑app a consumidores en el Perú está sujeta al IGV a la tasa general de 18%, salvo exenciones expresas, lo cual se detallará en el comprobante y en el checkout. Si la operación se realiza en otra jurisdicción, podrán aplicarse impuestos locales adicionales que serán comunicados de forma previa y transparente.
              </p>

              <h2 className="text-xl font-bold text-primary">Suspensión y terminación</h2>
              <p>
                CodeKnights puede suspender o terminar el acceso ante violaciones materiales de estos Términos, fraude, contracargo o uso abusivo, con comunicación y registro en el Libro de Reclamaciones cuando se trate de una disconformidad del consumidor. La persona usuaria puede terminar su suscripción en cualquier momento desde su cuenta, manteniéndose el acceso hasta el fin del período ya pagado si no media reembolso por ley.
              </p>

              <h2 className="text-xl font-bold text-primary">Integridad del acuerdo</h2>
              <p>
                Estos Términos, junto con la Política de Privacidad y condiciones específicas de promociones, constituyen el acuerdo íntegro entre CodeKnights y la persona usuaria para el uso del servicio. Si alguna cláusula se declara inválida, el resto permanecerá vigente y exigible conforme a derecho.
              </p>

              <h2 className="text-xl font-bold text-primary">Contacto legal y datos</h2>
              <p>
                Para consultas legales, ejercicio de derechos ARCO o quejas de privacidad, se indicará el contacto del responsable y/o delegado de protección de datos conforme al reglamento vigente de la Ley N.° 29733. Se facilitarán medios electrónicos accesibles y verificables, en línea con buenas prácticas de ecommerce y trato justo.
              </p>
              
              <h2 className="text-xl font-bold text-primary">Nota fiscal</h2>
              <p>
                Los precios de Plan Aprendiz (S/ 10), Plan Caballero (S/ 18) y Plan Élite (S/ 25) se muestran al consumidor, incluyen tributos aplicables y pueden convertirse a dólares en el checkout de forma referencial con el tipo de cambio SBS, precisando condiciones de renovación y cancelación previa. La plataforma mantendrá visible su Libro de Reclamaciones virtual y responderá dentro de los plazos legales aplicables conforme al Reglamento del Libro de Reclamaciones y sus modificatorias.
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
