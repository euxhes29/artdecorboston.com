import React from "react";
import styles from "./Footer.module.scss";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerAbout}>
          <div className={styles.footerLogo}>
            <img src="/images/art-decor-boston-logo.png" alt="" />
          </div>
          <div className={styles.description}>
            <p id="about-us">
              Experts in mural relief, imitation rocks and fireplaces, as well
              as personalized artistic paintings, bringing elegance and unique
              identity to any space.
            </p>
          </div>
          <div className={styles.socialNetworks}>
            <Link href="https://www.facebook.com/p/Art-Decor-Boston-61576561835682/">
              <div className={styles.socialNetworksIcon}>
                <FaFacebook className={styles.icon} />
              </div>
            </Link>
            <Link href="https://www.instagram.com/art_decor_boston/">
              <div className={styles.socialNetworksIcon}>
                <FaInstagram className={styles.icon} />
              </div>
            </Link>
            <Link href="https://www.tiktok.com/@art_decor_dis32?_r=1&_t=ZM-91pd8NB9PZb">
              <div className={styles.socialNetworksIcon}>
                <SiTiktok className={styles.icon} />
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.footerLinks}>
          <h4>QUICK LINKS</h4>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerLinks} id="contact-us">
          <h4>CONTACT US</h4>
          <div className={styles.contactUsIcon}>
            <p>
              <FaMapMarkerAlt className={styles.icon} />
              14 Lothrop St, Beverly, MA 01915, USA
            </p>
          </div>
          <div className={styles.contactUsIcon}>
            <p>
              <FaPhone className={styles.icon} />
              +1 978 788 3652
            </p>
          </div>
          <div className={styles.contactUsIcon}>
            <p>
              <FaEnvelope className={styles.icon} />
              orgestdushku@gmail.com
            </p>
          </div>
        </div>
        <div className={styles.footerLinks}>
          <h4>INSTAGRAM</h4>
          <div className={styles.instagramImages}>
            <img src="/images/imitation of rocks-2.jpg" alt="" />
            <img src="/images/imitation of rocks-3.jpg" alt="" />
            <img src="/images/imitation of rocks-4.jpg" alt="" />
            <img src="/images/imitation of rocks-5.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2025 Art Decor Boston. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
