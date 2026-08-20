import React from "react";
import Hero from "@/app/components/Hero/Hero";
import Gallery from "@/app/components/Gallery/Gallery";
import Footer from "@/app/components/Footer/Footer";
import styles from "./gallery.module.scss";
import CTA from "@/app/components/CTA/CTA";
import Button from "@/app/components/Button/Button";
import Link from "next/link";
import Seo from "@/app/components/SEO/SEO";

const gallery = () => {
  const images = [
    { thumb: "/images/gallery-1.jpg", full: "/images/gallery-1.jpg" },
    { thumb: "/images/gallery-2.jpg", full: "/images/gallery-2.jpg" },
    { thumb: "/images/gallery-3.jpg", full: "/images/gallery-3.jpg" },
    { thumb: "/images/gallery-4.jpg", full: "/images/gallery-4.jpg" },
    { thumb: "/images/gallery-5.jpg", full: "/images/gallery-5.jpg" },
    { thumb: "/images/gallery-6.jpg", full: "/images/gallery-6.jpg" },
    { thumb: "/images/gallery-7.jpg", full: "/images/gallery-7.jpg" },
    {
      thumb: "/images/imitation-of-rocks-2.jpeg",
      full: "/images/imitation-of-rocks-2.jpeg",
    },
    {
      thumb: "/images/imitation-of-rocks-3.jpeg",
      full: "/images/imitation-of-rocks-3.jpeg",
    },
    {
      thumb: "/images/imitation-of-rocks-4.jpeg",
      full: "/images/imitation-of-rocks-4.jpeg",
    },
    {
      thumb: "/images/imitation-of-rocks-5.jpeg",
      full: "/images/imitation-of-rocks-5.jpeg",
    },
    {
      thumb: "/images/imitation-of-rocks-6.jpeg",
      full: "/images/imitation-of-rocks-6.jpeg",
    },
    {
      thumb: "/images/imitation-of-rocks-7.jpeg",
      full: "/images/imitation-of-rocks-7.jpeg",
    },
    {
      thumb: "/images/imitation-of-rocks-8.jpeg",
      full: "/images/imitation-of-rocks-8.jpeg",
    },
    {
      thumb: "/images/imitation-of-rocks-9.jpeg",
      full: "/images/imitation-of-rocks-9.jpeg",
    },
    {
      thumb: "/images/imitation-of-rocks-25.jpeg",
      full: "/images/imitation-of-rocks-25.jpeg",
    },
    {
      thumb: "/images/imitation-of-rocks-26.jpeg",
      full: "/images/imitation-of-rocks-26.jpeg",
    },
    {
      thumb: "/images/imitation-of-rocks-27.jpeg",
      full: "/images/imitation-of-rocks-27.jpeg",
    },
    {
      thumb: "/images/imitation-of-rocks-28.jpeg",
      full: "/images/imitation-of-rocks-28.jpeg",
    },
    {
      thumb: "/images/imitation-of-rocks-29.jpeg",
      full: "/images/imitation-of-rocks-29.jpeg",
    },
    {
      thumb: "/images/imitation-of-rocks-30.jpeg",
      full: "/images/imitation-of-rocks-30.jpeg",
    },
    {
      thumb: "/images/imitation-of-rocks-31.jpeg",
      full: "/images/imitation-of-rocks-31.jpeg",
    },
    {
      thumb: "/images/imitation-of-rocks-32.jpeg",
      full: "/images/imitation-of-rocks-32.jpeg",
    },
    {
      thumb: "/images/imitation-of-rocks-33.jpeg",
      full: "/images/imitation-of-rocks-33.jpeg",
    },
    {
      thumb: "/images/imitation-of-rocks-34.jpeg",
      full: "/images/imitation-of-rocks-34.jpeg",
    },
    {
      thumb: "/images/imitation-of-rocks-35.jpeg",
      full: "/images/imitation-of-rocks-35.jpeg",
    },
    {
      thumb: "/images/imitation-of-rocks-36.jpeg",
      full: "/images/imitation-of-rocks-36.jpeg",
    },
    {
      thumb: "/images/imitation-of-rocks-37.jpeg",
      full: "/images/imitation-of-rocks-37.jpeg",
    },
    {
      thumb: "/images/imitation-of-rocks-38.jpeg",
      full: "/images/imitation-of-rocks-38.jpeg",
    },
    {
      thumb: "/images/imitation-of-rocks-39.jpeg",
      full: "/images/imitation-of-rocks-39.jpeg",
    },
    {
      thumb: "/images/imitation-of-rocks-40.jpeg",
      full: "/images/imitation-of-rocks-40.jpeg",
    },
    {
      thumb: "/images/imitation-of-rocks-41.jpeg",
      full: "/images/imitation-of-rocks-41.jpeg",
    },
    {
      thumb: "/images/imitation-of-rocks-42.jpeg",
      full: "/images/imitation-of-rocks-42.jpeg",
    },
    {
      thumb: "/images/imitation-of-rocks-43.jpeg",
      full: "/images/imitation-of-rocks-43.jpeg",
    },
    {
      thumb: "/images/wall-relief-1.jpeg",
      full: "/images/wall-relief-1.jpeg",
    },
    {
      thumb: "/images/wall-relief-2.jpeg",
      full: "/images/wall-relief-2.jpeg",
    },
    {
      thumb: "/images/wall-relief-3.jpeg",
      full: "/images/wall-relief-3.jpeg",
    },
    {
      thumb: "/images/wall-relief-4.jpeg",
      full: "/images/wall-relief-4.jpeg",
    },
    {
      thumb: "/images/wall-relief-5.jpeg",
      full: "/images/wall-relief-5.jpeg",
    },
    {
      thumb: "/images/wall-relief-6.jpeg",
      full: "/images/wall-relief-6.jpeg",
    },
    {
      thumb: "/images/wall-relief-10.jpeg",
      full: "/images/wall-relief-10.jpeg",
    },
    {
      thumb: "/images/wall-relief-12.jpeg",
      full: "/images/wall-relief-12.jpeg",
    },
    {
      thumb: "/images/wall-relief-14.jpeg",
      full: "/images/wall-relief-14.jpeg",
    },

    {
      thumb: "/images/wall-relief-20.jpeg",
      full: "/images/wall-relief-20.jpeg",
    },
    {
      thumb: "/images/wall-relief-22.jpeg",
      full: "/images/wall-relief-22.jpeg",
    },
    {
      thumb: "/images/wall-relief-24.jpeg",
      full: "/images/wall-relief-24.jpeg",
    },
    {
      thumb: "/images/wall-relief-26.jpeg",
      full: "/images/wall-relief-26.jpeg",
    },
    {
      thumb: "/images/wall-relief-28.jpeg",
      full: "/images/wall-relief-28.jpeg",
    },

    {
      thumb: "/images/painting-1.jpeg",
      full: "/images/painting-1.jpeg",
    },
    {
      thumb: "/images/painting-2.jpeg",
      full: "/images/painting-2.jpeg",
    },
    {
      thumb: "/images/painting-3.jpeg",
      full: "/images/painting-3.jpeg",
    },
    {
      thumb: "/images/painting-4.jpeg",
      full: "/images/painting-4.jpeg",
    },
    {
      thumb: "/images/painting-5.jpeg",
      full: "/images/painting-5.jpeg",
    },
    {
      thumb: "/images/painting-8.jpeg",
      full: "/images/painting-8.jpeg",
    },
    {
      thumb: "/images/painting-10.jpeg",
      full: "/images/painting-10.jpeg",
    },

    {
      thumb: "/images/painting-12.jpeg",
      full: "/images/painting-12.jpeg",
    },
    {
      thumb: "/images/painting-14.jpeg",
      full: "/images/painting-14.jpeg",
    },
    {
      thumb: "/images/painting-16.jpeg",
      full: "/images/painting-16.jpeg",
    },
    {
      thumb: "/images/painting-20.jpeg",
      full: "/images/painting-20.jpeg",
    },
    {
      thumb: "/images/painting-21.jpeg",
      full: "/images/painting-21.jpeg",
    },

    {
      thumb: "/images/custom-backdrop-1.jpg",
      full: "/images/custom-backdrop-1.jpg",
    },
    {
      thumb: "/images/custom-backdrop-2.jpg",
      full: "/images/custom-backdrop-2.jpg",
    },
    {
      thumb: "/images/custom-backdrop-3.jpg",
      full: "/images/custom-backdrop-3.jpg",
    },
    {
      thumb: "/images/snow-art-work-1.jpg",
      full: "/images/snow-art-work-1.jpg",
    },
    {
      thumb: "/images/snow-art-work-2.jpg",
      full: "/images/snow-art-work-2.jpg",
    },
    {
      thumb: "/images/snow-art-work-3.jpg",
      full: "/images/snow-art-work-3.jpg",
    },
    {
      thumb: "/images/snow-art-work-4.jpg",
      full: "/images/snow-art-work-4.jpg",
    },
    {
      thumb: "/images/halloween-2.jpg",
      full: "/images/halloween-2.jpg",
    },
    {
      thumb: "/images/halloween-3.jpg",
      full: "/images/halloween-3.jpg",
    },
    {
      thumb: "/images/halloween-4.jpg",
      full: "/images/halloween-4.jpg",
    },
    {
      thumb: "/images/halloween-5.jpg",
      full: "/images/halloween-5.jpg",
    },
    {
      thumb: "/images/halloween-6.jpg",
      full: "/images/halloween-6.jpg",
    },
    {
      thumb: "/images/image0.jpeg",
      full: "/images/image0.jpeg",
    },
    {
      thumb: "/images/image1.jpeg",
      full: "/images/image1.jpeg",
    },
    {
      thumb: "/images/image2.jpeg",
      full: "/images/image2.jpeg",
    },
    {
      thumb: "/images/image3.jpeg",
      full: "/images/image3.jpeg",
    },
    {
      thumb: "/images/image4.jpeg",
      full: "/images/image4.jpeg",
    },
    {
      thumb: "/images/image5.jpeg",
      full: "/images/image5.jpeg",
    },
    {
      thumb: "/images/image6.jpeg",
      full: "/images/image6.jpeg",
    },
    {
      thumb: "/images/image7.jpeg",
      full: "/images/image7.jpeg",
    },
    {
      thumb: "/images/image8.jpeg",
      full: "/images/image8.jpeg",
    },
    {
      thumb: "/images/image9.png",
      full: "/images/image9.png",
    },

    {
      thumb: "/images/image11.jpeg",
      full: "/images/image11.jpeg",
    },
    {
      thumb: "/images/image12.png",
      full: "/images/image12.png",
    },

    {
      thumb: "/images/image14.jpeg",
      full: "/images/image14.jpeg",
    },
    {
      thumb: "/images/image15.png",
      full: "/images/image15.png",
    },
    {
      thumb: "/images/image16.jpeg",
      full: "/images/image16.jpeg",
    },
    {
      thumb: "/images/image17.png",
      full: "/images/image17.png",
    },
    {
      thumb: "/images/image18.jpeg",
      full: "/images/image18.jpeg",
    },
    {
      thumb: "/images/image19.jpeg",
      full: "/images/image19.jpeg",
    },
    {
      thumb: "/images/image20.jpeg",
      full: "/images/image20.jpeg",
    },
    {
      thumb: "/images/image21.jpeg",
      full: "/images/image21.jpeg",
    },
    {
      thumb: "/images/image22.png",
      full: "/images/image22.png",
    },
    {
      thumb: "/images/image23.jpeg",
      full: "/images/image23.jpeg",
    },
    {
      thumb: "/images/image24.jpeg",
      full: "/images/image24.jpeg",
    },
    {
      thumb: "/images/image25.jpeg",
      full: "/images/image25.jpeg",
    },
    {
      thumb: "/images/image26.jpeg",
      full: "/images/image26.jpeg",
    },
    {
      thumb: "/images/image27.jpeg",
      full: "/images/image27.jpeg",
    },
    {
      thumb: "/images/image28.jpeg",
      full: "/images/image28.jpeg",
    },
    {
      thumb: "/images/image29.jpeg",
      full: "/images/image29.jpeg",
    },
    {
      thumb: "/images/image30.jpeg",
      full: "/images/image30.jpeg",
    },
    {
      thumb: "/images/image31.jpeg",
      full: "/images/image31.jpeg",
    },
    {
      thumb: "/images/image32.jpeg",
      full: "/images/image32.jpeg",
    },
    {
      thumb: "/images/image33.jpeg",
      full: "/images/image33.jpeg",
    },
    {
      thumb: "/images/image34.jpeg",
      full: "/images/image34.jpeg",
    },
    {
      thumb: "/images/image35.png",
      full: "/images/image35.png",
    },
    {
      thumb: "/images/image36.jpeg",
      full: "/images/image36.jpeg",
    },
    {
      thumb: "/images/image37.jpeg",
      full: "/images/image37.jpeg",
    },
    {
      thumb: "/images/image38.jpeg",
      full: "/images/image38.jpeg",
    },
    {
      thumb: "/images/image39.jpeg",
      full: "/images/image39.jpeg",
    },
    {
      thumb: "/images/image40.jpeg",
      full: "/images/image40.jpeg",
    },
  ];

  const title = "Luxury Wall Art & Custom Wall Decor Gallery in Boston";
  const description =
    "View our gallery of luxury wall art and custom wall decor projects in Boston. Art Decor Boston delivers modern and decorative wall art that transforms interiors.";
  const canonical = "https://artdecorboston.com/gallery";
  const keywords =
    "wall art, luxury home decor, modern home decor, decorative wall art, custom wall decor, 3D wall art";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Art Decor Boston",
    url: canonical,
    logo: "https://artdecorboston.com/images/art-decor-boston-logo.png",
    telephone: "+1 978 788 3652",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Boston",
      addressRegion: "MA",
      addressCountry: "US",
    },
  };
  return (
    <>
      <Seo
        title={title}
        description={description}
        keywords={keywords}
        canonical={canonical}
        ogImage="https://artdecorboston.com/images/gallery-hero.jpg"
        jsonLd={jsonLd}
      />
      <Hero
        image="/images/gallery-hero.jpg"
        title="OUR GALLERY"
        subtitle={
          <>
            Every wall has a story, explore our unique works that transform your
            spaces.
          </>
        }
        size="medium"
      ></Hero>
      <div className={styles.galleryContainer}>
        <Gallery images={images} />
      </div>
      <CTA
        title="Ready to transform your space?"
        description="Lets create something extraordinary together. Contact us today for a consultation."
      >
        <Link href="/contact">
          <Button variant="cta">CONTACT US</Button>
        </Link>
      </CTA>
      <Footer />
    </>
  );
};

export default gallery;
