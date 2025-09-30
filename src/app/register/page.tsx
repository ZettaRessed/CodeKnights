
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { getAuth, updateProfile, onAuthStateChanged } from 'firebase/auth';
import { app } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Book, ShieldQuestion, ScrollText, UserCheck } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const formSchema = z
  .object({
    characterName: z.string().min(3, {
      message: 'El nombre de tu caballero debe tener al menos 3 caracteres.',
    }),
    experience: z.enum(['new', 'experienced'], {
      required_error: 'Debes declarar tu experiencia.',
    }),
    terms: z.boolean().default(false),
  })
  .refine((data) => data.terms, {
    message: 'Debes aceptar los Antiguos Decretos para continuar.',
    path: ['terms'],
  });

export default function RegisterPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const auth = getAuth(app);
  const knightOathImage = PlaceHolderImages.find(
    (img) => img.id === 'knight-oath'
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      characterName: '',
      terms: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    const user = auth.currentUser;

    if (user) {
      try {
        await updateProfile(user, {
          displayName: values.characterName,
        });

        // Here you would typically save the 'experience' value to your database
        // For example: await saveUserExperience(user.uid, values.experience);

        toast({
          title: '¡Juramento Aceptado!',
          description: `Bienvenido, Sir ${values.characterName}. Tu leyenda comienza ahora.`,
        });
        router.push('/dashboard');
      } catch (error: any) {
        toast({
          variant: 'destructive',
          title: 'Error en el Juramento',
          description: error.message,
        });
        setIsLoading(false);
      }
    } else {
      toast({
        variant: 'destructive',
        title: 'Error de Autenticación',
        description: 'No se ha encontrado ningún caballero. Por favor, inicia sesión de nuevo.',
      });
      router.push('/');
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-background font-headline text-foreground flex items-center justify-center p-4 overflow-hidden">
      {knightOathImage && (
        <Image
          src={knightOathImage.imageUrl}
          alt="Un caballero arrodillándose para prestar juramento."
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 opacity-10"
          data-ai-hint={knightOathImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-10"></div>
      <Card className="z-20 w-full max-w-2xl bg-card/80 backdrop-blur-sm border-primary/30 shadow-2xl shadow-primary/20">
        <CardHeader className="text-center">
          <div className="flex justify-center items-center gap-4 mb-2">
            <UserCheck className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold text-primary-foreground">
              Juramento del Caballero
            </h1>
          </div>
          <CardDescription>
            Antes de entrar a los Reinos del Código, todo aspirante debe forjar
            su identidad.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="characterName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg flex items-center gap-2">
                      <Book /> Tu Nombre de Caballero
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ej: Sir Codealot"
                        {...field}
                        disabled={isLoading}
                        className="text-base"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-lg flex items-center gap-2">
                      <ShieldQuestion /> Declara tu Pasado
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col md:flex-row gap-4 pt-2"
                        disabled={isLoading}
                      >
                        <FormItem className="flex-1 flex items-center space-x-3 space-y-0 p-4 rounded-md border border-input bg-background/50 has-[:checked]:border-accent">
                          <FormControl>
                            <RadioGroupItem value="new" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            <span className="font-bold text-primary-foreground">Soy un Escudero Novato.</span>
                            <p className="text-sm text-muted-foreground">Mi espada es nueva, pero mi voluntad es de acero.</p>
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex-1 flex items-center space-x-3 space-y-0 p-4 rounded-md border border-input bg-background/50 has-[:checked]:border-accent">
                          <FormControl>
                            <RadioGroupItem value="experienced" />
                          </FormControl>
                           <FormLabel className="font-normal">
                           <span className="font-bold text-primary-foreground">He Forjado Código Antes.</span>
                           <p className="text-sm text-muted-foreground">Conozco el clangor del compilador al amanecer.</p>
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 bg-background/50">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="flex items-center gap-2">
                        <ScrollText /> Acepto los Antiguos Decretos
                      </FormLabel>
                      <p className="text-sm text-muted-foreground">
                        Juro proteger el código, combatir los bugs y buscar siempre la lógica más pura y elegante.
                      </p>
                       <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full text-lg h-12 bg-accent text-accent-foreground hover:bg-accent/90"
                disabled={isLoading}
              >
                {isLoading ? 'Forjando Destino...' : '¡Forjar mi Destino!'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
