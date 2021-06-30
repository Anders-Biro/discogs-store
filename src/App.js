import React, { useState, useRef } from 'react';

import { useOnClickOutside } from './hooks';
import Collection from './Collection';
import './App.css';
import Sidebar from './UI/sidebar/Sidebar';
import SidebarItems from './UI/sidebar/SidebarItems';
import DetailRecord from './components/record/DetailRecord';

function App() {
  const [open, setOpen] = useState(false);
  const [format, setFormat] = useState('');
  const [detailView, setDetailView] = useState(false);
  const [releaseId, setReleaseId] = useState(0);

  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  const onFormatBoxChange = (changedFormat) => {
    console.log(changedFormat);
    setFormat(changedFormat);
  }

  const hideDetailView = () => {
    setDetailView(false);
  }

  const onDetailViewClick = (id) => {
    setDetailView(true);
    setReleaseId(id);
  }


  return (
    <div>
      <div ref={node}>
        <Sidebar open={open} setOpen={setOpen} />
        <SidebarItems open={open} setFormat={onFormatBoxChange} />
      </div>
      <div className='content'>
        <Collection format={format} onDetailViewClick={onDetailViewClick}/>
        {(detailView) ? (<DetailRecord releaseId={releaseId} onClose={hideDetailView}/>) : (<div/>)}
      </div>
    </div>
  );
}

export default App;
