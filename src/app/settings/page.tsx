'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, User, Shield, KeyRound, Lock, Smartphone, Monitor, Star, Link2, LogOut, ChevronRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"></path><path d="M21.4 10.6c.2.6.3 1.2.3 1.9 0 6.2-4.8 11.2-10.9 11.2-6.1 0-11-4.9-11-11S5.9 2 12 2c3.2 0 6 1.3 8.1 3.3l-2.7 2.7C16.1 6.9 14.2 6 12 6c-3.9 0-7 3.1-7 7s3.1 7 7 7c4.3 0 6.5-3 6.8-4.6h-6.8v-3.8h11.4z"></path></svg>
  );
  
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 192" {...props}><path d="M216.856 16.597s-18.256-11.239-41.136-13.43C158.336 1.144 140.928 0 128 0S97.664 1.144 80.288 3.134C57.408 5.358 39.144 16.597 39.144 16.597S3.584 68.845 0 117.829c14.432 16.597 32.512 24.328 52.224 28.712C55.424 150.758 53.568 155.445 52 160.075c-2.304 6.843-3.104 12.8-2.304 18.016a20.18 20.18 0 0 0 4.64 11.231c5.984 5.92 12.928 6.874 18.976 5.275C96.224 189.6 256 16.597 256 16.597zM85.344 133.438c-11.52 0-20.992-10.957-20.992-24.478s9.472-24.478 20.992-24.478c11.52 0 20.992 10.982 20.736 24.478.026 13.52-9.216 24.478-20.736 24.478zm85.312 0c-11.52 0-20.992-10.957-20.992-24.478s9.472-24.478 20.992-24.478c11.52 0 20.992 10.982 20.736 24.478.026 13.52-9.216 24.478-20.736 24.478z"/></svg>
)

