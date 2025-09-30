'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
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
import { Book, ShieldQuestion, ScrollText, UserCheck, ChevronRight, ChevronLeft, KeyRound, Mail } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const formSchema = z
  .object({
    email: z.string().email({ message: 'Debes usar un correo de caballero válido.' }),
    password: z.string().min(6, { message: 'Tu contraseña secreta debe tener al menos 6 caracteres.' }),
    confirmPassword: z.string(),
    characterName: z.string().min(3, {
      message: 'El nombre de tu caballero debe tener al menos 3 caracteres.',
    }),
    experience: z.enum(['new', 'experienced'], {
      required_error: 'Debes declarar tu experiencia.',
    }),
    terms: z.boolean().default(false),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden.',
    path: ['confirmPassword'],
  })
  .refine((data) => data.terms, {
    message: 'Debes aceptar los Antiguos Decretos para continuar.',
    path: ['terms'],
  });

type FormData = z.infer<typeof formSchema>;

const steps = [
  { id: 'step-1', fields: ['email', 'password', 'confirmPassword'] },
  { id: 'step-2', fields: ['characterName'] },
  { id: 'step-3', fields: ['experience'] },
  { id: 'step-4', fields: ['terms'] },
];

export default function RegisterPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [previousStep, setPreviousStep] = useState(0);
  
  const auth = getAuth(app);
  const authBackground = PlaceHolderImages.find(
    (img) => img.id === 'auth-background'
  );

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      characterName: '',
      terms: false,
    },
  });

  const next = async () => {
    const fields = steps[currentStep].fields as (keyof FormData)[];
    const output = await form.trigger(fields, { shouldFocus: true });

    if (!output) return;

    if (currentStep < steps.length - 1) {
        setPreviousStep(currentStep);
        setCurrentStep(step => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
        setPreviousStep(currentStep);
        setCurrentStep(step => step - 1);
    }
  };

  const onSubmit = async (values: FormData) => {
    setIsLoading(true);
    try {
      // 1. Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
      const user = userCredential.user;

      // 2. Update user profile with character name
      await updateProfile(user, {
        displayName: values.characterName,
      });

      toast({
        title: '¡Juramento Aceptado!',
        description: `Bienvenido, Sir ${values.characterName}. Tu leyenda comienza ahora.`,
      });
      router.push('/story');
    } catch (error: any) {
        toast({
            variant: 'destructive',
            title: 'Error en el Juramento',
            description: error.code === 'auth/email-already-in-use' 
                ? 'Este correo ya ha sido reclamado por otro caballero.'
                : error.message,
        });
    } finally {
        setIsLoading(false);
    }
  };

  const delta = currentStep - previousStep;

  return (
    <div className="relative min-h-screen w-full bg-background font-headline text-foreground flex items-center justify-center p-4 overflow-hidden">
      {authBackground && (
        <Image
          src={authBackground.imageUrl}
          alt="Fantasy landscape"
          fill
          objectFit="cover"
          className="absolute inset-0 z-0 opacity-10 animate-fade-in"
          data-ai-hint={authBackground.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-10"></div>
      <Card className="z-20 w-full max-w-2xl bg-card/80 backdrop-blur-sm border-primary/30 shadow-2xl shadow-primary/20 animate-slide-in-from-bottom">
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="overflow-hidden min-h-[340px] flex flex-col">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: delta >= 0 ? '50%' : '-50%' }}
                        animate={{ opacity: 1, x: '0%' }}
                        exit={{ opacity: 0, x: delta >= 0 ? '-50%' : '50%' }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="space-y-6 flex-grow"
                    >
                        {currentStep === 0 && (
                            <div className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-lg flex items-center gap-2">
                                            <Mail /> Correo de Caballero
                                        </FormLabel>
                                        <FormControl>
                                        <Input
                                            placeholder="tu@correo.com"
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
                                    name="password"
                                    render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-lg flex items-center gap-2">
                                            <KeyRound /> Contraseña Secreta
                                        </FormLabel>
                                        <FormControl>
                                        <Input
                                            type="password"
                                            placeholder="********"
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
                                    name="confirmPassword"
                                    render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-lg flex items-center gap-2">
                                            <KeyRound /> Confirma tu Contraseña
                                        </FormLabel>
                                        <FormControl>
                                        <Input
                                            type="password"
                                            placeholder="********"
                                            {...field}
                                            disabled={isLoading}
                                            className="text-base"
                                        />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                            </div>
                        )}
                        {currentStep === 1 && (
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
                        )}
                        {currentStep === 2 && (
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
                        )}
                        {currentStep === 3 && (
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
                                        Juro proteger el código, combatir los bugs y buscar siempre la lógica más pura y elegante. Al aceptar, confirmas que has leído y estás de acuerdo con nuestros <a href="/terms" target="_blank" className="text-primary hover:underline">Términos de Servicio</a> y <a href="/privacy" target="_blank" className="text-primary hover:underline">Política de Privacidad</a>.
                                    </p>
                                    <FormMessage />
                                    </div>
                                </FormItem>
                                )}
                            />
                        )}
                    </motion.div>
                </AnimatePresence>

              <div className="mt-auto pt-5 flex justify-between">
                <Button type="button" onClick={prev} variant="outline" className={cn({ hidden: currentStep === 0 })}>
                    <ChevronLeft className="mr-2 h-4 w-4" /> Anterior
                </Button>

                {currentStep < steps.length - 1 && (
                    <Button type="button" onClick={next} className="ml-auto">
                        Siguiente <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                )}

                {currentStep === steps.length - 1 && (
                    <Button
                    type="submit"
                    className="w-full text-lg h-12 bg-accent text-accent-foreground hover:bg-accent/90 ml-auto"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Forjando Destino...' : '¡Forjar mi Destino!'}
                  </Button>
                )}
            </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

    