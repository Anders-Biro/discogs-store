import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = ({ open, setOpen }) => {
const handleClick = () => {
    setOpen(!open)
}

return (
    <button className={`${styles.sidebar__button}`} onClick={handleClick}>
        <div style={open ? {transform: 'rotate(45deg)'} : { transform: 'rotate(0'}} />
        <div style={open ? {opacity: '0', transform: 'translateX(20px)'} : { opacity: '1', transform: 'translateX(0)'}} />
        <div style={open ? {transform: 'rotate(-45deg)'} : { transform: 'rotate(0'}} />
    </button>
)
};

export default Sidebar;