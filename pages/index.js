import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import Button from "@/app/components/Button/Button";
import Carousel from "@/app/components/Carousel/Carousel";
import Footer from "@/app/components/Footer/Footer";
import Card from "@/app/components/Cards/ServicesCards/Card";
import Hero from "@/app/components/Hero/Hero";
import Link from "next/link";
import Seo from "@/app/components/SEO/SEO";

const Home = () => {
  const title = "Custom Wall Art & Home Decor in Boston | Art Decor Boston";
  const description =
    "Discover custom wall art, luxury home decor, and 3D wall designs in Boston with Art Decor Boston. Transform your walls into stunning masterpieces today.";
  const canonical = "https://artdecorboston.com";
  const keywords =
    "home decor, wall decor, wall art, luxury home decor, custom wall art, modern home decor, 3D wall art";

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
        ogImage="https://artdecorboston.com/images/hero.jpg"
        jsonLd={jsonLd}
      />
      <Hero
        image="/images/hero.jpg"
        title="Art Decor Boston"
        subtitle={
          <>
            Microcement · Venetian Plaster · Rock Imitation · Painting · Mural
            Relief & More
          </>
        }
        size="large"
      >
        <div className={styles.heroBtn}>
          <Link href="https://wa.link/fnuxwt">
            <Button variant="primary">CONTACT US</Button>
          </Link>
        </div>
      </Hero>

      <div className={styles.aboutUsContainer}>
        <div className={styles.whoAreWe}>
          <div className={styles.whoAreWeFlex}>
            <div className={styles.whoAreWeImage}>
              <Image
                src="/images/gallery-6.jpg"
                alt="Art Decor Boston"
                fill
                priority
              />
            </div>
            <div className={styles.imageFlex}>
              <div className={styles.image1}>
                <Image
                  src="/images/our-values.jpg"
                  alt="Art Decor Boston"
                  fill
                  priority
                />
              </div>
              <div className={styles.image2}>
                <Image
                  src="/images/passion-for-decor.jpg"
                  alt="Art Decor Boston"
                  fill
                  priority
                />
              </div>
            </div>
          </div>
          <div className={styles.whoAreWeText}>
            <div className={styles.aboutUsTitle}>
              <p>ABOUT US</p>
              <h2>Who Are We?</h2>
            </div>
            <p>
              At Art Decor Boston we combine art and functionality to bring life
              to any space. Based in Boston and with a deep passion for interior
              design, we offer creative and personalized solutions for homes,
              offices and public spaces.
            </p>
            <p>
              Our creations are inspired by modern and classic aesthetics,
              always maintaining a unique identity that reflects the client's
              desires and style. Every project for us is an opportunity to bring
              something special and unforgettable.
            </p>
            <div className={styles.aboutUsBtn}>
              <Link href="/about">
                <Button variant="ghost">MORE ABOUT US</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.ourServicesContainer}>
        <div className={styles.ourServicesHeader}>
          <div className={styles.ourServicesTitle}>
            <h2>Our Services</h2>
          </div>
          <div className={styles.ourServicesBtn}>
            <Link href="/services">
              <Button variant="text" className={styles.subscribeBtn}>
                <p data-text="VIEW MORE">VIEW MORE</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
        <div className={styles.ourServicesCards}>
          <Card
            image="/images/imitation-of-rocks.jpg"
            title="IMITATION OF ROCKS"
            description="A sophisticated technique that replicates the natural beauty of
              stone, offering a durable and artistic alternative for interior
              and exterior surfaces."
            slug="imitation-of-rocks"
          />

          <Card
            image="/images/wall-relief-1.jpeg"
            title="RELIEF WALL"
            description="A three-dimensional decorative art form that adds texture and
              depth to walls, transforming flat surfaces into elegant visual
              statements."
            slug="wall-relief"
          />

          <Card
            image="/images/painting.jpg"
            title="PAINTING"
            description="Add elegance and depth to your interiors with carefully selected
              paintings that complement your space and style."
            slug="painting"
          />
        </div>
      </div>

      <div className={styles.gallery}>
        <div className={styles.galleryTitle}>
          <p>OUR GALLERY</p>
          <h2>Images That Reflect Our Passion And Quality</h2>
        </div>
        <Carousel />
        <div className={styles.galleryBtn}>
          <Link href="/gallery">
            <Button variant="ghost">VIEW GALLERY</Button>
          </Link>
        </div>
      </div>
      <div className={styles.testimonials}>
        <div className={styles.testimonialsTitle}>
          <p>TESTIMONIALS</p>
          <h2>What Our Happy User Says</h2>
        </div>
        <div className={styles.testimonialsCardsGroup}>
          <div className={styles.testimonialsCard}>
            <div className={styles.author}>
              <div className={styles.authorImage}>
                <img src="/images/person_1.jpg" alt="" />
              </div>
              <div className={styles.authorName}>
                <h4>Sabo Masties</h4>
                <p>Software Engineer</p>
              </div>
            </div>
            <div className={styles.authorComment}>
              <p>
                “The staff is kind and very creative. My chimney looks like an
                art installation now. I am very pleased with their work!”
              </p>
            </div>
          </div>
          <div className={styles.testimonialsCard}>
            <div className={styles.author}>
              <div className={styles.authorImage}>
                <img src="/images/person_2.jpg" alt="" />
              </div>
              <div className={styles.authorName}>
                <h4>William Smith</h4>
                <p>Bar Owner</p>
              </div>
            </div>
            <div className={styles.authorComment}>
              <p>
                "I was looking for something unique for the entrance of my bar,
                and they did it better than I could have imagined. Our clients
                always mention the decor!"
              </p>
            </div>
          </div>
          <div className={styles.testimonialsCard}>
            <div className={styles.author}>
              <div className={styles.authorImage}>
                <img src="/images/person_4.jpg" alt="" />
              </div>
              <div className={styles.authorName}>
                <h4>Larry Diamond</h4>
                <p>Chief Executive Officer</p>
              </div>
            </div>
            <div className={styles.authorComment}>
              <p>
                "The dedication and detail that Art Decor Boston offers is on
                another level. They don't just make decor they make art!"
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
