import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClose = () => setOpenMenu(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <img src="/images/art-decor-boston-logo.png" alt="logo" />
        </Link>
      </div>

      <ul className={`${styles.navLinks} ${openMenu ? styles.open : ""}`}>
        <li>
          <a href="/" onClick={handleClose}>
            HOME
          </a>
        </li>
        <li>
          <a href="/about" onClick={handleClose}>
            ABOUT
          </a>
        </li>
        <li>
          <a href="/services" onClick={handleClose}>
            SERVICES
          </a>
        </li>
        <li>
          <a href="/gallery" onClick={handleClose}>
            GALLERY
          </a>
        </li>
        <li>
          <a href="/contact" onClick={handleClose}>
            CONTACT
          </a>
        </li>

        <IoClose className={styles.menuClose} onClick={handleClose} />
      </ul>

      {!openMenu && (
        <CiMenuFries
          className={styles.menuIcon}
          onClick={() => setOpenMenu(true)}
        />
      )}
    </div>
  );
};

export default Navbar;
