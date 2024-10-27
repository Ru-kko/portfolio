import type { id, Technology } from ".";

export interface ExperienceBase extends id {
  job: string;
  company: string;
  stack: Technology[];
  start_date: string;
  end_date?: string;
}
