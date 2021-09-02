import React from "react";
import classes from "./SectionB.module.scss";
import Image from "next/image";
import PhonesImg from "../public/images/illustration-phones.svg";

interface SectionBProps {}

export const SectionB: React.FC<SectionBProps> = ({}) => {
  return (
    <section className={classes.sectionB}>
      <article className={classes.article}>
        <div className={classes.imgContainer}>
          <Image
            src={PhonesImg}
            width={353}
            height={363}
            layout={"responsive"}
          ></Image>
        </div>
        <div className={classes.articleFeature}>
          <h3 className={classes.articleTitle}>
            State of the Art Infrastructure
          </h3>
          <p className={classes.articleText}>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </article>
    </section>
  );
};
