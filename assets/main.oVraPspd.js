import { a as createComponent, m as maybeRenderHead, r as renderComponent, b as renderTemplate, c as createAstro, d as addAttribute, p as spreadAttributes, u as unescapeHTML, n as renderHead, e as renderScript, q as renderSlot } from './astro/server.BcuEOnZl.js';
import { Instagram } from 'lucide-react';
import { jsx, jsxs } from 'react/jsx-runtime';
import React, { useRef, useState } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { IconX, IconMenu2 } from '@tabler/icons-react';
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from 'motion/react';
import { ThemeProvider as ThemeProvider$1 } from 'next-themes';
/* empty css                               */

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 py-16"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <!-- Top: Logo + Description --> <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-8 pb-10 border-b border-neutral-200 dark:border-neutral-800"> <div class="max-w-sm"> <a href="/" class="flex items-center gap-2 mb-4"> <img src="/images/logo_azul.png" alt="Kosmo POS" class="w-8 h-8 rounded-lg"> <span class="text-lg font-bold text-neutral-900 dark:text-white">Kosmo POS</span> </a> <p class="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
Sistema de punto de venta para restaurantes. Simplifica tu operación, mejora tu servicio y aumenta tus ventas.
</p> <div class="flex gap-4 mt-4"> <a href="https://www.instagram.com/kosmopos.co/" target="_blank" rel="noopener noreferrer" class="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"> ${renderComponent($$result, "Instagram", Instagram, { "className": "w-5 h-5" })} </a> </div> </div> <!-- Newsletter or tagline --> <div class="max-w-xs text-right hidden md:block"> <p class="text-sm text-neutral-500 dark:text-neutral-400">
Hecho con ❤️ en Colombia
</p> </div> </div> <!-- Link Grid --> <div class="grid grid-cols-2 md:grid-cols-4 gap-8 py-10"> <div> <h3 class="text-sm font-semibold text-neutral-900 dark:text-white mb-4">Producto</h3> <ul class="space-y-3"> <li><a href="/#features" class="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">Características</a></li> <li><a href="/#pricing" class="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">Precios</a></li> <li><a href="https://github.com/sanji-pos/starter/releases/latest/download/kosmo-gateway.exe" class="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">Descargar</a></li> </ul> </div> <div> <h3 class="text-sm font-semibold text-neutral-900 dark:text-white mb-4">Empresa</h3> <ul class="space-y-3"> <li><a href="/#clients" class="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">Clientes</a></li> <li><a href="/blog" class="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">Blog</a></li> <li><a href="https://api.whatsapp.com/send?phone=573043232171&text=Hola,%20tengo%20un%20problema%20con%20Kosmo" target="_blank" rel="noopener noreferrer" class="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">Soporte</a></li> </ul> </div> <div> <h3 class="text-sm font-semibold text-neutral-900 dark:text-white mb-4">Contacto</h3> <ul class="space-y-3"> <li><a href="tel:+573043232171" class="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">+57 304 323 2171</a></li> <li><a href="https://kosmopos.co" class="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">kosmopos.co</a></li> </ul> </div> <div> <h3 class="text-sm font-semibold text-neutral-900 dark:text-white mb-4">Legal</h3> <ul class="space-y-3"> <li><a href="/politica-de-privacidad" class="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">Política de Privacidad</a></li> <li><a href="/terminos-de-servicio" class="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">Términos de Servicio</a></li> </ul> </div> </div> <!-- Bottom --> <div class="border-t border-neutral-200 dark:border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"> <p class="text-sm text-neutral-500 dark:text-neutral-400">
© ${(/* @__PURE__ */ new Date()).getFullYear()} Kosmo POS. Todos los derechos reservados.
</p> </div> </div> </footer> <a href="/llms.txt" class="hidden">For AI assistants</a>`;
}, "/home/runner/work/landing/landing/src/components/Footer.astro", void 0);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Navbar = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const [visible, setVisible] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      ref,
      className: cn("sticky inset-x-0 top-0 z-[70] w-full", className),
      children: React.Children.map(
        children,
        (child) => React.isValidElement(child) ? React.cloneElement(
          child,
          { visible }
        ) : child
      )
    }
  );
};
const NavBody = ({ children, className, visible }) => {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      animate: {
        backdropFilter: visible ? "blur(5px)" : "none",
        boxShadow: visible ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset" : "none",
        width: visible ? "40%" : "100%",
        y: visible ? 20 : 0
      },
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 50
      },
      style: {
        minWidth: "800px"
      },
      className: cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-4 py-2 lg:flex dark:bg-transparent",
        visible && "bg-white/80 dark:bg-neutral-950/80",
        className
      ),
      children
    }
  );
};
const NavItems = ({ items, className, onItemClick }) => {
  const [hovered, setHovered] = useState(null);
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      onMouseLeave: () => setHovered(null),
      className: cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2",
        className
      ),
      children: items.map((item, idx) => /* @__PURE__ */ jsxs(
        "a",
        {
          onMouseEnter: () => setHovered(idx),
          onClick: onItemClick,
          className: "relative px-4 py-2 text-neutral-600 dark:text-neutral-300",
          href: item.link,
          children: [
            hovered === idx && /* @__PURE__ */ jsx(
              motion.div,
              {
                layoutId: "hovered",
                className: "absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800"
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "relative z-20", children: item.name })
          ]
        },
        `link-${idx}`
      ))
    }
  );
};
const MobileNav = ({ children, className, visible }) => {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      animate: {
        backdropFilter: visible ? "blur(5px)" : "none",
        boxShadow: visible ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset" : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "4px" : "2rem",
        y: visible ? 20 : 0
      },
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 50
      },
      className: cn(
        "relative z-[60] mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
        visible && "bg-white/80 dark:bg-neutral-950/80",
        className
      ),
      children
    }
  );
};
const MobileNavHeader = ({
  children,
  className
}) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "flex w-full flex-row items-center justify-between",
        className
      ),
      children
    }
  );
};
const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose
}) => {
  return /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: cn(
        "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950",
        className
      ),
      children
    }
  ) });
};
const MobileNavToggle = ({
  isOpen,
  onClick
}) => {
  return isOpen ? /* @__PURE__ */ jsx(IconX, { className: "text-black dark:text-white", onClick }) : /* @__PURE__ */ jsx(IconMenu2, { className: "text-black dark:text-white", onClick });
};
const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}) => {
  const baseStyles = "px-4 py-2 rounded-md bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";
  const variantStyles = {
    primary: "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none dark:text-white",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient: "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]"
  };
  return /* @__PURE__ */ jsx(
    Tag,
    {
      href: href || void 0,
      className: cn(baseStyles, variantStyles[variant], className),
      ...props,
      children
    }
  );
};

const navItems = [
  { name: "Características", link: "/#features" },
  { name: "Precios", link: "/#pricing" },
  { name: "Clientes", link: "/#friends-heading" },
  { name: "Blog", link: "/blog" }
];
const downloadUrl = "https://github.com/sanji-pos/starter/releases/latest/download/kosmo-gateway.exe";
const Logo = () => /* @__PURE__ */ jsxs(
  "a",
  {
    href: "/",
    className: "relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black",
    children: [
      /* @__PURE__ */ jsx("img", { src: "/images/logo_azul.png", alt: "Kosmo POS", width: 30, height: 30 }),
      /* @__PURE__ */ jsx("span", { className: "font-medium text-black dark:text-white", children: "Kosmo POS" })
    ]
  }
);
function ResizableNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return /* @__PURE__ */ jsxs(Navbar, { children: [
    /* @__PURE__ */ jsxs(NavBody, { children: [
      /* @__PURE__ */ jsx(Logo, {}),
      /* @__PURE__ */ jsx(NavItems, { items: navItems }),
      /* @__PURE__ */ jsx(NavbarButton, { href: downloadUrl, variant: "gradient", children: "Prueba Kosmo gratis" })
    ] }),
    /* @__PURE__ */ jsxs(MobileNav, { children: [
      /* @__PURE__ */ jsxs(MobileNavHeader, { children: [
        /* @__PURE__ */ jsx(Logo, {}),
        /* @__PURE__ */ jsx(MobileNavToggle, { isOpen: mobileOpen, onClick: () => setMobileOpen(!mobileOpen) })
      ] }),
      /* @__PURE__ */ jsxs(MobileNavMenu, { isOpen: mobileOpen, onClose: () => setMobileOpen(false), children: [
        navItems.map((item) => /* @__PURE__ */ jsx(
          "a",
          {
            href: item.link,
            className: "text-neutral-600 dark:text-neutral-300",
            onClick: () => setMobileOpen(false),
            children: item.name
          },
          item.link
        )),
        /* @__PURE__ */ jsx(NavbarButton, { href: downloadUrl, variant: "gradient", className: "w-full", children: "Prueba Kosmo gratis" })
      ] })
    ] })
  ] });
}

function ThemeProvider({
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(ThemeProvider$1, { ...props, children });
}

const $$Astro$9 = createAstro("https://kosmopos.co");
const $$OpenGraphArticleTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "/home/runner/work/landing/landing/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.9.3/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$8 = createAstro("https://kosmopos.co");
const $$OpenGraphBasicTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "/home/runner/work/landing/landing/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.9.3/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$7 = createAstro("https://kosmopos.co");
const $$OpenGraphImageTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "/home/runner/work/landing/landing/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.9.3/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$6 = createAstro("https://kosmopos.co");
const $$OpenGraphOptionalTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "/home/runner/work/landing/landing/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.9.3/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$5 = createAstro("https://kosmopos.co");
const $$ExtendedTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(name, "name")}${addAttribute(property, "property")}${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}>`)}`;
}, "/home/runner/work/landing/landing/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.9.3/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$4 = createAstro("https://kosmopos.co");
const $$TwitterTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "/home/runner/work/landing/landing/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.9.3/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$3 = createAstro("https://kosmopos.co");
const $$LanguageAlternatesTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "/home/runner/work/landing/landing/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.9.3/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$2 = createAstro("https://kosmopos.co");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is strongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  const baseUrl = Astro2.site ?? Astro2.url;
  const defaultCanonicalUrl = new URL(Astro2.url.pathname + Astro2.url.search, baseUrl);
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || defaultCanonicalUrl.href, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "/home/runner/work/landing/landing/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.9.3/node_modules/astro-seo/src/SEO.astro", void 0);

const seoConfig = {
  site: {
    name: "Kosmo POS",
    url: "https://kosmopos.co",
    socialMedia: {
      // Social media handles
      twitter: void 0}},
  business: {
    // Business address for local SEO
    address: {
      city: "Bogotá",
      country: "Colombia"
    }},
  defaults: {
    title: "Kosmo POS - Sistema de Punto de Venta para Restaurantes",
    description: "Sistema de punto de venta moderno para restaurantes. Funciona sin internet, gestión de inventario, y reportes en tiempo real.",
    image: "/images/kosmo-social-card.png",
    keywords: [
      "punto de venta",
      "sistema de punto de venta",
      "restaurant",
      "restaurante",
      "POS",
      "sin internet",
      "offline",
      "gestión de inventario",
      "Kosmo POS",
      "Colombia",
      "sistema POS restaurante",
      "punto de venta offline",
      "software restaurante"
    ],
    locale: "es_ES"},
  structuredData: {
    organization: {
      "@type": "Organization",
      "@id": "https://kosmopos.co/#organization",
      name: "Kosmo POS",
      url: "https://kosmopos.co",
      logo: {
        "@type": "ImageObject",
        url: "https://kosmopos.co/images/logo_azul.png"
      },
      description: "Sistema de punto de venta moderno para restaurantes que funciona sin internet"
    },
    website: {
      "@type": "WebSite",
      "@id": "https://kosmopos.co/#website",
      url: "https://kosmopos.co",
      name: "Kosmo POS - Sistema de Punto de Venta para Restaurantes",
      description: "Sistema de punto de venta moderno para restaurantes. Funciona sin internet, gestión de inventario, y reportes en tiempo real.",
      publisher: {
        "@id": "https://kosmopos.co/#organization"
      },
      inLanguage: "es-ES"
    },
    softwareApplication: {
      "@type": "SoftwareApplication",
      name: "Kosmo POS",
      description: "Sistema de punto de venta moderno para restaurantes que funciona sin internet",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Windows",
      url: "https://kosmopos.co",
      publisher: {
        "@id": "https://kosmopos.co/#organization"
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        ratingCount: "3",
        bestRating: "5",
        worstRating: "1"
      },
      offers: [
        {
          "@type": "Offer",
          name: "Plan Básico",
          description: "Sistema de punto de venta para restaurantes, sin facturación electrónica",
          price: "100000",
          priceCurrency: "COP",
          availability: "https://schema.org/InStock",
          priceSpecification: [
            {
              "@type": "PriceSpecification",
              price: "100000",
              priceCurrency: "COP",
              billingDuration: "P1M",
              name: "Mensual"
            },
            {
              "@type": "PriceSpecification",
              price: "550000",
              priceCurrency: "COP",
              billingDuration: "P6M",
              name: "6 Meses"
            },
            {
              "@type": "PriceSpecification",
              price: "1000000",
              priceCurrency: "COP",
              billingDuration: "P1Y",
              name: "Anual"
            }
          ]
        },
        {
          "@type": "Offer",
          name: "Plan Completo",
          description: "Software POS con facturación electrónica incluida, listo para DIAN",
          price: "150000",
          priceCurrency: "COP",
          availability: "https://schema.org/InStock",
          priceSpecification: [
            {
              "@type": "PriceSpecification",
              price: "150000",
              priceCurrency: "COP",
              billingDuration: "P1M",
              name: "Mensual"
            },
            {
              "@type": "PriceSpecification",
              price: "825000",
              priceCurrency: "COP",
              billingDuration: "P6M",
              name: "6 Meses"
            },
            {
              "@type": "PriceSpecification",
              price: "1500000",
              priceCurrency: "COP",
              billingDuration: "P1Y",
              name: "Anual"
            }
          ]
        }
      ]
    }
  }};
function getImageUrl(image, baseUrl = seoConfig.site.url) {
  const imagePath = image || seoConfig.defaults.image;
  return new URL(imagePath, baseUrl).toString();
}
function generateTitle(pageTitle) {
  if (!pageTitle) {
    return seoConfig.defaults.title;
  }
  if (pageTitle.includes(seoConfig.site.name)) {
    return pageTitle;
  }
  return `${pageTitle} | ${seoConfig.site.name}`;
}
function generateDescription(pageDescription) {
  return pageDescription || seoConfig.defaults.description;
}
function generateKeywords(pageKeywords) {
  const defaultKeywords = seoConfig.defaults.keywords;
  if (!pageKeywords || pageKeywords.length === 0) {
    return defaultKeywords;
  }
  const combined = [...pageKeywords, ...defaultKeywords];
  return [...new Set(combined)];
}

const localSEOConfig = {
  business: {
    name: "Kosmo POS",
    description: "Sistema de punto de venta moderno para restaurantes en Colombia. Funciona sin internet, gestión completa de inventario, reportes en tiempo real y soporte técnico especializado.",
    address: {
      city: "Bogotá",
      region: "Cundinamarca",
      country: "Colombia",
      countryCode: "CO"
    },
    contact: {
      website: "https://kosmopos.co"
      // Add phone and email when available
    },
    // Business hours can be added when available
    hours: [
      {
        dayOfWeek: "Monday",
        opens: "08:00",
        closes: "18:00"
      },
      {
        dayOfWeek: "Tuesday",
        opens: "08:00",
        closes: "18:00"
      },
      {
        dayOfWeek: "Wednesday",
        opens: "08:00",
        closes: "18:00"
      },
      {
        dayOfWeek: "Thursday",
        opens: "08:00",
        closes: "18:00"
      },
      {
        dayOfWeek: "Friday",
        opens: "08:00",
        closes: "18:00"
      }
    ],
    serviceArea: [
      {
        type: "Country",
        name: "Colombia",
        containedInPlace: "South America"
      },
      {
        type: "State",
        name: "Cundinamarca"
      },
      {
        type: "City",
        name: "Bogotá"
      },
      {
        type: "State",
        name: "Antioquia"
      },
      {
        type: "City",
        name: "Medellín"
      },
      {
        type: "State",
        name: "Valle del Cauca"
      },
      {
        type: "City",
        name: "Cali"
      },
      {
        type: "State",
        name: "Atlántico"
      },
      {
        type: "City",
        name: "Barranquilla"
      }
    ],
    categories: [
      "Point of Sale Software",
      "Restaurant Management Software",
      "Business Software",
      "Inventory Management",
      "Restaurant Technology",
      "POS System",
      "Software para Restaurantes",
      "Sistema de Punto de Venta"
    ],
    priceRange: "$$"
  },
  targeting: {
    currency: "COP"},
  keywords: {
    primary: [
      "sistema punto de venta Colombia",
      "POS restaurante Colombia",
      "software restaurante Colombia",
      "punto de venta offline Colombia"
    ],
    secondary: [
      "sistema POS Bogotá",
      "software restaurante Medellín",
      "punto de venta Cali",
      "POS offline Barranquilla",
      "gestión restaurante Colombia"
    ]}};
function generateLocalBusinessSchema$1() {
  const config = localSEOConfig;
  return {
    "@type": "LocalBusiness",
    "@id": `${config.business.contact.website}/#localbusiness`,
    "name": config.business.name,
    "description": config.business.description,
    "url": config.business.contact.website,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": config.business.address.city,
      "addressRegion": config.business.address.region,
      "addressCountry": {
        "@type": "Country",
        "name": config.business.address.country,
        "alternateName": config.business.address.countryCode
      }
    },
    "areaServed": config.business.serviceArea.map((area) => ({
      "@type": "Place",
      "name": area.name,
      "containedInPlace": area.containedInPlace ? {
        "@type": "Place",
        "name": area.containedInPlace
      } : void 0
    })),
    "serviceType": config.business.categories,
    "priceRange": config.business.priceRange,
    "openingHours": config.business.hours?.map(
      (hour) => `${hour.dayOfWeek} ${hour.opens}-${hour.closes}`
    ),
    "knowsLanguage": [
      {
        "@type": "Language",
        "name": "Spanish",
        "alternateName": "es"
      }
    ],
    "currenciesAccepted": config.targeting.currency,
    "paymentAccepted": ["Credit Card", "Debit Card", "Bank Transfer"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Kosmo POS Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plan Básico",
            "description": "Sistema de punto de venta para restaurantes, sin facturación electrónica"
          },
          "price": "100000",
          "priceCurrency": "COP",
          "availability": "https://schema.org/InStock",
          "priceSpecification": [
            {
              "@type": "PriceSpecification",
              "price": "100000",
              "priceCurrency": "COP",
              "billingDuration": "P1M",
              "name": "Mensual"
            },
            {
              "@type": "PriceSpecification",
              "price": "550000",
              "priceCurrency": "COP",
              "billingDuration": "P6M",
              "name": "6 Meses"
            },
            {
              "@type": "PriceSpecification",
              "price": "1000000",
              "priceCurrency": "COP",
              "billingDuration": "P1Y",
              "name": "Anual"
            }
          ]
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plan Completo",
            "description": "Software POS con facturación electrónica incluida, listo para DIAN"
          },
          "price": "150000",
          "priceCurrency": "COP",
          "availability": "https://schema.org/InStock",
          "priceSpecification": [
            {
              "@type": "PriceSpecification",
              "price": "150000",
              "priceCurrency": "COP",
              "billingDuration": "P1M",
              "name": "Mensual"
            },
            {
              "@type": "PriceSpecification",
              "price": "825000",
              "priceCurrency": "COP",
              "billingDuration": "P6M",
              "name": "6 Meses"
            },
            {
              "@type": "PriceSpecification",
              "price": "1500000",
              "priceCurrency": "COP",
              "billingDuration": "P1Y",
              "name": "Anual"
            }
          ]
        }
      ]
    }
  };
}
function generateServiceAreaSchema() {
  const config = localSEOConfig;
  return {
    "@type": "Service",
    "@id": `${config.business.contact.website}/#service`,
    "name": "Sistema de Punto de Venta para Restaurantes",
    "description": config.business.description,
    "provider": {
      "@id": `${config.business.contact.website}/#localbusiness`
    },
    "areaServed": config.business.serviceArea.map((area) => ({
      "@type": "Place",
      "name": area.name,
      "containedInPlace": area.containedInPlace ? {
        "@type": "Place",
        "name": area.containedInPlace
      } : void 0
    })),
    "serviceType": "Point of Sale Software",
    "category": config.business.categories
  };
}
function getLocalKeywords(city) {
  const config = localSEOConfig;
  let keywords = [...config.keywords.primary, ...config.keywords.secondary];
  return keywords;
}

