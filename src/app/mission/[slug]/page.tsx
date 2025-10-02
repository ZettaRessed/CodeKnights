import { notFound } from 'next/navigation';
import { missions } from '@/lib/missions';
import MissionClientWrapper from './mission-client-wrapper';

export default function MissionPage({ params }: { params: { slug: string } }) {
  const mission = missions.find((m) => m.slug === params.slug);

  if (!mission) {
    notFound();
  }

  return <MissionClientWrapper mission={mission} />;
}
