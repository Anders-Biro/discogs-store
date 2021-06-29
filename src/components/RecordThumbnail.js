import React from "react";
import styles from "./RecordThumbnail.module.css";

const RecordThumbnail = ({ basic_information }) => (
  <div className={styles.boxshadow}>
    <article className={styles.record}>
      <figure className={styles.record__figure}>
        <img
          className={styles.record__img}
          src={basic_information.cover_image}
          alt={basic_information.title}
        />
        <figcaption className={styles.record__figcaption}>
          <h2 className={styles.record__artist}>
            {basic_information.artists.length
              ? basic_information.artists[0].name
              : "Unk."}
          </h2>
          <h3 className={styles.record__title}>{basic_information.title}</h3>
          <span className={styles.record__year}>
            {basic_information.year ? basic_information.year : "Unknown."}
          </span>
        </figcaption>
      </figure>
    </article>
  </div>
);

export default RecordThumbnail;
