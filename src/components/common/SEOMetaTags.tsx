
import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
  canonicalUrl?: string;
  robots?: string;
  articlePublishedTime?: string;
  structuredData?: Record<string, unknown>;
}

const SEOMetaTags: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogType = 'website',
  ogImage = 'https://www.gomosivant.com/og-home.png',
  canonicalUrl,
  robots = 'index, follow',
  articlePublishedTime,
  structuredData,
}) => {
  const siteName = 'Mosivant';
  const twitterHandle = '@mosivant';
  const resolvedUrl =
    canonicalUrl || (typeof window !== 'undefined' ? window.location.href : undefined);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      {resolvedUrl && <meta property="og:url" content={resolvedUrl} />}
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Article metadata */}
      {articlePublishedTime && (
        <meta property="article:published_time" content={articlePublishedTime} />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Robots */}
      <meta name="robots" content={robots} />

      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOMetaTags;
