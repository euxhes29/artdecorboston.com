import React from "react";
import Image from "next/image";
import styles from "./Card.module.scss";
import Button from "../../Button/Button";
import Link from "next/link";

const Card = ({ image, title, description, slug }) => {
  return (
    <div className={styles.imageCardComponent}>
      <div className={styles.cardImage}>
        <Image src={image} alt={title} width={400} height={250} />
      </div>
      <div className={styles.contentText}>
        <h4>{title}</h4>
        <p className={styles.cardText}>{description}</p>
        <div className={styles.cardBtn}>
          <Link href={`/services/${slug}`} passHref>
            <Button variant="text" className={styles.subscribeBtn}>
              <p data-text="VIEW PROJECTS">VIEW PROJECTS</p>
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
    </div>
  );
};

export default Card;
