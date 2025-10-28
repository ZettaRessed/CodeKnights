'use client';

import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
    Users,
    MessageSquare,
    Swords,
    BookOpen,
    Shield,
    Crown,
    ArrowLeft,
    Send,
    Award,
    Crosshair,
    HeartPulse,
    User,
    ShieldCheck,
} from 'lucide-react';
import Link from 'next/link';

const members = [
  { name: 'Sir Render', role: 'Maestro del Gremio', level: 99, avatar: '/avatars/knight-1.png', roleIcon: Crown },
  { name: 'Lady Flexbox', role: 'Arquera del Estilo', level: 85, avatar: '/avatars/knight-2.png', roleIcon: Crosshair },
  { name: 'Lord Sudo', role: 'Paladín del Backend', level: 82, avatar: '/avatars/knight-3.png', roleIcon: Shield },
  { name: 'Esquire Script', role: 'Hechicero de JS', level: 76, avatar: '/avatars/knight-4.png', roleIcon: HeartPulse },
  { name: 'Novice Null', role: 'Aprendiz', level: 12, avatar: '/avatars/knight-5.png', roleIcon: User },
  { name: 'Byte Bard', role: 'Cronista', level: 68, avatar: '/avatars/knight-6.png', roleIcon: BookOpen },
];

const forumPosts = [
    {
        author: 'Novice Null',
        role: 'Aprendiz',
        title: '¿Cómo centro un div?',
        content: 'He intentado de todo y el div sigue sin centrarse. ¡El Rey estaría decepcionado! ¿Qué pergamino arcano me falta?',
        tags: ['css', 'flexbox', 'principiante'],
        replies: 3,
        lastReply: 'hace 5 minutos',
    },
    {
        author: 'Lady Flexbox',
        role: 'Arquera del Estilo',
        title: 'Guía Avanzada: La Magia de CSS Grid',
        content: 'Caballeros, he compilado mis conocimientos sobre el arte de CSS Grid. Es una herramienta poderosa para forjar diseños complejos. Aquí comparto mis secretos...',
        tags: ['css', 'grid', 'guia', 'avanzado'],
        replies: 12,
        lastReply: 'hace 2 horas',
    },
];

const guildMissions = [
    {
        title: 'RAID: El Bug del Antiguo Navegador',
        description: 'Un monstruoso bug del pasado ha resurgido, rompiendo los diseños en los navegadores más antiguos. Se necesita un escuadrón de 3-5 caballeros para derrotarlo.',
        type: 'Raid de Jefe (Épico)',
        rewards: 'Armadura de Compatibilidad, 500 Gemas, 2000 XP',
        icon: Swords,
    },
    {
        title: 'Misión de Gremio: El Estandarte Responsivo',
        description: 'El estandarte principal del reino no se adapta a los dispositivos móviles. Colaboren para crear un componente de banner totalmente responsivo usando HTML semántico y CSS moderno.',
        type: 'Misión Colaborativa',
        rewards: '150 Gemas, 800 XP para cada participante',
        icon: Award,
    }
]

const libraryResources = [
    {
        title: 'El Pergamino de Flexbox',
        description: 'Una guía visual e interactiva para dominar el arte de Flexbox, creada por Lady Flexbox.',
        author: 'Lady Flexbox',
    },
    {
        title: 'HTML Semántico: Más Allá de <div>',
        description: 'Comprende por qué usar etiquetas como <main>, <article>, y <nav> fortalece tu código.',
        author: 'Byte Bard',
    },
    {
        title: 'Animaciones de Neón con CSS',
        description: 'Aprende a crear los efectos de neón pulsante que ves en todo el reino, usando solo CSS.',
        author: 'Lord Sudo',
    },
    {
        title: 'El Arte del Posicionamiento',
        description: 'Domina las propiedades position: relative, absolute, fixed y sticky para controlar cada pixel.',
        author: 'Sir Render',
    }
];

