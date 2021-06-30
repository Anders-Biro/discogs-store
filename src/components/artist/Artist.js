import React from "react";

import styles from './Artist.module.css';

const Artist = ({ artist }) => (
  <article className={styles.artist}>
    <h1>About {artist.name}</h1>
    <p className={styles.artist__about}>{artist.profile ? artist.profile : "No data about the artist."}</p>
  </article>
);

export default Artist;
