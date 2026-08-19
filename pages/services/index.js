import Image from "next/image";
import styles from "./services.module.scss";
import Card from "@/app/components/Cards/ServicesCards/Card";
import Footer from "@/app/components/Footer/Footer";
import Hero from "@/app/components/Hero/Hero";
import servicesData from "@/data/servicesData";
import CTA from "@/app/components/CTA/CTA";
import Button from "@/app/components/Button/Button";
import Link from "next/link";
import Seo from "@/app/components/SEO/SEO";

export default function Services() {
  const title = "Custom Wall Art & Decorative Wall Design Services in Boston";
  const description =
    "Explore Art Decor Boston's services: custom wall art, decorative wall design, 3D wall art, and modern home decor. Professional wall decor solutions in Boston.";
  const canonical = "https://artdecorboston.com/services";
  const keywords =
    "custom wall art, custom wall decor, decorative wall art, 3D wall art, wall decor, interior design";

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
        ogImage="https://artdecorboston.com/images/image17.jpeg"
        jsonLd={jsonLd}
      />
      <Hero
        image="/images/image17.jpeg"
        title="OUR SERVICES"
        subtitle="Delivering personalized interior and decor services tailored to your style and vision."
      ></Hero>
      <div className={styles.servicesContainer}>
        <div className={styles.servicesTitle}>
          <h2>What We Offer</h2>
        </div>
        {/* Services Cards */}
        <div className={styles.servicesGrid}>
          {servicesData.map((service) => (
            <Card
              key={service.slug}
              image={service.image}
              title={service.title}
              description={service.description}
              slug={service.slug}
            />
          ))}
        </div>
      </div>

      {/* Features / Icons */}
      <section className={styles.workProcess}>
        <div className={styles.workFlex}>
          {/* Foto Majtas */}
          <div className={styles.workImage}>
            <Image
              src="/images/imitation-of-rocks-20.jpeg"
              alt="Work Process"
              fill
              className={styles.image}
            />
          </div>

          {/* Hapat Djathtas */}
          <div className={styles.workSteps}>
            <h2>Our Work Process</h2>

            <div className={styles.step}>
              <div className={styles.icon}>
                {/* Ikonë SVG line */}
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div>
                <h3>Consultation</h3>
                <p>We discuss your space, style, needs, and ideas.</p>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.icon}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="14" rx="2" ry="2" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                  <path d="M8 21h8" />
                </svg>
              </div>
              <div>
                <h3>Visual Concept</h3>
                <p>We create a visual plan, sketches, or design preview.</p>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.icon}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20l9-4-9-4-9 4 9 4z" />
                  <path d="M12 12l9-4-9-4-9 4 9 4z" />
                </svg>
              </div>
              <div>
                <h3>Artwork Creation</h3>
                <p>We start the artistic work on your wall or canvas.</p>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.icon}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <h3>Final Delivery</h3>
                <p>We finalize details and present the finished artwork.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us*/}
      <section className={styles.section}>
        <div className={styles.wrapper}>
          {/* LEFT SIDE */}
          <div className={styles.left}>
            <h2 className={styles.title}>Why Choose Us</h2>

            <div className={styles.list}>
              <div className={styles.item}>
                <div className={styles.dot}>01</div>
                <p>Unique handcrafted artwork</p>
              </div>

              <div className={styles.item}>
                <div className={styles.dot}>02</div>
                <p>Premium materials</p>
              </div>

              <div className={styles.item}>
                <div className={styles.dot}>03</div>
                <p>Fast delivery time</p>
              </div>

              <div className={styles.item}>
                <div className={styles.dot}>04</div>
                <p>3D & mural specialists</p>
              </div>

              <div className={styles.item}>
                <div className={styles.dot}>05</div>
                <p>Custom designs for any style</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className={styles.right}>
            <div className={styles.imageBox}>
              <Image
                src="/images/fireplace decoration.jpg"
                alt="Professional mural work"
                fill
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </section>

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
}
