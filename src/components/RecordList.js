import React from "react";
import RecordThumbnail from "./RecordThumbnail";
import styles from "./RecordList.module.css";

const RecordList = ({ releases, format }) => {

  const checkFormat = (releaseFormat) => {
    if(format === '') {
      return releaseFormat
    } else if (format === releaseFormat) {
      return releaseFormat
    }
  }

  return (
    <div className={styles.records}>
      {releases
        .filter(release => checkFormat(release.basic_information.formats[0].name))
        .map(release => (
          <RecordThumbnail key={release.id} {...release} />
        ))}
    </div>
  )
};
export default RecordList;