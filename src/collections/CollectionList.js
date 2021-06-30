import React from "react";
import RecordList from "../components/RecordList";

const CollectionList = ({ releases, format }) => (
  <div className="row">
    <RecordList releases={releases} format={format}/>
  </div>
);

export default CollectionList;
