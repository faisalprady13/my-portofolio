export type SkillAreaEntry = {
  title: string;
  color: number;
  skillList: SkillEntry[];
};

export type SkillEntry = { name: string; level: number };

export type SkillImage = { alt: string; src: string };
