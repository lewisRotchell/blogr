import React from "react";
import classes from "./SectionC.module.scss";
import Image from "next/image";
import LaptopImgMobile from "../public/images/illustration-laptop-mobile.svg";
import LaptopImgDesktop from "../public/images/illustration-laptop-desktop.svg";

interface SectionCProps {}

export const SectionC: React.FC<SectionCProps> = ({}) => {
  return (
    <section className={classes.sectionC}>
      <div className={classes.imgContainer}>
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet="/images/illustration-laptop-desktop.svg"
          />
          <img src="/images/laptop-mobile.svg" alt="" />
        </picture>
      </div>
      <div className={classes.articleGroup}>
        <article className={classes.articleA}>
          <h3 className={classes.articleTitle}>Free, open, simple</h3>
          <p className={classes.articleText}>
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
        </article>
        <article className={classes.articleB}>
          <h3 className={classes.articleTitle}>Powerful tooling</h3>
          <p className={classes.articleText}>
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </article>
      </div>
    </section>
  );
};
