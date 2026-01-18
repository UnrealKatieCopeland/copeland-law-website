/**
 * SEO Head Component
 * Provides reusable meta tags for SEO and social sharing
 */

import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
}

export default function SEOHead({ 
  title, 
  description, 
  path, 
  type = "website",
  image = "/images/CopelandLawLetterheadLogo.png"
}: SEOHeadProps) {
  const fullTitle = `${title} | Copeland Law`;
  const url = `https://copelandlawtexas.com${path}`;
  const fullImage = image.startsWith("http") ? image : `https://copelandlawtexas.com${image}`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let tag = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }
      
      tag.setAttribute("content", content);
    };

    // Standard meta tags
    updateMetaTag("description", description);
    
    // Open Graph tags
    updateMetaTag("og:title", fullTitle, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:url", url, true);
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:image", fullImage, true);
    updateMetaTag("og:site_name", "Copeland Law", true);
    
    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", fullTitle);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", fullImage);
    
  }, [fullTitle, description, url, type, fullImage]);

  return null;
}
