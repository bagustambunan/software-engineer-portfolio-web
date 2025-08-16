export type Stack = {
  name: string;
  icon: string;
}

export type Project = {
  name: string;
  description: string;
  stacks: Stack[];
  image: string;
  link: string;
}