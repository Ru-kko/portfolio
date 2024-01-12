import { id } from ".";

export type EducationType = "certificate" | "degree" | "course";

export interface EducationBase extends id {
  title: string;
  type: EducationType;
  from: string;
}
