import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, u as unescapeHTML, m as maybeRenderHead } from './astro/server.BcuEOnZl.js';
import { $ as $$Image } from './astro_assets.B77CA0z6.js';
/* empty css                             */
import { B as Button } from './button.CxT7L4zk.js';
import { ArrowRight } from 'lucide-react';

function validateAltText(alt, context) {
  const errors = [];
  const warnings = [];
  const suggestions = [];
  if (!alt || alt.trim().length === 0) {
    errors.push("Alt text is required for SEO and accessibility");
    suggestions.push("Add descriptive alt text that explains what the image shows");
    return { isValid: false, errors, warnings, suggestions };
  }
  const trimmedAlt = alt.trim();
  if (trimmedAlt.length > 125) {
    warnings.push(`Alt text is ${trimmedAlt.length} characters long. Consider keeping it under 125 characters`);
    suggestions.push("Shorten alt text while maintaining descriptive value");
  }
  if (trimmedAlt.length < 10) {
    warnings.push("Alt text is very short. Consider adding more descriptive details");
    suggestions.push("Include relevant details about the image content");
  }
  const redundantPhrases = [
    "image of",
    "picture of",
    "photo of",
    "graphic of",
    "illustration of",
    "screenshot of"
  ];
  const lowerAlt = trimmedAlt.toLowerCase();
  const foundRedundant = redundantPhrases.filter((phrase) => lowerAlt.includes(phrase));
  if (foundRedundant.length > 0) {
    warnings.push(`Alt text contains redundant phrases: ${foundRedundant.join(", ")}`);
    suggestions.push('Remove redundant phrases like "image of" or "picture of"');
  }
  const genericTexts = [
    "image",
    "picture",
    "photo",
    "graphic",
    "logo",
    "icon",
    "banner"
  ];
  if (genericTexts.includes(lowerAlt)) {
    warnings.push("Alt text is too generic");
    suggestions.push("Use more specific, descriptive alt text");
  }
  if (context) {
    if (context === "logo" && !lowerAlt.includes("logo")) {
      suggestions.push('Consider including "logo" in the alt text for brand images');
    }
    if (context === "product" && !lowerAlt.includes("kosmo") && !lowerAlt.includes("pos")) {
      suggestions.push("Consider including product name or brand in alt text");
    }
  }
  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    suggestions
  };
}
function generateSizes(breakpoints) {
  const defaultBreakpoints = {
    "(max-width: 640px)": "100vw",
    "(max-width: 768px)": "90vw",
    "(max-width: 1024px)": "80vw",
    "(max-width: 1280px)": "70vw",
    "default": "60vw"
  };
  const sizes = breakpoints || defaultBreakpoints;
  const sizeEntries = Object.entries(sizes);
  const sizeStrings = sizeEntries.filter(([key]) => key !== "default").map(([media, size]) => `${media} ${size}`);
  const defaultSize = sizes.default || "100vw";
  sizeStrings.push(defaultSize);
  return sizeStrings.join(", ");
}
function getImageAttributes(src, options, context) {
  const validation = validateAltText(options.alt, context);
  if (!validation.isValid) {
    console.warn("Image SEO Warning:", validation.errors.join(", "));
  }
  if (validation.warnings.length > 0) {
    console.info("Image SEO Suggestions:", validation.warnings.join(", "));
  }
  const baseAttributes = {
    alt: options.alt,
    loading: options.loading || (options.priority ? "eager" : "lazy"),
    decoding: options.priority ? "sync" : "async",
    title: ""
  };
  if (options.title) {
    baseAttributes.title = options.title;
  }
  switch (context) {
    case "hero":
      return {
        ...baseAttributes,
        loading: "eager",
        decoding: "sync",
        fetchpriority: "high",
        sizes: options.sizes || generateSizes({
          "(max-width: 640px)": "100vw",
          "(max-width: 1024px)": "100vw",
          "default": "100vw"
        })
      };
    case "logo":
      return {
        ...baseAttributes,
        loading: "eager",
        decoding: "sync",
        sizes: options.sizes || "200px"
      };
    case "thumbnail":
      return {
        ...baseAttributes,
        sizes: options.sizes || generateSizes({
          "(max-width: 640px)": "150px",
          "(max-width: 768px)": "200px",
          "default": "250px"
        })
      };
    case "product":
      return {
        ...baseAttributes,
        sizes: options.sizes || generateSizes({
          "(max-width: 640px)": "100vw",
          "(max-width: 768px)": "50vw",
          "default": "33vw"
        })
      };
    default:
      return {
        ...baseAttributes,
        sizes: options.sizes || generateSizes()
      };
  }
}

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro = createAstro("https://kosmopos.co");
const $$OptimizedImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$OptimizedImage;
  const {
    src,
    alt,
    title,
    width,
    height,
    sizes = "(min-width: 1024px) 1024px, 100vw",
    loading = "lazy",
    priority = false,
    class: className = "",
    style = "",
    imageType = "thumbnail",
    format = "auto",
    quality,
    layout
  } = Astro2.props;
  const imageAttributes = getImageAttributes(
    src,
    {
      alt,
      title,
      priority,
      loading: priority ? "eager" : loading},
    imageType
  );
  const finalWidth = width || imageAttributes.width;
  const finalHeight = height || imageAttributes.height;
  const finalLoading = priority ? "eager" : loading;
  const fetchPriority = priority ? "high" : void 0;
  const classNames = `optimized-image ${imageType} ${className}`.trim();
  return renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": src, "alt": imageAttributes.alt, "title": imageAttributes.title || title, "width": finalWidth, "height": finalHeight, "sizes": sizes, "loading": finalLoading, "fetchpriority": fetchPriority, "class": classNames, "style": style, "layout": layout, "format": format !== "auto" ? format : "webp", "quality": quality || (imageType === "hero" || imageType === "product" ? 85 : 80) })} <!-- Add structured data for the image if it's important enough --> ${(priority || imageType === "hero" || imageType === "product") && renderTemplate(_a$1 || (_a$1 = __template$1(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org/",
    "@type": "ImageObject",
    contentUrl: typeof src === "string" ? src : src.src,
    name: title || alt,
    description: alt,
    width: finalWidth,
    height: finalHeight,
    representativeOfPage: imageType === "hero" ? true : void 0,
    caption: title || void 0,
    inLanguage: "es"
  })))}`;
}, "/home/runner/work/landing/landing/src/components/SEO/OptimizedImage.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$MobileCallToAction = createComponent(($$result, $$props, $$slots) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kosmo POS",
    url: "https://kosmopos.co",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://api.whatsapp.com/send?phone=573043232171&text=Hola,%20quiero%20ver%20una%20demo%20de%20Kosmo",
      query: "Solicitar demo gratis de Kosmo POS"
    }
  };
  return renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script> ", '<nav class="flex md:hidden fixed bottom-0 left-0 right-0 bg-white py-4 px-5 border-t border-gray-200 z-50" aria-label="Acceso r\xE1pido a solicitud de demo"> <a href="https://api.whatsapp.com/send?phone=573043232171&text=Hola,%20quiero%20ver%20una%20demo%20de%20Kosmo" target="_blank" rel="noopener noreferrer nofollow" aria-label="Solicitar una demo gratuita de Kosmo POS por WhatsApp. Se abrir\xE1 en una nueva pesta\xF1a." title="Solicita una demo gratuita de Kosmo POS" class="cursor-pointer w-full" data-cta="mobile-demo-request" itemscope itemtype="https://schema.org/ContactPoint"> <meta itemprop="contactType" content="customer service"> <meta itemprop="availableLanguage" content="es"> <meta itemprop="telephone" content="+573043232171"> ', " </a> </nav>"])), unescapeHTML(JSON.stringify(structuredData)), maybeRenderHead(), renderComponent($$result, "Button", Button, { "id": "cta-mobile-demo-request", "size": "lg", "className": "cursor-pointer bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3 w-full", "aria-label": "Solicitar demostraci\xF3n gratuita del sistema POS" }, { "default": ($$result2) => renderTemplate` <span itemprop="name">Solicitar demo gratis</span> ${renderComponent($$result2, "ArrowRight", ArrowRight, { "className": "ml-2 w-5 h-5", "aria-hidden": "true" })} ` }));
}, "/home/runner/work/landing/landing/src/pages-components/Home/components/MobileCallToAction.astro", void 0);

export { $$OptimizedImage as $, $$MobileCallToAction as a, getImageAttributes as g };
