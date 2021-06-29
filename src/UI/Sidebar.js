import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
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