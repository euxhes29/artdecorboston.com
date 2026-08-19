import React from "react";
import styles from "./Hero.module.scss";
import Image from "next/image";

const Hero = ({ image, title, subtitle, children, size = "medium" }) => {
  return (
    <div className={styles.section}>
      <div className={`${styles.heroContainer} ${styles[size]}`}>
        <div className={styles.heroFlex}>
          <div className={styles.heroFirstHalf}>
            <div className={styles.heroContent}>
              {title && <h1 className={styles.heroTitle}>{title}</h1>}
              {subtitle && <p className={styles.heroSubtitle}>{subtitle}</p>}
              {children}
            </div>
          </div>
          <div className={styles.heroSecondHalf}>
            <div className={styles.heroImage}>
              <Image
                src={image}
                alt={title || "Hero image"}
                fill
                priority
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
