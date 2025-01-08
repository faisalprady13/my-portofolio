import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Section, { backgroundType } from '@/components/section';
import Skills from '@/components/skills';
import Story from '@/components/story';
import Timeline from '@/components/timeline';
import Contacts from '@/components/contacts';
import { skillData } from '@/data/skillData';
import { timelineData } from '@/data/timelineData';
import { projectData } from '@/data/projectData';

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
        <Timeline timelineEntries={timelineData} />
      </Section>
      <Section isFullWidth background={backgroundType.DOTS} id="skills">
        <Skills skillEntries={skillData} />
      </Section>
      <Section
        isFullWidth
        isDarkMode
        background={backgroundType.DOTS}
        id="projects"
      >
        <Projects projectEntries={projectData} />
      </Section>

      <Section
        isFullWidth
        isDarkMode
        background={backgroundType.GRAY}
        id="contacts"
      >
        <Contacts />
      </Section>
    </div>
  );
}
