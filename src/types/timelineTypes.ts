export enum TimelineType {
  WORK,
  EDUCATION,
}

export type TimelineEntry = {
  title: string;
  organization: string;
  date: string;
  description: string;
  type: TimelineType;
};
