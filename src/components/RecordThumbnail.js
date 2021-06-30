import React, { useState } from "react";
import styles from "./RecordThumbnail.module.css";

const RecordThumbnail = ({ basic_information }) => {
  const [hovering, setHovering] = useState(false);

  const mouseOver = () => setHovering(true);
  const mouseOut = () => setHovering(false);

  return (
    <div className={`${styles.boxshadow} ${styles.record__thumbnail}`} onMouseOver={mouseOver} onMouseOut={mouseOut}>
      <figure className={styles.record__figure}>
        <img
          className={styles.record__img}
          src={basic_information.cover_image}
          alt={basic_information.title}
        />
        {hovering ?
          (<div className={styles.record__hover}>
            <figcaption className={styles.record__figcaption}>
              <h2 className={styles.record__artist}>
                {basic_information.artists.length
                  ? basic_information.artists[0].name
                  : "Unk."}
              </h2>
              <h3 className={styles.record__title}>{basic_information.title}</h3>
              <span className={styles.record__year}>
                {basic_information.year ? basic_information.year : "Unk."}
              </span>
            </figcaption>
          </div>
          ) : (
            <div />
          )
        }
      </figure>
    </div>
  )
};

export default RecordThumbnail;