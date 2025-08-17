import type { ReactNode } from "react";

export type Profile = {
  name: string;
  description: string;
  photo: string;
  details?: {
    title: string;
    content: ReactNode;
  }[];
  roles: Role[];
};

export type Stack = {
  name: string;
  icon: string;
};

export type Project = {
  name: string;
  role: RoleEnum;
  description: string;
  details?: {
    title?: string;
    descriptions: string[];
  }[];
  stacks?: Stack[];
  image: string;
  link: string;
};

export enum RoleEnum {
  SOFTWARE_ENGINEER = "software-engineer",
  GRAPHIC_DESIGNER = "graphic-designer",
}

export type Role = {
  key: RoleEnum;
  label: string;
  emoji: string;
};

export type ProfileLink = {
  name: string;
  link: string;
};

export type Experience = {
  company: string;
  logo: string;
  role: string;
  description: string;
  details?: {
    title?: string;
    descriptions: string[];
  }[];
  stacks?: Stack[];
  startDate: Date;
  endDate?: Date;
};

export type Navigation = {
  name: string;
  icon: string;
  link: string;
};
