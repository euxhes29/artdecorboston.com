import Image from "next/image";
import styles from "./about.module.scss";
import Button from "@/app/components/Button/Button";
import Footer from "@/app/components/Footer/Footer";
import Hero from "@/app/components/Hero/Hero";
import CTA from "@/app/components/CTA/CTA";
import Link from "next/link";
import Seo from "@/app/components/SEO/SEO";

export default function AboutUs() {
  const title =
    "About Art Decor Boston | Custom Wall Art & Interior Design Experts";
  const description =
    "Learn about Art Decor Boston, the leading custom wall art and interior design experts. Our team creates decorative wall art and modern home decor for Boston homes.";
  const canonical = "https://artdecorboston.com/about";
  const keywords =
    "about Art Decor Boston, interior design, custom wall decor, decorative wall art, wall art, modern home decor";

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
        ogImage="https://artdecorboston.com/images/about.jpeg"
        jsonLd={jsonLd}
      />
      <Hero
        image="/images/about.jpeg"
        title="ABOUT US"
        subtitle="Designing spaces that reflect your personality and elevate everyday living."
        size="medium"
      ></Hero>
      <div className={styles.aboutUsPage}>
        {/* Who We Are */}
        <section className={styles.section}>
          <div className={styles.image}>
            <Image
              src="/images/who-are-we-image.jpg"
              alt="Who We Are"
              width={600}
              height={400}
              className={styles.img}
            />
          </div>
          <div className={styles.text}>
            <h2>Who Are We?</h2>
            <p>
              At Art Decor Boston, we believe that every space has a story to
              tell. Founded in the heart of Boston, our company blends
              creativity, functionality, and artistry to craft environments that
              inspire and delight.
            </p>
            <p>
              With years of experience in interior design, we specialize in
              transforming homes, offices, and public spaces into places that
              reflect personality, style, and purpose. Each project is
              approached with meticulous attention to detail, innovative
              solutions, and a passion for excellence.
            </p>
            <p>
              Our team sees design as more than decoration—it’s an opportunity
              to enhance life and create memorable experiences for everyone who
              enters the space.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className={styles.missionVisionContainer}>
          <div className={styles.missionVision}>
            <div className={styles.missionContent}>
              <h3>Our Mission</h3>
              <p>
                To create environments that combine aesthetic beauty with
                functional design, reflecting the individuality and vision of
                our clients. We aim to elevate everyday spaces into inspiring,
                comfortable, and memorable places.
              </p>
            </div>
            <div className={styles.visionContent}>
              <h3>Our Vision</h3>
              <p>
                To be recognized as a leading interior design and decor company
                in Boston, known for innovative designs, uncompromising quality,
                and sustainable, timeless solutions. We aspire to set new
                standards in the world of interior design while staying true to
                our artistic roots.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className={styles.values}>
          <h3>Our Values</h3>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <Image
                  src="/images/creativity.png"
                  alt="Art Decor Boston"
                  width={60}
                  height={60}
                  loading="lazy"
                />
              </div>
              <h4>Creativity</h4>
              <p>
                We develop original concepts that bring life and personality to
                every project.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <Image
                  src="/images/quality.png"
                  alt="Art Decor Boston"
                  width={60}
                  height={60}
                  loading="lazy"
                />
              </div>
              <h4>Quality</h4>
              <p>
                Excellence is our standard, from materials to craftsmanship.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <Image
                  src="/images/trust.png"
                  alt="Art Decor Boston"
                  width={60}
                  height={60}
                  loading="lazy"
                />
              </div>
              <h4>Trust</h4>
              <p>
                We cultivate honest, transparent, and lasting relationships with
                our clients.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <Image
                  src="/images/innovation.png"
                  alt="Art Decor Boston"
                  width={60}
                  height={60}
                  loading="lazy"
                />
              </div>
              <h4>Innovation</h4>
              <p>
                We constantly explore new techniques, trends, and solutions.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <Image
                  src="/images/passion.png"
                  alt="Art Decor Boston"
                  width={60}
                  height={60}
                  loading="lazy"
                />
              </div>
              <h4>Passion</h4>
              <p>
                Every project is a labor of love, executed with dedication and
                care.
              </p>
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <CTA
          title="Ready to transform your space?"
          description="Lets create something extraordinary together. Contact us today for a consultation."
        >
          <Link href="/contact">
            <Button variant="cta">CONTACT US</Button>
          </Link>
        </CTA>
      </div>
      <Footer />
    </>
  );
}
