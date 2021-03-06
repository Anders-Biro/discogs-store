import React from "react";
import RecordList from "../components/record/RecordList";

const CollectionList = ({ releases, format, onDetailViewClick }) => (
  <div className="row">
    <RecordList releases={releases} format={format} onDetailViewClick={onDetailViewClick}/>
  </div>
);

export default CollectionList;
