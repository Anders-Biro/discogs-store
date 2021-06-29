import React from "react";
import RecordList from "../components/RecordList";

const CollectionList = ({ releases }) => (
  <div className="row">
    <RecordList releases={releases} />
  </div>
);

export default CollectionList;
