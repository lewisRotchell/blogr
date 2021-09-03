import React from "react";
import Image from "next/image";
import classes from "./SectionA.module.scss";
import EditorMobile from "../public/images/editor-mobile.svg";
import EditorDesktop from "../public/images/illustration-editor-desktop.svg";

interface SectionAProps {}

export const SectionA: React.FC<SectionAProps> = ({}) => {
  return (
    <section className={classes.sectionA}>
      <h2 className={classes.sectionTitle}>Designed for the future</h2>
      <div className={classes.sectionContainer}>
        <div className={classes.imgContainer}>
          <picture>
            <source
              media="(min-width: 1440px)"
              srcSet="/images/illustration-editor-desktop.svg"
            />
            <img src="/images/illustration-editor-mobile.svg" alt="editor" />
          </picture>
        </div>
        <div className={classes.articleContainer}>
          <article className={classes.articleA}>
            <h3 className={classes.articleTitle}>
              Introducing an extensible editor
            </h3>
            <p className={classes.articleText}>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </article>
          <article className={classes.articleB}>
            <h3 className={classes.articleTitle}>Robust content management</h3>
            <p className={classes.articleText}>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};
