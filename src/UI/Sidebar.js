import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = ({ open, setOpen }) => {
    return (
        <button className={styles.sidebar} onClick={ () => setOpen(!open) }>
            <div></div>
            <div></div>
            <div></div>
        </button>
    )
};

export default Sidebar;