// components/TawkToWidget.tsx
"use client";
import { useEffect } from "react";

export const TawkToWidget = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (document.getElementById("tawk-script")) return; // prevent multiple insertions

    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/686cea4f0e5aac190f249520/1ivkn6i73";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    script.id = "tawk-script";

    document.body.appendChild(script);

    return () => {
      document.getElementById("tawk-script")?.remove();
    };
  }, []);

  return null; // No visible component, just loads the widget
};
