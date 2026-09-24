import Image from "next/image";
import styles from "./about.module.scss";
import Button from "@/app/components/Button/Button";
import Footer from "@/app/components/Footer/Footer";
import Hero from "@/app/components/Hero/Hero";
import CTA from "@/app/components/CTA/CTA";
import Link from "next/link";
import Seo from "@/app/components/SEO/SEO";

export default function AboutUs() {
  const title = "About Art Decor Boston | Decorative Finishes in Boston, MA";
  const description =
    "Learn about Art Decor Boston, a decorative finishes company based in Beverly, MA. We create microcement, Venetian plaster, rock imitation, decorative painting, and mural relief for clients in Boston and surrounding areas.";
  const canonical = "https://artdecorboston.com/about";
  const keywords =
    "Art Decor Boston, decorative finishes Boston, microcement Boston, Venetian plaster Boston, rock imitation Boston, decorative painting Boston, mural relief Boston";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Art Decor Boston",
    url: canonical,
    logo: "https://artdecorboston.com/images/art-decor-boston-logo.png",
    telephone: "+1 978 788 3652",
    address: {
      "@type": "PostalAddress",
      streetAddress: "14 Lothrop St",
      addressLocality: "Beverly",
      addressRegion: "MA",
      postalCode: "01915",
      addressCountry: "US",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Boston",
      },
      {
        "@type": "City",
        name: "Beverly",
      },
    ],
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
              At Art Decor Boston, we transform interior and exterior spaces
              through artistic craftsmanship and high-quality decorative
              finishes. Based in Beverly, Massachusetts, we serve homeowners,
              businesses, and commercial spaces throughout Boston and
              surrounding areas.
            </p>
            <p>
              Our services include microcement, venetian plaster, decorative
              painting, rock imitation, and custom mural relief, combining
              texture, color, and craftsmanship to create distinctive spaces.
            </p>
            <p>
              Every project is tailored to the client's vision and style. From
              modern microcement finishes to timeless venetian plaster,
              realistic rock imitation, and custom decorative artwork, we create
              surfaces that bring character and individuality to every space.
            </p>
            <p>
              Our goal is simple: to transform ordinary surfaces into
              distinctive works of art through quality craftsmanship, attention
              to detail, and creative design.
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