export default function GuildHtmlPage() {
  return (
    <div className="min-h-screen w-full bg-background font-headline text-foreground overflow-hidden">
       <div className="relative w-full h-64 md:h-80">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/codeknights-313d5.firebasestorage.app/o/public%2Freinos%2Fgenerated-image%20(29).png?alt=media&token=e937d55f-8263-4475-b6d1-cd45a4a515f4"
          alt="Salón del Gremio de HTML"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 p-4 md:p-8 z-20 w-full">
            <div className="flex items-end gap-4 md:gap-6">
                <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-lg border-4 border-primary shadow-lg shadow-primary/30">
                    <Image src="https://firebasestorage.googleapis.com/v0/b/codeknights-313d5.firebasestorage.app/o/public%2Freinos%2FIconos%2FHTML.png?alt=media&token=95d20d9e-d246-47b2-aa7d-67173509d8a3" alt="Emblema del Gremio de HTML" layout="fill" objectFit="contain" className="p-2"/>
                </div>
                <div>
                    <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground drop-shadow-lg">Gremio de los Forjadores de Estructuras</h1>
                    <p className="text-md md:text-lg text-primary mt-1 drop-shadow-sm">El hogar de los maestros de HTML y CSS</p>
                </div>
                <Button asChild variant="outline" className="ml-auto self-start md:self-end bg-card/50 backdrop-blur-sm">
                    <Link href="/dashboard"><ArrowLeft className="mr-2 h-4 w-4"/> Volver a los Reinos</Link>
                </Button>
            </div>
        </div>
      </div>
      
      <main className="p-4 md:p-8">
        <Tabs defaultValue="forum" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto md:h-12">
            <TabsTrigger value="forum" className="py-2 md:py-0"><MessageSquare className="mr-2"/>Foro del Gremio</TabsTrigger>
            <TabsTrigger value="missions" className="py-2 md:py-0"><Swords className="mr-2"/>Misiones de Gremio</TabsTrigger>
            <TabsTrigger value="members" className="py-2 md:py-0"><Users className="mr-2"/>Miembros</TabsTrigger>
            <TabsTrigger value="library" className="py-2 md:py-0"><BookOpen className="mr-2"/>Biblioteca</TabsTrigger>
          </TabsList>

          <TabsContent value="forum" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                    <h2 className="text-2xl font-bold text-accent">Discusiones Recientes</h2>
                    {forumPosts.map((post, i) => (
                        <Card key={i} className="bg-card/80 hover:border-accent/50 transition-all">
                            <CardHeader>
                                <CardTitle>{post.title}</CardTitle>
                                <CardDescription>
                                    Publicado por {post.author} ({post.role}) - Última respuesta {post.lastReply}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-3">{post.content}</p>
                                <div className="flex gap-2">
                                    {post.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <span>{post.replies} respuestas</span>
                                <Button>Ver Discusión</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <div>
                     <Card className="sticky top-24 bg-card/80">
                        <CardHeader>
                            <CardTitle>Iniciar una Nueva Discusión</CardTitle>
                            <CardDescription>¿Necesitas ayuda o quieres compartir un descubrimiento?</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Input placeholder="Título del Pergamino..." />
                            <Textarea placeholder="Escribe aquí tu edicto o pregunta..." />
                             <Input placeholder="Etiquetas (ej: css, bug, ayuda)" />
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full"><Send className="mr-2"/> Publicar Edicto</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
          </TabsContent>

          <TabsContent value="missions" className="mt-6">
            <h2 className="text-2xl font-bold text-accent mb-4">Tablón de Misiones del Gremio</h2>
            <div className="space-y-4">
                {guildMissions.map((mission, i) => (
                    <Card key={i} className="bg-card/80 border-l-4 border-primary/70">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <mission.icon className="h-10 w-10 text-primary flex-shrink-0"/>
                            <div>
                                <CardTitle>{mission.title}</CardTitle>
                                <Badge variant="outline" className="mt-1">{mission.type}</Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">{mission.description}</p>
                            <p className="font-bold">Recompensas: <span className="font-normal text-accent">{mission.rewards}</span></p>
                        </CardContent>
                        <CardFooter>
                            <Button>Formar Escuadrón</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="members" className="mt-6">
            <h2 className="text-2xl font-bold text-accent mb-4">Caballeros del Gremio</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {members.map((member, i) => (
                    <Card key={i} className="bg-card/80 flex flex-col items-center p-6 text-center hover:shadow-primary/20 transition-shadow">
                        <Avatar className="h-20 w-20 mb-4 border-2 border-primary/50">
                            <AvatarImage src={member.avatar} alt={member.name} />
                            <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <p className="font-bold text-lg text-primary-foreground">{member.name}</p>
                        <div className="flex items-center gap-2 text-sm text-accent">
                            <member.roleIcon className="h-4 w-4"/>
                            <span>{member.role}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">Nivel {member.level}</p>
                    </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="library" className="mt-6">
            <h2 className="text-2xl font-bold text-accent mb-4">Biblioteca de los Forjadores</h2>
            <ScrollArea className="h-[60vh]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-4">
                {libraryResources.map((res, i) => (
                  <Card key={i} className="bg-card/80 flex flex-col hover:border-accent/50 transition-all">
                    <CardHeader>
                      <CardTitle>{res.title}</CardTitle>
                      <CardDescription>Autor: {res.author}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{res.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        <BookOpen className="mr-2 h-4 w-4" /> Leer Pergamino
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
