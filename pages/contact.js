import React, { useState } from "react";
import styles from "./contact.module.scss";
import Hero from "@/app/components/Hero/Hero";
import Footer from "@/app/components/Footer/Footer";
import Seo from "@/app/components/SEO/SEO";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent!");
  };

  const title = "Contact Art Decor Boston | Decorative Finishes in Boston, MA";
  const description =
    "Contact Art Decor Boston for microcement, Venetian plaster, rock imitation, decorative painting, and mural relief projects in Boston and surrounding Massachusetts areas.";
  const canonical = "https://artdecorboston.com/contact";
  const keywords =
    "contact Art Decor Boston, decorative finishes Boston, microcement Boston, Venetian plaster Boston, wall finishes Boston";

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
        ogImage="https://artdecorboston.com/images/gallery-5.jpg"
        jsonLd={jsonLd}
      />
      <Hero
        image="/images/gallery-5.jpg"
        title="CONTACT US"
        subtitle="We are always here for you for any questions."
        size="medium"
      ></Hero>
      <div className={styles.contact}>
        <div className={styles.contactContainer}>
          <h2>Send a Message</h2>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Contact;
