import servicesData from "@/data/servicesData";
import styles from "./[slug].module.scss";
import Hero from "@/app/components/Hero/Hero";
import Gallery from "@/app/components/Gallery/Gallery";
import Footer from "@/app/components/Footer/Footer";

export async function getStaticPaths() {
  const paths = servicesData.map((s) => ({ params: { slug: s.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const service = servicesData.find((s) => s.slug === params.slug);
  return { props: { service } };
}

export default function ServicePage({ service }) {
  return (
    <>
      <Hero
        image={service.image}
        title={service.title}
        subtitle={service.heroSubtitle}
      />
      <div className={styles.container}>
        <Gallery images={service.projects} />
      </div>
      <Footer />
    </>
  );
}
