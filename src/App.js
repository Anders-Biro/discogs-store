import React, { useState, useRef } from 'react';

import { useOnClickOutside } from './hooks';
import Collection from './Collection';
import './App.css';
import Sidebar from './UI/Sidebar';
import SidebarItems from './UI/SidebarItems';

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div>
      <div ref={node}>
        <Sidebar open={open} setOpen={setOpen} />
        <SidebarItems open={open} setOpen={setOpen} />
      </div>
      <div className='content'>
        <Collection />
      </div>
    </div>
  );
}

export default App;
