import Head from "next/head";
import PropTypes from "prop-types";

export default function Seo({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  jsonLd,
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:type" content="website" />
      {canonical && <meta property="og:url" content={canonical} />}

      {/* Twitter card */}
      <meta name="twitter:card" content="summary_large_image" />

      {/* Structured data JSON-LD */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </Head>
  );
}

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  canonical: PropTypes.string,
  ogImage: PropTypes.string,
  jsonLd: PropTypes.object,
};