export default function SettingsPage() {
    const authBackground = PlaceHolderImages.find(
        (img) => img.id === 'auth-background'
    );
    const [knightName, setKnightName] = useState('Sir Codealot');

    return (
        <div className="relative min-h-screen w-full bg-background font-headline text-foreground overflow-y-auto">
            {authBackground && (
            <Image
                src={authBackground.imageUrl}
                alt="Fantasy landscape"
                fill
                objectFit="cover"
                className="absolute inset-0 z-0 opacity-20"
                data-ai-hint={authBackground.imageHint}
            />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background z-10"></div>
            
            <main className="relative z-20 container mx-auto p-4 sm:p-8 max-w-4xl">
                <header className="mb-8">
                    <Button asChild variant="ghost" className="mb-4">
                        <Link href="/dashboard"><ArrowLeft className="mr-2"/> Volver a los Reinos</Link>
                    </Button>
                    <h1 className="text-4xl font-bold text-primary-foreground">Configuración de la Cuenta</h1>
                    <p className="text-muted-foreground">Administra tu identidad y seguridad en los Reinos del Código.</p>
                </header>

                <div className="space-y-8">
                    {/* Perfil del Caballero */}
                    <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><User/> Perfil del Caballero</CardTitle>
                            <CardDescription>Tu nombre de guerra y correo de contacto.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                <label htmlFor="knightName" className="w-full sm:w-40 font-medium">Nombre de Caballero</label>
                                <Input id="knightName" value={knightName} onChange={(e) => setKnightName(e.target.value)} className="flex-1"/>
                            </div>
                             <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                <label htmlFor="email" className="w-full sm:w-40 font-medium">Correo Electrónico</label>
                                <Input id="email" value="sir.codealot@email.com" disabled className="flex-1"/>
                            </div>
                        </CardContent>
                        <CardFooter className="border-t border-primary/10 pt-4 flex justify-end">
                            <Button>Guardar Cambios</Button>
                        </CardFooter>
                    </Card>

                    {/* Seguridad de la Cuenta */}
                    <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Shield/> Seguridad de la Cuenta</CardTitle>
                            <CardDescription>Fortalece las defensas de tu fortaleza digital.</CardDescription>
                        </CardHeader>
                        <CardContent className="divide-y divide-primary/10">
                            <div className="py-4 flex items-center justify-between">
                                <div>
                                    <h3 className="font-semibold text-primary-foreground flex items-center gap-2"><KeyRound/> Cambiar Contraseña</h3>
                                    <p className="text-sm text-muted-foreground">Se recomienda cambiar tu contraseña secreta periódicamente.</p>
                                </div>
                                <Button variant="outline">Cambiar</Button>
                            </div>
                            <div className="py-4 flex items-center justify-between">
                                <div>
                                    <h3 className="font-semibold text-primary-foreground flex items-center gap-2"><Lock/> Autenticación de Dos Factores (2FA)</h3>
                                    <p className="text-sm text-muted-foreground">Añade una capa extra de seguridad a tu cuenta.</p>
                                </div>
                                <Switch id="2fa-switch" />
                            </div>
                            <div className="py-4">
                                <h3 className="font-semibold text-primary-foreground flex items-center gap-2 mb-2"><Smartphone/> Sesiones Activas</h3>
                                <p className="text-sm text-muted-foreground mb-4">Estas son las fortalezas desde donde has iniciado sesión.</p>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-3 bg-background/50 rounded-md">
                                        <div className="flex items-center gap-3">
                                            <Monitor className="text-green-400"/>
                                            <div>
                                                <p className="font-medium">Chrome en Windows 11</p>
                                                <p className="text-xs text-muted-foreground">Lima, PE (IP actual)</p>
                                            </div>
                                        </div>
                                        <Badge variant="secondary" className="border-green-400/50 text-green-400">Activa</Badge>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-background/50 rounded-md">
                                        <div className="flex items-center gap-3">
                                            <Smartphone className="text-muted-foreground"/>
                                            <div>
                                                <p className="font-medium">App Móvil en iPhone 15</p>
                                                <p className="text-xs text-muted-foreground">Hace 3 días</p>
                                            </div>
                                        </div>
                                        <Button variant="ghost" size="sm" className="text-muted-foreground"><LogOut className="mr-2"/>Cerrar</Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                         <CardFooter className="border-t border-primary/10 pt-4 flex justify-end">
                            <Button variant="destructive">Cerrar Sesión en Todos los Dispositivos</Button>
                        </CardFooter>
                    </Card>

                    {/* Suscripción */}
                    <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Star/> Suscripción del Gremio</CardTitle>
                            <CardDescription>Tu rango actual y beneficios en los Reinos del Código.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-accent/10 to-transparent rounded-lg border border-accent/50">
                                <div className="flex items-center gap-4">
                                    <Badge className="text-accent border-accent bg-transparent px-3 py-1">Plan Caballero</Badge>
                                    <p className="text-muted-foreground">Tu suscripción se renueva el 24 de Agosto, 2024.</p>
                                </div>
                                <Button>Administrar Suscripción</Button>
                            </div>
                        </CardContent>
                    </Card>
                    
                    {/* Cuentas Conectadas */}
                    <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Link2/> Cuentas Conectadas</CardTitle>
                            <CardDescription>Forja alianzas con otros reinos para un inicio de sesión más rápido.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="flex items-center justify-between p-3 border rounded-md bg-background/50">
                                <div className="flex items-center gap-3 font-medium">
                                    <GoogleIcon className="h-5 w-5"/> Google
                                </div>
                                <Button variant="secondary" disabled>Conectado</Button>
                            </div>
                             <div className="flex items-center justify-between p-3 border rounded-md bg-background/50">
                                <div className="flex items-center gap-3 font-medium">
                                    <GithubIcon className="h-5 w-5"/> GitHub
                                </div>
                                <Button variant="outline">Conectar</Button>
                            </div>
                             <div className="flex items-center justify-between p-3 border rounded-md bg-background/50">
                                <div className="flex items-center gap-3 font-medium">
                                    <DiscordIcon className="h-5 w-5"/> Discord
                                </div>
                                <Button variant="outline">Conectar</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}
