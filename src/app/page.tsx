import Hero from '@/components/hero';
import Section, { backgroundType } from '@/components/section';
import Skills from '@/components/skills';
import Timeline from '@/components/timeline';
import { skillImages } from '@/data/skillsData';
import { timelineEntries } from '@/data/timelineData';

export default function Home() {
  return (
    <div className="flex flex-wrap  min-h-screen w-screen font-[family-name:var(--font-raleway)]">
      <Section
        isFullWidth
        isFullHeight
        isDarkMode
        background={backgroundType.IMAGE}
      >
        <Hero />
      </Section>
      <Section isFullWidth isDarkMode background={backgroundType.DOTS}>
        <Timeline entries={timelineEntries} />
      </Section>
      <Section isFullWidth background={backgroundType.DOTS}>
        <Skills skillImages={skillImages} />
      </Section>
    </div>
  );
}
