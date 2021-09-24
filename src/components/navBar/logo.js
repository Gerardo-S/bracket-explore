import React from "react";

// Render inline SVG with fallback non-svg images
export default function Logo({ logoData }) {
  if (logoData.file.contentType === "image/svg+xml") {
    if (logoData && logoData.content) {
      // Inlined SVGs
      return <div dangerouslySetInnerHTML={{ __html: logoData.content }} />;
    }

    // SVGs that can/should not be inlined
    return <img src={logoData.file.url} alt={logoData.file.fileName} />;
  }

  // Non SVG images
  return <img fluid={logoData.fluid} alt={logoData.file.fileName} />;
}
