import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sneha Sharma</h1>
        <p className={styles.description}>
        I'm a Web Developer working on building responsive
        and optimized sites. I'm currently a 4th year undergraduate pursuing B.Tech in Information Technology at Banasthali Vidyapith.
        </p>
        <a href="https://drive.google.com/file/d/1h_vrVwNOwkLtK2mhDh4wheO7tQKbBxS_/view?usp=sharing" className={styles.contactBtn}>
          Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/snehapic.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
