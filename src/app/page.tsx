import Hero from '@/components/hero';
import Section from '@/components/section';
import Skills from '@/components/skills';
import Timeline from '@/components/timeline';
import { skillImages } from '@/data/skillsData';
import { timelineEntries } from '@/data/timelineData';

export default function Home() {
  return (
    <div className="flex flex-wrap  min-h-screen w-screen font-[family-name:var(--font-raleway)]">
      <Section isFullWidth isFullHeight>
        <Hero />
      </Section>
      <Section isFullWidth isDarkMode>
        <Timeline entries={timelineEntries} />
      </Section>
      <Section isFullWidth>
        <Skills skillImages={skillImages} />
      </Section>
    </div>
  );
}
