import styles from './SidebarItems.module.css';

const SidebarItems = ({ open }) => {
    return (
        <nav className={styles['styled-menu'] } style={ open ? {transform: 'translateX(0)'} : {transform: 'translateX(-100%)'}}>
            <div>
                <span role="img" aria-label="search"></span>
                Sorting
            </div>
            <div>
                <span role="img" aria-label="search"></span>
                Format
            </div>
            <div>
                <span role="img" aria-label="search"></span>
                Filter
            </div>
        </nav>
    )
}

export default SidebarItems;