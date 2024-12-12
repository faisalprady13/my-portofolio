export enum TimelineType {
  WORK = 'work',
  EDUCATION = 'education',
}

export type TimelineEntry = {
  title: string;
  organization: string;
  date: string;
  description: string;
  type: TimelineType;
};
