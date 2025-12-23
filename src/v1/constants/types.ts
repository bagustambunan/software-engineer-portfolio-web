import type { ComponentType, LazyExoticComponent } from "react";

export type PageConfig = {
  title: string;
  icon: string;
  route: string;
  component: LazyExoticComponent<ComponentType>;
}