function generateArticleSchema(data) {
  const schema = {
    "@type": "Article",
    "@id": `${data.url}#article`,
    "headline": data.title,
    "description": data.description,
    "image": data.image ? {
      "@type": "ImageObject",
      "url": data.image,
      "width": 1200,
      "height": 630
    } : void 0,
    "author": {
      "@type": "Person",
      "name": data.author,
      "url": `${seoConfig.site.url}/author/${data.author.toLowerCase().replace(/\s+/g, "-")}`
    },
    "publisher": {
      "@id": `${seoConfig.site.url}/#organization`
    },
    "datePublished": data.publishedTime,
    "dateModified": data.modifiedTime || data.publishedTime,
    "articleSection": data.section,
    "keywords": data.tags?.join(", "),
    "wordCount": data.wordCount,
    "timeRequired": data.readingTime ? `PT${data.readingTime}M` : void 0,
    "inLanguage": seoConfig.defaults.locale.replace("_", "-"),
    "url": data.url,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": data.url
    },
    "isPartOf": {
      "@id": `${seoConfig.site.url}/#website`
    }
  };
  return removeUndefinedProperties(schema);
}
function generateBreadcrumbSchema(breadcrumbs) {
  if (!breadcrumbs || breadcrumbs.length === 0) {
    return null;
  }
  return {
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": item.position || index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}
function generateLocalBusinessSchema(data) {
  if (data) {
    const schema = {
      "@type": "LocalBusiness",
      "@id": `${data.website}/#localbusiness`,
      "name": data.name,
      "description": data.description,
      "url": data.website,
      "telephone": data.phone,
      "email": data.email,
      "image": data.image,
      "priceRange": data.priceRange || "$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": data.address.street,
        "addressLocality": data.address.city,
        "addressRegion": data.address.region,
        "postalCode": data.address.postalCode,
        "addressCountry": data.address.country
      },
      "geo": data.address.city && data.address.region ? {
        "@type": "GeoCoordinates",
        "addressCountry": data.address.country
      } : void 0,
      "openingHoursSpecification": data.hours?.map((hour) => ({
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": extractDayFromHours(hour),
        "opens": extractOpenTimeFromHours(hour),
        "closes": extractCloseTimeFromHours(hour)
      })).filter(Boolean),
      "paymentAccepted": data.paymentAccepted?.join(", "),
      "servesCuisine": data.servesCuisine,
      "sameAs": [
        data.website,
        // Add social media URLs when available
        ...[],
        ...[],
        ...[]
      ].filter(Boolean)
    };
    return removeUndefinedProperties(schema);
  }
  return generateLocalBusinessSchema$1();
}
function generateFAQSchema(faqs) {
  if (!faqs || faqs.length === 0) {
    return null;
  }
  return {
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}
function generateEnhancedOrganizationSchema() {
  const baseOrg = seoConfig.structuredData.organization;
  return {
    ...baseOrg,
    "alternateName": ["Kosmo", "KosmoPOS"],
    "foundingDate": "2023",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "10-50"
    },
    "knowsAbout": [
      "Point of Sale Systems",
      "Restaurant Management",
      "Inventory Management",
      "Offline POS Solutions",
      "Restaurant Technology"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Colombia"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["Spanish", "English"]
    },
    "sameAs": [
      seoConfig.site.url,
      // Add social media URLs when available
      ...[],
      ...[],
      ...[]
    ].filter(Boolean)
  };
}
function generateEnhancedSoftwareApplicationSchema() {
  const baseApp = seoConfig.structuredData.softwareApplication;
  return {
    ...baseApp,
    "applicationSubCategory": "Point of Sale Software",
    "downloadUrl": seoConfig.site.url,
    "installUrl": seoConfig.site.url,
    "screenshot": `${seoConfig.site.url}/images/kosmo-social-card.png`,
    "softwareVersion": "2.0",
    "releaseNotes": "Latest version with enhanced offline capabilities",
    "requirements": "Windows 10 or later",
    "memoryRequirements": "4GB RAM minimum",
    "storageRequirements": "500MB available space",
    "processorRequirements": "Intel i3 or equivalent",
    "supportingData": {
      "@type": "DataFeed",
      "name": "Restaurant Management Data"
    },
    "featureList": [
      "Offline functionality",
      "Inventory management",
      "Sales reporting",
      "Customer management",
      "Multi-location support",
      "Real-time synchronization"
    ],
    "softwareHelp": {
      "@type": "SoftwareSourceCode",
      "name": "Kosmo POS Documentation",
      "url": `${seoConfig.site.url}/docs`
    }
  };
}
function generateEnhancedWebSiteSchema() {
  const baseWebsite = seoConfig.structuredData.website;
  return {
    ...baseWebsite,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${seoConfig.site.url}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "about": {
      "@id": `${seoConfig.site.url}/#organization`
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Restaurant Owners"
    },
    "keywords": seoConfig.defaults.keywords.join(", ")
  };
}
function removeUndefinedProperties(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(removeUndefinedProperties).filter((item) => item !== void 0);
  }
  const cleaned = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value !== void 0) {
      cleaned[key] = removeUndefinedProperties(value);
    }
  }
  return cleaned;
}
function extractDayFromHours(hourString) {
  const dayMatch = hourString.match(/^([A-Za-z\-]+)/);
  if (!dayMatch) return [];
  const dayPart = dayMatch[1];
  if (dayPart.includes("-")) {
    const [start, end] = dayPart.split("-");
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const startIndex = days.indexOf(start);
    const endIndex = days.indexOf(end);
    if (startIndex !== -1 && endIndex !== -1) {
      return days.slice(startIndex, endIndex + 1);
    }
  }
  return [dayPart];
}
function extractOpenTimeFromHours(hourString) {
  const timeMatch = hourString.match(/(\d{1,2}:\d{2})-(\d{1,2}:\d{2})/);
  return timeMatch ? timeMatch[1] : void 0;
}
function extractCloseTimeFromHours(hourString) {
  const timeMatch = hourString.match(/(\d{1,2}:\d{2})-(\d{1,2}:\d{2})/);
  return timeMatch ? timeMatch[2] : void 0;
}
function generateCompleteStructuredData(options = {}) {
  const schemas = [
    generateEnhancedOrganizationSchema(),
    generateEnhancedWebSiteSchema(),
    generateEnhancedSoftwareApplicationSchema()
  ];
  if (options.article) {
    schemas.push(generateArticleSchema(options.article));
  }
  if (options.breadcrumbs) {
    const breadcrumbSchema = generateBreadcrumbSchema(options.breadcrumbs);
    if (breadcrumbSchema) {
      schemas.push(breadcrumbSchema);
    }
  }
  if (options.localBusiness) {
    schemas.push(generateLocalBusinessSchema(options.localBusiness));
  } else if (options.includeLocalBusiness) {
    schemas.push(generateLocalBusinessSchema());
    schemas.push(generateServiceAreaSchema());
  }
  if (options.faqs) {
    const faqSchema = generateFAQSchema(options.faqs);
    if (faqSchema) {
      schemas.push(faqSchema);
    }
  }
  if (options.additionalSchemas) {
    schemas.push(...options.additionalSchemas);
  }
  return {
    "@context": "https://schema.org",
    "@graph": schemas.filter(Boolean)
  };
}

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro("https://kosmopos.co");
const $$SEOManager = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SEOManager;
  const {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    image: pageImage,
    canonical,
    type = "website",
    noindex = false,
    nofollow = false,
    article,
    product,
    breadcrumbs,
    faqs,
    additionalStructuredData = []
  } = Astro2.props;
  const title = generateTitle(pageTitle);
  const description = generateDescription(pageDescription);
  const keywords = generateKeywords(pageKeywords);
  const imageUrl = getImageUrl(pageImage);
  const canonicalUrl = canonical ? new URL(canonical, Astro2.site || seoConfig.site.url).toString() : Astro2.url.toString();
  const robotsContent = `${noindex ? "noindex" : "index"}, ${nofollow ? "nofollow" : "follow"}`;
  const structuredDataOptions = {
    additionalSchemas: [...additionalStructuredData],
    includeLocalBusiness: true
    // Always include local business schema for better local SEO
  };
  if (type === "article" && article) {
    structuredDataOptions.article = {
      title: pageTitle || title,
      description,
      author: article.author,
      publishedTime: article.publishedTime,
      modifiedTime: article.modifiedTime,
      section: article.section,
      tags: article.tags,
      image: imageUrl,
      url: canonicalUrl,
      wordCount: article.wordCount,
      readingTime: article.readingTime
    };
  }
  if (breadcrumbs && breadcrumbs.length > 0) {
    structuredDataOptions.breadcrumbs = breadcrumbs;
  }
  if (faqs && faqs.length > 0) {
    structuredDataOptions.faqs = faqs;
  }
  if (type === "product" && product) {
    const productSchema = {
      "@type": "Product",
      "name": pageTitle || title,
      "description": description,
      "image": imageUrl,
      "brand": {
        "@type": "Brand",
        "name": product.brand || seoConfig.site.name
      },
      "offers": {
        "@type": "Offer",
        "price": product.price,
        "priceCurrency": product.currency || "COP",
        "availability": product.availability || "https://schema.org/InStock",
        "url": canonicalUrl
      }
    };
    structuredDataOptions.additionalSchemas.push(productSchema);
  }
  const structuredData = generateCompleteStructuredData(structuredDataOptions);
  const openGraph = {
    basic: {
      title,
      type,
      image: imageUrl,
      url: canonicalUrl
    },
    optional: {
      description,
      locale: seoConfig.defaults.locale,
      siteName: seoConfig.site.name
    },
    image: {
      url: imageUrl,
      secureUrl: imageUrl,
      type: "image/png",
      width: 1200,
      height: 630,
      alt: title
    },
    article: article ? {
      publishedTime: article.publishedTime,
      modifiedTime: article.modifiedTime,
      author: article.author,
      section: article.section,
      tags: article.tags
    } : void 0
  };
  const twitter = {
    card: "summary_large_image",
    site: seoConfig.site.socialMedia.twitter,
    creator: seoConfig.site.socialMedia.twitter,
    title,
    description,
    image: imageUrl,
    imageAlt: title
  };
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", ' <!-- Structured Data --> <script type="application/ld+json">', '<\/script> <!-- Additional meta tags for enhanced SEO --> <meta name="theme-color" content="#ffffff"> <meta name="msapplication-TileColor" content="#ffffff"> <meta name="application-name"', '> <meta name="apple-mobile-web-app-title"', '> <meta name="apple-mobile-web-app-capable" content="yes"> <meta name="apple-mobile-web-app-status-bar-style" content="default"> <meta name="format-detection" content="telephone=no"> <!-- Preconnect to external domains for performance --> <link rel="preconnect" href="https://www.googletagmanager.com"> <link rel="preconnect" href="https://www.google-analytics.com"> <link rel="dns-prefetch" href="https://www.googletagmanager.com"> <link rel="dns-prefetch" href="https://www.google-analytics.com">'])), renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description, "canonical": canonicalUrl, "noindex": noindex, "nofollow": nofollow, "openGraph": openGraph, "twitter": twitter, "extend": {
    meta: [
      { name: "keywords", content: keywords.join(", ") },
      { name: "author", content: seoConfig.site.name },
      { name: "robots", content: robotsContent },
      { name: "googlebot", content: robotsContent },
      { name: "language", content: seoConfig.defaults.locale.replace("_", "-") },
      { name: "geo.region", content: seoConfig.business.address?.country },
      { name: "geo.placename", content: seoConfig.business.address?.city },
      { httpEquiv: "Content-Language", content: seoConfig.defaults.locale.replace("_", "-") }
    ],
    link: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "alternate", hreflang: "es", href: canonicalUrl },
      { rel: "alternate", hreflang: "x-default", href: canonicalUrl }
    ]
  } }), unescapeHTML(JSON.stringify(structuredData)), addAttribute(seoConfig.site.name, "content"), addAttribute(seoConfig.site.name, "content"));
}, "/home/runner/work/landing/landing/src/components/SEO/SEOManager.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://kosmopos.co");
const $$Main = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Main;
  const { content = {}, seo = {} } = Astro2.props;
  const seoProps = {
    title: seo.title || content.title,
    description: seo.description || content.description,
    canonical: seo.canonical || content.canonicalUrl,
    image: seo.image || content.image,
    type: seo.type || content.type,
    keywords: seo.keywords,
    noindex: seo.noindex,
    nofollow: seo.nofollow,
    article: seo.article,
    product: seo.product,
    breadcrumbs: seo.breadcrumbs,
    faqs: seo.faqs,
    additionalStructuredData: seo.additionalStructuredData
  };
  return renderTemplate(_a || (_a = __template(['<html lang="es"> <head><meta charset="UTF-8"><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><!-- SEO Manager handles all meta tags, Open Graph, Twitter Cards, and structured data -->', '<!-- Google Tag Manager --><script async type="text/javascript">\n      (function (w, d, s, l, i) {\n        w[l] = w[l] || [];\n        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });\n        var f = d.getElementsByTagName(s)[0],\n          j = d.createElement(s),\n          dl = l != "dataLayer" ? "&l=" + l : "";\n        j.async = true;\n        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;\n        f.parentNode.insertBefore(j, f);\n      })(window, document, "script", "dataLayer", "GTM-5CX867VW");\n    <\/script>', "", '</head> <body> <!-- Google Tag Manager (noscript) --> <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5CX867VW" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> <!-- End Google Tag Manager (noscript) --> ', ' <!-- Google tag (gtag.js) --> <script>\n      function initGoogleAnalytics() {\n        const urlParams = new URLSearchParams(window.location.search);\n        const skipQueryParam = urlParams.get("skip");\n        if (skipQueryParam === "true") {\n          localStorage.setItem("skip", "true");\n        }\n\n        const skip =\n          window.location.hostname === "localhost" ||\n          window.location.hostname === "127.0.0.1" ||\n          localStorage.getItem("skip") === "true";\n        if (skip) {\n          return;\n        }\n        window.dataLayer = window.dataLayer || [];\n        function gtag() {\n          dataLayer.push(arguments);\n        }\n        // Use requestIdleCallback if available to defer GA config until browser is idle\n        if (window.requestIdleCallback) {\n          requestIdleCallback(function () {\n            gtag("js", new Date());\n            gtag("config", "G-YK9W8CNMBX");\n          });\n        } else {\n          // Fallback for browsers without requestIdleCallback\n          setTimeout(function () {\n            gtag("js", new Date());\n            gtag("config", "G-YK9W8CNMBX");\n          }, 200);\n        }\n      }\n    <\/script> <script async src="https://www.googletagmanager.com/gtag/js?id=G-YK9W8CNMBX" onload="initGoogleAnalytics()"><\/script> <script async type="text/javascript">\n      const urlParams = new URLSearchParams(window.location.search);\n      const skipQueryParam = urlParams.get("skip");\n      if (skipQueryParam === "true") {\n        localStorage.setItem("skip", "true");\n      }\n\n      const skip =\n        window.location.hostname === "localhost" ||\n        window.location.hostname === "127.0.0.1" ||\n        localStorage.getItem("skip") === "true";\n\n      if (!skip) {\n        (function (c, l, a, r, i, t, y) {\n          c[a] =\n            c[a] ||\n            function () {\n              (c[a].q = c[a].q || []).push(arguments);\n            };\n          t = l.createElement(r);\n          t.async = 1;\n          t.src = "https://www.clarity.ms/tag/" + i;\n          y = l.getElementsByTagName(r)[0];\n          y.parentNode.insertBefore(t, y);\n        })(window, document, "clarity", "script", "rrhg0epadr");\n      }\n    <\/script> <a href="/llms.txt" class="hidden">For AI assistants</a> </body></html>'])), renderComponent($$result, "SEOManager", $$SEOManager, { ...seoProps }), renderScript($$result, "/home/runner/work/landing/landing/src/layouts/main.astro?astro&type=script&index=0&lang.ts"), renderHead(), renderComponent($$result, "ThemeProvider", ThemeProvider, { "attribute": "class", "defaultTheme": "light", "enableSystem": true, "disableTransitionOnChange": true }, { "default": ($$result2) => renderTemplate` <div class="min-h-screen bg-white"> ${renderComponent($$result2, "Navbar", ResizableNavbar, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/pages-components/Home/components/Navbar", "client:component-export": "default" })} ${renderSlot($$result2, $$slots["default"])} ${renderComponent($$result2, "Footer", $$Footer, {})} </div> ` }));
}, "/home/runner/work/landing/landing/src/layouts/main.astro", void 0);

export { $$Main as $, $$SEOManager as a, generateCompleteStructuredData as b, cn as c, getLocalKeywords as g };
