import { useEffect } from "react";

type SEOProps = {
  title: string;
  description?: string;
  canonical?: string;
};

export const SEO = ({ title, description = "Course dashboard", canonical }: SEOProps) => {
  useEffect(() => {
    document.title = title;
    const setMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };
    setMeta("description", description);

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonical || window.location.href;
  }, [title, description, canonical]);

  return null;
};
