'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  User,
} from 'firebase/auth';
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
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { ShieldCheck, LogIn } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const formSchema = z.object({
  email: z.string().email({ message: 'Por favor ingresa un correo válido.' }),
  password: z
    .string()
    .min(6, { message: 'La contraseña debe tener al menos 6 caracteres.' }),
});

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"></path>
    <path d="M21.4 10.6c.2.6.3 1.2.3 1.9 0 6.2-4.8 11.2-10.9 11.2-6.1 0-11-4.9-11-11S5.9 2 12 2c3.2 0 6 1.3 8.1 3.3l-2.7 2.7C16.1 6.9 14.2 6 12 6c-3.9 0-7 3.1-7 7s3.1 7 7 7c4.3 0 6.5-3 6.8-4.6h-6.8v-3.8h11.4z"></path>
  </svg>
);

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const auth = getAuth(app);
  const loreScrollImage = PlaceHolderImages.find(
    (img) => img.id === 'lore-scroll'
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleAuthSuccess = (user: User) => {
    toast({
      title: '¡Bienvenido de vuelta!',
      description: `Has iniciado sesión como ${user.displayName || user.email}.`,
    });
    router.push('/dashboard');
  };

  const handleAuthError = (error: any) => {
    toast({
      variant: 'destructive',
      title: 'Error de Autenticación',
      description: error.message,
    });
    setIsLoading(false);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      handleAuthSuccess(userCredential.user);
    } catch (error) {
      handleAuthError(error);
    }
  };

  const handleOAuth = async (provider: GoogleAuthProvider | GithubAuthProvider) => {
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      handleAuthSuccess(result.user);
    } catch (error) {
      handleAuthError(error);
    }
  };

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
      <Card className="z-20 w-full max-w-md bg-card/80 backdrop-blur-sm border-primary/30 shadow-2xl shadow-primary/20">
        <CardHeader className="text-center">
          <div className="flex justify-center items-center gap-4 mb-2">
            <ShieldCheck className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold text-primary-foreground">
              CodeKnights
            </h1>
          </div>
          <CardTitle className="text-2xl text-primary">
            Forja tu Leyenda
          </CardTitle>
          <CardDescription>
            Inicia sesión para continuar tu aventura en los Reinos del Código.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Correo del Caballero</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="tu@correo.com"
                        {...field}
                        disabled={isLoading}
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
                    <FormLabel>Contraseña Secreta</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="********"
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full text-lg"
                disabled={isLoading}
              >
                {isLoading ? 'Verificando...' : 'Entrar al Reino'}
              </Button>
            </form>
          </Form>

          <Separator className="my-6 bg-primary/20" />

          <div className="space-y-4">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => handleOAuth(new GoogleAuthProvider())}
              disabled={isLoading}
            >
              <GoogleIcon className="mr-2 h-5 w-5" />
              Continuar con Google
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => handleOAuth(new GithubAuthProvider())}
              disabled={isLoading}
            >
              <GithubIcon className="mr-2 h-5 w-5" />
              Continuar con GitHub
            </Button>
          </div>
           <p className="mt-6 text-center text-sm text-muted-foreground">
              ¿Eres un nuevo caballero?{' '}
              <a href="#" className="text-primary hover:underline">
                Crea tu cuenta aquí.
              </a>
            </p>
        </CardContent>
      </Card>
    </div>
  );
}
