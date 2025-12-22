import type { ComponentType, LazyExoticComponent } from "react";

export type PageConfig = {
  windowKey: string;
  title: string;
  route: string;
  component: LazyExoticComponent<ComponentType>;
}