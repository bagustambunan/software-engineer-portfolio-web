export type Profile = {
  name: string;
  description: string;
  photo: string;
  links: {
    name: string;
    link: string;
  }[];
}