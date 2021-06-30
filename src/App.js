import React, { useState, useRef } from 'react';

import { useOnClickOutside } from './hooks';
import Collection from './Collection';
import './App.css';
import Sidebar from './UI/Sidebar';
import SidebarItems from './UI/SidebarItems';

function App() {
  const [open, setOpen] = useState(false);
  const [format, setFormat] = useState('');

  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  const onFormatBoxChange = (changedFormat) => {
    setFormat(changedFormat);
    console.log(format)
  }


  return (
    <div>
      <div ref={node}>
        <Sidebar open={open} setOpen={setOpen} />
        <SidebarItems open={open} setFormat={onFormatBoxChange} />
      </div>
      <div className='content'>
        <Collection format={format}/>
      </div>
    </div>
  );
}

export default App;
