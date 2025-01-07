export enum ProjectType {
  PROFESSIONAL,
  PERSONAL,
}

export type ProjectEntry = {
  title: string;
  techStack: string[];
  description: string;
  image: string;
  role: string;
  type: ProjectType;
};
