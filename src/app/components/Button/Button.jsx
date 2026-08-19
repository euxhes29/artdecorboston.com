import React from "react";
import styles from "./Button.module.scss";

const Variants = {
  primary: "btn-primary",
  ghost: "btn-ghost",
  text: "btn-text",
  cta: "btn-cta",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const variantClass = Variants[variant] || "";

  return (
    <button
      className={`${styles.btn} ${styles[variantClass]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
