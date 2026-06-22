const lucideSvgAttrs =
  'stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"';

export const BLOG_LUCIDE_MAP_PIN = `<svg ${lucideSvgAttrs}><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>`;

export const BLOG_LUCIDE_SERVER = `<svg ${lucideSvgAttrs}><rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect><rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>`;

export const BLOG_LUCIDE_LAYOUT_TEMPLATE = `<svg ${lucideSvgAttrs}><rect width="18" height="7" x="3" y="3" rx="1"></rect><rect width="9" height="7" x="3" y="14" rx="1"></rect><rect width="5" height="7" x="16" y="14" rx="1"></rect></svg>`;

export const BLOG_LUCIDE_CODE = `<svg ${lucideSvgAttrs}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`;

export const BLOG_LUCIDE_BOT = `<svg ${lucideSvgAttrs}><path d="M12 8V4H8"></path><rect width="16" height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>`;

export function blogAnalogyIcon(variant: "domain" | "hosting", icon: string) {
  return `<span class="blog-analogy-item-icon blog-analogy-item-icon--${variant}" aria-hidden="true">${icon}</span>`;
}
