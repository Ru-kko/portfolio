import { id } from ".";

export const enum EducationType {
  certificate = "certificate",
  degree = "degree",
  course = "course"
}

export interface EducationBase extends id {
  title: string;
  type: EducationType;
  from: string;
}
