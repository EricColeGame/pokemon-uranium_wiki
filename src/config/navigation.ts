import type { LucideIcon } from "lucide-react";
import { BookOpen, Boxes, Compass, Globe, Trophy, Users, Zap } from "lucide-react";

export interface NavItem {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "characters", path: "/characters", icon: Users, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Zap, isContentType: true },
  { key: "progression", path: "/progression", icon: Trophy, isContentType: true },
  { key: "items", path: "/items", icon: Boxes, isContentType: true },
  { key: "controls", path: "/controls", icon: Compass, isContentType: true },
  { key: "community", path: "/community", icon: Globe, isContentType: true },
] satisfies readonly NavItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
