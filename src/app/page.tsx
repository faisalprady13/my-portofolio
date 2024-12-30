import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Section, { backgroundType } from '@/components/section';
import Skills from '@/components/skills';
import Story from '@/components/story';
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
      <Section
        isFullWidth
        isDarkMode
        background={backgroundType.GRAY}
        id="story"
      >
        <Story />
      </Section>
      <Section
        isFullWidth
        isDarkMode
        background={backgroundType.DOTS}
        id="timeline"
      >
        <Timeline entries={timelineEntries} />
      </Section>
      <Section isFullWidth background={backgroundType.DOTS} id="skills">
        <Skills skillImages={skillImages} />
      </Section>
      <Section isFullWidth background={backgroundType.DOTS} id="projects">
        <Projects />
      </Section>
    </div>
  );
}
