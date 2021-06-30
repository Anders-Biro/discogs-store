import React from "react";
import RecordThumbnail from "./RecordThumbnail";
import styles from "./RecordList.module.css";

const RecordList = ({ releases, format, onDetailViewClick }) => {

  const checkFormat = (release) => {
    if(format === '') {
      return release
    } else if (format === release.basic_information.formats[0].name) {
      return release
    }
  }

  return (
    <div className={styles.records}>
      {releases
        .filter(release => checkFormat(release))
        .map(release => (
          <RecordThumbnail key={release.id} {...release} onDetailViewClick={onDetailViewClick}/>
        ))}
    </div>
  )
};
export default RecordList;