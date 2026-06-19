import { navServiceItems } from "@/components/layout/navbar/nav-services";
import { navProjectItems } from "@/components/layout/navbar/nav-projects";
import { serviceItems } from "@/components/sections/services/service-items";
import { projectItems } from "@/components/sections/projects/project-items";
import type { IconType } from "react-icons";
import {
  LuCode,
  LuGlobe,
  LuSearch,
  LuShoppingCart,
  LuSmartphone,
  LuWrench,
} from "react-icons/lu";

export const footerServiceItems = navServiceItems.map((item) => ({
  ...item,
  icon: serviceItems.find((service) => service.href === item.href)!.icon,
}));

export const footerProjectItems = navProjectItems.map((item) => ({
  ...item,
  icon: projectItems.find((project) => project.href === item.href)!.icon,
}));

const footerBlogCategoryIcons: Record<string, IconType> = {
  "Web Geliştirme": LuCode,
  "Web Development": LuCode,
  Mobil: LuSmartphone,
  Mobile: LuSmartphone,
  SEO: LuSearch,
  "E-Ticaret": LuShoppingCart,
  "E-Commerce": LuShoppingCart,
  "Araçlar & İpuçları": LuWrench,
  "Tools & Tips": LuWrench,
  "Hosting & Domain": LuGlobe,
};

export function getFooterBlogCategoryIcon(category: string): IconType {
  return footerBlogCategoryIcons[category] ?? LuCode;
}
