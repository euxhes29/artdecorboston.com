import React from "react";
import styles from "./CTA.module.scss";

const CTA = ({ title, description, children }) => (
  <section className={styles.cta}>
    <h2>{title}</h2>
    <p>{description}</p>
    {children}
  </section>
);

export default CTA;
